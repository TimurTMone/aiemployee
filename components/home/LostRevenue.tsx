export function LostRevenue() {
  return (
    <section
      id="lost-revenue"
      className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="lost-revenue-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2 id="lost-revenue-heading" className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Missed calls are costing your clinic real money.
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          When a patient cannot reach you, they usually call the next clinic.
        </p>
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm sm:p-8" role="img" aria-label="Revenue impact example: 120 inquiries, 35 missed calls, 20 lost patients, 250 dollar average visit, over 5000 dollars monthly lost">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 sm:gap-y-6">
            <div>
              <p className="text-2xl font-semibold text-slate-900 sm:text-3xl">120</p>
              <p className="mt-0.5 text-sm text-slate-600">inquiries/month</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-slate-900 sm:text-3xl">35</p>
              <p className="mt-0.5 text-sm text-slate-600">missed calls</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-slate-900 sm:text-3xl">20</p>
              <p className="mt-0.5 text-sm text-slate-600">lost patients</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-slate-900 sm:text-3xl">$250</p>
              <p className="mt-0.5 text-sm text-slate-600">avg. visit value</p>
            </div>
          </div>
          <p className="mt-6 border-t border-slate-200 pt-6 text-xl font-semibold text-red-600">
            $5,000+ monthly revenue lost.
          </p>
        </div>
      </div>
    </section>
  );
}
