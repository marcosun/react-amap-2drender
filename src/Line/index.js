import React from 'react';
import PropTypes from 'prop-types';
import { Line as AMapCanvasLine } from 'amap-2drender';

class Line extends React.PureComponent {
  componentDidMount() {
    this.line = new AMapCanvasLine({
      /**
       * Canvas default size is equal to map size.
       */
      ...this.props.map.getSize(),
      ...this.props,
    });
  }

  componentDidUpdate() {
    this.line.config({
      /**
       * Canvas default size is equal to map size.
       */
      ...this.props.map.getSize(),
      ...this.props,
    });
    this.line.render();
  }

  componentWillUnmount() {
    this.line.destroy();
  }

  render() {
    return null;
  }
}

/**
 * All properties are used to initialise AMapCanvasLine instance through
 * a single this.props variable.
 */
/* eslint-disable react/no-unused-prop-types */
Line.propTypes = {
  /**
   * A list of polylines.
   */
  data: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Line fill colour.
     * Default transparent.
     */
    color: PropTypes.string.isRequired,
    /**
     * Line path. Supports line string. i.e. [[0, 0], [10, 10], [20, 20]]
     */
    path: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    /**
     * Line width.
     */
    width: PropTypes.number,
  })),
  /**
   * Canvas height.
   * Default to map height.
   */
  height: PropTypes.number,
  /**
   * AMap instance.
   */
  map: PropTypes.object.isRequired,
  /**
   * Custom layer opacity.
   */
  opacity: PropTypes.number,
  /**
   * Canvas height.
   * Default to map width.
   */
  width: PropTypes.number,
  /**
   * Custom layer zIndex.
   */
  zIndex: PropTypes.number,
  /**
   * Custom layer visible zoom ranges.
   */
  zooms: PropTypes.arrayOf(PropTypes.number),
};

Line.defaultProps = {
  data: [],
};

export default Line;
