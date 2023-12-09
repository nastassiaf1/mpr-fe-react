import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import Link from 'next/link';
import Icon from '@material-ui/core/Icon';
import IconButton from '@mui/material/IconButton';
import { Button, Menu, MenuItem, TextField } from '@mui/material';

import { logIn } from '@/redux/effects/auth.effects';
import { AppState } from '@/redux/state/app.state';
import Modal from '@/components/modal';
import styles from '@/styles/components/header.module.scss';
import modalStyle from '@/styles/components/modal.module.scss';

export default function AppHeader() {
    const router = useRouter();
    const user = useSelector((state: AppState) => state.auth.user);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });

    const isHomePage = router.pathname === '/';
    const handleClickToHomePage = () => {
      router.push('/');
    };

    const modalData = {
        title: 'Log in to your account'
    };

    const isFormValid = formData.username.trim() !== "" && formData.password.trim() !== "";

    const openLoginForm = () => {
        setShowModal(true);
    };

    const openRegistrationForm = () => {
    };

    function closeModal() {
        setShowModal(false);
    }

    const handleLogIn = async () => {
        await dispatch(logIn({ login: formData.username, password: formData.password }) as any);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    }

    return (
        <header className={ styles.header }>
            <div className={ styles.logo } onClick={ handleClickToHomePage }>
                { !isHomePage && <IconButton
                    className={ styles['logo__back-btn'] }
                    aria-label="Back to Home page"
                >
                    <Icon>navigate_before</Icon>
                </IconButton> }
                <h1 className={ styles.logo__header }>MPR</h1>
            </div>

            <nav className={ styles.nav }>
                <ul>
                    <li className={ router.pathname === '/features' ? styles['nav__item--active'] : styles.nav__item }>
                        <Link href="/features" className={ styles['nav-link'] }>
                            Features
                        </Link>
                    </li>
                    <li className={router.pathname === '/blog' ? styles['nav__item--active'] : styles.nav__item }>
                        <Link href="/blog" className={ styles['nav-link'] }>
                            Blog
                        </Link>
                    </li>
                    <li className={router.pathname === '/about' ? styles['nav__item--active'] : styles.nav__item }>
                        <Link href="/about" className={ styles['nav-link'] }>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>

            { !user ? (
                <>
                    <Button variant="contained" onClick={openLoginForm}>
                        Log in
                    </Button>
                    <Button variant="contained" color="primary" onClick={openRegistrationForm}>
                        Get Started
                    </Button>
                </>
            ) : (
                <>
                    <Button variant="contained" color="primary" aria-controls="user-menu" aria-haspopup="true" onClick={() => {}}>
                        {user.login}
                    </Button>

                    <Menu id="user-menu" open={false}>
                        <MenuItem>
                            <Link href={`/${user.login}`} passHref>
                                <a>Profile</a>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={() => {}}>Log out</MenuItem>
                    </Menu>
                </>
            ) }

            <Modal showModal={ showModal } modalData={ modalData } handleClose={ closeModal }>
                <form className={modalStyle.modal__form}>
                    <TextField
                        value={formData.username}
                        name="username"
                        onChange={handleChange}
                        autoFocus={true}
                        aria-label="Enter your name"
                        placeholder='Your name' required
                    /><br />
                    <TextField
                        value={formData.password}
                        name="password"
                        onChange={handleChange}
                        placeholder='Password'
                        required
                    />
                    <Button className={modalStyle['modal__form-btn']} onClick={handleLogIn} disabled={!isFormValid}>LOGIN</Button>
                </form>
            </Modal>
        </header>
    )
}
