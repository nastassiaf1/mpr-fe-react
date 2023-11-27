import styles from './../styles/components/footer.module.scss';

export default function Footer() {
    return (
        <footer className={ styles.footer }>
            <address className={ styles.footer__address }>
                © 2023 Example. All rights reserved.<br />
                USA
            </address>
        </footer>
    )
}
