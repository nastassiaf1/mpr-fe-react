import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import Link from 'next/link';
import Icon from '@material-ui/core/Icon';
import IconButton from '@mui/material/IconButton';
import { Button, Menu, MenuItem } from '@mui/material';

import styles from './../styles/components/header.module.scss';
import { logIn } from '@/redux/effects/auth.effects';
import { AppState } from '@/redux/state/app.state';

export default function AppHeader() {
    const router = useRouter();
    const user = useSelector((state: AppState) => state.auth.user);
    const isHomePage = router.pathname === '/';
    const dispatch = useDispatch();
    const handleClickToHomePage = () => {
      router.push('/');
    };

    const openLoginForm = async () => {
        await dispatch(logIn({ login: 'test', password: 'test' }) as any);
    };

    const openRegistrationForm = () => {
    };

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
        </header>
    )
}
