// @flow

import React from 'react';

import { IconWhistled } from '../../../base/icons';
import { BaseIndicator } from '../../../base/react';
import { connect } from '../../../base/redux';
import AbstractStartedWhistleIndicator, {
    type Props,
    _mapStateToProps
} from '../AbstractStartedWhistleIndicator';

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
                highlight = { true }
                icon = { IconWhistled } />
        );
    }
}

export default connect(_mapStateToProps)(StartedWhistleIndicator);
