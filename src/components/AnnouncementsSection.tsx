import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { SectionProps } from './types';
import { boldFadeIn, staggerBold } from './animations';
import { announcements } from '../data/announcements';

const AnnouncementsSection = ({ id }: SectionProps) => {
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
          <h2 className="text-5xl font-black text-[#0B2D63] mb-6" dangerouslySetInnerHTML={{ __html: t('announcements.title') }}>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            {t('announcements.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={staggerBold}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {announcements.map((announcement) => (
            <motion.div
              key={announcement.id}
              variants={boldFadeIn}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`rounded-2xl border-3 hover:shadow-2xl transition-all cursor-pointer overflow-hidden ${
                announcement.priority
                  ? 'border-[#FFC940] bg-gradient-to-r from-[#FFC940]/10 to-orange-50 shadow-lg'
                  : 'border-slate-200 bg-white hover:border-[#0B2D63]/30 shadow-md'
              }`}
            >
              <div className="flex">
                <div className="w-32 h-32 flex-shrink-0 relative overflow-hidden">
                  <img
                    src={announcement.image}
                    alt={announcement.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B2D63]/20 to-transparent"></div>
                </div>

                <div className="flex-1 p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className={`px-4 py-2 text-xs font-black rounded-full uppercase tracking-wider ${
                          announcement.status === 'ACTIVE'
                            ? 'bg-emerald-100 text-emerald-800'
                            : announcement.status === 'CLOSING SOON'
                            ? 'bg-[#FFC940] text-[#0B2D63]'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {announcement.status}
                        </span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full uppercase">
                          {announcement.category}
                        </span>
                        {announcement.priority && (
                          <Star className="w-6 h-6 text-[#FFC940] fill-current" />
                        )}
                      </div>
                      <h3 className="text-2xl font-black text-[#0B2D63] mb-3">{announcement.title}</h3>
                      <p className="text-slate-600 mb-4 text-lg font-medium">{announcement.description}</p>
                      <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide">{announcement.date}</p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, x: 5 }}
                      className="ml-6"
                    >
                      <ChevronRight className="w-8 h-8 text-[#FFC940]" />
                    </motion.div>
                  </div>
                </div>
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
          <button className="px-10 py-4 border-3 border-[#0B2D63] text-[#0B2D63] font-black text-lg rounded-xl hover:bg-[#0B2D63] hover:text-white transition-all shadow-lg">
            {t('announcements.viewAll')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
