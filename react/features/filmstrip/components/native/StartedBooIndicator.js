// @flow

import React from 'react';

import { IconBooed } from '../../../base/icons';
import { BaseIndicator } from '../../../base/react';
import { connect } from '../../../base/redux';
import AbstractStartedBooIndicator, {
    type Props,
    _mapStateToProps
} from '../AbstractStartedBooIndicator';

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
                highlight = { true }
                icon = { IconBooed } />
        );
    }
}

export default connect(_mapStateToProps)(StartedBooIndicator);
