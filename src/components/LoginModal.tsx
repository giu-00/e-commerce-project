import React from "react";
import { Dialog } from "primereact/dialog";
import "../styles/login-modal.css";

interface LoginModalProps {
  visible: boolean;
  onHide: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ visible, onHide }) => {
  return (
    <Dialog visible={visible} onHide={onHide} dismissableMask draggable={false}>
      <p>jvisdfhklsdjnfksdjnkjs</p>
    </Dialog>
  );
};

export default LoginModal;
