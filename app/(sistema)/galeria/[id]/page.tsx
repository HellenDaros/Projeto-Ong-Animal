'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { AnimalMock } from '@/app/mock/animal';
import { Animal } from '@/app/context/AnimalContext';
import { ChevronLeft, MapPin, Calendar, Heart, Share2 } from 'lucide-react';

export default function DetalhesAnimalPage() {
  const params = useParams();
  const router = useRouter();
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarDados = async () => {
      if (params.id) {
        const dado = await AnimalMock.buscarPorId(Number(params.id));
        if (dado) {
          setAnimal(dado);
        }
        setCarregando(false);
      }
    };
    buscarDados();
  }, [params.id]);

  if (carregando) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  if (!animal) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h2 className="text-2xl font-black text-slate-800">Ops! Animal não encontrado.</h2>
        <Link href="/galeria" className="text-teal-600 font-bold hover:underline">Voltar para a Galeria</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50/50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Navegação Superior */}
        <div className="flex justify-between items-center mb-8 px-4">
          <Link 
            href="/galeria" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-[#008080] font-black text-xs uppercase tracking-widest transition-colors"
          >
            <ChevronLeft size={16} strokeWidth={3} />
            Voltar para a Galeria
          </Link>
          <div className="flex gap-2">
            <button className="p-3 bg-white rounded-2xl shadow-sm text-slate-400 hover:text-red-500 transition-all border border-stone-100">
              <Heart size={20} />
            </button>
            <button className="p-3 bg-white rounded-2xl shadow-sm text-slate-400 hover:text-teal-600 transition-all border border-stone-100">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Card de Detalhes */}
        <div className="bg-white rounded-[3rem] shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* Lado Esquerdo: Imagem */}
          <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
            <img 
              src={animal.urlFoto} 
              alt={animal.nameAnimal} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6">
              <span className="bg-teal-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                {animal.especie}
              </span>
            </div>
          </div>

          {/* Lado Direito: Informações */}
          <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-4xl font-black text-slate-800 tracking-tight mb-2">{animal.nameAnimal}</h1>
                  <p className="text-teal-600 font-black text-sm uppercase tracking-widest">{animal.raca}</p>
                </div>
                <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase ${animal.ativo ? 'bg-teal-50 text-teal-600' : 'bg-red-50 text-red-500'}`}>
                   {animal.ativo ? 'Disponível' : 'Adotado'}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-stone-50 rounded-xl flex items-center justify-center text-teal-600">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Tempo na ONG</p>
                    <p className="text-sm font-bold text-slate-700 font-sans">Recém Chegado</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-stone-50 rounded-xl flex items-center justify-center text-teal-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Localização</p>
                    <p className="text-sm font-bold text-slate-700 font-sans">Sede Central</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Sobre o Pet</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {animal.nome} é um(a) {animal.especie} da raça {animal.raca} que está aguardando por um lar cheio de amor. 
                </p>
              </div>
            </div>

            {/* Ação Principal */}
            <div className="mt-12 flex gap-4">
               <button 
                onClick={() => router.push(`/galeria/${animal.id}/editar`)}
                className="flex-1 bg-stone-100 hover:bg-stone-200 text-slate-600 py-4 rounded-2xl font-black transition-all"
              >
                Editar Ficha
              </button>
              <button className="flex-[2] bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-black transition-all shadow-lg shadow-orange-100 active:scale-95">
                Tenho Interesse
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}