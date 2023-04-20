import classes from './Card.module.css';

const Card = ({ children, classname }) => {
  return <div className={`${classes.card} ${classname}`}>{children}</div>;
};

export default Card;
