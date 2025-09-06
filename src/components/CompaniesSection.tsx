import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { SectionProps } from './types';
import { cardList, cardItem } from './animations';
import { companies } from '../data/companies';

const CompaniesSection = ({ id }: SectionProps) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-[#0B2D63] mb-6" dangerouslySetInnerHTML={{ __html: t('companies.title') }}>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            {t('companies.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={cardList}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {companies.map((company) => (
            <motion.div
              key={company.id}
              variants={cardItem}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/30">
                    {company.founded}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-white rounded-xl border-3 border-slate-200 flex items-center justify-center overflow-hidden shadow-lg">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                  </div>
                  <div className="text-right">
                    <span className="block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider mb-1">
                      {company.stage}
                    </span>
                    <span className="text-lg font-black text-[#FFC940]">{company.valuation}</span>
                  </div>
                </div>

                <h3 className="text-xl font-black text-[#0B2D63] mb-2">{company.name}</h3>
                <p className="text-slate-600 mb-4 font-medium">{company.description}</p>

                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-semibold">{t('companies.industry')}:</span>
                    <span className="text-slate-700 font-bold">{company.industry}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-semibold">{t('companies.teamSize')}:</span>
                    <span className="text-slate-700 font-bold">{company.employees}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-semibold">{t('companies.location')}:</span>
                    <span className="text-slate-700 font-bold">{company.location}</span>
                  </div>
                </div>

                <button className="w-full px-6 py-3 border-3 border-[#0B2D63] text-[#0B2D63] font-black rounded-xl hover:bg-[#0B2D63] hover:text-white transition-all flex items-center justify-center space-x-2 shadow-lg">
                  <span>{t('companies.viewCompany')}</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-12 py-4 bg-[#FFC940] text-[#0B2D63] font-black text-xl rounded-xl hover:bg-[#FFB800] transition-all shadow-2xl transform hover:scale-105">
            {t('companies.exploreAll')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CompaniesSection;
