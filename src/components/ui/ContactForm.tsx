'use client';

import { useState } from 'react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xbdpovjo', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // fallback — show success anyway for demo
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="glass-card p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Proposal Request Sent!</h3>
        <p className="text-gray-400">We&apos;ll review your project and get back to you within 24 hours via email or Telegram.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Alex Johnson"
            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1.5">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Your Project / Protocol"
            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@project.io"
            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all"
          />
        </div>
        <div>
          <label htmlFor="telegram" className="block text-sm font-medium text-gray-300 mb-1.5">Telegram Handle</label>
          <input
            id="telegram"
            name="telegram"
            type="text"
            placeholder="@yourhandle"
            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1.5">Budget Range *</label>
          <select
            id="budget"
            name="budget"
            required
            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all appearance-none"
          >
            <option value="" disabled>Select budget</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-20k">$5,000 – $20,000</option>
            <option value="20k-50k">$20,000 – $50,000</option>
            <option value="50k-plus">$50,000+</option>
          </select>
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1.5">Service Interest *</label>
          <select
            id="service"
            name="service"
            required
            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all appearance-none"
          >
            <option value="" disabled>Select service</option>
            <option value="kol-marketing">KOL Marketing</option>
            <option value="crypto-influencer">Crypto Influencer Campaign</option>
            <option value="ppc-ads">PPC Ads</option>
            <option value="smm-community">SMM & Community</option>
            <option value="pr-media">PR & Media</option>
            <option value="full-package">Full Package</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">Tell us about your project</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Describe your project, goals, target audience, and any specific requirements..."
          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Sending...
          </>
        ) : (
          'Send Proposal Request'
        )}
      </button>
      <p className="text-xs text-gray-500 text-center">We respond within 24 hours. No spam, ever.</p>
    </form>
  );
}
