import React from 'react';
import PropTypes from 'prop-types';
import { Marker as AMapCanvasMarker } from 'amap-2drender';

class Marker extends React.PureComponent {
  componentDidMount() {
    this.marker = new AMapCanvasMarker({
      /**
       * Canvas default size is equal to map size.
       */
      ...this.props.map.getSize(),
      ...this.props,
    });
  }

  componentDidUpdate() {
    this.marker.render({
      /**
       * Canvas default size is equal to map size.
       */
      ...this.props.map.getSize(),
      ...this.props,
    });
  }

  componentWillUnmount() {
    this.marker.destroy();
  }

  render() {
    return null;
  }
}

/**
 * All properties are used to initialise AMapCanvasMarker instance through
 * a single this.props variable.
 */
/* eslint-disable react/no-unused-prop-types */
Marker.propTypes = {
  /**
   * A list of markers.
   */
  data: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Anchor origin is a point where it will be placed to the given position.
     * A common use case would be defining marker centre point as anchor origin.
     * i.e. [x, y] Default [0, 0].
     */
    anchorOrigin: PropTypes.arrayOf(PropTypes.number),
    /**
     * Marker height. Scale marker height.
     */
    height: PropTypes.number.isRequired,
    /**
     * Marker icon is whatever can be consumed by Image class.
     */
    icon: PropTypes.any.isRequired,
    /**
     * Marker lng lat location. i.e. [lng, lat].
     * Marker position is derived from location.
     * It has lower priority if both location and position are defined.
     * Marker anchor origin point is placed to this location.
     */
    location: PropTypes.arrayOf(PropTypes.number),
    /**
     * Marker position in canvas cartesian coordinate system. i.e. [x, y].
     * It has higher priority if both location and position are defined.
     * Marker anchor origin point is placed to this position.
     */
    position: PropTypes.arrayOf(PropTypes.number),
    /**
     * Rotate marker by the given angle. Default 0.
     * Angles are in radians, not degrees. To convert, please use: radians = (Math.PI/180)*degrees.
     */
    rotation: PropTypes.number,
    /**
     * Marker width. Scale marker width.
     */
    width: PropTypes.number.isRequired,
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
   * Callback fired when at least a marker is clicked.
   * Signature:
   * (event, markers) => void
   * event: AMap MapsEvent object.
   * markers: A list of markers that is clicked. Markers with the earlier position in the data array
   * are positioned later in the click callback. This is because markers appear later in the data
   * array are drawn later and has a higher priority when clicked.
   */
  onClick: PropTypes.func,
  /**
   * Double click event fired immediately after click event.
   * Signature:
   * (event, markers) => void
   * event: AMap MapsEvent object.
   * markers: A list of markers that is clicked. Markers with the earlier position in the data array
   * are positioned later in the click callback. This is because markers appear later in the data
   * array are drawn later and has a higher priority when clicked.
   */
  onDoubleClick: PropTypes.func,
  /**
   * Callback fired when pointer leaves the element or one of its child elements (even if
   * the pointer is still within the element).
   * Signature:
   * (event, markers) => void
   * event: AMap MapsEvent object.
   * markers: A list of markers that pointer overs. Markers with the earlier position in the data
   * array are positioned later in the mouse over callback. This is because markers appear later
   * in the data array are drawn later and has a higher priority when mouse over.
   */
  onMouseOut: PropTypes.func,
  /**
   * Callback fired when pointer moves onto the element or one of its child elements (even if
   * the pointer is still within the element).
   * Signature:
   * (event, markers) => void
   * event: AMap MapsEvent object.
   * markers: A list of markers that pointer overs. Markers with the earlier position in the data
   * array are positioned later in the mouse over callback. This is because markers appear later
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

Marker.defaultProps = {
  data: [],
};

export default Marker;
