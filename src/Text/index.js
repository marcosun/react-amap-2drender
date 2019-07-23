import React from 'react';
import PropTypes from 'prop-types';
import { Text as AMapCanvasText } from 'amap-2drender';

class Text extends React.PureComponent {
  componentDidMount() {
    this.text = new AMapCanvasText({
      /**
       * Canvas default size is equal to map size.
       */
      ...this.props.map.getSize(),
      ...this.props,
    });
  }

  componentDidUpdate() {
    this.text.render({
      /**
       * Canvas default size is equal to map size.
       */
      ...this.props.map.getSize(),
      ...this.props,
    });
  }

  componentWillUnmount() {
    this.text.destroy();
  }

  render() {
    return null;
  }
}

/**
 * All properties are used to initialise AMapCanvasText instance through
 * a single this.props variable.
 */
/* eslint-disable react/no-unused-prop-types */
Text.propTypes = {
  /**
   * A list of texts.
   */
  data: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Anchor origin is a point where it will be placed to the given position.
     * A common use case would be defining text top left point as anchor origin [0, -10].
     * It has lower priority if both anchorOrigin and anchorOriginDescription are defined.
     * i.e. [x, y]. Default text bottom left point: [0, 0].
     */
    anchorOrigin: PropTypes.arrayOf(PropTypes.number),
    /**
     * Anchor origin is a point where it will be placed to the given position.
     * A common use case would be defining text top left point as anchor origin.
     * It has higher priority if both anchorOrigin and anchorOriginDescription are defined.
     * i.e. [x, y] Default bottom-left.
     */
    anchorOriginDescription: PropTypes.oneOf([
      'bottom-center', 'bottom-left', 'bottom-right', 'center', 'middle-left', 'middle-right',
      'top-center', 'top-left', 'top-right',
    ]),
    /**
     * Text colour.
     * Default black.
     */
    color: PropTypes.string,
    /**
     * Font size in unit pixel.
     * Default 10.
     */
    fontSize: PropTypes.number,
    /**
     * Text lng lat location. i.e. [lng, lat].
     * Text position is derived from location.
     * It has lower priority if both location and position are defined.
     * Text anchor origin point is placed to this location.
     */
    location: PropTypes.arrayOf(PropTypes.number),
    /**
     * Text position in canvas cartesian coordinate system. i.e. [x, y].
     * It has higher priority if both location and position are defined.
     * Text anchor origin point is placed to this position.
     */
    position: PropTypes.arrayOf(PropTypes.number),
    /**
     * Text content.
     * Default ''.
     */
    text: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
   * Callback fired when at least a text is clicked.
   * Signature:
   * (event, texts) => void
   * event: AMap MapsEvent object.
   * texts: A list of texts that is clicked. Texts with the earlier position in the data array
   * are positioned later in the click callback. This is because texts appear later in the data
   * array are drawn later and has a higher priority when clicked.
   */
  onClick: PropTypes.func,
  /**
   * Callback fired when pointer leaves the element or one of its child elements (even if
   * the pointer is still within the element).
   * Signature:
   * (event, texts) => void
   * event: AMap MapsEvent object.
   * texts: A list of texts that pointer overs. Texts with the earlier position in the data
   * array are positioned later in the mouse over callback. This is because texts appear later
   * in the data array are drawn later and has a higher priority when mouse over.
   */
  onMouseOut: PropTypes.func,
  /**
   * Callback fired when pointer moves onto the element or one of its child elements (even if
   * the pointer is still within the element).
   * Signature:
   * (event, texts) => void
   * event: AMap MapsEvent object.
   * texts: A list of texts that pointer overs. Texts with the earlier position in the data
   * array are positioned later in the mouse over callback. This is because texts appear later
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

Text.defaultProps = {
  data: [],
};

export default Text;
