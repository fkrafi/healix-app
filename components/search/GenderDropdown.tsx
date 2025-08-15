import React from 'react';
import IconDropdown, { DropdownItem } from '../common/IconDropdown';

export type Gender = 'Male' | 'Female' | 'Other';

interface GenderDropdownProps {
    selectedGender: Gender | '';
    onSelect: (gender: Gender | '') => void;
    placeholder?: string;
    style?: any;
}

const items: DropdownItem[] = [{
    value: 'Male',
    label: 'Male',
    icon: 'gender-male',
    iconType: 'MaterialCommunityIcons',
},
{
    value: 'Female',
    label: 'Female',
    icon: 'gender-female',
    iconType: 'MaterialCommunityIcons',
},
{
    value: 'Other',
    label: 'Other',
    icon: 'gender-non-binary',
    iconType: 'MaterialCommunityIcons',
}];

const GenderDropdown: React.FC<GenderDropdownProps> = ({
    selectedGender,
    onSelect,
    placeholder = 'Select Gender',
    style,
}) => {
    return (
        <IconDropdown
            items={items}
            selectedValue={selectedGender}
            onSelect={val => onSelect(val as Gender || '')}
            placeholder={placeholder}
            style={style}
        />
    );
};

export default GenderDropdown;
