"use client";

import Image from "next/image";
import useSWR, { Fetcher } from 'swr';

import catImage from '../../../../public/cat-image.png';
import styles from "../customer.module.css";

const API_ROOT = 'http://localhost:3000/';
const DELIVERY_API_PATH = 'comms/your-next-delivery';

// TODO: in full applicaton, this would be moved to a util folder
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Customer({ params }: { params: { slug: string } }) {
  const apiUrl = `${API_ROOT}${DELIVERY_API_PATH}`;
  const customerId = params.slug;
  const { data, error } = useSWR<any>(`${apiUrl}/${customerId}`, fetcher);

  console.log({ params });

  // TODO:

  // route to 404 if none
  // no eligable cats

  // tests

  const simpleContentWrapper = (content:string) => {
    return (
      <main className={styles.main}>
        <div className={styles.center}>
          {content}
        </div>
      </main>
    )
  };

  if (error) return simpleContentWrapper('Failed to load!')
  if (!data) return simpleContentWrapper('Loading...')

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

        <h1 className={styles.header}>
          {data.title}
        </h1>

        <div className={styles.description}>
          {data.message}
        </div>

        <h2 className={styles.price}>Total price £{(data.totalPrice).toFixed(2)}</h2>

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
        
        {data.freeGift &&
          <div className={styles.gift}>
            Free gift
          </div>
        }
      </div>
    </main>
  );
}
