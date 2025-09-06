import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cardList, cardItem } from './animations';
import { stats } from '../data/stats';

const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9,]/g, '');

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [motionValue, isInView, numericValue]);

  useEffect(() =>
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toLocaleString() + suffix;
      }
    }),
    [springValue, suffix]
  );

  return <span ref={ref} />;
};


const StatsSection = () => {
  const { t } = useTranslation();

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
          variants={cardList}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.key}
              variants={cardItem}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`text-center p-8 ${stat.bg} rounded-2xl shadow-xl hover:shadow-2xl transition-all border-2 border-white`}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 shadow-lg`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-black text-[#0B2D63] mb-3">
                {stat.key === 'investment' ? stat.number : <AnimatedNumber value={stat.number} />}
              </h3>
              <p className="text-slate-600 font-semibold uppercase tracking-wider">{t(`stats.${stat.key}`)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
