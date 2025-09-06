import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { SectionProps } from './types';
import { fadeInUp, staggerParent } from './animations';
import { announcements } from '../data/announcements';

const categoryColors: { [key: string]: string } = {
  'data.announcements.category.funding': 'bg-blue-100 text-blue-800',
  'data.announcements.category.permits': 'bg-green-100 text-green-800',
  'data.announcements.category.investment': 'bg-yellow-100 text-yellow-800',
  'data.announcements.category.rd': 'bg-purple-100 text-purple-800',
  'data.announcements.category.incubation': 'bg-pink-100 text-pink-800',
  'data.announcements.category.grants': 'bg-indigo-100 text-indigo-800',
  'data.announcements.category.partnership': 'bg-teal-100 text-teal-800',
  'data.announcements.category.commercialization': 'bg-orange-100 text-orange-800',
  'data.announcements.category.recruitment': 'bg-red-100 text-red-800',
};

const statusColors: { [key: string]: string } = {
  'data.announcements.status.active': 'bg-emerald-100 text-emerald-800',
  'data.announcements.status.open': 'bg-blue-100 text-blue-800',
  'data.announcements.status.closing_soon': 'bg-yellow-100 text-yellow-800',
  'data.announcements.status.closed': 'bg-red-100 text-red-800',
  'data.announcements.status.completed': 'bg-gray-100 text-gray-800',
};

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
          variants={staggerParent}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {announcements.map((announcement) => (
            <motion.div
              key={announcement.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`rounded-2xl border-2 hover:shadow-2xl transition-all cursor-pointer overflow-hidden ${
                announcement.priority
                  ? 'border-[#FFC940] bg-yellow-50'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-48 md:h-auto h-48 flex-shrink-0 relative overflow-hidden">
                  <img
                    src={announcement.image}
                    alt={t(announcement.titleKey)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                </div>

                <div className="flex-1 p-6 md:p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center flex-wrap gap-2 mb-4">
                        <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${statusColors[announcement.statusKey] || 'bg-gray-100 text-gray-800'}`}>
                          {t(announcement.statusKey)}
                        </span>
                        <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${categoryColors[announcement.categoryKey] || 'bg-slate-100 text-slate-700'}`}>
                          {t(announcement.categoryKey)}
                        </span>
                        {announcement.priority && (
                          <span className="flex items-center text-yellow-500">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="ml-1 text-xs font-bold">{t('announcements.priority')}</span>
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-[#0B2D63] mb-3">{t(announcement.titleKey)}</h3>
                      <p className="text-slate-600 mb-4 text-base md:text-lg font-medium">{t(announcement.descriptionKey)}</p>
                      <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide">{announcement.date}</p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, x: 5 }}
                      className="ml-6 hidden md:block"
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
          <button className="px-10 py-4 border-2 border-[#0B2D63] text-[#0B2D63] font-black text-lg rounded-xl hover:bg-[#0B2D63] hover:text-white transition-all shadow-lg">
            {t('announcements.viewAll')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
