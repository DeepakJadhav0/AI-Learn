import React from 'react'
import { MdEmail, MdLockOutline, MdPerson } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { HiArrowRight } from 'react-icons/hi';

export default function RegisterFrom() {
  return (
 <div className="w-full md:w-[50%] bg-[#f8fffa] relative flex flex-col items-center justify-center p-4 lg:p-8">
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#22c55e 0.5px, transparent 0.5px)', backgroundSize: '18px 18px' }}>
        </div>

        <div className="relative z-10 w-full max-w-95 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-emerald-50/50">
          <header className="mb-6">
            <h2 className="text-2xl font-black text-slate-800">Create Account</h2>
            <p className="text-[11px] text-slate-500 font-medium">Start your smarter learning journey today.</p>
          </header>

          <form className="space-y-3.5">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-slate-600 ml-1">Full Name</label>
              <div className="relative group">
                <MdPerson className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                <input type="text" placeholder="John Doe" className="w-full pl-10 pr-4 py-2 bg-slate-50/50 border outline-none border-slate-100 rounded-lg focus:border-emerald-500 text-xs transition-all" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-slate-600 ml-1">Email Address</label>
              <div className="relative group">
                <MdEmail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                <input type="email" placeholder="name@company.com" className="w-full pl-10 pr-4 py-2 bg-slate-50/50 outline-none border border-slate-100 rounded-lg focus:border-emerald-500 text-xs transition-all" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-slate-600 ml-1">Password</label>
              <div className="relative group">
                <MdLockOutline className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                <input type="password" placeholder="••••••••" className="w-full pl-10 pr-4 py-2 bg-slate-50/50 border outline-none border-slate-100 rounded-lg focus:border-emerald-500 text-xs transition-all" />
              </div>
            </div>

            <button className="w-full bg-[#00ff84] hover:bg-[#00ee7a] text-slate-900 font-bold py-2.5 rounded-lg shadow-md flex items-center justify-center gap-2 text-xs group transition-all">
              Create Account <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
            <div className="relative flex justify-center text-[8px] uppercase font-black tracking-widest text-slate-400">
              <span className="bg-white px-2">Or sign up with</span>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-xs font-bold text-slate-700 mb-4">
            <FcGoogle className="text-lg" /> Sign up with Google
          </button>

          <p className="text-center text-[11px] text-slate-500">
            Already have an account? <button className="text-emerald-500 font-bold hover:underline">Login here</button>
          </p>
        </div>

        <div className="mt-8 flex gap-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
          <button className="hover:text-emerald-500">Privacy Policy</button>
          <button className="hover:text-emerald-500">Terms</button>
        </div>
      </div>
  )
}
