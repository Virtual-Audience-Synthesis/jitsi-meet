/* @flow */

import React from 'react';

import { IconWhistled } from '../../../base/icons';
import { BaseIndicator } from '../../../base/react';
import { connect } from '../../../base/redux';
import AbstractStartedWhistleIndicator, {
    type Props as AbstractProps,
    _mapStateToProps
} from '../AbstractStartedWhistleIndicator';

/**
 * The type of the React {@code Component} props of {@link StartedWhistleIndicator}.
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
 * Thumbnail badge showing that the participant would like to whistle.
 *
 * @extends Component
 */
class StartedWhistleIndicator extends AbstractStartedWhistleIndicator<Props> {
    /**
     * Renders the platform specific indicator element.
     *
     * @returns {React$Element<*>}
     */
    _renderIndicator() {
        return (
            <BaseIndicator
                className = 'startedwhistleindicator indicator show-inline'
                icon = { IconWhistled }
                iconClassName = 'indicatoricon'
                iconSize = { `${this.props.iconSize}px` }
                tooltipKey = 'whistled'
                tooltipPosition = { this.props.tooltipPosition } />
        );
    }
}

export default connect(_mapStateToProps)(StartedWhistleIndicator);
