import { useTranslation } from 'react-i18next';

export const useNavItems = () => {
  const { t } = useTranslation();

  const navItems = [
    {
      key: 'about',
      title: t('nav.about.title'),
      subItems: [
        { name: t('nav.about.intro'), href: '#hero' },
        { name: t('nav.about.vision'), href: '#stats' },
        { name: t('nav.about.orgs'), href: '#support' },
      ],
    },
    {
      key: 'business',
      title: t('nav.business.title'),
      subItems: [
        { name: t('nav.business.support'), href: '#policy' },
        { name: t('nav.business.investment'), href: '#policy' },
      ],
    },
    {
      key: 'community',
      title: t('nav.community.title'),
      subItems: [
        { name: t('nav.community.announcements'), href: '#announcements' },
        { name: t('nav.community.events'), href: '#events' },
      ],
    },
    {
      key: 'info',
      title: t('nav.info.title'),
      subItems: [
        { name: t('nav.info.companies'), href: '#companies' },
        { name: t('nav.info.tech'), href: '#tech' },
        { name: t('nav.info.policy'), href: '#policy' },
      ],
    },
  ];

  return navItems;
};
