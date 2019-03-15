function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import defaultProps from '../default-props';
import mappings from '../illustrations/mappings';
export default class Undraw extends Component {
  /**
   * Default props.
   */

  /**
   * Prop types.
   */

  /**
   * Override default prop values.
   *
   * @param {Object} props Properties to set as default values.
   */
  static setDefaultProps(props) {
    if (!props) {
      return;
    }

    Object.assign(defaultProps, props);
  }
  /**
   * Render.
   */


  render() {
    const _this$props = this.props,
          {
      name
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["name"]);

    const Illustration = mappings[name];

    if (!Illustration) {
      return null;
    }

    return React.createElement(Illustration, rest);
  }

}

_defineProperty(Undraw, "defaultProps", {
  height: defaultProps.height,
  primaryColor: defaultProps.primaryColor
});

_defineProperty(Undraw, "propTypes", {
  name: PropTypes.string.isRequired,
  height: PropTypes.string,
  primaryColor: PropTypes.string
});