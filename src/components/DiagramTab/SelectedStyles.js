export const selectedStyles = {
  control: (provided) => ({
    ...provided,
    border: "1px solid #000000",
    borderRadius: 30,
    height: 50,
    width: 166,
    minHeight: 50,
    boxShadow: "none",
    "&:hover": {
      border: "none",
      boxShadow: "none",
    },
  }),
  indicatorSeparator: () => ({ display: "none" }),
  valueContainer: (provided) => ({
    ...provided,
    height: 50,
    padding: "0 0 0 10px",
    alignItems: "flexStart",
  }),
  input: (provided) => ({
    ...provided,
    height: 50,
    padding: "0 0 0 10px",
    margin: 0,
    // '&:hover': { border: 'none' },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#bdbdbd",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#000000",
  }),
};
