import { ModalPortalProps } from "@/interfaces/modal-data";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import styles from "@/styles/components/modal.module.scss";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"

export default function Modal({ showModal, modalData, handleClose, children }: ModalPortalProps) {
    const [show, setShow] = useState(showModal);
    const [data, setData] = useState(modalData);

    useEffect(() => {
        setShow(showModal);
        setData(modalData);
      }, [showModal, modalData]);

    return (
        <>  { show ?
                createPortal(
                    <div className={styles["modal-container"]} onClick={handleClose}>
                        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                            <div className={styles.modal__header}>
                                <IconButton className={styles["modal__close-btn"]} onClick={handleClose}><CloseIcon /></IconButton>
                                <h1 className={styles.modal__title}>{data.title}</h1>
                                {data.description && <p className={styles.modal__description}>{data.description}</p>}
                            </div>
                            {children}
                        </div>
                    </div>, document.body
                ) : null
            }
        </>
    );
}
