// export default function Footer() {
//   // Lógica simples do React para pegar o ano atual (2026)
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="w-full bg-slate-50 border-t border-purple-100 py-6 px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      
//       {/* Texto de Direitos com tom suave */}
//       <p className="text-slate-500 text-sm font-medium flex items-center gap-2">
//         <span className="w-2 h-2 rounded-full bg-rose-300 animate-pulse"></span>
//         {currentYear} Pai de Pet. Todos os direitos reservados.
//       </p>

//       {/* Container de Links */}
//       <div className="flex items-center gap-6">
//         <a 
//           href="#" 
//           className="text-slate-600 hover:text-sky-500 text-sm font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-sky-200 pb-1 flex items-center gap-1"
//         >
//           {/* SVG W3.ORG - Help Circle */}
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <circle cx="12" cy="12" r="10"></circle>
//             <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
//             <line x1="12" y1="17" x2="12.01" y2="17"></line>
//           </svg>
//           Suporte
//         </a>

//         <a 
//           href="#" 
//           className="text-slate-600 hover:text-purple-500 text-sm font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-purple-200 pb-1 flex items-center gap-1"
//         >
//           {/* SVG W3.ORG - File Text */}
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
//             <polyline points="14 2 14 8 20 8"></polyline>
//             <line x1="16" y1="13" x2="8" y2="13"></line>
//             <line x1="16" y1="17" x2="8" y2="17"></line>
//             <polyline points="10 9 9 9 8 9"></polyline>
//           </svg>
//           Termos de uso
//         </a>
//       </div>

//     </footer>
//   );
// }
export default function Footer() {
  // Lógica original de data preservada
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#BDB2FF] pt-24 pb-16 px-10 font-[family-name:var(--font-poppins)]">
      {/* O container continua centralizado, mas o conteúdo interno alinha à esquerda */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-center gap-16 md:gap-40">
        
        {/* Coluna 1: Texto alinhado à esquerda */}
        <div className="flex flex-col items-start text-left gap-1 space-y-3">
          <div className="flex items-center gap-4">
            <span className="w-4 h-4 rounded-full bg-[#FF86C8] shadow-sm"></span>
            <p className="text-white text-md font-black tracking-tight">
              {currentYear} <span className="text-[#FFC6FF]">Pai de Pet</span>
            </p>
          </div>
          <p className="text-white/80 text-sm  ml-8">
            Todos os direitos reservados.
          </p>
        </div>

        {/* Coluna 2: Links alinhados à esquerda */}
        <div className="flex flex-col items-start text-left gap-5">
          <a 
            href="#" 
            className="group flex items-center gap-4 text-white hover:text-[#FFDC5E] font-bold text-lg transition-all duration-300"
          >
            <div className="text-[#FFDC5E] group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            Suporte
          </a>

          <a 
            href="#" 
            className="group flex items-center gap-4 text-white hover:text-[#FFA3A5] font-bold text-lg transition-all duration-300"
          >
            <div className="text-[#FFA3A5] group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
            </div>
            Termos de uso
          </a>
        </div>
        
      </div>
    </footer>
  );
}