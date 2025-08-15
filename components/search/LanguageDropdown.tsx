import React from 'react';
import IconDropdown, { DropdownItem } from '../common/IconDropdown';

interface LanguageDropdownProps {
  selectedLanguage: string | null;
  onSelect: (language: string | null) => void;
  placeholder?: string;
  style?: any;
}

const LANGUAGES: string[] = [
  'English', 'Arabic', 'Hindi', 'Urdu', 'Tagalog', 'French', 'Russian', 'Bengali', 'Malayalam', 'Tamil', 'Telugu', 'Spanish', 'Chinese', 'Other'
];

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  selectedLanguage,
  onSelect,
  placeholder = 'Select Language',
  style,
}) => {
  const items: DropdownItem[] = LANGUAGES.map(lang => ({
    label: lang,
    value: lang,
    icon: 'translate',
    iconType: 'MaterialCommunityIcons',
  }));
  return (
    <IconDropdown
      items={items}
      selectedValue={selectedLanguage ?? ''}
      onSelect={val => onSelect(val || null)}
      placeholder={placeholder}
      style={style}
    />
  );
};

export default LanguageDropdown;
