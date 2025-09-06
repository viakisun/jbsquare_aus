import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

// Bold Animation Settings
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

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.6 }
};

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-2xl backdrop-blur-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Bold Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-black text-[#0B2D63] tracking-tight">
              JEONBUK BIO
              <span className="text-[#FFC940]">TECH</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              <a href="#" className="text-slate-700 hover:text-[#0B2D63] px-4 py-3 text-sm font-bold transition-all hover:bg-[#FFC940]/10 rounded-lg">
                ECOSYSTEM
              </a>
              <a href="#" className="text-slate-700 hover:text-[#0B2D63] px-4 py-3 text-sm font-bold transition-all hover:bg-[#FFC940]/10 rounded-lg">
                INNOVATION
              </a>
              <a href="#" className="text-slate-700 hover:text-[#0B2D63] px-4 py-3 text-sm font-bold transition-all hover:bg-[#FFC940]/10 rounded-lg">
                COMPANIES
              </a>
              <a href="#" className="text-slate-700 hover:text-[#0B2D63] px-4 py-3 text-sm font-bold transition-all hover:bg-[#FFC940]/10 rounded-lg">
                INVESTMENT
              </a>
              <a href="#" className="text-slate-700 hover:text-[#0B2D63] px-4 py-3 text-sm font-bold transition-all hover:bg-[#FFC940]/10 rounded-lg">
                NEWS
              </a>
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-700 hover:text-[#0B2D63] transition-colors p-3 hover:bg-slate-100 rounded-lg">
              <Search className="w-5 h-5" />
            </button>
            <button className="px-4 py-2 text-sm border-2 border-slate-300 rounded-lg hover:border-[#0B2D63] transition-all font-semibold">
              한국어
            </button>
            <button className="px-8 py-3 bg-[#FFC940] text-[#0B2D63] font-black rounded-lg hover:bg-[#FFB800] transition-all transform hover:scale-105 shadow-lg">
              GET STARTED
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-[#0B2D63] transition-colors p-2"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <a href="#" className="block px-4 py-3 text-base font-bold text-slate-700 hover:text-[#0B2D63] hover:bg-[#FFC940]/10 rounded-lg">ECOSYSTEM</a>
              <a href="#" className="block px-4 py-3 text-base font-bold text-slate-700 hover:text-[#0B2D63] hover:bg-[#FFC940]/10 rounded-lg">INNOVATION</a>
              <a href="#" className="block px-4 py-3 text-base font-bold text-slate-700 hover:text-[#0B2D63] hover:bg-[#FFC940]/10 rounded-lg">COMPANIES</a>
              <a href="#" className="block px-4 py-3 text-base font-bold text-slate-700 hover:text-[#0B2D63] hover:bg-[#FFC940]/10 rounded-lg">INVESTMENT</a>
              <a href="#" className="block px-4 py-3 text-base font-bold text-slate-700 hover:text-[#0B2D63] hover:bg-[#FFC940]/10 rounded-lg">NEWS</a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

// Bold Hero Section
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Advanced Biotechnology Laboratory"
          className="w-full h-full object-cover transform scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2D63]/90 via-[#1a4480]/70 to-purple-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-3 bg-[#FFC940] text-[#0B2D63] font-black text-sm uppercase tracking-wider rounded-full shadow-lg">
              🚀 KOREA'S BIOTECH POWERHOUSE
            </span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
            REVOLUTIONIZING
            <br />
            <span className="text-[#FFC940] drop-shadow-lg">BIOTECHNOLOGY</span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Jeonbuk leads Asia's biotech revolution with cutting-edge research, 
            world-class facilities, and <span className="text-[#FFC940] font-bold">$2.1B+ investment ecosystem</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-5 bg-[#FFC940] text-[#0B2D63] font-black text-lg rounded-xl hover:bg-[#FFB800] transition-all shadow-2xl flex items-center justify-center space-x-3"
            >
              <Rocket className="w-6 h-6" />
              <span>EXPLORE OPPORTUNITIES</span>
              <ChevronRight className="w-6 h-6" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-5 border-3 border-white text-white font-black text-lg rounded-xl hover:bg-white hover:text-[#0B2D63] transition-all shadow-2xl"
            >
              COMPANY DIRECTORY
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/80"
        >
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
    { number: "5,000+", label: "Researchers", icon: Award, color: "from-orange-500 to-red-500", bg: "bg-orange-50" }
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
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
const AnnouncementsSection = () => {
  const announcements = [
    {
      id: 1,
      title: "2025 Biotech Innovation Fund Now Open",
      date: "September 1, 2025",
      status: "ACTIVE",
      priority: true,
      description: "Revolutionary government funding program for next-gen biotech startups",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "FUNDING"
    },
    {
      id: 2,
      title: "New Research Facility Permits Available",
      date: "August 28, 2025", 
      status: "OPEN",
      priority: false,
      description: "Streamlined permitting process for Bio Valley research facilities",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "PERMITS"
    },
    {
      id: 3,
      title: "Foreign Investment Tax Incentives Extended",
      date: "August 25, 2025",
      status: "CLOSING SOON",
      priority: true,
      description: "Extended deadline for international investment tax benefits",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "INVESTMENT"
    }
  ];

  return (
    <section className="py-24 bg-white">
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
const EventsSection = () => {
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
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
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
const CompaniesSection = () => {
  const companies = [
    {
      id: 1,
      name: "BioGenix Korea",
      industry: "Pharmaceuticals",
      stage: "Growth Stage",
      employees: "150+",
      location: "JBFEZ",
      description: "Next-generation cancer therapeutics development",
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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
      description: "AI-powered diagnostic medical device manufacturing",
      logo: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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
      description: "Personalized genomic analysis and therapeutics",
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      image: "https://images.unsplash.com/photo-1559033237-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      valuation: "$45M",
      founded: "2021"
    }
  ];

  return (
    <section className="py-24 bg-white">
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

// Bold Footer
const Footer = () => {
  return (
    <footer className="bg-[#0B2D63] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2D63] via-[#1a4480] to-purple-900"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-3xl font-black mb-8">
              JEONBUK <span className="text-[#FFC940]">BIOTECH</span>
            </h3>
            <p className="text-white/90 mb-8 leading-relaxed text-lg font-medium">
              Korea's premier biotechnology ecosystem connecting global innovation with world-class research excellence.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-[#FFC940] text-[#0B2D63] font-black rounded-lg hover:bg-[#FFB800] transition-all shadow-lg">
                KOREAN
              </button>
              <button className="px-6 py-3 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                ENGLISH
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-black mb-6 text-xl uppercase tracking-wider">ECOSYSTEM</h4>
            <ul className="space-y-4 text-white/90">
              <li><a href="#" className="hover:text-[#FFC940] transition-colors font-semibold text-lg">JB Square</a></li>
              <li><a href="#" className="hover:text-[#FFC940] transition-colors font-semibold text-lg">Bio Valley</a></li>
              <li><a href="#" className="hover:text-[#FFC940] transition-colors font-semibold text-lg">Company Directory</a></li>
              <li><a href="#" className="hover:text-[#FFC940] transition-colors font-semibold text-lg">Investment Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-6 text-xl uppercase tracking-wider">RESOURCES</h4>
            <ul className="space-y-4 text-white/90">
              <li><a href="#" className="hover:text-[#FFC940] transition-colors font-semibold text-lg">News & Events</a></li>
              <li><a href="#" className="hover:text-[#FFC940] transition-colors font-semibold text-lg">Opportunities</a></li>
              <li><a href="#" className="hover:text-[#FFC940] transition-colors font-semibold text-lg">Research Data</a></li>
              <li><a href="#" className="hover:text-[#FFC940] transition-colors font-semibold text-lg">Patent Database</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-6 text-xl uppercase tracking-wider">CONNECT</h4>
            <div className="space-y-4 text-white/90">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#FFC940]" />
                <span className="font-semibold text-lg">+82-63-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#FFC940]" />
                <span className="font-semibold text-lg">info@jeonbukbio.kr</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 text-[#FFC940]" />
                <span className="font-semibold text-lg">Jeonju, South Korea</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 flex-shrink-0 text-[#FFC940]" />
                <span className="font-semibold text-lg">Brisbane Office</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-16 pt-10 text-center">
          <p className="text-white/80 text-lg font-medium">
            &copy; 2025 Jeonbuk Biotechnology Portal. Revolutionizing Life Sciences.
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
      <HeroSection />
      <StatsSection />
      <AnnouncementsSection />
      <EventsSection />
      <CompaniesSection />
      <Footer />
    </div>
  );
};

export default App;
