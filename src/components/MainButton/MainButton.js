const MainButton = ({ type, onSubmit = null, text, className, accent }) => (
  <button
    className={accent ? className + "accent" : className}
    type={type}
    onSubmit={onSubmit}
  >
    {text}
  </button>
);

export default MainButton;
