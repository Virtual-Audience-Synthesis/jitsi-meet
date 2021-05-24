/* @flow */

import React from 'react';

import { IconClapped } from '../../../base/icons';
import { BaseIndicator } from '../../../base/react';
import { connect } from '../../../base/redux';
import AbstractStartedClapIndicator, {
    type Props as AbstractProps,
    _mapStateToProps
} from '../AbstractStartedClapIndicator';

/**
 * The type of the React {@code Component} props of {@link StartedClapIndicator}.
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
 * Thumbnail badge showing that the participant would like to clap.
 *
 * @extends Component
 */
class StartedClapIndicator extends AbstractStartedClapIndicator<Props> {
    /**
     * Renders the platform specific indicator element.
     *
     * @returns {React$Element<*>}
     */
    _renderIndicator() {
        return (
            <BaseIndicator
                className = 'startedclapindicator indicator show-inline'
                icon = { IconClapped }
                iconClassName = 'indicatoricon'
                iconSize = { `${this.props.iconSize}px` }
                tooltipKey = 'clapped'
                tooltipPosition = { this.props.tooltipPosition } />
        );
    }
}

export default connect(_mapStateToProps)(StartedClapIndicator);
