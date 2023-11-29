export interface ModalData {
    title: string;
    description?: string;
    handleCloseDialogue: () => void
}

export interface ModalPortalProps {
    showModal: boolean;
    handleClose: () => void;
    modalData: ModalData;
}
