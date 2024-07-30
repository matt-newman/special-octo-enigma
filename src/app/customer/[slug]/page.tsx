import Image from "next/image";
import { notFound } from 'next/navigation';

import catImage from '../../../../public/cat-image.png';
import styles from "../customer.module.css";

const API_ROOT = 'http://localhost:3000/';
const DELIVERY_API_PATH = 'comms/your-next-delivery';
const apiUrl = `${API_ROOT}${DELIVERY_API_PATH}`;

// TODO: in full applicaton, this would be moved to a util folder
const fetcher = async (url:string) => {
  const res = await fetch(url);
 
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    throw error;
  }
 
  return res.json()
}

export default async function Customer({ params }: { params: { slug: string } }) {
  const apiUrl = `${API_ROOT}${DELIVERY_API_PATH}`;
  const customerId = params.slug;
  const data = await fetch(`${apiUrl}/${customerId}`);

  // TODO:

  // route to 404 if none
  // no eligable cats

  // tests
  // http://localhost:3001/customer/3dfdc5cf-b8ed-40f7-a5ca-5e88ad103b60
  // http://localhost:3001/customer/ff535484-6880-4653-b06e-89983ecf4ed5

  if (data.status !== 200) {
    return notFound();
  }

  const { title, message, totalPrice, freeGift } = await data.json();

  return (
    <main className={styles.main}>

      {/* probably not needed, use main to center */}
      <div className={styles.center}>
        <Image
          // do source and sizes for perf optimisation
          className={styles.avatar}
          src={catImage}
          alt="A handsome kitty"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          priority
        />

        <div className={styles.content}>
          <h1 className={styles.header}>
            {title}
          </h1>

          <div className={styles.description}>
            {message}
          </div>

          <h2 className={styles.price}>Total price £{(totalPrice).toFixed(2)}</h2>

          <div className={styles.buttons}>
            <a
              href="#details"
              className={styles.buttonGreen}
              target="_blank"
              rel="noopener noreferrer"
            >
              See details
            </a>

            <a
              href="#delivery"
              target="_blank"
              rel="noopener noreferrer"
            >
              Edit delivery
            </a>
          </div>

          {freeGift &&
            <div className={styles.gift}>
              Free gift
            </div>
          }
        </div>
      </div>
    </main>
  );
}
