"use client";

import Image from "next/image";
import useSWR, { Fetcher } from 'swr';

import styles from "../customer.module.css";

const API_ROOT = 'http://localhost:3000/';
const DELIVERY_API_PATH = 'comms/your-next-delivery';

// TODO: in full applicaton, this would be moved to a util folder
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Customer({ params }: { params: { id: string } }) {
  const apiUrl = `${API_ROOT}${DELIVERY_API_PATH}`;
  const customerId = params.id;
  const { data, error } = useSWR<any>(`${apiUrl}/${customerId}`, fetcher);

  // fetch customer

  // route to 404 if none

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <main className={styles.main}>

      {/* probably not needed, use main to center */}
      <div className={styles.center}>
        <Image
          className={styles.avatar}
          src="/cat-image.png"
          alt="A handsome kitty"
          width={50}
          height={50}
          priority
        />

        <h1 className={styles.header}>
          { data.title }
        </h1>

        <div className={styles.description}>
          { data.message }
        </div>

        <h2 className={styles.price}>Total price £{data.totalPrice}</h2>
      </div>

      <div className={styles.grid}>
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
          // className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit delivery
        </a>
      </div>

      <div className={styles.center}>
        Free gift
      </div>

    </main>
  );
}
