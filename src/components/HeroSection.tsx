import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Rocket, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { SectionProps } from './types';

const HeroSection = ({ id }: SectionProps) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Advanced Biotechnology Laboratory" className="w-full h-full object-cover transform scale-110" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2D63]/90 via-[#1a4480]/70 to-purple-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mb-6">
            <span className="inline-block px-6 py-3 bg-[#FFC940] text-[#0B2D63] font-black text-sm uppercase tracking-wider rounded-full shadow-lg">
              🚀 {t('hero.tagline')}
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: t('hero.title').replace(/<br\s*\/?>/g, '<br/>') }}>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto px-12 py-5 bg-[#FFC940] text-[#0B2D63] font-black text-lg rounded-xl hover:bg-[#FFB800] transition-all shadow-2xl flex items-center justify-center space-x-3">
              <Rocket className="w-6 h-6" />
              <span>{t('hero.exploreButton')}</span>
              <ChevronRight className="w-6 h-6" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto px-12 py-5 border-3 border-white text-white font-black text-lg rounded-xl hover:bg-white hover:text-[#0B2D63] transition-all shadow-2xl">
              {t('hero.companyDirectory')}
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-white/80">
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
