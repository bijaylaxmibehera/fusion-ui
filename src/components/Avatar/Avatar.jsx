import "./Avatar.css";

export const Avatar=({ imageUrl, letter }) => {
    return (
      <div className="avatar">
        {imageUrl ? (
          <img src={imageUrl} alt="Avatar" className="avatar-image" />
        ) : (
          <div className="avatar-letter">{letter}</div>
        )}
      </div>
    );
  };