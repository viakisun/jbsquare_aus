import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { SectionProps } from './types';
import { cardList, cardItem } from './animations';
import { techData } from '../data/tech';

const TRLMeter = ({ level }: { level: number }) => {
  const widthPercentage = (level / 9) * 100;
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-bold text-slate-500 uppercase">TRL</span>
        <span className="text-xs font-bold text-[#0B2D63]">{level} / 9</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full h-2"
          initial={{ width: 0 }}
          whileInView={{ width: `${widthPercentage}%` }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

const statusColors: { [key: string]: string } = {
  'data.tech.status.licensing': 'bg-green-100 text-green-800',
  'data.tech.status.research': 'bg-blue-100 text-blue-800',
  'data.tech.status.partnership': 'bg-yellow-100 text-yellow-800',
  'data.tech.status.commercialized': 'bg-purple-100 text-purple-800',
};


const TechPatentsSection = ({ id }: SectionProps) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#0B2D63] mb-6" dangerouslySetInnerHTML={{ __html: t('tech.title') }}></h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">{t('tech.subtitle')}</p>
        </motion.div>

        <motion.div
          variants={cardList}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {techData.map(item => (
            <motion.div
              key={item.id}
              variants={cardItem}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 flex flex-col text-left transition-all h-full shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-[#FFC940]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center`}>
                  <item.icon className="w-8 h-8 text-[#0B2D63]" />
                </div>
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${statusColors[item.statusKey] || 'bg-gray-100'}`}>
                  {t(item.statusKey)}
                </span>
              </div>

              <h3 className="text-xl font-black text-[#0B2D63] mb-2 flex-grow">{t(item.titleKey)}</h3>
              <p className="text-slate-600 mb-6 font-medium text-sm">{t(item.descriptionKey)}</p>

              <div className="mb-6">
                <TRLMeter level={item.trl} />
              </div>

              <div className="border-t border-slate-200 pt-4 text-sm">
                <p className="text-slate-500 font-bold">{t(item.authorsKey)}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechPatentsSection;
