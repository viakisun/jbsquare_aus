import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { SectionProps } from './types';
import { boldFadeIn, staggerParent } from './animations';
import { orgs } from '../data/supportOrgs';

const SupportOrgsSection = ({ id }: SectionProps) => {
  const { t } = useTranslation();

  const groupedOrgs = orgs.reduce((acc, org) => {
    (acc[org.type] = acc[org.type] || []).push(org);
    return acc;
  }, {} as Record<string, typeof orgs>);

  return (
    <section id={id} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#0B2D63] mb-6" dangerouslySetInnerHTML={{ __html: t('supportOrgs.title') }}></h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">{t('supportOrgs.subtitle')}</p>
        </motion.div>

        {Object.entries(groupedOrgs).map(([type, orgList]) => (
          <div key={type} className="mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-8 border-l-4 border-[#FFC940] pl-4">{type}</h3>
            <motion.div variants={staggerParent} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {orgList.map(org => (
                <motion.div
                  key={org.name}
                  variants={boldFadeIn}
                  whileHover={{ y: -5, scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                  className="bg-slate-50 rounded-xl p-6 text-center transition-all"
                >
                  <img src={org.logo} alt={`${org.name} Logo`} className="h-16 mx-auto mb-4" />
                  <h4 className="font-bold text-lg text-slate-700">{org.name}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportOrgsSection;
