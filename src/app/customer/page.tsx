import Image from "next/image";
import styles from "./customer.module.css";

export default function Customer() {
  return (
    <main className={styles.main}>

      {/* probably not needed, use main to center */}
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/cat-image.png"
          alt="A handsome kitty"
          width={50}
          height={50}
          priority
        />

        <h1 className={styles.header}>Your next delivery</h1>

        <div className={styles.description}>
          Description
        </div>

        <h2 className={styles.price}>Total price £123.45</h2>
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
