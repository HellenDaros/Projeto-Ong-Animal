'use client';

import React from 'react';
import { ArrowRight, Lock, Mail } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    /* flex-1 para preencher o espaço entre Header e Footer.
       w-full para garantir que o fundo ocupe toda a largura disponível no layout.
    */
    <div className="flex-1 w-full bg-stone-50 flex flex-col justify-center items-center p-6">
      
      {/* Logo levemente maior */}
      <div className="flex items-center gap-2 font-black text-teal-600 text-2xl mb-8 group pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001Z" />
        </svg>
        <span>PET<span className="text-orange-500 underline decoration-2 underline-offset-4">RESCUE</span></span>
      </div>

      {/* Card: Largura aumentada de 350px para 400px */}
      <div className="w-full max-w-[400px] bg-white rounded-[2.5rem] shadow-2xl shadow-stone-200/50 border border-stone-100 p-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Acesse sua conta</h2>
          <p className="text-slate-500 text-sm font-medium mt-2">Bem-vindo à nossa rede de proteção</p>
        </div>

        <form className="space-y-5">
          {/* E-mail: Texto e Padding aumentados */}
          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
              <Mail size={14} /> E-mail
            </label>
            <input 
              type="email" 
              placeholder="seu@email.com" 
              className="w-full px-5 py-3.5 rounded-2xl bg-stone-50 border border-stone-200 outline-none text-base text-slate-700 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/5 transition-all" 
            />
          </div>

          {/* Senha: Texto e Padding aumentados */}
          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Lock size={14} /> Senha
              </label>
              <Link href="#" className="text-[11px] font-bold text-teal-600 hover:text-orange-500 transition-colors">Esqueceu?</Link>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-5 py-3.5 rounded-2xl bg-stone-50 border border-stone-200 outline-none text-base text-slate-700 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/5 transition-all" 
            />
          </div>

          {/* Botão: Mais robusto */}
          <button className="w-full bg-[#1e293b] hover:bg-orange-500 text-white py-4 mt-2 rounded-2xl font-black text-base shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group active:scale-[0.98]">
            Entrar no Sistema
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-stone-50 text-center">
          <p className="text-slate-500 text-sm font-medium">
            Ainda não tem conta? 
            <Link href="/login/cadastro" className="ml-1 text-teal-600 font-black hover:text-orange-500 transition-colors underline decoration-2 underline-offset-4">
              Criar Cadastro
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}