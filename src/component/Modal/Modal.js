import React from "react";
import styles from "./Modal.module.css";

const Modal = props => {
  return (
    <div className={styles.modalwrapper}>
      <div className={styles.modal}>
        <img className={styles.pic} src={props.image} />
        <p className={styles.txt}>{props.description}</p>
        <button
          className={styles.close}
          onClick={() => props.setModal({
            image: "",
            description: "",
            isOpen: false,
          })}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
