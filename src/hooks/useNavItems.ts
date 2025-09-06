import { useTranslation } from 'react-i18next';

export const useNavItems = () => {
  const { t } = useTranslation();

  const navItems = [
    { title: t('nav.about'), key: 'about', subItems: [ { name: t('nav.jbsquare'), href: '#jbsquare' }, { name: t('nav.biovalley'), href: '#biovalley' }, { name: t('nav.supportorgs'), href: '#supportorgs' } ] },
    { title: t('nav.opportunities'), key: 'opportunities', subItems: [ { name: t('nav.investment'), href: '#investment' }, { name: t('nav.announcements'), href: '#announcements' }, { name: t('nav.bizsupport'), href: '#bizsupport' } ] },
    { title: t('nav.information'), key: 'information', subItems: [ { name: t('nav.companies'), href: '#companies' }, { name: t('nav.patents'), href: '#patents' } ] },
    { title: t('nav.news'), key: 'news', subItems: [ { name: t('nav.news'), href: '#news' }, { name: t('nav.community'), href: '#community' } ] },
    { title: t('nav.support'), key: 'support', subItems: [ { name: t('nav.contact'), href: '#contact' }, { name: t('nav.newsletter'), href: '#newsletter' } ] }
  ];

  return navItems;
};
