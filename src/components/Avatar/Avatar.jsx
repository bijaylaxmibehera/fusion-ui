import "./Avatar.css";

export const Avatar=({ imageUrl, letter,size,color}) => {
  // const avatarClasses = `avatar ${size}`;
    return (
      <div className="avatar">
        {imageUrl ? (
          <img src={imageUrl} alt="Avatar" className={`avatar-image avatar-${size}`} />
        ) : (
          <div className={`avatar-letter avatar-${size} ${color}`}>{letter}</div>
        )}
      </div>
    );
  };