import React from 'react'
import { PiRocketLaunchDuotone } from "react-icons/pi";
import { BiBrain, BiTimer } from 'react-icons/bi';

export default function RegisterDesign() {
  return (
        <div className="relative z-10 max-w-sm">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[#00ff84] text-[9px] font-black uppercase tracking-widest mb-6">
            <PiRocketLaunchDuotone /> Future of Learning
          </div>

          <h1 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
            Transform study habits with AI.
          </h1>

          <p className="text-emerald-100/60 text-sm font-medium mb-8">
            Turn PDFs into structured notes and quizzes in seconds.
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
              <BiBrain className="text-[#00ff84] text-xl shrink-0" />
              <div>
                <h3 className="text-white text-xs font-bold">Smart Analysis</h3>
                <p className="text-emerald-100/40 text-[10px]">Extract core concepts instantly.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
              <BiTimer className="text-[#00ff84] text-xl shrink-0" />
              <div>
                <h3 className="text-white text-xs font-bold">Save Hours</h3>
                <p className="text-emerald-100/40 text-[10px]">100 pages to 5-minute summaries.</p>
              </div>
            </div>
          </div>
        </div>
  )
}
