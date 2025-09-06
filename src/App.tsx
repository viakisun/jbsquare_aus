import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Search,
  Calendar,
  Building2,
  Users,
  TrendingUp,
  FileText,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Star,
  ExternalLink,
  Menu,
  X,
  Globe,
  Award,
  Zap,
  Target,
  Rocket
} from 'lucide-react';

// Animation Settings
const boldFadeIn = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

const staggerBold = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
};

// Navigation Data
const navItems = [
  {
    title: '소개',
    subItems: [
      { name: 'JB-Square (바이오 클러스터)', href: '#jbsquare' },
      { name: '지역 바이오밸리', href: '#biovalley' },
      { name: '지원기관 현황', href: '#supportorgs' }
    ]
  },
  {
    title: '기회',
    subItems: [
      { name: '정책 · 투자 안내', href: '#investment' },
      { name: '공고', href: '#announcements' },
      { name: '기업 지원', href: '#bizsupport' }
    ]
  },
  {
    title: '정보',
    subItems: [
      { name: '기업 정보', href: '#companies' },
      { name: '기술 및 특허', href: '#patents' }
    ]
  },
  {
    title: '소식',
    subItems: [
      { name: '뉴스 & 행사', href: '#news' },
      { name: '커뮤니티', href: '#community' }
    ]
  },
  {
    title: '고객지원',
    subItems: [
      { name: '알림 및 문의', href: '#contact' },
      { name: '뉴스레터 구독', href: '#newsletter' }
    ]
  }
];

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-2xl backdrop-blur-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-black text-[#0B2D63] tracking-tight">
              JB <span className="text-[#FFC940]">SQUARE</span>
            </h1>
          </div>

          {/* Desktop Menu with Dropdowns */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setHoveredMenu(item.title)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button className="text-slate-700 hover:text-[#0B2D63] px-4 py-3 text-sm font-bold transition-all hover:bg-[#FFC940]/10 rounded-lg flex items-center">
                  {item.title}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <AnimatePresence>
                  {hoveredMenu === item.title && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-100"
                    >
                      {item.subItems.map((subItem) => (
                        <a key={subItem.name} href={subItem.href} className="block px-5 py-3 text-slate-700 hover:bg-[#FFC940]/20 hover:text-[#0B2D63] font-semibold transition-colors">
                          {subItem.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-700 hover:text-[#0B2D63] transition-colors p-3 hover:bg-slate-100 rounded-lg"><Search className="w-5 h-5" /></button>
            <button className="px-4 py-2 text-sm border-2 border-slate-300 rounded-lg hover:border-[#0B2D63] transition-all font-semibold">한국어</button>
            <button className="px-8 py-3 bg-[#FFC940] text-[#0B2D63] font-black rounded-lg hover:bg-[#FFB800] transition-all transform hover:scale-105 shadow-lg">GET STARTED</button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-700 hover:text-[#0B2D63] transition-colors p-2">
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden border-t border-slate-200">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                {navItems.map((item) => (
                  <div key={item.title}>
                    <h3 className="px-3 py-2 text-sm font-bold text-slate-500 uppercase">{item.title}</h3>
                    {item.subItems.map((subItem) => (
                       <a key={subItem.name} href={subItem.href} className="block px-4 py-3 text-base font-bold text-slate-700 hover:text-[#0B2D63] hover:bg-[#FFC940]/10 rounded-lg">{subItem.name}</a>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// Section Component Prop Type
interface SectionProps {
  id: string;
}

// Hero Section
const HeroSection = ({ id }: SectionProps) => {
  return (
    <section id={id} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Advanced Biotechnology Laboratory" className="w-full h-full object-cover transform scale-110" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2D63]/90 via-[#1a4480]/70 to-purple-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mb-6">
            <span className="inline-block px-6 py-3 bg-[#FFC940] text-[#0B2D63] font-black text-sm uppercase tracking-wider rounded-full shadow-lg">
              🚀 Welcome to JB SQUARE
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
            THE HEART OF
            <br />
            <span className="text-[#FFC940] drop-shadow-lg">BIO-INNOVATION</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            JB SQUARE: Asia's premier bio-cluster for research, development, and investment.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto px-12 py-5 bg-[#FFC940] text-[#0B2D63] font-black text-lg rounded-xl hover:bg-[#FFB800] transition-all shadow-2xl flex items-center justify-center space-x-3">
              <Rocket className="w-6 h-6" />
              <span>EXPLORE OPPORTUNITIES</span>
              <ChevronRight className="w-6 h-6" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto px-12 py-5 border-3 border-white text-white font-black text-lg rounded-xl hover:bg-white hover:text-[#0B2D63] transition-all shadow-2xl">
              COMPANY DIRECTORY
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-white/80">
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
};

// Dynamic Stats Section
const StatsSection = () => {
  const stats = [
    { number: "150+", label: "Biotech Companies", icon: Building2, color: "from-blue-500 to-cyan-500", bg: "bg-blue-50" },
    { number: "25", label: "Research Institutes", icon: Users, color: "from-emerald-500 to-green-500", bg: "bg-emerald-50" },
    { number: "$2.1B", label: "Annual Investment", icon: TrendingUp, color: "from-purple-500 to-violet-500", bg: "bg-purple-50" },
    { number: "5,000+", label: "Researchers", icon: Award, color: "from-orange-500 to-red-500", bg: "bg-orange-50" },
    { number: "1,200+", label: "Patents Filed", icon: FileText, color: "from-pink-500 to-rose-500", bg: "bg-pink-50" },
    { number: "40+", label: "Global Partners", icon: Globe, color: "from-teal-500 to-cyan-500", bg: "bg-teal-50" }
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
          <h2 className="text-5xl font-black text-[#0B2D63] mb-6">
            POWERING <span className="text-[#FFC940]">INNOVATION</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Building the future of biotechnology with unprecedented scale and impact
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

// Bold Announcements Section
const AnnouncementsSection = ({ id }: SectionProps) => {
  const announcements = [
    {
      id: 1,
      title: "2025 Biotech Innovation Fund Now Open",
      date: "September 1, 2025",
      status: "ACTIVE",
      priority: true,
      description: "Revolutionary government funding program for next-gen biotech startups.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "FUNDING"
    },
    {
      id: 2,
      title: "New Research Facility Permits Available",
      date: "August 28, 2025",
      status: "OPEN",
      priority: false,
      description: "Streamlined permitting process for Bio Valley research facilities.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "PERMITS"
    },
    {
      id: 3,
      title: "Foreign Investment Tax Incentives Extended",
      date: "August 25, 2025",
      status: "CLOSING SOON",
      priority: true,
      description: "Extended deadline for international investment tax benefits.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "INVESTMENT"
    },
    {
      id: 4,
      title: "Call for R&D Proposals: AI in Drug Discovery",
      date: "August 22, 2025",
      status: "OPEN",
      priority: false,
      description: "Seeking innovative R&D projects leveraging AI for drug discovery.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "R&D"
    },
    {
      id: 5,
      title: "JB SQUARE Incubation Program - Fall 2025 Cohort",
      date: "August 20, 2025",
      status: "ACTIVE",
      priority: true,
      description: "Applications are now open for our world-class startup incubation program.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "INCUBATION"
    },
    {
      id: 6,
      title: "Clinical Trial Support Grant Applications",
      date: "August 15, 2025",
      status: "CLOSED",
      priority: false,
      description: "The application period for the 2025 clinical trial grants has now closed.",
      image: "https://images.unsplash.com/photo-1581092580423-9c9780b6294a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "GRANTS"
    },
    {
      id: 7,
      title: "Global Partnership Program with MassBio",
      date: "August 10, 2025",
      status: "ACTIVE",
      priority: false,
      description: "Announcing a new strategic partnership with MassBio to foster global collaboration.",
      image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "PARTNERSHIP"
    },
    {
      id: 8,
      title: "Smart Farm Technology Commercialization Support",
      date: "August 5, 2025",
      status: "OPEN",
      priority: false,
      description: "Support for commercializing innovative smart farm and agritech solutions.",
      image: "https://images.unsplash.com/photo-1615829239823-382d2b591248?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "COMMERCIALIZATION"
    },
    {
      id: 9,
      title: "Bio-Cluster Tenant Recruitment Fair 2025",
      date: "July 30, 2025",
      status: "COMPLETED",
      priority: true,
      description: "Recap of the successful tenant recruitment fair for the new Bio-Cluster facilities.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "RECRUITMENT"
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
          <h2 className="text-5xl font-black text-[#0B2D63] mb-6">
            LATEST <span className="text-[#FFC940]">OPPORTUNITIES</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Don't miss out on game-changing opportunities in Korea's biotech ecosystem
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
                {/* Bold Image Section */}
                <div className="w-32 h-32 flex-shrink-0 relative overflow-hidden">
                  <img
                    src={announcement.image}
                    alt={announcement.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B2D63]/20 to-transparent"></div>
                </div>

                {/* Content Section */}
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
            VIEW ALL OPPORTUNITIES
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Events Section with Bold Design
const EventsSection = ({ id }: SectionProps) => {
  const events = [
    {
      id: 1,
      title: "Jeonbuk BioTech Innovation Summit 2025",
      date: "October 15, 2025",
      location: "JBFEZ Convention Center",
      featured: true,
      category: "SUMMIT",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: "500+"
    },
    {
      id: 2,
      title: "CEO Forum: Digital Health Revolution",
      date: "September 28, 2025",
      location: "Bio Valley Complex",
      featured: false,
      category: "FORUM",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: "200+"
    },
    {
      id: 3,
      title: "International Investment Roundtable",
      date: "September 20, 2025",
      location: "Jeonju Chamber of Commerce",
      featured: true,
      category: "INVESTMENT",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: "150+"
    },
    {
      id: 4,
      title: "Workshop: GMP Compliance for Startups",
      date: "November 5, 2025",
      location: "JB SQUARE Incubation Center",
      featured: false,
      category: "WORKSHOP",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: "50+"
    },
    {
      id: 5,
      title: "Agritech Demo Day 2025",
      date: "November 12, 2025",
      location: "Jeonbuk National University",
      featured: false,
      category: "DEMO DAY",
      image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: "300+"
    },
    {
      id: 6,
      title: "Networking Night: Bio-Pharma Professionals",
      date: "November 20, 2025",
      location: "The Grand Hill Hotel, Jeonju",
      featured: true,
      category: "NETWORKING",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: "250+"
    },
    {
      id: 7,
      title: "Webinar: The Future of CRISPR Technology",
      date: "December 2, 2025",
      location: "Online",
      featured: false,
      category: "WEBINAR",
      image: "https://images.unsplash.com/photo-1587825140708-df876c12b44e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: "1000+"
    },
    {
      id: 8,
      title: "JB Bio-Cluster Open House",
      date: "December 10, 2025",
      location: "JB SQUARE Main Campus",
      featured: false,
      category: "OPEN HOUSE",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: "400+"
    },
    {
      id: 9,
      title: "End-of-Year Gala & Awards Ceremony",
      date: "December 18, 2025",
      location: "Jeonju City Hall",
      featured: true,
      category: "GALA",
      image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      attendees: "350+"
    }
  ];

  return (
    <section id={id} className="py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-[#0B2D63] mb-6">
            UPCOMING <span className="text-[#FFC940]">EVENTS</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Connect with industry titans and discover breakthrough opportunities at our world-class biotech events
          </p>
        </motion.div>

        <motion.div
          variants={staggerBold}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={boldFadeIn}
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
                      🔥 FEATURED EVENT
                    </span>
                  )}
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/30">
                    {event.attendees} ATTENDEES
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
                  REGISTER NOW
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Companies Section
const CompaniesSection = ({ id }: SectionProps) => {
  const companies = [
    {
      id: 1,
      name: "BioGenix Korea",
      industry: "Pharmaceuticals",
      stage: "Growth Stage",
      employees: "150+",
      location: "JBFEZ",
      description: "Next-generation cancer therapeutics development.",
      logo: "https://images.unsplash.com/photo-1621679493259-3c3b47c8a489?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      logo: "https://images.unsplash.com/photo-1599351379359-2e58a55d4444?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      logo: "https://images.unsplash.com/photo-1532187643623-dbf26353b56a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      image: "https://images.unsplash.com/photo-1532187863486-abf9db50d069?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      logo: "https://images.unsplash.com/photo-1563514249-158458341372?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      image: "https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      logo: "https://images.unsplash.com/photo-1611075799355-9b25a331853a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      logo: "https://images.unsplash.com/photo-1579154341147-43621649495a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      image: "https://images.unsplash.com/photo-1628395568463-9a74a1a54a01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      logo: "https://images.unsplash.com/photo-1543083477-4f785aeafaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      image: "https://images.unsplash.com/photo-1540420773420-2850a26e685f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      logo: "https://images.unsplash.com/photo-1516839324915-4a5849412555?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      image: "https://images.unsplash.com/photo-1604945934128-2200b6059530?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      logo: "https://images.unsplash.com/photo-1559825481-48a695959407?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      image: "https://images.unsplash.com/photo-1567104234984-72c366a32a6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
          <h2 className="text-5xl font-black text-[#0B2D63] mb-6">
            BREAKTHROUGH <span className="text-[#FFC940]">COMPANIES</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Meet the innovative companies revolutionizing healthcare and life sciences from Korea
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
              {/* Company Image */}
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
                    <span className="text-slate-500 font-semibold">Industry:</span>
                    <span className="text-slate-700 font-bold">{company.industry}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-semibold">Team Size:</span>
                    <span className="text-slate-700 font-bold">{company.employees}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-semibold">Location:</span>
                    <span className="text-slate-700 font-bold">{company.location}</span>
                  </div>
                </div>

                <button className="w-full px-6 py-3 border-3 border-[#0B2D63] text-[#0B2D63] font-black rounded-xl hover:bg-[#0B2D63] hover:text-white transition-all flex items-center justify-center space-x-2 shadow-lg">
                  <span>VIEW COMPANY</span>
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
            EXPLORE ALL COMPANIES
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Support Organizations Section
const SupportOrgsSection = ({ id }: SectionProps) => {
  const orgs = [
    { type: 'National Agency', name: 'Ministry of SMEs and Startups', logo: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=100' },
    { type: 'National Agency', name: 'Korea Institute of Startup & Entrepreneurship Development', logo: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=100' },
    { type: 'University', name: 'Jeonbuk National University', logo: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=100' },
    { type: 'University', name: 'Wonkwang University', logo: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=100' },
    { type: 'Research Institute', name: 'Korea Research Institute of Bioscience and Biotechnology (KRIBB)', logo: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=100' },
    { type: 'Research Institute', name: 'Agency for Defense Development (ADD)', logo: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=100' },
  ];

  const groupedOrgs = orgs.reduce((acc, org) => {
    (acc[org.type] = acc[org.type] || []).push(org);
    return acc;
  }, {} as Record<string, typeof orgs>);

  return (
    <section id={id} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#0B2D63] mb-6">SUPPORTING <span className="text-[#FFC940]">ECOSYSTEM</span></h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">A collaborative network of government agencies, universities, and research institutes powering our growth.</p>
        </motion.div>

        {Object.entries(groupedOrgs).map(([type, orgList]) => (
          <div key={type} className="mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-8 border-l-4 border-[#FFC940] pl-4">{type}</h3>
            <motion.div variants={staggerBold} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {orgList.map(org => (
                <motion.div key={org.name} variants={boldFadeIn} className="bg-slate-50 rounded-xl p-6 text-center hover:bg-white hover:shadow-lg transition-all">
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

// Policy & Investment Section
const PolicyInvestmentSection = ({ id }: SectionProps) => {
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
          <h2 className="text-5xl font-black text-[#0B2D63] mb-6">POLICY & <span className="text-[#FFC940]">INVESTMENT</span></h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">Favorable policies and robust investment programs to accelerate your success.</p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="bg-slate-200 p-2 rounded-xl flex space-x-2">
            <button onClick={() => setActiveTab('Policies')} className={`px-8 py-3 font-bold rounded-lg transition-all ${activeTab === 'Policies' ? 'bg-white text-[#0B2D63] shadow-md' : 'text-slate-600'}`}>Key Policies</button>
            <button onClick={() => setActiveTab('Investments')} className={`px-8 py-3 font-bold rounded-lg transition-all ${activeTab === 'Investments' ? 'bg-white text-[#0B2D63] shadow-md' : 'text-slate-600'}`}>Investment Programs</button>
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

// Tech & Patents Section
const TechPatentsSection = ({ id }: SectionProps) => {
  const techData = [
    { id: 'P2025-001', type: 'Patent', title: 'Novel CRISPR-Cas12 Variant for Enhanced Gene Editing', authors: 'Kim, J. et al.', date: '2025-08-15', category: 'Gene Editing' },
    { id: 'R2025-003', type: 'Research', title: 'Biocompatible Hydrogels for 3D Organoid Culture', authors: 'Park, S. et al.', date: '2025-08-10', category: 'Biomaterials' },
    { id: 'P2025-002', type: 'Patent', title: 'AI-Driven Platform for Predicting Protein Folding', authors: 'Lee, H. et al.', date: '2025-07-28', category: 'AI in Bio' },
    { id: 'TT2025-001', type: 'Tech Transfer', title: 'License for Continuous Glucose Monitoring Sensor Tech', authors: 'MedTech Solutions', date: '2025-07-20', category: 'Medical Device' },
    { id: 'R2025-004', type: 'Research', title: 'Microbiome Modulation for Immune-Oncology Therapies', authors: 'Choi, Y. et al.', date: '2025-07-15', category: 'Immunology' },
  ];

  return (
    <section id={id} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#0B2D63] mb-6">RESEARCH & <span className="text-[#FFC940]">PATENTS</span></h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">Explore the cutting-edge intellectual property and research originating from JB SQUARE.</p>
        </motion.div>

        <div className="bg-slate-50 rounded-2xl p-8">
          <motion.div variants={staggerBold} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {techData.map(item => (
              <motion.div key={item.id} variants={boldFadeIn} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 p-4 hover:bg-white rounded-lg transition-all">
                <div className="md:col-span-2">
                  <span className={`inline-block px-3 py-1 text-sm font-bold rounded-full mb-2 ${
                    item.type === 'Patent' ? 'bg-blue-100 text-blue-800' :
                    item.type === 'Research' ? 'bg-emerald-100 text-emerald-800' : 'bg-purple-100 text-purple-800'
                  }`}>{item.type}</span>
                  <h3 className="text-lg font-bold text-[#0B2D63]">{item.title}</h3>
                </div>
                <p className="text-slate-600 font-medium">{item.authors}</p>
                <p className="text-slate-500">{item.date}</p>
                <div className="text-right">
                  <button className="px-6 py-2 border-2 border-slate-300 text-slate-700 font-bold rounded-lg hover:bg-[#0B2D63] hover:text-white hover:border-[#0B2D63] transition-all">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = ({ id }: SectionProps) => {
  const footerLinks = [
    { title: '소개', links: navItems.find(i => i.title === '소개')?.subItems },
    { title: '기회', links: navItems.find(i => i.title === '기회')?.subItems },
    { title: '정보', links: navItems.find(i => i.title === '정보')?.subItems },
    { title: '소식', links: navItems.find(i => i.title === '소식')?.subItems },
  ];

  return (
    <footer id={id} className="bg-[#0B2D63] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2D63] via-[#1a4480] to-purple-900 opacity-80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-black mb-8">
              JB <span className="text-[#FFC940]">SQUARE</span>
            </h3>
            <p className="text-white/90 mb-8 leading-relaxed text-lg font-medium">
              Asia's premier biotechnology ecosystem connecting global innovation with world-class research excellence.
            </p>
          </div>

          {footerLinks.map(section => (
            <div key={section.title}>
              <h4 className="font-black mb-6 text-xl uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-4 text-white/90">
                {section.links?.map(link => (
                  <li key={link.name}><a href={link.href} className="hover:text-[#FFC940] transition-colors font-semibold text-lg">{link.name}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 mt-16 pt-10 text-center">
          <p className="text-white/80 text-lg font-medium">
            &copy; 2025 JB SQUARE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};


// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection id="jbsquare" />
      <StatsSection />
      <AnnouncementsSection id="announcements" />
      <EventsSection id="news" />
      <CompaniesSection id="companies" />
      <SupportOrgsSection id="supportorgs" />
      <PolicyInvestmentSection id="investment" />
      <TechPatentsSection id="patents" />
      <Footer id="contact" />
    </div>
  );
};

export default App;
