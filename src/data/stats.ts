import { Rocket, Users, Globe, Award, Calendar, DollarSign } from 'lucide-react';

export const stats = [
  {
    key: "incubated",
    numberKey: "data.stats.incubated.number",
    descKey: "data.stats.incubated.desc",
    icon: Rocket,
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50"
  },
  {
    key: "funding",
    numberKey: "data.stats.funding.number",
    descKey: "data.stats.funding.desc",
    icon: DollarSign,
    color: "from-emerald-500 to-green-500",
    bg: "bg-emerald-50"
  },
  {
    key: "patents",
    numberKey: "data.stats.patents.number",
    descKey: "data.stats.patents.desc",
    icon: Award,
    color: "from-purple-500 to-violet-500",
    bg: "bg-purple-50"
  },
  {
    key: "jobs",
    numberKey: "data.stats.jobs.number",
    descKey: "data.stats.jobs.desc",
    icon: Users,
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-50"
  },
  {
    key: "partnerships",
    numberKey: "data.stats.partnerships.number",
    descKey: "data.stats.partnerships.desc",
    icon: Globe,
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50"
  },
  {
    key: "events",
    numberKey: "data.stats.events.number",
    descKey: "data.stats.events.desc",
    icon: Calendar,
    color: "from-teal-500 to-cyan-500",
    bg: "bg-teal-50"
  }
];
