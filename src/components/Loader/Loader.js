import React from 'react';
import Loader from 'react-loader-spinner';

const LoaderComponent = () => {
	return (
		<Loader
			type='Circles'
			color='#4A56E2'
			height={100}
			width={100}
			timeout={3000} //3 secs
		/>
	);
};

export default LoaderComponent;
