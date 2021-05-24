// @flow

import React from 'react';

import { IconLaughed } from '../../../base/icons';
import { BaseIndicator } from '../../../base/react';
import { connect } from '../../../base/redux';
import AbstractStartedLaughIndicator, {
    type Props,
    _mapStateToProps
} from '../AbstractStartedLaughIndicator';

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
                highlight = { true }
                icon = { IconLaughed } />
        );
    }
}

export default connect(_mapStateToProps)(StartedLaughIndicator);
