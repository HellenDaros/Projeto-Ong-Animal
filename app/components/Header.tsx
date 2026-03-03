// "use client";


// export default function Header() {
//   return (
//     <header className="w-full bg-white/70 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 px-6 py-3">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
        
//         {/* Identificação do Usuário: Estilo Clean & Soft */}
//         <div className="flex items-center gap-4 group cursor-pointer">
//           <div className="relative">
//             {/* Avatar com Gradiente Suave da Paleta */}
//             <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#BDB2FF]/20 to-[#FFC6FF]/20 flex items-center justify-center text-[#BDB2FF] border border-[#BDB2FF]/30 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:shadow-[#BDB2FF]/10">
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 fill="none" 
//                 viewBox="0 0 24 24" 
//                 strokeWidth={1.5} 
//                 stroke="currentColor" 
//                 className="w-6 h-6"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.963-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//               </svg>
//             </div>
//             {/* Indicador de Status Delicado (Ciano da paleta) */}
//             <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#9BF6FF] border-2 border-white rounded-full shadow-sm"></span>
//           </div>

//           <div className="flex flex-col">
//             <span className="text-sm font-bold text-slate-800 tracking-tight leading-none">
//               Samuel Matos
//             </span>
//             <span className="text-[11px] font-semibold text-[#BDB2FF] uppercase tracking-[0.15em] mt-1.5">
//               Administrador
//             </span>
//           </div>
//         </div>

//         {/* Lado Direito: Ações em tons Pastéis */}
//         <div className="flex items-center gap-3">
//           {/* Notificações Suave */}
//           <button className="p-2.5 text-slate-400 hover:text-[#FFDC5E] hover:bg-[#FFDC5E]/10 transition-all duration-200 rounded-xl">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
//             </svg>
//           </button>

//           <div className="w-[1px] h-6 bg-slate-100 mx-1"></div>

//           {/* Botão Sair - Rosa da paleta, mas em versão Soft */}
//           <button className="group flex items-center gap-2 px-4 py-2 rounded-xl text-slate-600 hover:text-red-500 hover:bg-red-50 transition-all duration-300">
//             <span className="text-sm font-bold tracking-tight">Sair</span>
//             <div className="p-1.5 rounded-lg hover:bg-red-50 group-hover:bg-red-100 transition-colors">
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 fill="none" 
//                 viewBox="0 0 24 24" 
//                 strokeWidth={2} 
//                 stroke="currentColor" 
//                 className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
//               </svg>
//             </div>
//           </button>
//         </div>

//       </div>
//     </header>
//   );
// }
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f1f5f4] border-b border-stone-200 px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Lado Esquerdo: Perfil Samuel */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center shadow-sm">
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
          <div className="flex items-center gap-2 bg-[#1e293b] hover:bg-teal-600 text-white pl-5 pr-8 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg z-10">
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