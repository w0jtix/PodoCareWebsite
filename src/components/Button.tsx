export interface ButtonProps {
  src?: string;
  alt?: string;
  text?: string;
  onClick?: () => void;
  disableText?: boolean;
  disableImage?: boolean;
  backgroundVersion?: string;
  shiny?: boolean;
  footer?: boolean;
  type?: "button" | "submit" | "reset";
  customClassName?: string;
}

export function Button({
  src,
  alt,
  text,
  onClick,
  disableText,
  disableImage = false,
  backgroundVersion = "dark",
  shiny = false,
  footer = false,
  type = "button",
  customClassName = "",
}: ButtonProps) {
  return (
    <button
      className={`button flex width-fit-content justify-center align-items-center border-none pointer ${customClassName} ${
        !disableImage ? "img-gap" : ""
      } ${
        backgroundVersion === "light"
          ? "light"
          : backgroundVersion === "dark"
          ? "dark"
          : backgroundVersion === "off-black"
          ? "off-black"
          : ""
      } ${shiny ? "shiny-button" : ""} ${footer ? "footer" : ""}`}
      onClick={onClick}
      type={type}
    >
      {!disableImage ? (
        <img
          src={src}
          alt={alt}
          className={`button-icon ${alt?.toLowerCase()}`}
        ></img>
      ) : null}
      {!disableText ? (
        <a
          className={`button-text ${
            backgroundVersion === "light"
              ? "light"
              : backgroundVersion === "dark"
              ? "dark"
              : backgroundVersion === "off-black"
              ? "off-black"
              : ""
          }`}
        >
          {text}
        </a>
      ) : null}
    </button>
  );
}

export default Button;
