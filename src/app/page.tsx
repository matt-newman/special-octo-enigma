import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li><a href="/customer/3dfdc5cf-b8ed-40f7-a5ca-5e88ad103b60">Kayleigh</a></li>
        <li><a href="/customer/ff535484-6880-4653-b06e-89983ecf4ed5">Wilhelmine</a></li>
      </ul>
    </main>
  );
}
