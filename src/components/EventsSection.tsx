import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { SectionProps } from './types';
import { slideInRight, staggerParent } from './animations';
import { events } from '../data/events';

const EventsSection = ({ id }: SectionProps) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-[#0B2D63] mb-6" dangerouslySetInnerHTML={{ __html: t('events.title') }}>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            {t('events.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={slideInRight}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer ${
                event.featured ? 'ring-4 ring-[#FFC940] ring-opacity-50' : 'border-2 border-slate-200'
              }`}
            >
              <div className="h-56 relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  {event.featured && (
                    <span className="px-4 py-2 bg-[#FFC940] text-[#0B2D63] text-xs font-black rounded-full uppercase tracking-wider shadow-lg">
                      🔥 {t('events.featured')}
                    </span>
                  )}
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/30">
                    {t('events.attendees', { count: event.attendees })}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 uppercase tracking-wider">
                    {event.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-slate-500 mb-3 font-semibold">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
                <h3 className="text-xl font-black text-[#0B2D63] mb-4 leading-tight">{event.title}</h3>
                <div className="flex items-center text-sm text-slate-600 mb-6 font-medium">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>
                <button className={`w-full px-6 py-3 font-black rounded-xl transition-all transform hover:scale-105 ${
                  event.featured
                    ? 'bg-[#FFC940] text-[#0B2D63] hover:bg-[#FFB800] shadow-lg'
                    : 'bg-[#0B2D63] text-white hover:bg-[#1a4480] shadow-lg'
                }`}>
                  {t('events.register')}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
