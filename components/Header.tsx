'use client';

import React from 'react';
import { ShoppingBag, MessageCircle, Search, ShieldCheck, Terminal } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-brand-bg/95 border-b border-brand-border">
      {/* System Status Ticker */}
      <div className="bg-brand-surface/90 border-b border-brand-border py-1 px-4 text-xs font-mono flex items-center justify-between text-brand-muted">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[11px] text-brand-accent uppercase font-bold">[SYSTEM: DISPONIBLE]</span>
          <span className="hidden md:inline text-[11px]">• LIVRAISON 24H EXPRESS CASABLANCA / 48H MAROC</span>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span>PAIEMENT À RÉCEPTION (0 DH)</span>
          <span className="hidden sm:inline">GARANTIE 2 ANS</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <a href="#" className="font-extrabold text-xl tracking-tight text-brand-text flex items-center gap-2">
            <span>70mai Maroc</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-surface border border-brand-border text-brand-accent">
              OFFICIAL
            </span>
          </a>
        </div>

        {/* Technical search pill */}
        <div className="hidden lg:flex items-center flex-1 max-w-xs px-3 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-xs text-brand-muted gap-2">
          <Search className="w-3.5 h-3.5" />
          <span>Rechercher modèles, specs...</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/212671450367?text=Salam%2070mai Maroc%2C%20support%20technique"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 py-2 px-3.5 rounded-lg transition-all shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp Express</span>
          </a>

          <a
            href="#catalogue"
            className="p-2 rounded-lg bg-brand-surface border border-brand-border text-brand-text hover:border-brand-accent transition-colors relative"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-accent text-white rounded-full text-[10px] font-bold flex items-center justify-center">
              1
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
