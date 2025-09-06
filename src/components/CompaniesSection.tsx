import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionProps } from './types';
import { boldFadeIn, staggerBold } from './animations';

const CompaniesSection = ({ id }: SectionProps) => {
  const { t } = useTranslation();

  const companies = [
    {
      id: 1,
      name: "BioGenix Korea",
      industry: "Pharmaceuticals",
      stage: "Growth Stage",
      employees: "150+",
      location: "JBFEZ",
      description: "Next-generation cancer therapeutics development.",
      logo: "https://picsum.photos/seed/biogenix/100",
      image: "https://picsum.photos/seed/biogenix_main/800/600",
      valuation: "$120M",
      founded: "2019"
    },
    {
      id: 2,
      name: "MedTech Solutions",
      industry: "Medical Devices",
      stage: "Series B",
      employees: "75",
      location: "Bio Valley",
      description: "AI-powered diagnostic medical device manufacturing.",
      logo: "https://picsum.photos/seed/medtech/100",
      image: "https://picsum.photos/seed/medtech_main/800/600",
      valuation: "$85M",
      founded: "2020"
    },
    {
      id: 3,
      name: "GenomeLink",
      industry: "Genomics",
      stage: "Series A",
      employees: "25",
      location: "Innovation District",
      description: "Personalized genomic analysis and therapeutics.",
      logo: "https://picsum.photos/seed/genome/100",
      image: "https://picsum.photos/seed/genome_main/800/600",
      valuation: "$45M",
      founded: "2021"
    },
    {
      id: 4,
      name: "AgriNova",
      industry: "Agritech",
      stage: "Seed",
      employees: "15",
      location: "Smart Farm Complex",
      description: "Developing sustainable crop enhancement solutions.",
      logo: "https://picsum.photos/seed/agrinova/100",
      image: "https://picsum.photos/seed/agrinova_main/800/600",
      valuation: "$15M",
      founded: "2022"
    },
    {
      id: 5,
      name: "QuantumLeap AI",
      industry: "AI & Health",
      stage: "Series C",
      employees: "250+",
      location: "JBFEZ",
      description: "AI platform for predictive diagnostics and healthcare analytics.",
      logo: "https://picsum.photos/seed/quantum/100",
      image: "https://picsum.photos/seed/quantum_main/800/600",
      valuation: "$500M",
      founded: "2018"
    },
    {
      id: 6,
      name: "Cellular Dynamics Inc.",
      industry: "Cell Therapy",
      stage: "Pre-IPO",
      employees: "180",
      location: "Bio Valley",
      description: "Pioneering stem cell therapies for regenerative medicine.",
      logo: "https://picsum.photos/seed/cellular/100",
      image: "https://picsum.photos/seed/cellular_main/800/600",
      valuation: "$350M",
      founded: "2019"
    },
    {
      id: 7,
      name: "NutriBiome",
      industry: "Food Science",
      stage: "Series A",
      employees: "40",
      location: "Innovation District",
      description: "Microbiome-based personalized nutrition solutions.",
      logo: "https://picsum.photos/seed/nutri/100",
      image: "https://picsum.photos/seed/nutri_main/800/600",
      valuation: "$30M",
      founded: "2021"
    },
    {
      id: 8,
      name: "EcoPlastics",
      industry: "Biomaterials",
      stage: "Growth Stage",
      employees: "90",
      location: "Green Tech Park",
      description: "Manufacturing biodegradable plastics from organic waste.",
      logo: "https://picsum.photos/seed/eco/100",
      image: "https://picsum.photos/seed/eco_main/800/600",
      valuation: "$95M",
      founded: "2020"
    },
    {
      id: 9,
      name: "AquaPure Systems",
      industry: "Environmental Bio",
      stage: "Seed",
      employees: "20",
      location: "JBFEZ",
      description: "Developing microbial solutions for water purification.",
      logo: "https://picsum.photos/seed/aqua/100",
      image: "https://picsum.photos/seed/aqua_main/800/600",
      valuation: "$12M",
      founded: "2022"
    }
  ];

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
          variants={staggerBold}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {companies.map((company) => (
            <motion.div
              key={company.id}
              variants={boldFadeIn}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl border-3 border-slate-200 hover:border-[#0B2D63] hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
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
