import "./Badge.css";

export const Badge=({ content, children }) => {
    return (
      <div className="badge-container">
        {children}
        {content && <div className="badge">{content}</div>}
      </div>
    );
  };