import Button from './Button';
import Card from './Card';
import ReactDOM from 'react-dom';
import classes from './ErrorModal.module.css';

const Backdrop = ({ onClick }) => {
  return <div className={classes.backdrop} onClick={onClick}></div>;
};

const ModalOverlay = ({ title, message, onClick }) => {
  return (
    <Card classname={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.action}>
        <Button onClick={onClick}>Ok</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onClick }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClick} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onClick={onClick} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ErrorModal;
