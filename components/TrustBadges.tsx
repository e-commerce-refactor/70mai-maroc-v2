'use client';

import React from 'react';
import { ShieldCheck, Cpu, Truck, Headphones } from 'lucide-react';

export default function TrustBadges() {
  return (
    <section className="py-6 bg-brand-surface border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-brand-bg border border-brand-border">
          <Cpu className="w-5 h-5 text-brand-accent shrink-0" />
          <div>
            <p className="font-bold text-brand-text">Capteur Sony 4K</p>
            <p className="text-[10px] text-brand-muted">Qualité Optique Starvis 2</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg bg-brand-bg border border-brand-border">
          <ShieldCheck className="w-5 h-5 text-brand-accent shrink-0" />
          <div>
            <p className="font-bold text-brand-text">Garantie 2 Ans</p>
            <p className="text-[10px] text-brand-muted">Remplacement Neuf</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg bg-brand-bg border border-brand-border">
          <Truck className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <p className="font-bold text-brand-text">Livraison 24H</p>
            <p className="text-[10px] text-brand-muted">Paiement à Réception (0 DH)</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg bg-brand-bg border border-brand-border">
          <Headphones className="w-5 h-5 text-brand-accent2 shrink-0" />
          <div>
            <p className="font-bold text-brand-text">Support Maroc</p>
            <p className="text-[10px] text-brand-muted">Assistance WhatsApp 7j/7</p>
          </div>
        </div>
      </div>
    </section>
  );
}
