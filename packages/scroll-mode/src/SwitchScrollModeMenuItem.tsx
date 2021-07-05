/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import * as React from 'react';
import { MenuItem } from '@react-pdf-viewer/core';

import { RenderSwitchScrollModeProps } from './SwitchScrollMode';
import SwitchScrollModeDecorator from './SwitchScrollModeDecorator';

const SwitchScrollModeMenuItem: React.FC<RenderSwitchScrollModeProps> = ({ isSelected, mode, onClick }) => (
    <SwitchScrollModeDecorator mode={mode} onClick={onClick}>
        {(props) => (
            <MenuItem checked={isSelected} icon={props.icon} onClick={props.onClick}>
                {props.label}
            </MenuItem>
        )}
    </SwitchScrollModeDecorator>
);

export default SwitchScrollModeMenuItem;
