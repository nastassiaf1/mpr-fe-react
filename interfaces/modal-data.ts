export interface ModalData {
    title: string;
    description?: string;
}

export interface ModalPortalProps {
    showModal: boolean;
    handleClose: () => void;
    modalData: ModalData;
}
