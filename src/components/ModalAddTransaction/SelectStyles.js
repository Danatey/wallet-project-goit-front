export const selectStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    borderRadius: 0,
    borderBottom: "1px solid #e0e0e0",
    height: 34,
    minHeight: 34,
    boxShadow: "none",
    "&:hover": {
      border: "none",
      boxShadow: "none",
      borderBottom: "1px solid #e0e0e0",
    },
  }),
  indicatorSeparator: () => ({ display: "none" }),
  valueContainer: (provided) => ({
    ...provided,
    height: 34,
    padding: "0 0 0 20px",
    alignItems: "flexStart",
  }),
  input: (provided) => ({
    ...provided,
    height: 34,
    padding: "0 0 0 20px",
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
