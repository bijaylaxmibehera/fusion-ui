import "./Alert.css";

export const Alert = ({ text, type }) => {
  let alertIcon;
  switch (type) {
    case "success":
      alertIcon = <i className="fas fa-check-circle"></i>;
      break;
    case "info":
      alertIcon = <i className="fas fa-info-circle"></i>;
      break;
    case "warning":
      alertIcon = <i className="fas fa-exclamation-triangle"></i>;
      break;
    case "error":
      alertIcon = <i className="fas fa-exclamation-circle"></i>;
      break;
    default:
      alertIcon = "";
  }

  return (
    <div className={`alert alert-${type}`}>
      <div className="alert-content">
        <span id="alert-icon">{alertIcon}</span>
        {text}
      </div>

      <i className="fa-solid fa-xmark"></i>
    </div>
  );
};
