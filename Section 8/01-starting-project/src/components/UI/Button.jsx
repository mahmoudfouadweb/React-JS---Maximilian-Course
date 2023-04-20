import classes from './Button.module.css';

const Button = ({ type, children, onClick }) => {
  return (
    <button
      type={type || 'button'}
      className={classes.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
