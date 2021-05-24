// @flow

import { type Dispatch } from 'redux';

import {
    createToolbarEvent,
    sendAnalytics
} from '../../../analytics';
import { WHISTLE_ENABLED, getFeatureFlag } from '../../../base/flags';
import { translate } from '../../../base/i18n';
import { IconWhistled } from '../../../base/icons';
import {
    getLocalParticipant,
    participantUpdated
} from '../../../base/participants';
import { connect } from '../../../base/redux';
import { AbstractButton, type AbstractButtonProps } from '../../../base/toolbox/components';

/**
 * The type of the React {@code Component} props of {@link WhistleButton}.
 */
type Props = AbstractButtonProps & {

    /**
     * The local participant.
     */
    _localParticipant: Object,

    /**
     * Whether the participant whistled or not.
     */
    _whistled: boolean,

    /**
     * The redux {@code dispatch} function.
     */
    dispatch: Dispatch<any>
};

/**
 * An implementation of a button to start or stop whistling.
 */
class WhistleButton extends AbstractButton<Props, *> {
    accessibilityLabel = 'toolbar.accessibilityLabel.whistle';
    icon = IconWhistled;
    label = 'toolbar.startWhistling';
    toggledLabel = 'toolbar.stopWhistling';

    /**
     * Handles clicking / pressing the button.
     *
     * @override
     * @protected
     * @returns {void}
     */
    _handleClick() {
        this._toggleWhistled();
    }

    /**
     * Indicates whether this button is in toggled state or not.
     *
     * @override
     * @protected
     * @returns {boolean}
     */
    _isToggled() {
        return this.props._whistled;
    }

    /**
     * Toggles the whistled status of the local participant.
     *
     * @returns {void}
     */
    _toggleWhistled() {
        const enable = !this.props._whistled;

        sendAnalytics(createToolbarEvent('start.whistle', { enable }));

        this.props.dispatch(participantUpdated({
            // XXX Only the local participant is allowed to update without
            // stating the JitsiConference instance (i.e. participant property
            // `conference` for a remote participant) because the local
            // participant is uniquely identified by the very fact that there is
            // only one local participant.

            id: this.props._localParticipant.id,
            local: true,
            whistled: enable
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
    const enabled = getFeatureFlag(state, WHISTLE_ENABLED, true);
    const { visible = enabled } = ownProps;

    return {
        _localParticipant,
        _whistled: _localParticipant.whistled,
        visible
    };
}

export default translate(connect(_mapStateToProps)(WhistleButton));
