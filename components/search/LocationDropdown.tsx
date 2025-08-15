import React from 'react';
import IconDropdown, { DropdownItem } from '../common/IconDropdown';

interface LocationDropdownProps {
  selectedLocation: string | null;
  onSelect: (location: string) => void;
  placeholder?: string;
  style?: any;
}

const LOCATIONS = [
  'Dubai Healthcare City',
  'Al Barsha',
  'Jumeirah',
  'Deira',
  'Al Qusais',
  'Bur Dubai',
  'Al Nahda',
  'Oud Metha',
];

const LocationDropdown: React.FC<LocationDropdownProps> = ({
  selectedLocation,
  onSelect,
  placeholder = 'Select Location',
  style,
}) => {
  const items: DropdownItem[] = LOCATIONS.map(loc => ({
    label: loc,
    value: loc,
    icon: 'location-outline',
    iconType: 'Ionicons',
  }));
  return (
    <IconDropdown
      items={items}
      selectedValue={selectedLocation}
      onSelect={onSelect}
      placeholder={placeholder}
      style={style}
    />
  );
};

// styles are now handled by IconDropdown

export default LocationDropdown;
