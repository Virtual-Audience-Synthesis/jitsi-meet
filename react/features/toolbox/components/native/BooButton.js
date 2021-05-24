// @flow

import { type Dispatch } from 'redux';

import {
    createToolbarEvent,
    sendAnalytics
} from '../../../analytics';
import { BOO_ENABLED, getFeatureFlag } from '../../../base/flags';
import { translate } from '../../../base/i18n';
import { IconBooed } from '../../../base/icons';
import {
    getLocalParticipant,
    participantUpdated
} from '../../../base/participants';
import { connect } from '../../../base/redux';
import { AbstractButton, type AbstractButtonProps } from '../../../base/toolbox/components';

/**
 * The type of the React {@code Component} props of {@link BooButton}.
 */
type Props = AbstractButtonProps & {

    /**
     * The local participant.
     */
    _localParticipant: Object,

    /**
     * Whether the participant booed or not.
     */
    _booed: boolean,

    /**
     * The redux {@code dispatch} function.
     */
    dispatch: Dispatch<any>
};

/**
 * An implementation of a button to start or stop booing.
 */
class BooButton extends AbstractButton<Props, *> {
    accessibilityLabel = 'toolbar.accessibilityLabel.boo';
    icon = IconBooed;
    label = 'toolbar.startBooing';
    toggledLabel = 'toolbar.stopBooing';

    /**
     * Handles clicking / pressing the button.
     *
     * @override
     * @protected
     * @returns {void}
     */
    _handleClick() {
        this._toggleBooed();
    }

    /**
     * Indicates whether this button is in toggled state or not.
     *
     * @override
     * @protected
     * @returns {boolean}
     */
    _isToggled() {
        return this.props._booed;
    }

    /**
     * Toggles the booed status of the local participant.
     *
     * @returns {void}
     */
    _toggleBooed() {
        const enable = !this.props._booed;

        sendAnalytics(createToolbarEvent('start.boo', { enable }));

        this.props.dispatch(participantUpdated({
            // XXX Only the local participant is allowed to update without
            // stating the JitsiConference instance (i.e. participant property
            // `conference` for a remote participant) because the local
            // participant is uniquely identified by the very fact that there is
            // only one local participant.

            id: this.props._localParticipant.id,
            local: true,
            booed: enable
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
    const enabled = getFeatureFlag(state, BOO_ENABLED, true);
    const { visible = enabled } = ownProps;

    return {
        _localParticipant,
        _booed: _localParticipant.booed,
        visible
    };
}

export default translate(connect(_mapStateToProps)(BooButton));
