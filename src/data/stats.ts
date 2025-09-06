import { Building2, Users, TrendingUp, Award, FileText, Globe } from 'lucide-react';

export const stats = [
  { key: "companies", numberKey: "data.stats.companies.number", icon: Building2, color: "from-blue-500 to-cyan-500", bg: "bg-blue-50" },
  { key: "institutes", numberKey: "data.stats.institutes.number", icon: Users, color: "from-emerald-500 to-green-500", bg: "bg-emerald-50" },
  { key: "investment", numberKey: "data.stats.investment.number", icon: TrendingUp, color: "from-purple-500 to-violet-500", bg: "bg-purple-50" },
  { key: "researchers", numberKey: "data.stats.researchers.number", icon: Award, color: "from-orange-500 to-red-500", bg: "bg-orange-50" },
  { key: "patents", numberKey: "data.stats.patents.number", icon: FileText, color: "from-pink-500 to-rose-500", bg: "bg-pink-50" },
  { key: "partners", numberKey: "data.stats.partners.number", icon: Globe, color: "from-teal-500 to-cyan-500", bg: "bg-teal-50" }
];
