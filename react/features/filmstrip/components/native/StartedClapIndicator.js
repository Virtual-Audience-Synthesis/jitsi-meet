// @flow

import React from 'react';

import { IconClapped } from '../../../base/icons';
import { BaseIndicator } from '../../../base/react';
import { connect } from '../../../base/redux';
import AbstractStartedClapIndicator, {
    type Props,
    _mapStateToProps
} from '../AbstractStartedClapIndicator';

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
                highlight = { true }
                icon = { IconClapped } />
        );
    }
}

export default connect(_mapStateToProps)(StartedClapIndicator);
