// @flow

import { Component } from 'react';

import { getParticipantById } from '../../base/participants';

export type Props = {

    /**
     * The participant id who we want to render the started booing indicator
     * for.
     */
    participantId: string,

    /**
     * True if the booing started for this participant.
     */
    _booed?: boolean
}

/**
 * Implements an abstract class for the StartedBooIndicator component.
 */
export default class AbstractStartedBooIndicator<P: Props>
    extends Component<P> {

    /**
     * Implements {@code Component#render}.
     *
     * @inheritdoc
     */
    render() {
        if (!this.props._booed) {
            return null;
        }

        return this._renderIndicator();
    }

    /**
     * Renders the platform specific indicator element.
     *
     * @returns {React$Element<*>}
     */
    _renderIndicator: () => React$Element<*>

}

/**
 * Maps part of the Redux state to the props of this component.
 *
 * @param {Object} state - The Redux state.
 * @param {Props} ownProps - The own props of the component.
 * @returns {Object}
 */
export function _mapStateToProps(state: Object, ownProps: Props): Object {
    const participant = getParticipantById(state, ownProps.participantId);

    return {
        _booed: participant && participant.booed
    };
}
