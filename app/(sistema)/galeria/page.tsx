'use client';

import React from 'react';
import Link from 'next/link';
import { Plus, MapPin, Calendar, ArrowRight } from 'lucide-react';

const animals = [
  { id: '1', name: 'Bolinha', type: 'CACHORRO', breed: 'VIRA-LATA', age: '2 ANOS', location: 'SÃO PAULO', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80' },
  { id: '2', name: 'Luna', type: 'GATO', breed: 'SIAMÊS', age: '6 MESES', location: 'SÃO PAULO', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80' },
  { id: '3', name: 'Thor', type: 'CACHORRO', breed: 'GOLDEN RETRIEVER', age: '4 ANOS', location: 'SÃO BERNARDO', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=80' },
  { id: '4', name: 'Mel', type: 'CACHORRO', breed: 'POODLE', age: '1 ANO', location: 'SANTO ANDRÉ', image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=400&q=80' },
];

export default function GaleriaPage() {
  return (
    /* O container max-w-7xl e o mx-auto agora ficam aqui para não esmagar o Login */
    <div className="w-full max-w-7xl mx-auto p-6 sm:p-8 pt-4">
      
      {/* Título e Botão alinhados */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-black text-[#008080] tracking-tight">Nossos Protegidos</h1>
          <p className="text-slate-500 text-sm font-medium">Gerencie os animais disponíveis para adoção.</p>
        </div>

        <Link href="/cadastrar-animal">
        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl font-black transition-all shadow-lg shadow-orange-100 active:scale-95">
          <Plus size={20} strokeWidth={3} />
          Cadastrar Animal
        </button>
        </Link>
      </div>
      

      {/* Grid seguindo o estilo da sua imagem */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {animals.map((animal) => (
          <Link 
            key={animal.id} 
            href={`/galeria/${animal.id}`} 
            className="group bg-white rounded-[2rem] overflow-hidden border border-stone-100 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img src={animal.image} alt={animal.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-[#008080] text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  {animal.type}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-black text-slate-800">{animal.name}</h3>
                  <p className="text-slate-400 font-bold text-[11px] uppercase">{animal.breed}</p>
                </div>
                <div className="bg-stone-50 w-8 h-8 rounded-full flex items-center justify-center">
                  <ArrowRight size={16} className="text-stone-300 group-hover:text-orange-500 transition-colors" />
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-stone-50">
                <div className="flex items-center gap-1.5 text-teal-600 text-[10px] font-black uppercase">
                  <Calendar size={12} /> {animal.age}
                </div>
                <div className="flex items-center gap-1.5 text-teal-600 text-[10px] font-black uppercase">
                  <MapPin size={12} /> {animal.location}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}