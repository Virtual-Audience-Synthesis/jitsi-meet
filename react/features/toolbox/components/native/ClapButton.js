// @flow

import { type Dispatch } from 'redux';

import {
    createToolbarEvent,
    sendAnalytics
} from '../../../analytics';
import { CLAP_ENABLED, getFeatureFlag } from '../../../base/flags';
import { translate } from '../../../base/i18n';
import { IconClapped } from '../../../base/icons';
import {
    getLocalParticipant,
    participantUpdated
} from '../../../base/participants';
import { connect } from '../../../base/redux';
import { AbstractButton, type AbstractButtonProps } from '../../../base/toolbox/components';

/**
 * The type of the React {@code Component} props of {@link ClapButton}.
 */
type Props = AbstractButtonProps & {

    /**
     * The local participant.
     */
    _localParticipant: Object,

    /**
     * Whether the participant clapped or not.
     */
    _clapped: boolean,

    /**
     * The redux {@code dispatch} function.
     */
    dispatch: Dispatch<any>
};

/**
 * An implementation of a button to start or stop clapping.
 */
class ClapButton extends AbstractButton<Props, *> {
    accessibilityLabel = 'toolbar.accessibilityLabel.clap';
    icon = IconClapped;
    label = 'toolbar.startClapping';
    toggledLabel = 'toolbar.stopClapping';

    /**
     * Handles clicking / pressing the button.
     *
     * @override
     * @protected
     * @returns {void}
     */
    _handleClick() {
        this._toggleClapped();
    }

    /**
     * Indicates whether this button is in toggled state or not.
     *
     * @override
     * @protected
     * @returns {boolean}
     */
    _isToggled() {
        return this.props._clapped;
    }

    /**
     * Toggles the clapped status of the local participant.
     *
     * @returns {void}
     */
    _toggleClapped() {
        const enable = !this.props._clapped;

        sendAnalytics(createToolbarEvent('start.clap', { enable }));

        this.props.dispatch(participantUpdated({
            // XXX Only the local participant is allowed to update without
            // stating the JitsiConference instance (i.e. participant property
            // `conference` for a remote participant) because the local
            // participant is uniquely identified by the very fact that there is
            // only one local participant.

            id: this.props._localParticipant.id,
            local: true,
            clapped: enable
        }));
    }
}

/**
 * Maps part of the Redux state to the props of this component.
 *
 * @param {Object} state - The Redux state.
 * @param {Object} ownProps - The properties explicitly passed to the component instance.
 * @private
 * @returns {Props}
 */
function _mapStateToProps(state, ownProps): Object {
    const _localParticipant = getLocalParticipant(state);
    const enabled = getFeatureFlag(state, CLAP_ENABLED, true);
    const { visible = enabled } = ownProps;

    return {
        _localParticipant,
        _clapped: _localParticipant.clapped,
        visible
    };
}

export default translate(connect(_mapStateToProps)(ClapButton));
