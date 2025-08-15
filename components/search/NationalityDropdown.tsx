import React from 'react';
import IconDropdown, { DropdownItem } from '../common/IconDropdown';

interface NationalityDropdownProps {
  selectedNationality: string | '';
  onSelect: (nationality: string | '') => void;
  placeholder?: string;
  style?: any;
}

const NATIONALITIES: string[] = [
  'UAE', 'India', 'Pakistan', 'Philippines', 'Egypt', 'UK', 'USA', 'Canada', 'Bangladesh', 'Saudi Arabia', 'Jordan', 'Lebanon', 'Syria', 'Sudan', 'Other'
];

const NationalityDropdown: React.FC<NationalityDropdownProps> = ({
  selectedNationality,
  onSelect,
  placeholder = 'Select Nationality',
  style,
}) => {
  const items: DropdownItem[] = NATIONALITIES.map(nat => ({
    label: nat,
    value: nat,
    icon: 'flag',
    iconType: 'MaterialCommunityIcons',
  }));
  return (
    <IconDropdown
      items={items}
      selectedValue={selectedNationality}
      onSelect={onSelect}
      placeholder={placeholder}
      style={style}
    />
  );
};

export default NationalityDropdown;
