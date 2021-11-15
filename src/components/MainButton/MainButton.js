const MainButton = ({ type, onClick = null, text, className, accent }) => (
  <button
    className={accent ? className + "accent" : className}
    type={type}
    onClick={onClick}
  >
    {text}
  </button>
);

export default MainButton;
