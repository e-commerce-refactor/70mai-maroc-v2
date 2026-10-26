'use client';

import React from 'react';
import { ChevronRight, Cpu, ShieldCheck, Zap, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-bg py-12 md:py-20 border-b border-brand-border">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-accent/15 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-surface border border-brand-border text-brand-accent text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>4K SONY STARVIS 2 • TÉLÉMÉTRIE AUTOMOBILE AVANCÉE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-text leading-tight font-mono">
              La Haute Définition. La Sécurité Absolue sur la Route.
            </h1>

            <p className="text-base text-brand-muted leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Systèmes embarqués certifiés au Maroc par <strong>70mai Maroc</strong>. Vision nocturne assistée, détection de choc 24/7 et installation rapide à Casablanca & Rabat.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#catalogue"
                className="w-full sm:w-auto text-center px-8 py-4 bg-brand-accent hover:brightness-110 text-brand-bg text-xs font-black uppercase tracking-wider rounded-lg shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Commander en Express (Paiement COD)</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#comparison"
                className="w-full sm:w-auto text-center px-6 py-4 bg-brand-surface hover:bg-brand-surface/80 border border-brand-border text-brand-text text-xs font-mono rounded-lg transition-all"
              >
                <span>Matrice des Spécifications</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-brand-border font-mono text-center">
              <div>
                <p className="text-lg font-bold text-brand-accent">4K HDR</p>
                <p className="text-[11px] text-brand-muted">Capteur Sony Starvis</p>
              </div>
              <div>
                <p className="text-lg font-bold text-brand-text">2 ANS</p>
                <p className="text-[11px] text-brand-muted">Garantie Officielle</p>
              </div>
              <div>
                <p className="text-lg font-bold text-emerald-400">0 DH</p>
                <p className="text-[11px] text-brand-muted">Paiement à Réception</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-brand-border bg-brand-surface p-4 shadow-2xl">
              <img
                src="https://cdn.shopify.com/s/files/1/0679/5608/0711/files/61SMxEJQ0rL._AC_UF1000_1000_QL80.jpg?v=1792410421"
                alt="Support 70mai T800"
                className="w-full aspect-video object-cover rounded-xl"
              />
              <div className="mt-4 p-3 rounded-lg bg-brand-bg/80 border border-brand-border font-mono text-xs flex justify-between items-center">
                <span className="text-brand-muted">Modèle Phare:</span>
                <span className="text-brand-accent font-bold">199 DH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
