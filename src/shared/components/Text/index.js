import React from 'react';
import PropTypes from 'prop-types';
import { Text as BaseText, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: '#444444',
    letterSpacing: 0.2,
  },
});

const Text = ({ children, style }) => {
  return <BaseText style={[styles.text, style]}>{children}</BaseText>;
};

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.number,
  ]),
  style: BaseText.propTypes.style,
};

Text.defaultProps = {
  children: '',
  style: {},
};

export default Text;
