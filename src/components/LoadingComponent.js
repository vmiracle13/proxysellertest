import React from 'react';
import PropTypes from 'prop-types';

const LoadingComponent = ({ items }) => {
  return (<p>Loading {items}...</p>)
};

LoadingComponent.propTypes = {
  items: PropTypes.string,
};

export default LoadingComponent;
