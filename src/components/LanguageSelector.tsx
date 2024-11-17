import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe2 } from 'lucide-react';
import { Menu } from '@headlessui/react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-2 text-gray-300 hover:text-white">
        <Globe2 className="h-5 w-5" />
        <span>{languages.find(lang => lang.code === i18n.language)?.name || 'Language'}</span>
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-black/80 backdrop-blur-lg rounded-md shadow-lg ring-1 ring-white/10">
        <div className="py-1">
          {languages.map((language) => (
            <Menu.Item key={language.code}>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-purple-600 text-white' : 'text-gray-300'
                  } group flex w-full items-center px-4 py-2 text-sm`}
                  onClick={() => i18n.changeLanguage(language.code)}
                >
                  {language.name}
                </button>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
}