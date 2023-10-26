import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper1 } from 'Styles/styles.js';

const Notification = ({ message }) => {
  return <Wrapper1>{message}</Wrapper1>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;