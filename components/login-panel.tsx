import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";

import Modal from '@/components/modal';
import modalStyle from '@/styles/components/modal.module.scss';
import { logIn } from '@/redux/effects/auth.effects';

export default function LoginPanel() {
    const [showModal, setShowModal] = useState(false);
    const [formLoginData, setFormLoginData] = useState({
        username: '',
        password: '',
      });
    const [formRegisterData, setFormRegisterData] = useState({
        username: '',
        password: '',
        email: '',
      });
    const [isLogin, setIsLogin] = useState<boolean>(true);

    const dispatch = useDispatch();

    const modalData = isLogin ? {
        title: 'Log in to your account',
    } : {
        title: 'Registration',
        description: 'Fill all fields',
    }

    const openLoginForm = () => {
        setIsLogin(true);
        setShowModal(true);
    };

    const openRegistrationForm = () => {
        setIsLogin(false);
        setShowModal(true);
    };

    const isLoginFormValid = isLogin && formLoginData.username.trim() !== "" && formLoginData.password.trim() !== "";
    const isRegisterFormValid = !isLogin && formRegisterData.username.trim() !== "" &&
        formRegisterData.email.trim() !== "" &&
        formRegisterData.password.trim() !== "";

    const handleLogIn = async () => {
        await dispatch(logIn({ login: formLoginData.username, password: formLoginData.password }) as any);
    }

    const handleRegister = async () => {};

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        if (isLogin) {
            setFormLoginData((prevData) => ({
                ...prevData,
                [name]: value,
            }));

            return;
        }

        setFormRegisterData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function closeModal() {
        setShowModal(false);
    }

    return <>
        <Button variant="contained" onClick={openLoginForm}>
            Log in
        </Button>
        <Button variant="contained" color="primary" onClick={openRegistrationForm}>
            Get Started
        </Button>

        <Modal showModal={ showModal } modalData={ modalData } handleClose={ closeModal }>
                <form className={modalStyle.modal__form}>
                    { isLogin ?
                        <>
                            <TextField
                                value={formLoginData.username}
                                name="username"
                                onChange={handleChange}
                                autoFocus={true}
                                aria-label="Enter your name"
                                placeholder='Your name' required
                            /><br />
                            <TextField
                                value={formLoginData.password}
                                name="password"
                                onChange={handleChange}
                                placeholder='Password'
                                required
                            />
                            <Button className={modalStyle['modal__form-btn']} onClick={handleLogIn} disabled={!isLoginFormValid}>LOGIN</Button>
                        </>
                        : <>
                            <TextField
                                value={formRegisterData.username}
                                name='username'
                                onChange={handleChange}
                                autoFocus={true}
                                aria-label='Enter your login'
                                placeholder='Enter your login'
                                required
                            /><br />
                            <TextField
                                value={formRegisterData.email}
                                name='email'
                                onChange={handleChange}
                                aria-label='Enter your email'
                                placeholder='Enter your email'
                                required
                            /><br />
                            <TextField
                                value={formRegisterData.password}
                                name='password'
                                onChange={handleChange}
                                aria-label='Enter your password'
                                placeholder='Enter your password'
                                required
                            />
                            <Button className={modalStyle['modal__form-btn']} onClick={handleRegister} disabled={!isRegisterFormValid}>LOGIN</Button>
                        </>
                    }
                </form>
        </Modal>
    </>
}