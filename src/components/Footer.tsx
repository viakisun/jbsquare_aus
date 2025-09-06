import React from 'react';
import { useTranslation } from 'react-i18next';
import type { SectionProps } from './types';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { useNavItems } from '../hooks/useNavItems';

const Footer = ({ id }: SectionProps) => {
  const { t } = useTranslation();
  const navItems = useNavItems();

  const footerLinkGroups = navItems.filter(item => item.key !== 'support');

  return (
    <footer id={id} className="bg-[#0B2D63] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2D63] via-[#1a4480] to-purple-900 opacity-80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-black mb-8">
              JB <span className="text-[#FFC940]">SQUARE</span>
            </h3>
            <p className="text-white/90 mb-8 leading-relaxed text-lg font-medium">
              {t('footer.subtitle')}
            </p>
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-white">{t('footer.stay_updated')}</h4>
              <div className="flex">
                <input type="email" placeholder={t('footer.email_placeholder')} className="bg-white/10 text-white placeholder-white/50 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#FFC940]" />
                <button className="bg-[#FFC940] text-[#0B2D63] px-4 py-2 rounded-r-lg font-bold">{t('footer.subscribe')}</button>
              </div>
            </div>
             <div className="flex space-x-4 mt-8">
                <a href="#" className="text-white/70 hover:text-white"><Linkedin /></a>
                <a href="#" className="text-white/70 hover:text-white"><Twitter /></a>
                <a href="#" className="text-white/70 hover:text-white"><Facebook /></a>
              </div>
          </div>

          {footerLinkGroups.map(section => (
            <div key={section.key}>
              <h4 className="font-black mb-6 text-xl uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-4 text-white/90">
                {section.subItems?.map(link => (
                  <li key={link.name}><a href={link.href} className="hover:text-[#FFC940] transition-colors font-semibold text-lg">{link.name}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 mt-16 pt-10 text-center">
          <p className="text-white/80 text-lg font-medium" dangerouslySetInnerHTML={{ __html: t('footer.copyright') }}>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
