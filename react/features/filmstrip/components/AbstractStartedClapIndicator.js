// @flow

import { Component } from 'react';

import { getParticipantById } from '../../base/participants';

export type Props = {

    /**
     * The participant id who we want to render the started clapping indicator
     * for.
     */
    participantId: string,

    /**
     * True if the clapping started for this participant.
     */
    _clapped?: boolean
}

/**
 * Implements an abstract class for the StartedClapIndicator component.
 */
export default class AbstractStartedClapIndicator<P: Props>
    extends Component<P> {

    /**
     * Implements {@code Component#render}.
     *
     * @inheritdoc
     */
    render() {
        if (!this.props._clapped) {
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
        _clapped: participant && participant.clapped
    };
}
