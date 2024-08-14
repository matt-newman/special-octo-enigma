import styles from './Button.module.css';

type Button = {
    text: String;
    url: String;
    primary?: Boolean;
}

export const Button = ( { text, url, primary }: Button) => {
    const link = `#${url}`;
    
    return (
        <a
            href="link"
            className={ `${styles.button} ${primary ? styles.buttonGreen : ''}` }
            target="_blank"
            rel="noopener noreferrer"
        >
            {text}
        </a>
    )
}

