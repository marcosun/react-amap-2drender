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
    this.grid.render({
      /**
       * Canvas default size is equal to map size.
       */
      ...this.props.map.getSize(),
      ...this.props,
    });
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
     * Default black.
     */
    borderColor: PropTypes.string,
    /**
     * Grid bottom right corner lng lat coordinates.
     */
    bottomRight: PropTypes.arrayOf(PropTypes.number).isRequired,
    /**
     * Grid fill colour.
     * Default black.
     */
    color: PropTypes.string,
    /**
     * Grid top left corner lng lat coordinates.
     */
    topLeft: PropTypes.arrayOf(PropTypes.number).isRequired,
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
   * Callback fired when pointer leaves the element or one of its child elements (even if
   * the pointer is still within the element).
   * Signature:
   * (event, grids) => void
   * event: AMap MapsEvent object.
   * grids: A list of grids that pointer overs. Grids with the earlier position in the data
   * array are positioned later in the mouse over callback. This is because grids appear later
   * in the data array are drawn later and has a higher priority when mouse over.
   */
  onMouseOut: PropTypes.func,
  /**
   * Callback fired when pointer moves onto the element or one of its child elements (even if
   * the pointer is still within the element).
   * Signature:
   * (event, grids) => void
   * event: AMap MapsEvent object.
   * grids: A list of grids that pointer overs. Grids with the earlier position in the data
   * array are positioned later in the mouse over callback. This is because grids appear later
   * in the data array are drawn later and has a higher priority when mouse over.
   */
  onMouseOver: PropTypes.func,
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
