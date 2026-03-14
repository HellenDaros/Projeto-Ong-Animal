'use client'

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Definindo a interface para o TypeScript
interface Animal {
    nome: string;
    especie: string;
    raca: string;
    foto: string;
}

export default function CadastroAnimal() {
    const router = useRouter();

    // 1. Lógica de Estado Inicial
    const [animal, setAnimal] = useState<Animal>({
        nome: '',
        especie: '',
        raca: '',
        foto: ''
    });

    // 2. Função para atualizar os campos dinamicamente
    const handleChange = (campo: keyof Animal, valor: string) => {
        setAnimal(prev => ({
            ...prev,
            [campo]: valor
        }));
    };

    // 3. Função para salvar (Simulando a chamada ao banco/mock)
    const handleSalvar = async (formData: FormData) => {
        // Como você está usando o atributo 'action' do form (Server Actions ou preventDefault)
        // Aqui vai a sua lógica de persistência
        try {
            console.log("Salvando Animal:", animal);
            // Ex: await AnimalMock.salvar(animal);
            router.push('/galeria');
        } catch (error) {
            alert("Erro ao salvar o animal");
        }
    };

    return (
        <div className="flex-1 flex items-center justify-center p-6">
            <div className="w-full max-w-lg bg-white rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden">
                
                {/* Cabeçalho */}
                <div className="bg-stone-50/50 px-10 py-8 border-b border-stone-100">
                    <h2 className="text-2xl font-black text-[#008080] tracking-tight">Novo Protegido</h2>
                    <p className="text-slate-500 text-sm font-medium">Preencha os dados do pet para adoção.</p>
                </div>

                {/* Formulário com a lógica vinculada */}
                <form action={handleSalvar} className="p-10 space-y-5">
                    
                    {/* Campo: Nome */}
                    <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">
                            Nome do Pet
                        </label>
                        <input 
                            type="text" 
                            required 
                            value={animal.nome}
                            onChange={(e) => handleChange('nome', e.target.value)}
                            placeholder="Ex: Bolinha"
                            className="w-full bg-stone-50 border-2 border-stone-50 focus:border-teal-500 focus:bg-white outline-none px-5 py-4 rounded-2xl text-slate-700 font-bold transition-all placeholder:text-stone-300"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Campo: Espécie */}
                        <div className="space-y-2">
                            <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                Espécie
                            </label>
                            <select 
                                required
                                value={animal.especie}
                                onChange={(e) => handleChange('especie', e.target.value)}
                                className="w-full bg-stone-50 border-2 border-stone-50 focus:border-teal-500 focus:bg-white outline-none px-5 py-4 rounded-2xl text-slate-700 font-bold transition-all appearance-none cursor-pointer"
                            >
                                <option value="">Selecione...</option>
                                <option value="CACHORRO">Cachorro</option>
                                <option value="GATO">Gato</option>
                                <option value="OUTRO">Outro</option>
                            </select>
                        </div>

                        {/* Campo: Raça */}
                        <div className="space-y-2">
                            <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">
                                Raça / Características
                            </label>
                            <input 
                                type="text" 
                                required 
                                value={animal.raca}
                                onChange={(e) => handleChange('raca', e.target.value)}
                                placeholder="Ex: Vira-lata"
                                className="w-full bg-stone-50 border-2 border-stone-50 focus:border-teal-500 focus:bg-white outline-none px-5 py-4 rounded-2xl text-slate-700 font-bold transition-all placeholder:text-stone-300"
                            />
                        </div>
                    </div>

                    {/* Campo: Foto */}
                    <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">
                            URL da Foto
                        </label>
                        <input 
                            type="url" 
                            required 
                            value={animal.foto}
                            onChange={(e) => handleChange('foto', e.target.value)}
                            placeholder="https://link-da-imagem.com/foto.jpg"
                            className="w-full bg-stone-50 border-2 border-stone-50 focus:border-teal-500 focus:bg-white outline-none px-5 py-4 rounded-2xl text-slate-700 font-bold transition-all placeholder:text-stone-300"
                        />
                    </div>

                    {/* Preview em tempo real */}
                    {animal.foto && (
                        <div className="mt-2 animate-in zoom-in-95 duration-300">
                            <p className="text-[10px] font-black text-slate-400 uppercase mb-2 ml-1">Preview:</p>
                            <div className="relative h-40 w-full rounded-2xl overflow-hidden border-2 border-stone-100">
                                <img 
                                    src={animal.foto} 
                                    alt="Preview" 
                                    className="w-full h-full object-cover"
                                    onError={(e) => (e.currentTarget.src = "https://placehold.co/400x300?text=Link+Invalido")}
                                />
                            </div>
                        </div>
                    )}

                    {/* Botões */}
                    <div className="flex items-center gap-4 pt-4">
                        <Link 
                            href="/galeria" 
                            className="flex-1 text-center py-4 rounded-2xl font-black text-slate-400 hover:text-slate-600 hover:bg-stone-50 transition-all"
                        >
                            Cancelar
                        </Link>
                        
                        <button 
                            type="submit"
                            className="flex-1 bg-[#008080] hover:bg-teal-700 text-white py-4 rounded-2xl font-black transition-all shadow-lg shadow-teal-100 active:scale-95"
                        >
                            Cadastrar Pet
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}