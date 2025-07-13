import React from "react";
import { Dialog } from "primereact/dialog";
import "../styles/login-modal.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

interface LoginModalProps {
  visible: boolean;
  onHide: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ visible, onHide }) => {
  const navigate = useNavigate();
  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      dismissableMask
      draggable={false}
      header="Login or Register"
    >
      <div className="login-container">
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("login");
          }}
        >
          <div className="form-input">
            <label htmlFor="email" className="label">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Insert e-mail"
              autoComplete="email"
              className="input"
            />
          </div>
          <div className="form-input">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Insert password"
              autoComplete="current-password"
              className="input"
            />
          </div>
          <Button text="Login" className="login-button" type="submit" />
        </form>
        <div className="register">
          <h3 className="not-registered">Not registered yet?</h3>
          <Button
            text="Register"
            className="login-button"
            type="button"
            onClick={() => {
              onHide();
              navigate("/register");
            }}
          />
        </div>
      </div>
    </Dialog>
  );
};

export default LoginModal;
