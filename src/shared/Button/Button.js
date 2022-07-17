import "./button.scss";

const Button = ({ children }) => {
  return (
    <>
      <button className="custom__button">{children}</button>
    </>
  );
};

export default Button;
