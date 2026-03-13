import { motion } from 'motion/react';
import { CalendarCheck, Music, Sparkles, Camera, Ticket, MapPin, CheckCircle2, Clock, AlertCircle, DollarSign, PieChart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: CalendarCheck,
      title: 'Event Planning & Coordination',
      desc: 'Full-scale event management. We handle budgeting, timelines, vendor coordination, and on-the-day execution.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Music,
      title: 'DJ & Music Services',
      desc: 'Access to top campus DJs, live bands, and premium sound equipment to keep the dance floor packed all night.',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: Sparkles,
      title: 'Decoration & Lighting',
      desc: 'Transform any boring hall into a nightclub or an elegant gala with our custom lighting and thematic decor.',
      color: 'from-violet-400 to-violet-600'
    },
    {
      icon: Camera,
      title: 'Photography & Videography',
      desc: 'Professional media teams to capture the highlights, complete with photobooths and instant social sharing.',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: Ticket,
      title: 'Ticketing & Promotion',
      desc: 'Custom digital ticketing platforms and social media marketing campaigns to ensure your event sells out.',
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      icon: MapPin,
      title: 'Venue Booking',
      desc: 'Exclusive partnerships with local clubs, halls, and unique spaces that offer student-friendly rates.',
      color: 'from-rose-400 to-rose-600'
    }
  ];

  const planningStages = [
    { name: 'Initial Consultation', status: 'completed', date: 'Oct 12' },
    { name: 'Venue Secured', status: 'completed', date: 'Oct 25' },
    { name: 'Vendors Booked', status: 'in-progress', date: 'Nov 10' },
    { name: 'Marketing & Ticketing', status: 'pending', date: 'Nov 20' },
    { name: 'Event Day Execution', status: 'pending', date: 'Dec 05' },
  ];

  const vendors = [
    { service: 'DJ & Sound', name: 'DJ VibeZ', status: 'Confirmed', type: 'success' },
    { service: 'Photography', name: 'LensCrafters', status: 'Confirmed', type: 'success' },
    { service: 'Decoration', name: 'Neon Nights', status: 'Pending Contract', type: 'warning' },
    { service: 'Catering', name: 'Campus Bites', status: 'Action Required', type: 'danger' },
  ];

  return (
    <div className="w-full bg-gray-50">
      {/* Header */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Our <span className="text-pink-500">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Everything you need to throw an epic campus event, all in one place. Mix and match our services to fit your budget.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 text-white shadow-lg transform group-hover:-translate-y-2 transition-transform`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                <Link to="/contact" className="text-pink-500 font-semibold flex items-center gap-2 hover:text-pink-600 transition-colors">
                  Inquire Now <span className="text-xl">&rarr;</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Client Portal Preview */}
      <section className="py-20 bg-white border-y border-gray-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Track Your Event Progress</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              When you book with CampusVibe, you get access to our exclusive client portal. Monitor your budget, track vendor confirmations, and see exactly where your event stands.
            </p>
          </div>

          {/* Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Dashboard Header */}
            <div className="bg-gray-900 px-8 py-6 text-white flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold">Winter Wonderland Ball 2026</h3>
                <p className="text-gray-400 text-sm">Organized by Student Union</p>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                <CalendarCheck className="w-5 h-5 text-pink-400" />
                <span className="font-medium">Dec 05, 2026</span>
              </div>
            </div>

            <div className="p-8">
              {/* Overall Progress */}
              <div className="mb-12">
                <div className="flex justify-between items-end mb-2">
                  <h4 className="text-lg font-bold text-gray-900">Overall Planning Progress</h4>
                  <span className="text-2xl font-extrabold text-pink-500">65%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '65%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="bg-gradient-to-r from-pink-500 to-violet-600 h-full rounded-full"
                  ></motion.div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Planning Stages */}
                <div className="col-span-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-500" /> Planning Stages
                  </h4>
                  <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                    {planningStages.map((stage, idx) => (
                      <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm ${
                          stage.status === 'completed' ? 'bg-pink-500 text-white' : 
                          stage.status === 'in-progress' ? 'bg-violet-500 text-white animate-pulse' : 
                          'bg-gray-200 text-gray-400'
                        }`}>
                          {stage.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> : 
                           stage.status === 'in-progress' ? <Clock className="w-5 h-5" /> : 
                           <span className="w-2 h-2 bg-gray-400 rounded-full"></span>}
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                          <div className="flex items-center justify-between mb-1">
                            <h5 className="font-bold text-gray-900 text-sm">{stage.name}</h5>
                          </div>
                          <p className="text-xs text-gray-500 font-medium">{stage.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vendors & Budget */}
                <div className="col-span-1 lg:col-span-2 space-y-8">
                  {/* Vendor Confirmations */}
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <Users className="w-5 h-5 text-violet-500" /> Vendor Confirmations
                    </h4>
                    <div className="space-y-4">
                      {vendors.map((vendor, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white rounded-xl shadow-sm border border-gray-50 gap-4">
                          <div>
                            <p className="text-sm text-gray-500 font-medium mb-1">{vendor.service}</p>
                            <p className="font-bold text-gray-900">{vendor.name}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shrink-0 ${
                            vendor.type === 'success' ? 'bg-emerald-100 text-emerald-700' :
                            vendor.type === 'warning' ? 'bg-amber-100 text-amber-700' :
                            'bg-rose-100 text-rose-700'
                          }`}>
                            {vendor.type === 'success' && <CheckCircle2 className="w-3 h-3" />}
                            {vendor.type === 'warning' && <Clock className="w-3 h-3" />}
                            {vendor.type === 'danger' && <AlertCircle className="w-3 h-3" />}
                            {vendor.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Budget Tracking */}
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        <PieChart className="w-5 h-5 text-violet-500" /> Budget Tracking
                      </h4>
                      <span className="text-sm font-bold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                        Total: $5,000
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                        <p className="text-sm text-gray-500 font-medium mb-1 flex items-center gap-1">
                          <DollarSign className="w-4 h-4 text-emerald-500" /> Spent
                        </p>
                        <p className="text-2xl font-extrabold text-gray-900">$3,200</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                        <p className="text-sm text-gray-500 font-medium mb-1 flex items-center gap-1">
                          <DollarSign className="w-4 h-4 text-pink-500" /> Remaining
                        </p>
                        <p className="text-2xl font-extrabold text-gray-900">$1,800</p>
                      </div>
                    </div>

                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden flex">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '64%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-emerald-500 h-full"
                        title="Spent: 64%"
                      ></motion.div>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '36%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-pink-500 h-full"
                        title="Remaining: 36%"
                      ></motion.div>
                    </div>
                    <div className="flex justify-between text-xs font-medium text-gray-500 mt-2">
                      <span>64% Utilized</span>
                      <span>36% Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a Custom Package?</h2>
          <p className="text-gray-400 mb-10 text-lg">We can tailor our services to match your specific society budget and requirements.</p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-pink-500 to-violet-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-pink-500/40 transition-all transform hover:-translate-y-1"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
