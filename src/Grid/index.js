import React from 'react';
import PropTypes from 'prop-types';
import { Grid as AMapCanvasGrid } from 'amap-2drender';

class Grid extends React.PureComponent {
  componentDidMount() {
    this.grid = new AMapCanvasGrid({
      /**
       * Canvas default size is equal to map size.
       */
      ...this.props.map.getSize(),
      ...this.props,
    });
  }

  componentDidUpdate() {
    this.grid.config({
      /**
       * Canvas default size is equal to map size.
       */
      ...this.props.map.getSize(),
      ...this.props,
    });
    this.grid.render();
  }

  componentWillUnmount() {
    this.grid.destroy();
  }

  render() {
    return null;
  }
}

/**
 * All properties are used to initialise AMapCanvasGrid instance through
 * a single this.props variable.
 */
/* eslint-disable react/no-unused-prop-types */
Grid.propTypes = {
  /**
   * A list of grids.
   * Grid definitions include grid shape and styles.
   */
  data: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Grid border colour.
     */
    borderColor: PropTypes.string,
    /**
     * Grid bottom right corner lng lat coordinates.
     */
    bottomRight: PropTypes.arrayOf(PropTypes.number),
    /**
     * Grid fill colour.
     */
    color: PropTypes.string.isRequired,
    /**
     * Grid top left corner lng lat coordinates.
     */
    topLeft: PropTypes.arrayOf(PropTypes.number),
  })),
  /**
   * Canvas height.
   * Default 0.
   */
  height: PropTypes.number,
  /**
   * AMap instance.
   */
  map: PropTypes.object.isRequired,
  /**
   * Callback fired when at least a grid is clicked.
   * Signature:
   * (event, grids) => void
   * event: AMap MapsEvent object.
   * grids: A list of grids that is clicked. Grids with the earlier position in the data array
   * are positioned later in the click callback. This is because grids appear later in the data
   * array are drawn later and has a higher priority when clicked.
   */
  onClick: PropTypes.func,
  /**
   * Custom layer opacity.
   * Default 1.
   */
  opacity: PropTypes.number,
  /**
   * Canvas height.
   * Default 0.
   */
  width: PropTypes.number,
  /**
   * Custom layer zIndex.
   * Default 12.
   */
  zIndex: PropTypes.number,
  /**
   * Custom layer visible zoom ranges.
   * Default [3, 18]
   */
  zooms: PropTypes.arrayOf(PropTypes.number),
};

Grid.defaultProps = {
  data: [],
};

export default Grid;
