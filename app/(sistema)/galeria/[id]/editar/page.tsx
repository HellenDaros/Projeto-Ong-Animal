'use client'

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Animal } from "@/app/context/AnimalContext";
import { AnimalMock } from "@/app/mock/animal";
import AnimalForm from "../../../cadastro-animal/components/animal-form"

export default function EditarAnimal() {
    const params = useParams();
    const router = useRouter();
    
    const id = Number(params.id);

    const [animal, setAnimal] = useState<Animal | null>(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        buscarDados();
    }, [id]);

    const buscarDados = async () => {
        try {
            const pet = await AnimalMock.buscarPorId(id);
            
            if (pet) {
                setAnimal(pet);
            } else {
                router.push("/galeria");
            }
        } catch (error) {
            console.error("Erro ao buscar animal:", error);
            router.push("/galeria");
        } finally {
            setCarregando(false);
        }
    };

    if (carregando) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-teal-500"></div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-stone-50/50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                
                {/* Cabeçalho de Navegação */}
                <div className="mb-8 ml-4 flex justify-between items-center">
                    <Link 
                        href={`/galeria/${id}`} 
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-[#008080] font-black text-xs uppercase tracking-widest transition-colors"
                    >
                        <ChevronLeft size={16} strokeWidth={3} />
                        Voltar para Detalhes
                    </Link>

                    <div className="text-right">
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                            Editando Registro
                        </span>
                        <h1 className="text-xl font-black text-slate-800">Pet #{id}</h1>
                    </div>
                </div>

                {/* Formulário de Animal preenchido com os dados existentes */}
                {animal && <AnimalForm animalExistente={animal} />}
                
            </div>
        </main>
    );
}