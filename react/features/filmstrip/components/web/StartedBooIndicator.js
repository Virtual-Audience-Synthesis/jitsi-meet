/* @flow */

import React from 'react';

import { IconBooed } from '../../../base/icons';
import { BaseIndicator } from '../../../base/react';
import { connect } from '../../../base/redux';
import AbstractStartedBooIndicator, {
    type Props as AbstractProps,
    _mapStateToProps
} from '../AbstractStartedBooIndicator';

/**
 * The type of the React {@code Component} props of {@link StartedBooIndicator}.
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
 * Thumbnail badge showing that the participant would like to boo.
 *
 * @extends Component
 */
class StartedBooIndicator extends AbstractStartedBooIndicator<Props> {
    /**
     * Renders the platform specific indicator element.
     *
     * @returns {React$Element<*>}
     */
    _renderIndicator() {
        return (
            <BaseIndicator
                className = 'startedbooindicator indicator show-inline'
                icon = { IconBooed }
                iconClassName = 'indicatoricon'
                iconSize = { `${this.props.iconSize}px` }
                tooltipKey = 'booed'
                tooltipPosition = { this.props.tooltipPosition } />
        );
    }
}

export default connect(_mapStateToProps)(StartedBooIndicator);
