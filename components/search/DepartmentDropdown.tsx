import React from 'react';
import { DepartmentIconMap, Department } from '../../common/types';
import IconDropdown, { DropdownItem } from '../common/IconDropdown';

interface DepartmentDropdownProps {
  selectedDepartment: Department | null;
  onSelect: (dept: Department | null) => void;
  placeholder?: string;
  style?: any;
}

const DepartmentDropdown: React.FC<DepartmentDropdownProps> = ({
  selectedDepartment,
  onSelect,
  placeholder = 'Select Department',
  style,
}) => {
  const items: DropdownItem[] = Object.keys(DepartmentIconMap).map(dept => ({
    label: dept,
    value: dept,
    icon: DepartmentIconMap[dept as Department] as any, // Cast to any for compatibility
    iconType: 'MaterialCommunityIcons',
  }));
  return (
    <IconDropdown
      items={items}
      selectedValue={selectedDepartment ?? ''}
      onSelect={val => onSelect(val ? (val as Department) : null)}
      placeholder={placeholder}
      style={style}
    />
  );
}

export default DepartmentDropdown;