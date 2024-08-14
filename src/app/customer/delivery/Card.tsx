import Image from "next/image";

import styles from "./Card.module.css"
import catImage from '../../../../public/cat-image.png';
import { Button } from "@/app/buttons/Button";

type CustomerCardParams = {
    title: String;
    message: String;
    totalPrice: Number;
    freeGift: Boolean;
};

export const CustomerCard = ({ title, message, totalPrice, freeGift }: CustomerCardParams) => {

    return (
        <section className={styles.wrapper}>
            {/* probably not needed, use main to center */}
            <div className={styles.card}>
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

                    <h2 className={styles.price}>Total price £{totalPrice?.toFixed(2)}</h2>

                    <div className={styles.buttons}>
                        <Button text="See details" url="details" primary={true} />
                        <Button text="Edit delivery" url="delivery" />
                    </div>
                </div>

                {freeGift &&
                    <div className={styles.gift}>
                        Free gift
                    </div>
                }
            </div>
        </section>
    )
}