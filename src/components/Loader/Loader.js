import React from "react";
import Loader from "react-loader-spinner";

const LoaderComponent = () => {
  return (
    <Loader
      type="ThreeDots"
      color="#4A56E2"
      height={100}
      width={100}
      timeout={300} //3 secs
    />
  );
};

export default LoaderComponent;
