import "./Button.css";

export const Button = ({ type, text }) => {
  let className = "button";

  switch (type) {
    case "primary":
      className = " primary";
      break;
    case "link":
      className = " link";
      break;
    case "icon":
      className = " icon";
      break;
    case "floating":
      className = " floating";
      break;
    default:
      break;
  }

  return (
    <button className={className}>
      {text} {icon && <span className="icon">{icon}</span>}
    </button>
  );
};
