/* @flow */

import React from 'react';

import { IconLaughed } from '../../../base/icons';
import { BaseIndicator } from '../../../base/react';
import { connect } from '../../../base/redux';
import AbstractStartedLaughIndicator, {
    type Props as AbstractProps,
    _mapStateToProps
} from '../AbstractStartedLaughIndicator';

/**
 * The type of the React {@code Component} props of {@link StartedLaughIndicator}.
 */
type Props = AbstractProps & {

    /**
     * The font-size for the icon.
     */
    iconSize: number,

    /**
     * From which side of the indicator the tooltip should appear from.
     */
    tooltipPosition: string
};

/**
 * Thumbnail badge showing that the participant would like to laugh.
 *
 * @extends Component
 */
class StartedLaughIndicator extends AbstractStartedLaughIndicator<Props> {
    /**
     * Renders the platform specific indicator element.
     *
     * @returns {React$Element<*>}
     */
    _renderIndicator() {
        return (
            <BaseIndicator
                className = 'startedlaughindicator indicator show-inline'
                icon = { IconLaughed }
                iconClassName = 'indicatoricon'
                iconSize = { `${this.props.iconSize}px` }
                tooltipKey = 'laughed'
                tooltipPosition = { this.props.tooltipPosition } />
        );
    }
}

export default connect(_mapStateToProps)(StartedLaughIndicator);
