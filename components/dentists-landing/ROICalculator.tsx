'use client';

import { useState } from 'react';

export function ROICalculator() {
  const [missedCalls, setMissedCalls] = useState(30);
  const [convertRate, setConvertRate] = useState(35);
  const [avgValue, setAvgValue] = useState(250);

  const lostPatients = Math.round((missedCalls * convertRate) / 100);
  const lostRevenue = lostPatients * avgValue;
  const monthlyLost = lostRevenue;
  const yearlyLost = monthlyLost * 12;

  return (
    <section
      id="roi-calculator"
      className="bg-[#fbfbfd] px-5 py-section dark:bg-slate-900/50"
      aria-labelledby="roi-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 id="roi-heading" className="apple-title text-apple-section font-semibold tracking-tight text-slate-900 dark:text-white">
            Estimate your lost revenue.
          </h2>
          <p className="apple-body mt-4 text-lg text-slate-600 dark:text-slate-400">
            See how much missed calls could be costing your practice.
          </p>
        </div>

        <div className="mt-14 rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-800/50 sm:p-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Missed calls per month
              </label>
              <input
                type="range"
                min="5"
                max="80"
                value={missedCalls}
                onChange={(e) => setMissedCalls(Number(e.target.value))}
                className="mt-2 h-2 w-full accent-slate-900 dark:accent-slate-100"
              />
              <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">{missedCalls}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                % that become patients elsewhere
              </label>
              <input
                type="range"
                min="20"
                max="60"
                value={convertRate}
                onChange={(e) => setConvertRate(Number(e.target.value))}
                className="mt-2 h-2 w-full accent-slate-900 dark:accent-slate-100"
              />
              <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">{convertRate}%</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Avg. patient value ($)
              </label>
              <input
                type="range"
                min="100"
                max="500"
                step="25"
                value={avgValue}
                onChange={(e) => setAvgValue(Number(e.target.value))}
                className="mt-2 h-2 w-full accent-slate-900 dark:accent-slate-100"
              />
              <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">${avgValue}</p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-slate-900 p-6 text-white dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-300 dark:text-slate-400">Estimated lost revenue</p>
            <p className="mt-1 text-3xl font-bold sm:text-4xl">
              ${monthlyLost.toLocaleString()}
              <span className="text-lg font-normal text-slate-400">/month</span>
            </p>
            <p className="mt-2 text-xl font-semibold text-slate-300 dark:text-slate-400">
              ${yearlyLost.toLocaleString()} per year
            </p>
            <p className="mt-4 text-sm text-slate-400">
              ~{lostPatients} potential patients lost per month from missed calls.
            </p>
          </div>

          <p className="mt-6 text-center">
            <a
              href="#demo-form"
              className="inline-flex items-center gap-2 font-semibold text-slate-900 underline decoration-2 underline-offset-2 hover:no-underline dark:text-white"
            >
              Request a demo to see your ROI with AI
              <span aria-hidden>→</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
