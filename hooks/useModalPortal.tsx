import Modal from "@/components/modal";
import { ModalData } from "@/interfaces/modal-data";
import { useState } from "react";

export default function useModalPortal() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalData, setModalData] = useState<ModalData>({
        title: '',
        handleCloseDialogue: () => {},
    });

    const openModal = (newModalData: ModalData) => {
        console.log('newModalData ', newModalData)
        setModalData(newModalData);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const modalPortal = <Modal showModal={showModal} handleClose={closeModal} modalData={modalData} />;

    return { openModal, closeModal, modalPortal };
};
