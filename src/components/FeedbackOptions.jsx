import React from 'react';
import PropTypes from 'prop-types';
import { Button, Wrapper1 } from 'Styles/styles.js';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper1>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </Wrapper1>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;