'use client'
import { Usuario } from "@/app/context/AuthContext"
import { useState } from "react"
import Link  from 'next/link';
import { UsuarioMock } from '@/app/mock/usuario';
import { useRouter } from "next/navigation";

interface UsuarioFormProps{
    usuarioExistente?: Usuario
}

export default function UsuarioForm({usuarioExistente} : UsuarioFormProps ){

    const router = useRouter()
    const [usuario, setUsuario] = useState<Usuario>(usuarioExistente||new Usuario(0,'','',true))

    const isEdicao = !!usuarioExistente;

    const handleChange = (campo: 'nome' | 'cpf', valor: string) => {
    setUsuario(prev => 
        new Usuario(
        prev.codigo,
        campo === 'nome' ? valor: prev.name,
         campo === 'cpf'? valor: prev.cpf,
         prev.ativo
    ))

    
}
const handleSalvar = async (formData: FormData) => {


    await UsuarioMock.salvar(usuario);

    alert("Usuário salvo com sucesso!")

    router.push("/usuarios")
    }

return (
  <div className="flex-1 flex items-center justify-center p-6">
    <div className="w-full max-w-lg bg-white rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden">
      
      {/* Cabeçalho do Formulário */}
      <div className="bg-stone-50/50 px-10 py-8 border-b border-stone-100">
        <h2 className="text-2xl font-black text-slate-800 tracking-tight">Dados do Usuário</h2>
        <p className="text-slate-500 text-sm font-medium">Preencha as informações para salvar o cadastro.</p>
      </div>

      <form action={handleSalvar} className="p-10 space-y-6">
        
        {/* Campo: Nome */}
        <div className="space-y-2">
          <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">
            Nome completo
          </label>
          <input 
            type="text" 
            required 
            onChange={(e) => handleChange('nome', e.target.value)} 
            value={usuario.name} 
            placeholder="João da Silva Salro"
            className="w-full bg-stone-50 border-2 border-stone-50 focus:border-teal-500 focus:bg-white outline-none px-5 py-4 rounded-2xl text-slate-700 font-bold transition-all placeholder:text-stone-300"
          />
        </div>

        {/* Campo: CPF */}
        <div className="space-y-2">
          <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">
            CPF
          </label>
          <input 
            type="text" 
            maxLength={14} 
            required 
            onChange={(e) => handleChange('cpf', e.target.value)} 
            value={usuario.cpf} 
            placeholder="000.000.000.00"
            className="w-full bg-stone-50 border-2 border-stone-50 focus:border-teal-500 focus:bg-white outline-none px-5 py-4 rounded-2xl text-slate-700 font-bold transition-all placeholder:text-stone-300"
          />
        </div>

        {/* Ações */}
        <div className="flex items-center gap-4 pt-4">
          <Link 
            href="/usuarios" 
            className="flex-1 text-center py-4 rounded-2xl font-black text-slate-400 hover:text-slate-600 hover:bg-stone-50 transition-all"
          >
            Cancelar
          </Link>
          
          <button 
            type="submit"
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-black transition-all shadow-lg shadow-orange-100 active:scale-95"
          >
            Salvar
          </button>
        </div>

      </form>
    </div>
  </div>
);
}