export default function Header() {
  return (
   <header className="fixed w-full top-0 z-50 bg-[#f1f5f4] border-b border-stone-200 px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Lado Esquerdo: Perfil Samuel */}
        <div className="flex items-center gap-3">
          {/* Círculo do Perfil: Laranja Fixo (orange-500) */}
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-sm">
            {/* Ícone de Usuário SVG (w3.org) */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              className="w-5 h-5"
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-800 font-black text-base tracking-tight leading-tight">
              Samuel Matos
            </span>
            <span className="text-teal-600 text-[10px] font-bold uppercase tracking-wider">
              Painel ONG
            </span>
          </div>
        </div>

        {/* Lado Direito: Botão Sair Estilo "Acesso ONG" */}
        <button className="group relative flex items-center">
          {/* Fundo Slate, muda para Laranja (orange-500) no Hover */}
          <div className="flex items-center gap-2 bg-[#1e293b] hover:bg-orange-500 text-white pl-5 pr-8 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg z-10">
            {/* Ícone de Logout SVG (w3.org) */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              className="w-4 h-4 text-white"
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <span className="text-sm">Sair</span>
          </div>
        </button>

      </div>
    </header>
  );
}