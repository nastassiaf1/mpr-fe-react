import { useState } from 'react';
import { useRouter } from 'next/router';
import Icon from '@material-ui/core/Icon';
import IconButton from '@mui/material/IconButton';

import styles from './../styles/components/header.module.scss';

export default function Header() {
    const router = useRouter();
    const isHomePage = router.pathname === '/';

    const handleClickToHomePage = () => {
      router.push('/');
    };

    return (
        <footer className={ styles.header }>
            <div className={ styles.logo }>
                { !isHomePage && <IconButton
                    className={ styles['logo__back-btn'] }
                    aria-label="Back to Home page"
                    onClick={ handleClickToHomePage }
                >
                    <Icon>navigate_before</Icon>
                </IconButton> }
                <h1 className={ styles.logo__header }>MPR</h1>
            </div>
        </footer>
    )
}
