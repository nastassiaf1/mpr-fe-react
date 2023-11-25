import styles from './../styles/components/footer.module.scss';

export default function Header() {
    return (
        <header className={ styles.footer }>
            <address className={ styles.footer__address }>
                © 2023 Example. All rights reserved.<br />
                USA
            </address>
        </header>
    )
}
