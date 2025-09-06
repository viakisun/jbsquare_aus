import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, TrendingUp, Rocket, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { SectionProps } from './types';

const PolicyInvestmentSection = ({ id }: SectionProps) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('Policies');

  const policies = [
    { icon: FileText, title: "Foreign Investment Zone Act", description: "Special economic zone benefits for foreign-invested companies." },
    { icon: TrendingUp, title: "Tax Reduction for High-Tech Biz", description: "Significant corporate and income tax reductions for designated high-tech companies." },
    { icon: Rocket, title: "R&D Grant Matching", description: "Government grants that match private R&D investments up to 200%." },
    { icon: Users, title: "Employment Subsidies", description: "Financial support for hiring local talent and researchers." }
  ];

  const investments = [
    { title: "JB Bio-Venture Fund I", size: "$50M", focus: "Seed & Series A" },
    { title: "Global Expansion Fund", size: "$100M", focus: "Series B & C" },
    { title: "Agritech Innovation Fund", size: "$30M", focus: "Agritech & Food Science" },
    { title: "Government Matching Fund", size: "$250M", focus: "All Stages" },
  ];

  return (
    <section id={id} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#0B2D63] mb-6" dangerouslySetInnerHTML={{ __html: t('policy.title') }}></h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">{t('policy.subtitle')}</p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="bg-slate-200 p-2 rounded-xl flex space-x-2">
            <button onClick={() => setActiveTab('Policies')} className={`px-8 py-3 font-bold rounded-lg transition-all ${activeTab === 'Policies' ? 'bg-white text-[#0B2D63] shadow-md' : 'text-slate-600'}`}>{t('policy.tab_policies')}</button>
            <button onClick={() => setActiveTab('Investments')} className={`px-8 py-3 font-bold rounded-lg transition-all ${activeTab === 'Investments' ? 'bg-white text-[#0B2D63] shadow-md' : 'text-slate-600'}`}>{t('policy.tab_investments')}</button>
          </div>
        </div>

        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'Policies' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {policies.map(policy => (
                    <div key={policy.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                      <policy.icon className="w-10 h-10 text-[#FFC940] mb-4" />
                      <h3 className="font-bold text-xl text-[#0B2D63] mb-2">{policy.title}</h3>
                      <p className="text-slate-600">{policy.description}</p>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'Investments' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {investments.map(inv => (
                    <div key={inv.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center">
                      <h3 className="font-black text-2xl text-[#0B2D63] mb-2">{inv.title}</h3>
                      <p className="text-4xl font-bold text-[#FFC940] mb-2">{inv.size}</p>
                      <p className="text-slate-500 font-semibold">Focus: {inv.focus}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PolicyInvestmentSection;
