export default function Header() {
  return (
    <header className="w-full bg-[#BDB2FF] border-b-4 border-[#FFC6FF] px-6 py-4 font-[family-name:var(--font-poppins)] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          {/* Avatar usando Mauve (#FFC6FF) para destacar no fundo azul */}
          <div className="w-11 h-11 rounded-full bg-[#FFC6FF] flex items-center justify-center border-2 border-white shadow-sm">
             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
             </svg>
          </div>
          
          <div className="flex flex-col">
            <span className="font-bold text-white text-lg leading-none tracking-tight">
              Samuel Matos
            </span>
            <span className="text-[10px] font-black text-[#9BF6FF] uppercase tracking-widest mt-1">
              Administrador
            </span>
          </div>
        </div>

{/* Botão usando Powder Blush (#FFADAD) com efeito hover suave */}
        <button className="flex items-center gap-2 bg-[#FFADAD] hover:bg-[#FFA3A5] text-white px-6 py-2.5 rounded-2xl font-bold transition-all active:scale-95 shadow-lg shadow-[#FFADAD]/20 group">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="group-hover:-translate-x-1 transition-transform"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          Sair
        </button>
        
      </div>
    </header>
  );
}