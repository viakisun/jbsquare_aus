import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { SectionProps } from './types';
import { boldFadeIn, staggerParent } from './animations';
import { techData } from '../data/tech';

const TechPatentsSection = ({ id }: SectionProps) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#0B2D63] mb-6" dangerouslySetInnerHTML={{ __html: t('tech.title') }}></h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">{t('tech.subtitle')}</p>
        </motion.div>

        <div className="bg-slate-50 rounded-2xl p-8">
          <motion.div variants={staggerParent} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {techData.map(item => (
              <motion.div key={item.id} variants={boldFadeIn} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 p-4 hover:bg-white rounded-lg transition-all">
                <div className="md:col-span-2">
                  <span className={`inline-block px-3 py-1 text-sm font-bold rounded-full mb-2 ${
                    item.type === 'Patent' ? 'bg-blue-100 text-blue-800' :
                    item.type === 'Research' ? 'bg-emerald-100 text-emerald-800' : 'bg-purple-100 text-purple-800'
                  }`}>{item.type}</span>
                  <h3 className="text-lg font-bold text-[#0B2D63]">{t(item.titleKey)}</h3>
                </div>
                <p className="text-slate-600 font-medium">{item.authors}</p>
                <p className="text-slate-500">{item.date}</p>
                <div className="text-right">
                  <button className="px-6 py-2 border-2 border-slate-300 text-slate-700 font-bold rounded-lg hover:bg-[#0B2D63] hover:text-white hover:border-[#0B2D63] transition-all">
                    {t('tech.viewDetails')}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechPatentsSection;
