// @flow

import React from 'react';

import { Icon, IconBooed } from '../../base/icons';

import { StartedBooIndicatorBackground } from './styled';

export const StartedBooIndicator = () => (
    <StartedBooIndicatorBackground>
        <Icon
            size = { 15 }
            src = { IconBooed } />
    </StartedBooIndicatorBackground>
);
