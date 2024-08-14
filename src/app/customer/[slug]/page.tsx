import { notFound } from 'next/navigation';
import { CustomerCard } from '../delivery/Card';
import { fetcher } from '../../../utils';

const API_ROOT = 'http://localhost:3000/';
const DELIVERY_API_PATH = 'comms/your-next-delivery';
const apiUrl = `${API_ROOT}${DELIVERY_API_PATH}`;

type CustomerRequestParams = {
  params: {
    slug: string;
  }
}

export default async function Customer( req: CustomerRequestParams ) {
  const customerId = req.params.slug;
  const { data, status } = await fetcher(`${apiUrl}/${customerId}`);
  const { title, message, totalPrice, freeGift } = data;

  // TODO:

  // route to 404 if none
  // no eligable cats

  // tests
  // http://localhost:3001/customer/3dfdc5cf-b8ed-40f7-a5ca-5e88ad103b60
  // http://localhost:3001/customer/ff535484-6880-4653-b06e-89983ecf4ed5

  if (status !== 200) {
    return notFound();
  }

  return (
    <>
      <CustomerCard title={title} message={message} totalPrice={totalPrice} freeGift={freeGift} />
    </>
  );
}
