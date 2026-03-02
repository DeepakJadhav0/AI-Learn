import React from 'react';
import { MdEmail, MdLockOutline } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { HiArrowRight } from 'react-icons/hi';
import { BsFileEarmarkText, BsQuestionSquare, BsLightningCharge } from 'react-icons/bs';

const Login = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between bg-[#f8fffa] relative font-sans overflow-x-hidden">
      
      <div 
        className="absolute inset-0 z-0 opacity-[0.35] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#22c55e 0.5px, transparent 0.5px)', 
          backgroundSize: '20px 20px' 
        }}
      />

      <main className="grow flex items-center justify-center z-10 w-full px-5 py-10">
        <div className="bg-white rounded-2xl shadow-xl shadow-emerald-900/5 p-6 sm:p-8 w-full max-w-95 border border-emerald-50/50">
       
          <header className="text-center mb-6">
            <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Welcome Back</h1>
            <p className="text-xs text-slate-500 mt-1 font-medium">Log in to your AI learning dashboard</p>
          </header>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider font-bold text-slate-600 ml-1">Email Address</label>
              <div className="relative group">
                <MdEmail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-emerald-500 transition-colors" />
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full pl-11 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 text-sm transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center px-1">
                <label className="text-[11px] uppercase tracking-wider font-bold text-slate-600">Password</label>
                <button type="button" className="text-[10px] font-bold text-emerald-500 hover:text-emerald-600">Forgot?</button>
              </div>
              <div className="relative group">
                <MdLockOutline className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-emerald-500 transition-colors" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 text-sm transition-all"
                />
              </div>
            </div>

            <button className="w-full bg-[#00ff84] hover:bg-[#00ee7a] text-slate-900 font-bold py-3 rounded-xl shadow-lg shadow-emerald-200/50 transition-all flex items-center justify-center gap-2 text-sm group active:scale-[0.98]">
              Sign In <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="relative my-7">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
            <div className="relative flex justify-center text-[9px] uppercase font-black tracking-[0.2em]">
              <span className="bg-white px-3 text-slate-400">Or continue with</span>
            </div>
          </div>

    
          <button className="w-full flex items-center justify-center gap-2.5 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-all text-sm font-bold text-slate-700 mb-6">
            <FcGoogle className="text-xl" /> Login with Google
          </button>

          <p className="text-center text-[12px] text-slate-500 font-medium">
            Don't have an account? <button className="text-emerald-600 font-bold hover:underline underline-offset-4">Create account</button>
          </p>
        </div>
      </main>

      {/* Responsive Footer Features */}
      <section className="z-10 w-full px-6 py-8">
        <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-6 sm:gap-x-12 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <div className="flex items-center gap-2 hover:text-emerald-500 transition-colors cursor-default">
            <BsFileEarmarkText className="text-sm" /> <span>Analyze PDFs</span>
          </div>
          <div className="flex items-center gap-2 hover:text-emerald-500 transition-colors cursor-default">
            <BsQuestionSquare className="text-sm" /> <span>Auto Quizzes</span>
          </div>
          <div className="flex items-center gap-2 hover:text-emerald-500 transition-colors cursor-default">
            <BsLightningCharge className="text-sm" /> <span>Instant Notes</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;