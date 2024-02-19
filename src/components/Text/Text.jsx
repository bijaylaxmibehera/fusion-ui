export const Text = ({ size, text }) => {
  let fontSize;
  switch (size) {
    case "xs":
      fontSize = "12px";
      break;
    case "sm":
      fontSize = "14px";
      break;
    case "base":
      fontSize = "16px";
      break;
    case "lg":
      fontSize = "18px";
      break;
    case "xl":
      fontSize = "20px";
      break;
    case "2xl":
      fontSize = "24px";
      break;
    default:
      fontSize = "16px";
  }

  return <p style={{ fontSize: fontSize }}>{text}</p>;
};
