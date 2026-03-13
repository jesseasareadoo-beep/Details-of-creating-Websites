import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CalendarCheck, Clock, CheckCircle2, AlertCircle, 
  DollarSign, PieChart, Users, LayoutDashboard, 
  ListTodo, MessageSquare, LogOut, PartyPopper
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const planningStages = [
    { name: 'Initial Consultation', status: 'completed', date: 'Oct 12' },
    { name: 'Venue Secured', status: 'completed', date: 'Oct 25' },
    { name: 'Vendors Booked', status: 'in-progress', date: 'Nov 10' },
    { name: 'Marketing & Ticketing', status: 'pending', date: 'Nov 20' },
    { name: 'Event Day Execution', status: 'pending', date: 'Dec 05' },
  ];

  const vendors = [
    { service: 'DJ & Sound', name: 'DJ VibeZ', status: 'Confirmed', type: 'success', cost: 800 },
    { service: 'Photography', name: 'LensCrafters', status: 'Confirmed', type: 'success', cost: 600 },
    { service: 'Decoration', name: 'Neon Nights', status: 'Pending Contract', type: 'warning', cost: 1200 },
    { service: 'Catering', name: 'Campus Bites', status: 'Action Required', type: 'danger', cost: 1500 },
  ];

  const tasks = [
    { id: 1, text: 'Approve final poster design', completed: true },
    { id: 2, text: 'Sign catering contract', completed: false, urgent: true },
    { id: 3, text: 'Send out VIP invitations', completed: false },
    { id: 4, text: 'Confirm playlist with DJ', completed: false },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 flex flex-col sticky top-16 md:h-[calc(100vh-4rem)] z-10">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg">
              D
            </div>
            <div>
              <h2 className="font-bold text-gray-900">Demo User</h2>
              <p className="text-xs text-gray-500">Student Union</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {[
            { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
            { id: 'tasks', icon: ListTodo, label: 'Tasks & Timeline' },
            { id: 'vendors', icon: Users, label: 'Vendors' },
            { id: 'budget', icon: PieChart, label: 'Budget' },
            { id: 'messages', icon: MessageSquare, label: 'Messages' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                activeTab === item.id 
                  ? 'bg-pink-50 text-pink-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-pink-500' : 'text-gray-400'}`} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-rose-50 hover:text-rose-600 rounded-xl font-medium transition-all"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          
          {/* Dashboard Header */}
          <div className="bg-gray-900 rounded-3xl p-8 text-white shadow-xl mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 opacity-20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500 opacity-20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-pink-500/20 text-pink-300 border border-pink-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Active Event
                  </span>
                  <span className="text-gray-400 text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" /> 45 Days Left
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Winter Wonderland Ball 2026</h1>
                <p className="text-gray-300 flex items-center gap-2">
                  <PartyPopper className="w-5 h-5 text-pink-400" /> 
                  Grand Hotel Ballroom &bull; 500 Guests Expected
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-center min-w-[140px]">
                <p className="text-gray-300 text-sm font-medium mb-1">Overall Progress</p>
                <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">65%</p>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Quick Stats */}
                  <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Tasks Completed</p>
                        <p className="text-2xl font-bold text-gray-900">12 / 24</p>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                      <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center shrink-0">
                        <Users className="w-6 h-6 text-violet-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Vendors Secured</p>
                        <p className="text-2xl font-bold text-gray-900">2 / 4</p>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                      <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center shrink-0">
                        <DollarSign className="w-6 h-6 text-pink-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Budget Used</p>
                        <p className="text-2xl font-bold text-gray-900">$3,200 <span className="text-sm text-gray-400 font-normal">/ $5k</span></p>
                      </div>
                    </div>
                  </div>

                  {/* Planning Stages */}
                  <div className="col-span-1 lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="text-xl font-bold text-gray-900">Planning Timeline</h3>
                      <button onClick={() => setActiveTab('tasks')} className="text-sm font-medium text-pink-500 hover:text-pink-600">View all tasks &rarr;</button>
                    </div>
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-pink-500 before:via-gray-200 before:to-transparent">
                      {planningStages.map((stage, idx) => (
                        <div key={idx} className="relative flex items-start gap-6 group">
                          <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white shrink-0 shadow-sm relative z-10 ${
                            stage.status === 'completed' ? 'bg-pink-500 text-white' : 
                            stage.status === 'in-progress' ? 'bg-violet-500 text-white animate-pulse' : 
                            'bg-gray-200 text-gray-400'
                          }`}>
                            {stage.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> : 
                             stage.status === 'in-progress' ? <Clock className="w-5 h-5" /> : 
                             <span className="w-2 h-2 bg-gray-400 rounded-full"></span>}
                          </div>
                          <div className={`flex-1 p-5 rounded-xl border transition-all ${
                            stage.status === 'in-progress' ? 'border-violet-200 bg-violet-50 shadow-md' : 'border-gray-100 bg-gray-50'
                          }`}>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                              <h4 className={`font-bold ${stage.status === 'in-progress' ? 'text-violet-900' : 'text-gray-900'}`}>{stage.name}</h4>
                              <span className="text-xs font-bold px-2 py-1 rounded-md bg-white border border-gray-200 text-gray-500 w-fit">{stage.date}</span>
                            </div>
                            {stage.status === 'in-progress' && (
                              <p className="text-sm text-violet-700 mt-2">Currently working on securing contracts and finalizing details.</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Items */}
                  <div className="col-span-1 space-y-6">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-rose-500" /> Action Required
                      </h3>
                      <div className="space-y-3">
                        {tasks.filter(t => !t.completed).slice(0, 3).map(task => (
                          <div key={task.id} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                            <input type="checkbox" className="mt-1 w-4 h-4 text-pink-500 rounded border-gray-300 focus:ring-pink-500" />
                            <span className={`text-sm ${task.urgent ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
                              {task.text}
                              {task.urgent && <span className="ml-2 inline-block w-2 h-2 bg-rose-500 rounded-full"></span>}
                            </span>
                          </div>
                        ))}
                      </div>
                      <button onClick={() => setActiveTab('tasks')} className="w-full mt-4 py-2 text-sm font-medium text-center text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                        View all tasks
                      </button>
                    </div>

                    <div className="bg-gradient-to-br from-pink-500 to-violet-600 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                      <h3 className="text-lg font-bold mb-2 relative z-10">Need Help?</h3>
                      <p className="text-pink-100 text-sm mb-4 relative z-10">Your dedicated event manager is Sarah. Reach out anytime.</p>
                      <button className="w-full bg-white text-violet-600 font-bold py-2 px-4 rounded-xl hover:shadow-md transition-all relative z-10">
                        Message Sarah
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'vendors' && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Vendor Management</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {vendors.map((vendor, idx) => (
                      <div key={idx} className="p-5 rounded-xl border border-gray-100 hover:border-pink-200 hover:shadow-md transition-all group">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="text-sm text-pink-500 font-bold uppercase tracking-wider mb-1">{vendor.service}</p>
                            <h4 className="text-xl font-bold text-gray-900">{vendor.name}</h4>
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
                        <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                          <p className="text-gray-500 font-medium flex items-center gap-1">
                            <DollarSign className="w-4 h-4" /> {vendor.cost}
                          </p>
                          <button className="text-sm font-medium text-violet-600 hover:text-violet-700 opacity-0 group-hover:opacity-100 transition-opacity">
                            View Details &rarr;
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'budget' && (
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                      <h3 className="text-2xl font-bold text-gray-900">Budget Overview</h3>
                      <div className="bg-gray-100 px-4 py-2 rounded-xl font-bold text-gray-700">
                        Total Budget: $5,000
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                        <p className="text-emerald-600 font-medium mb-2 flex items-center gap-2">
                          <DollarSign className="w-5 h-5" /> Total Spent
                        </p>
                        <p className="text-4xl font-extrabold text-emerald-700">$3,200</p>
                        <p className="text-sm text-emerald-600/80 mt-2">64% of total budget</p>
                      </div>
                      <div className="bg-pink-50 p-6 rounded-2xl border border-pink-100">
                        <p className="text-pink-600 font-medium mb-2 flex items-center gap-2">
                          <PieChart className="w-5 h-5" /> Remaining
                        </p>
                        <p className="text-4xl font-extrabold text-pink-700">$1,800</p>
                        <p className="text-sm text-pink-600/80 mt-2">36% of total budget</p>
                      </div>
                    </div>

                    {/* Overall Budget Progress Bar */}
                    <div className="mb-10">
                      <div className="w-full h-6 bg-gray-100 rounded-full flex overflow-visible">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: '64%' }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="bg-emerald-500 h-full rounded-l-full relative group cursor-pointer"
                        >
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg whitespace-nowrap z-20 shadow-lg">
                            Spent: $3,200
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                          </div>
                        </motion.div>
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: '36%' }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="bg-pink-500 h-full rounded-r-full relative group cursor-pointer"
                        >
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg whitespace-nowrap z-20 shadow-lg">
                            Remaining: $1,800
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                          </div>
                        </motion.div>
                      </div>
                      <div className="flex justify-between text-sm font-bold text-gray-500 mt-3 px-2">
                        <span>64% Utilized</span>
                        <span>36% Available</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-4">Expense Breakdown</h4>
                      <div className="space-y-4">
                        {vendors.map((v, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className="w-32 text-sm font-medium text-gray-600">{v.service}</div>
                            <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-visible relative">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${(v.cost / 5000) * 100}%` }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                                className={`h-full rounded-full relative group cursor-pointer ${i % 2 === 0 ? 'bg-violet-500' : 'bg-pink-500'}`}
                              >
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-900 text-white text-xs font-bold py-1 px-2 rounded whitespace-nowrap z-20 shadow-lg">
                                  Spent: ${v.cost}
                                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                                </div>
                              </motion.div>
                            </div>
                            <div className="w-16 text-right text-sm font-bold text-gray-900">${v.cost}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tasks' && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">To-Do List</h3>
                    <button className="bg-pink-50 text-pink-600 px-4 py-2 rounded-lg font-medium hover:bg-pink-100 transition-colors">
                      + Add Task
                    </button>
                  </div>
                  <div className="space-y-3">
                    {tasks.map(task => (
                      <div key={task.id} className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                        task.completed ? 'bg-gray-50 border-gray-100 opacity-60' : 
                        task.urgent ? 'bg-rose-50 border-rose-100' : 'bg-white border-gray-200 hover:border-pink-300'
                      }`}>
                        <input 
                          type="checkbox" 
                          defaultChecked={task.completed}
                          className="w-5 h-5 text-pink-500 rounded border-gray-300 focus:ring-pink-500 cursor-pointer" 
                        />
                        <span className={`flex-1 text-lg ${
                          task.completed ? 'line-through text-gray-500' : 
                          task.urgent ? 'font-bold text-rose-900' : 'text-gray-800 font-medium'
                        }`}>
                          {task.text}
                        </span>
                        {task.urgent && !task.completed && (
                          <span className="bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Urgent</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'messages' && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
                  <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mb-6">
                    <MessageSquare className="w-10 h-10 text-pink-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Messages</h3>
                  <p className="text-gray-500 max-w-md">Communicate directly with your event manager and vendors here. You have no new messages.</p>
                  <button className="mt-6 bg-gradient-to-r from-pink-500 to-violet-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                    Start a Conversation
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
