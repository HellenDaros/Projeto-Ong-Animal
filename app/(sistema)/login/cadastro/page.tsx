'use client';

import React, { useState } from 'react';
import { ArrowRight, Building2, User, Mail, Lock, MapPin, Phone, Hash } from 'lucide-react';
import Link from 'next/link';

export default function CadastroPage() {
  const [tipoCadastro, setTipoCadastro] = useState<'adotante' | 'ong'>('adotante');

  return (
    <div className="flex-1 w-full bg-stone-50 flex flex-col justify-center items-center p-6 min-h-[85vh]">
      
      {/* Branding */}
      <div className="flex items-center gap-2 font-black text-teal-600 text-2xl mb-6 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001Z" />
        </svg>
        <span>PET<span className="text-orange-500 underline decoration-2 underline-offset-4">RESCUE</span></span>
      </div>

      <div className="w-full max-w-[500px] bg-white rounded-[2.5rem] shadow-2xl shadow-stone-200/50 border border-stone-100 p-8 md:p-10">
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Criar sua conta</h2>
          <p className="text-slate-500 text-sm font-medium mt-1">Selecione o tipo de perfil</p>
        </div>

        {/* Switcher */}
        <div className="flex p-1.5 bg-stone-100 rounded-2xl mb-8">
          <button 
            onClick={() => setTipoCadastro('adotante')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${tipoCadastro === 'adotante' ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <User size={16} /> Adotante
          </button>
          <button 
            onClick={() => setTipoCadastro('ong')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${tipoCadastro === 'ong' ? 'bg-white text-orange-500 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <Building2 size={16} /> ONG
          </button>
        </div>

        <form className="space-y-4">
          
          {/* --- FORMULÁRIO ADOTANTE --- */}
          {tipoCadastro === 'adotante' && (
            <>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Nome Completo</label>
                <input type="text" placeholder="Seu nome" className="w-full px-5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 outline-none text-sm focus:border-teal-500 transition-all" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-1 space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">CEP</label>
                  <input type="text" placeholder="00000-000" className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 outline-none text-sm focus:border-teal-500 transition-all" />
                </div>
                <div className="col-span-2 space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Cidade</label>
                  <input type="text" placeholder="Sua cidade" className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 outline-none text-sm focus:border-teal-500 transition-all" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Endereço Residencial</label>
                <input type="text" placeholder="Rua, Bairro e Número" className="w-full px-5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 outline-none text-sm focus:border-teal-500 transition-all" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">WhatsApp</label>
                  <input type="tel" placeholder="(00) 00000-0000" className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 outline-none text-sm focus:border-teal-500 transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">E-mail</label>
                  <input type="email" placeholder="seu@email.com" className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 outline-none text-sm focus:border-teal-500 transition-all" />
                </div>
              </div>
            </>
          )}

          {/* --- FORMULÁRIO ONG --- */}
          {tipoCadastro === 'ong' && (
            <>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Nome da Instituição</label>
                <input type="text" placeholder="Nome da ONG" className="w-full px-5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 outline-none text-sm focus:border-orange-500 transition-all" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">CNPJ (Opcional)</label>
                  <input type="text" placeholder="00.000.000/0001-00" className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 outline-none text-sm focus:border-orange-500 transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Cidade Sede</label>
                  <input type="text" placeholder="Ex: São Paulo" className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 outline-none text-sm focus:border-orange-500 transition-all" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">E-mail de Login</label>
                <input type="email" placeholder="ong@contato.com" className="w-full px-5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 outline-none text-sm focus:border-orange-500 transition-all" />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Senha de Acesso</label>
                <input type="password" placeholder="••••••••" className="w-full px-5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 outline-none text-sm focus:border-orange-500 transition-all" />
              </div>
            </>
          )}

          <button 
            type="submit"
            className={`w-full py-4 mt-4 rounded-2xl font-black text-base shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group active:scale-[0.98] text-white
            ${tipoCadastro === 'adotante' ? 'bg-teal-600 hover:bg-teal-700 shadow-teal-100' : 'bg-orange-500 hover:bg-orange-600 shadow-orange-100'}`}
          >
            Concluir Cadastro
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-stone-100 text-center">
          <p className="text-slate-500 text-xs font-medium">
            Já tem uma conta? 
            <Link href="/login" className="ml-1 text-teal-600 font-black hover:text-orange-500 transition-colors underline decoration-2 underline-offset-4">
              Entrar agora
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}