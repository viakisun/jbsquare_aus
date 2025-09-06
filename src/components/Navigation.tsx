import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavItems } from '../hooks/useNavItems';

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
};

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const navItems = useNavItems();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageToggle = () => {
    const newLang = i18n.language === 'ko' ? 'en' : 'ko';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-2xl backdrop-blur-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-black text-[#0B2D63] tracking-tight">
              JB <span className="text-[#FFC940]">SQUARE</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.key} className="relative" onMouseEnter={() => setHoveredMenu(item.title)} onMouseLeave={() => setHoveredMenu(null)}>
                <button className="text-slate-700 hover:text-[#0B2D63] px-4 py-3 text-sm font-bold transition-all hover:bg-[#FFC940]/10 rounded-lg flex items-center">
                  {item.title}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <AnimatePresence>
                  {hoveredMenu === item.title && (
                    <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-100">
                      {item.subItems.map((subItem) => (
                        <a key={subItem.name} href={subItem.href} className="block px-5 py-3 text-slate-700 hover:bg-[#FFC940]/20 hover:text-[#0B2D63] font-semibold transition-colors">
                          {subItem.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-700 hover:text-[#0B2D63] transition-colors p-3 hover:bg-slate-100 rounded-lg"><Search className="w-5 h-5" /></button>
            <button onClick={handleLanguageToggle} className="px-4 py-2 text-sm border-2 border-slate-300 rounded-lg hover:border-[#0B2D63] transition-all font-semibold w-24">
              {i18n.language === 'ko' ? t('nav.lang_en') : t('nav.lang_ko')}
            </button>
            <button className="px-8 py-3 bg-[#FFC940] text-[#0B2D63] font-black rounded-lg hover:bg-[#FFB800] transition-all transform hover:scale-105 shadow-lg">{t('nav.getStarted')}</button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-700 hover:text-[#0B2D63] transition-colors p-2">
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden border-t border-slate-200">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                {navItems.map((item) => (
                  <div key={item.key}>
                    <h3 className="px-3 py-2 text-sm font-bold text-slate-500 uppercase">{item.title}</h3>
                    {item.subItems.map((subItem) => (
                       <a key={subItem.name} href={subItem.href} className="block px-4 py-3 text-base font-bold text-slate-700 hover:text-[#0B2D63] hover:bg-[#FFC940]/10 rounded-lg">{subItem.name}</a>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
