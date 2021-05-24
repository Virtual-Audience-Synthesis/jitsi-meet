// @flow

import React from 'react';

import { Icon, IconWhistled } from '../../base/icons';

import { StartedWhistleIndicatorBackground } from './styled';

export const StartedWhistleIndicator = () => (
    <StartedWhistleIndicatorBackground>
        <Icon
            size = { 15 }
            src = { IconWhistled } />
    </StartedWhistleIndicatorBackground>
);
