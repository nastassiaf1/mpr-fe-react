import { ModalPortalProps } from "@/interfaces/modal-data";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import styles from "@/styles/components/modal.module.scss";

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
                                <button className={styles["modal__close-btn"]} onClick={handleClose}>x</button>
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
