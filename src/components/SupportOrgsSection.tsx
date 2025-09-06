import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { SectionProps } from './types';
import { cardList, cardItem } from './animations';
import { orgs } from '../data/supportOrgs';

const tagColors: { [key: string]: string } = {
  biz_support: "bg-blue-100 text-blue-800",
  rd_support: "bg-purple-100 text-purple-800",
  commercialization: "bg-green-100 text-green-800",
  agritech: "bg-lime-100 text-lime-800",
  genomics: "bg-indigo-100 text-indigo-800",
  clinical_trials: "bg-red-100 text-red-800",
  education: "bg-orange-100 text-orange-800",
  medtech: "bg-cyan-100 text-cyan-800",
  food_science: "bg-amber-100 text-amber-800",
  incubation: "bg-pink-100 text-pink-800",
  biomaterials: "bg-teal-100 text-teal-800",
};

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
            <motion.div variants={cardList} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {orgList.map(org => (
                <motion.div
                  key={org.name}
                  variants={cardItem}
                  whileHover={{ y: -5, scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                  className="bg-slate-50 rounded-xl p-6 flex flex-col text-left transition-all h-full"
                >
                  <img src={org.logo} alt={`${org.name} Logo`} className="h-12 mb-4 self-start" />
                  <h4 className="font-black text-xl text-slate-800">{org.name}</h4>
                  <p className="text-slate-600 my-4 flex-grow">{t(org.descriptionKey)}</p>
                  <div className="flex flex-wrap gap-2">
                    {org.tags.map(tag => (
                      <span key={tag} className={`px-3 py-1 text-xs font-bold rounded-full ${tagColors[tag] || 'bg-gray-200'}`}>
                        {t(`data.orgs.tags.${tag}`)}
                      </span>
                    ))}
                  </div>
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
