import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

import Modal from '@/components/modal';
import modalStyle from '@/styles/components/modal.module.scss';

import { logIn } from '@/redux/effects/auth.effects';
import { useDispatch } from "react-redux";

export default function LoginPanel() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
    const dispatch = useDispatch();

    const modalData = {
        title: 'Log in to your account'
    };

    const openLoginForm = () => {
        setShowModal(true);
    };

    const openRegistrationForm = () => {
    };

    const isFormValid = formData.username.trim() !== "" && formData.password.trim() !== "";

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
    </>
}