import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp, Award, FileText, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { boldFadeIn, staggerBold } from './animations';

const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    { number: "150+", label: t('stats.companies'), icon: Building2, color: "from-blue-500 to-cyan-500", bg: "bg-blue-50" },
    { number: "25", label: t('stats.institutes'), icon: Users, color: "from-emerald-500 to-green-500", bg: "bg-emerald-50" },
    { number: "$2.1B", label: t('stats.investment'), icon: TrendingUp, color: "from-purple-500 to-violet-500", bg: "bg-purple-50" },
    { number: "5,000+", label: t('stats.researchers'), icon: Award, color: "from-orange-500 to-red-500", bg: "bg-orange-50" },
    { number: "1,200+", label: t('stats.patents'), icon: FileText, color: "from-pink-500 to-rose-500", bg: "bg-pink-50" },
    { number: "40+", label: t('stats.partners'), icon: Globe, color: "from-teal-500 to-cyan-500", bg: "bg-teal-50" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-[#0B2D63] mb-6" dangerouslySetInnerHTML={{ __html: t('stats.title') }}>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            {t('stats.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={staggerBold}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={boldFadeIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`text-center p-8 ${stat.bg} rounded-2xl shadow-xl hover:shadow-2xl transition-all border-2 border-white`}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 shadow-lg`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-black text-[#0B2D63] mb-3">{stat.number}</h3>
              <p className="text-slate-600 font-semibold uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
