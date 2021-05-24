// @flow

import React from 'react';

import { Icon, IconClapped } from '../../base/icons';

import { StartedClapIndicatorBackground } from './styled';

export const StartedClapIndicator = () => (
    <StartedClapIndicatorBackground>
        <Icon
            size = { 15 }
            src = { IconClapped } />
    </StartedClapIndicatorBackground>
);
