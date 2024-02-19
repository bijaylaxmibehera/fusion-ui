import "./Button.css";

export const PrimaryButton = ({ text, bgColor }) => {
  return (
    <button className="btn" style={{ backgroundColor: bgColor }}>
      {text}
    </button>
  );
};

export const OutlineButton = ({ text, color }) => {
  return (
    <button
      className="btn"
      style={{
        backgroundColor: "transparent",
        color: color,
        border: `1px solid ${color}`,
        transition: "all 0.3s ease-in-out",
      }}
    >
      {text}
    </button>
  );
};

export const LinkButton = ({ text, color, targetUrl }) => {
  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noreferrer"
      className="link-btn"
      style={{
        color: color,
      }}
    >
      {text}
    </a>
  );
};

export const IconButton = ({ icon, text, bgColor }) => {
  return (
    <button className="icon-btn" style={{ backgroundColor: bgColor }}>
      {icon}
      <span>{text}</span>
    </button>
  );
};

export const FloatingButton = ({ icon, bgColor }) => {
  return (
    <button className="floating-btn" style={{ backgroundColor: bgColor }}>
      {icon}
    </button>
  );
};
