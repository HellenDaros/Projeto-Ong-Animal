// "use client";


// export default function Footer() {
//   // Pega o ano atual dinamicamente
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="w-full bg-white border-t border-slate-100 py-10 px-6">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
//         {/* Lado Esquerdo: Copyright */}
//         <div className="flex items-center gap-2">
//           <div className="w-8 h-8 rounded-lg bg-[#BDB2FF]/10 flex items-center justify-center">
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               viewBox="0 0 24 24" 
//               fill="none" 
//               stroke="currentColor" 
//               className="w-4 h-4 text-[#BDB2FF]"
//               strokeWidth="2"
//             >
//               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//             </svg>
//           </div>
//           <p className="text-sm font-medium text-slate-500 tracking-tight">
//             © {currentYear} <span className="font-bold text-slate-700">Pai de Pet</span>. Todos os direitos reservados.
//           </p>
//         </div>

//         {/* Lado Direito: Links de Suporte e Termos */}
//         <div className="flex items-center gap-8">
//           <a 
//             href="#" 
//             className="text-sm font-semibold text-slate-500 hover:text-[#9BF6FF] transition-colors duration-300 relative group"
//           >
//             Suporte
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9BF6FF] transition-all duration-300 group-hover:w-full"></span>
//           </a>
          
//           <a 
//             href="#" 
//             className="text-sm font-semibold text-slate-500 hover:text-[#FF69EB] transition-colors duration-300 relative group"
//           >
//             Termos de uso
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF69EB] transition-all duration-300 group-hover:w-full"></span>
//           </a>
//         </div>

//       </div>
//     </footer>
//   );
// }
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f1f5f4] border-t border-stone-200 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Lado Esquerdo: Copyright */}
        <div className="flex items-center gap-2 text-slate-500 font-medium text-sm">
          {/* Ícone */}
          <p>
            © {currentYear} <span className="font-black text-slate-800">PETRESCUE</span>. 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001Z" />
              </svg>
            Todos os direitos reservados.
          </p>
        </div>

        {/* Lado Direito: Links de navegação */}
        <div className="flex items-center gap-8">
          <a 
            href="#" 
            className="text-slate-600 hover:text-teal-600 font-bold text-sm transition-colors duration-300 flex items-center gap-1 group"
          >
            Suporte
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
          
          <a 
            href="#" 
            className="text-slate-600 hover:text-teal-600 font-bold text-sm transition-colors duration-300 flex items-center gap-1 group"
          >
            Termos de uso
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
        </div>

      </div>
    </footer>
  );
}