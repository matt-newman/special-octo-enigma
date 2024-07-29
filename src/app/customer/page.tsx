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
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>

    </main>
  );
}
