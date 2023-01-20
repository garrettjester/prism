import CancelOutlined from "../../icons/CancelOutlined";
import styles from "./Modal.module.scss";
import useModal from "./useModal"

const Modal = ({ title, subtitle, children, ...props }) => {
  
  const {closeModal} = useModal()

  return (
    <div className={styles.container} {...props}>
      <div className={styles.header}>
        <button className={styles.closeButton} onClick={closeModal}>
          <CancelOutlined />
        </button>
      </div>
      {children}
    </div>
  );
};

export default Modal;
