import { ModalPortalProps } from "@/interfaces/modal-data";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import styles from "@/styles/components/modal.module.scss";

export default function Modal({ showModal, modalData, handleClose }: ModalPortalProps) {
    const [show, setShow] = useState(showModal);
    const [data, setData] = useState(modalData);

    useEffect(() => {
        console.log(showModal)
        setShow(showModal);
        setData(modalData);
      }, [showModal, modalData]);

    return (
        <>  { show ?
                createPortal(
                    <div className={styles["modal-container"]}>
                        <div className={styles.modal}>
                            <button className={styles["modal__close-btn"]} onClick={handleClose}>x</button>
                            <h1>{data.title}</h1>
                            {data.description && <p>{data.description}</p>}
                        </div>
                    </div>, document.body
                ) : null
            }
        </>
    );
}
