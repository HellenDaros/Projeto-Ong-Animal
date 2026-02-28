


// export default function LandingPage() {
//   return (
//     <div className="min-h-screen bg-white font-[family-name:var(--font-poppins)] selection:bg-[#BDB2FF] selection:text-white">
      
//       {/* --- HERO SECTION --- */}
//       <section className="w-full bg-[#BDB2FF] pt-32 pb-32 px-10">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-12 gap-8 items-center">
            
//             {/* Texto: Ocupa 7 colunas */}
//             <div className="col-span-12 lg:col-span-7 flex flex-col items-start">
//               <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6">
//                 Exclusivo para ONGs e Protetores
//               </span>
//               <h1 className="text-white text-6xl md:text-8xl font-[900] leading-[0.9] tracking-tighter mb-8 text-left">
//                 Gestão que <br/> 
//                 <span className="text-[#FFC6FF]">salva vidas.</span>
//               </h1>
//               <p className="text-white/90 text-xl font-medium max-w-lg mb-10 text-left leading-relaxed">
//                 Abandone as planilhas. Gerencie resgates, controle processos de adoção e organize sua ONG em um sistema profissional e seguro.
//               </p>
//               <div className="flex gap-4">
//                 <button className="bg-[#FF69EB] text-white px-10 py-5 rounded-2xl font-[900] text-lg uppercase tracking-wider shadow-[0_8px_0_0_#db49c5] hover:translate-y-1 hover:shadow-[0_4px_0_0_#db49c5] transition-all">
//                   Cadastrar minha ONG
//                 </button>
//               </div>
//             </div>

//             {/* Ilustração/Mockup: Ocupa 5 colunas */}
//             <div className="hidden lg:col-span-5 lg:block">
//               <div className="w-full aspect-square bg-white/10 border-8 border-white/20 rounded-[60px] flex items-center justify-center backdrop-blur-sm">
//                 <div className="w-[80%] h-[80%] bg-white rounded-[40px] shadow-2xl flex items-center justify-center p-8">
//                    <div className="w-full h-full border-4 border-dashed border-[#BDB2FF]/30 rounded-[20px] flex items-center justify-center">
//                       <span className="text-[#BDB2FF] font-black opacity-20 text-4xl transform -rotate-12">PETRESCUE</span>
//                    </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* --- SEÇÃO DE DORES (Ponto de Empatia) --- */}
//       <section className="w-full py-32 px-10">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-12 gap-12">
            
//             {/* Título da Seção */}
//             <div className="col-span-12 lg:col-span-5">
//               <h2 className="text-[#FF69EB] font-black text-sm uppercase tracking-[0.3em] mb-4 text-left italic">O problema</h2>
//               <h3 className="text-slate-800 text-5xl font-[900] leading-tight tracking-tighter text-left">
//                 Chega de se perder no caos do WhatsApp.
//               </h3>
//             </div>

//             {/* Lista de Dores (Alinhada pela mesma linha vertical) */}
//             <div className="col-span-12 lg:col-span-7 space-y-12">
//               <div className="flex flex-col items-start border-l-8 border-[#9BF6FF] pl-8">
//                 <h4 className="text-2xl font-[900] text-slate-800 mb-2 italic text-left">Dados Descentralizados</h4>
//                 <p className="text-slate-500 text-lg font-medium text-left">Informações de animais e adotantes espalhadas em conversas e papéis, aumentando o risco de erro humano.</p>
//               </div>

//               <div className="flex flex-col items-start border-l-8 border-[#FFDC5E] pl-8 text-left">
//                 <h4 className="text-2xl font-[900] text-slate-800 mb-2 italic">Adoções Lentas</h4>
//                 <p className="text-slate-500 text-lg font-medium">Sem um fluxo de aprovação claro, processos levam dias a mais e animais ocupam lares temporários por mais tempo.</p>
//               </div>

//               <div className="flex flex-col items-start border-l-8 border-[#FFA3A5] pl-8 text-left">
//                 <h4 className="text-2xl font-[900] text-slate-800 mb-2 italic">Falta de Segurança</h4>
//                 <p className="text-slate-500 text-lg font-medium">Planilhas compartilhadas que qualquer um pode apagar. Na PetRescue, seus dados são exclusivos da sua ONG.</p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* --- SEÇÃO DE FUNCIONALIDADES (Cards de Impacto) --- */}
//       <section className="w-full py-32 bg-slate-50 px-10">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
//             {/* Card 1 */}
//             <div className="bg-white p-12 rounded-[40px] shadow-sm border-b-8 border-[#9BF6FF] hover:-translate-y-2 transition-transform">
//               <div className="text-[#9BF6FF] mb-6">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
//               </div>
//               <h4 className="text-2xl font-[900] mb-4 text-left">Galeria Digital</h4>
//               <p className="text-slate-500 font-medium leading-relaxed text-left">Dashboard visual com todos os animais resgatados, histórico médico e fotos em alta qualidade.</p>
//             </div>

//             {/* Card 2 */}
//             <div className="bg-white p-12 rounded-[40px] shadow-sm border-b-8 border-[#FFDC5E] hover:-translate-y-2 transition-transform">
//               <div className="text-[#FFDC5E] mb-6 text-left">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
//               </div>
//               <h4 className="text-2xl font-[900] mb-4 text-left">Fila de Adoção</h4>
//               <p className="text-slate-500 font-medium leading-relaxed text-left">Acompanhe candidatos a adotantes com status em tempo real. Saiba quem foi aprovado num piscar de olhos.</p>
//             </div>

//             {/* Card 3 */}
//             <div className="bg-white p-12 rounded-[40px] shadow-sm border-b-8 border-[#FFA3A5] hover:-translate-y-2 transition-transform">
//               <div className="text-[#FFA3A5] mb-6 text-left">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
//               </div>
//               <h4 className="text-2xl font-[900] mb-4 text-left">Cadastro Inteligente</h4>
//               <p className="text-slate-500 font-medium leading-relaxed text-left">Preenchimento automático de endereços via CEP e dicas de comportamento baseadas na raça do pet.</p>
//             </div>

//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }
// import React from 'react';
// import Link from 'next/link';
// import { Heart, Dog, Cat, User, ArrowRight, Instagram, Facebook } from 'lucide-react';

// export default function LandingPage() {
//   return (
//     <div className="min-h-screen bg-stone-50 text-slate-800 font-sans">
      
//       {/* --- NAVBAR --- */}
//       <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 px-6 py-4">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <Link href="/" className="flex items-center gap-2 font-black text-teal-600 text-2xl tracking-tight">
//             <Heart className="fill-teal-600" size={28} /> 
//             <span>PETS<span className="text-orange-500 underline decoration-2 underline-offset-4">AMIGOS</span></span>
//           </Link>
          
//           <div className="hidden md:flex gap-8 font-medium text-slate-600">
//             <Link href="#galeria" className="hover:text-teal-600 transition">Animais</Link>
//             <Link href="#sobre" className="hover:text-teal-600 transition">Como funciona</Link>
//             <Link href="#contato" className="hover:text-teal-600 transition">Contato</Link>
//           </div>

//           <Link 
//             href="/login" 
//             className="flex items-center gap-2 bg-slate-900 hover:bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-orange-200"
//           >
//             <User size={18} />
//             Fazer Login
//           </Link>
//         </div>
//       </nav>

//       {/* --- HERO SECTION --- */}
//       <header className="relative h-screen flex items-center justify-center bg-teal-700 text-white overflow-hidden pt-20">
//         <div className="absolute inset-0">
//           <img 
//             src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=2000" 
//             alt="Cão e gato juntos" 
//             className="w-full h-full object-cover mix-blend-overlay opacity-50"
//           />
//         </div>
//         <div className="relative z-10 text-center px-4 max-w-4xl">
//           <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
//             🐶 Mais de 200 animais resgatados este ano
//           </span>
//           <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
//             Amor não se compra, <br/> 
//             <span className="text-orange-400">se adota.</span>
//           </h1>
//           <p className="text-xl md:text-2xl mb-10 text-teal-50 max-w-2xl mx-auto leading-relaxed">
//             Dê um novo começo para quem só conhece a solidão. Encontre hoje o companheiro que vai mudar sua vida.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="#galeria" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 px-10 rounded-2xl text-lg shadow-xl transition-all hover:scale-105 active:scale-95">
//               Encontrar meu pet
//             </Link>
//             <Link href="/doar" className="bg-white hover:bg-teal-50 text-teal-700 font-bold py-5 px-10 rounded-2xl text-lg shadow-xl transition-all border-b-4 border-stone-200 active:border-b-0">
//               Quero Ajudar (Doar)
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* --- GALERIA DE ANIMAIS --- */}
//       <section id="galeria" className="py-24 px-6 max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
//           <div>
//             <h2 className="text-4xl font-black text-slate-900 mb-4">Esperando por um lar</h2>
//             <p className="text-slate-500 text-lg">Conheça alguns dos nossos amigos que estão prontos para ir para casa.</p>
//           </div>
//           <button className="flex items-center gap-2 text-teal-600 font-bold hover:gap-4 transition-all">
//             Ver todos os animais <ArrowRight size={20} />
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {[
//             { name: 'Pipoca', tag: 'Dócil', age: '2 anos', img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600', color: 'bg-blue-100 text-blue-700' },
//             { name: 'Mingau', tag: 'Brincalhão', age: '5 meses', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600', color: 'bg-purple-100 text-purple-700' },
//             { name: 'Bento', tag: 'Protetor', age: '4 anos', img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600', color: 'bg-orange-100 text-orange-700' },
//           ].map((pet, index) => (
//             <div key={index} className="group bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 overflow-hidden">
//               <div className="relative h-72 overflow-hidden">
//                 <img 
//                   src={pet.img} 
//                   alt={pet.name} 
//                   className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
//                 />
//                 <span className={`absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${pet.color}`}>
//                   {pet.tag}
//                 </span>
//               </div>
//               <div className="p-8">
//                 <div className="flex justify-between items-center mb-4">
//                   <h3 className="text-2xl font-black text-slate-800">{pet.name}</h3>
//                   <span className="text-slate-400 font-medium">{pet.age}</span>
//                 </div>
//                 <button className="w-full bg-stone-100 hover:bg-teal-600 hover:text-white text-slate-600 font-bold py-4 rounded-xl transition-colors duration-300">
//                   Conhecer história
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- PROCESSO DE ADOÇÃO --- */}
//       <section id="sobre" className="bg-slate-900 py-24 px-6 rounded-[3rem] mx-4 mb-24 overflow-hidden relative text-white text-center">
//         <div className="max-w-4xl mx-auto relative z-10">
//           <h2 className="text-4xl md:text-5xl font-black mb-16 text-white">Adotar é simples assim:</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             <div className="p-6">
//               <div className="w-16 h-16 bg-orange-500 rounded-2xl rotate-3 flex items-center justify-center mx-auto mb-8 text-white font-black text-2xl">01</div>
//               <h4 className="text-xl font-bold mb-4 italic italic">O "Match" Perfeito</h4>
//               <p className="text-slate-400">Escolha o pet que mais combina com seu estilo de vida e rotina.</p>
//             </div>
//             <div className="p-6">
//               <div className="w-16 h-16 bg-teal-500 rounded-2xl -rotate-3 flex items-center justify-center mx-auto mb-8 text-white font-black text-2xl">02</div>
//               <h4 className="text-xl font-bold mb-4 italic">A Entrevista</h4>
//               <p className="text-slate-400">Um papo rápido para entendermos como será a nova vida do bichinho.</p>
//             </div>
//             <div className="p-6">
//               <div className="w-16 h-16 bg-blue-500 rounded-2xl rotate-6 flex items-center justify-center mx-auto mb-8 text-white font-black text-2xl">03</div>
//               <h4 className="text-xl font-bold mb-4 italic">A Entrega</h4>
//               <p className="text-slate-400">Agora é só preparar a caminha e curtir o amor incondicional!</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- FOOTER --- */}
//       <footer id="contato" className="bg-stone-50 py-16 px-6 border-t border-stone-200">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
//           <div>
//             <div className="flex items-center justify-center md:justify-start gap-2 font-black text-teal-600 text-2xl mb-4">
//               <Heart className="fill-teal-600" size={24} /> <span>PETSAMIGOS</span>
//             </div>
//             <p className="text-slate-500 max-w-xs">Organização sem fins lucrativos dedicada ao resgate e reabilitação animal desde 2018.</p>
//           </div>
          
//           <div className="flex gap-6">
//             <Link href="#" className="p-3 bg-white shadow-sm rounded-full text-slate-400 hover:text-teal-600 transition duration-300">
//               <Instagram />
//             </Link>
//             <Link href="#" className="p-3 bg-white shadow-sm rounded-full text-slate-400 hover:text-teal-600 transition duration-300">
//               <Facebook />
//             </Link>
//           </div>

//           <p className="text-slate-400 text-sm">
//             © 2026 Pets Amigos. <br/> Todos os direitos reservados.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }
// "use client";
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { 
//   LayoutDashboard, 
//   PawPrint, 
//   Users, 
//   ClipboardCheck, 
//   LogOut, 
//   Plus, 
//   Search,
//   CheckCircle2,
//   XCircle,
//   Heart,
//   Clock
// } from 'lucide-react';

// // --- COMPONENTES DE TELA (MOCKS) ---

// // 1. Galeria de Animais (ONG logada)
// const AnimalsGallery = () => (
//   <div className="p-6">
//     <div className="flex justify-between items-center mb-8">
//       <h2 className="text-2xl font-bold text-slate-800">Meus Resgatados</h2>
//       <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
//         <Plus size={20} /> Cadastrar Animal
//       </button>
//     </div>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {[
//         { id: 1, name: 'Bento', species: 'Cão', breed: 'SRD - Porte Médio', img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400' },
//         { id: 2, name: 'Mingau', species: 'Gato', breed: 'Siamês', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400' },
//       ].map(pet => (
//         <div key={pet.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
//           <img src={pet.img} className="h-48 w-full object-cover" alt={pet.name} />
//           <div className="p-4">
//             <h3 className="font-bold text-lg">{pet.name}</h3>
//             <p className="text-slate-500 text-sm">{pet.species} • {pet.breed}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// // 2. Gerenciamento de Adotantes
// const AdoptersList = () => (
//   <div className="p-6">
//     <h2 className="text-2xl font-bold mb-6">Base de Adotantes</h2>
//     <div className="bg-white border border-slate-200 rounded-xl overflow-hidden text-black">
//       <table className="w-full text-left border-collapse">
//         <thead className="bg-slate-50 border-b border-slate-200">
//           <tr>
//             <th className="p-4 font-semibold">Nome</th>
//             <th className="p-4 font-semibold">Contato</th>
//             <th className="p-4 font-semibold">Endereço (CEP)</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="border-b border-slate-100 hover:bg-slate-50 transition text-slate-700">
//             <td className="p-4 font-medium">Ricardo Silva</td>
//             <td className="p-4 text-sm">(11) 99999-8888</td>
//             <td className="p-4 text-sm italic text-slate-500 underline decoration-teal-300">Rua das Flores, 123 (Auto-preenchido via CEP)</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   </div>
// );

// // 3. Controle de Processos de Adoção
// const AdoptionProcesses = () => (
//   <div className="p-6">
//     <h2 className="text-2xl font-bold mb-6">Processos de Adoção</h2>
//     <div className="space-y-4">
//       {[
//         { pet: 'Bento', user: 'Ricardo Silva', date: '27/02/2026', status: 'Em Análise', icon: <Clock className="text-amber-500" /> },
//         { pet: 'Mingau', user: 'Ana Souza', date: '25/02/2026', status: 'Aprovado', icon: <CheckCircle2 className="text-emerald-500" /> },
//       ].map((proc, i) => (
//         <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between shadow-sm">
//           <div className="flex items-center gap-4">
//             <div className="p-2 bg-slate-100 rounded-full">{proc.icon}</div>
//             <div>
//               <p className="font-bold">{proc.pet} <span className="font-normal text-slate-400">para</span> {proc.user}</p>
//               <p className="text-xs text-slate-500 italic">Iniciado em {proc.date}</p>
//             </div>
//           </div>
//           <div className="flex gap-2">
//             <button className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-md text-sm font-bold hover:bg-emerald-200">Aprovar</button>
//             <button className="px-3 py-1 bg-red-100 text-red-700 rounded-md text-sm font-bold hover:bg-red-200">Rejeitar</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// // --- LAYOUT PRINCIPAL (DASHBOARD) ---

// export default function PetRescueDashboard() {
//   const [activeTab, setActiveTab] = useState('animals');
//   const [isLogged, setIsLogged] = useState(false);

//   // Tela de Login (Mock)
//   if (!isLogged) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-stone-50 p-6">
//         <div className="w-full max-w-md bg-white p-10 rounded-[2rem] shadow-2xl border border-stone-100">
//           <div className="flex justify-center mb-6 text-teal-600">
//             <Heart size={48} className="fill-current" />
//           </div>
//           <h1 className="text-3xl font-black text-center mb-2">PetRescue <span className="text-orange-500">ONG</span></h1>
//           <p className="text-center text-slate-400 mb-8">Gerencie seus resgatados com amor.</p>
          
//           <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsLogged(true); }}>
//             <div>
//               <label className="block text-sm font-bold mb-1 text-slate-700 italic">E-mail da ONG</label>
//               <input type="email" placeholder="ong@contato.com" className="w-full p-4 bg-stone-100 border-none rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none transition" required />
//             </div>
//             <div>
//               <label className="block text-sm font-bold mb-1 text-slate-700 italic">Senha</label>
//               <input type="password" placeholder="••••••••" className="w-full p-4 bg-stone-100 border-none rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none transition" required />
//             </div>
//             <button type="submit" className="w-full bg-slate-900 hover:bg-orange-500 text-white font-black py-4 rounded-2xl transition-all duration-300 shadow-lg">
//               Entrar no Painel
//             </button>
//           </form>
//           <p className="text-center mt-6 text-sm text-slate-400">
//             Ainda não tem cadastro? <span className="text-teal-600 font-bold cursor-pointer hover:underline">Registrar ONG</span>
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex min-h-screen bg-stone-50">
//       {/* SIDEBAR */}
//       <aside className="w-72 bg-white border-r border-stone-200 flex flex-col p-6 sticky top-0 h-screen">
//         <div className="flex items-center gap-2 font-black text-teal-600 text-2xl mb-12">
//           <Heart className="fill-current" /> <span>PetRescue</span>
//         </div>

//         <nav className="space-y-2 flex-1 font-medium">
//           <button 
//             onClick={() => setActiveTab('animals')}
//             className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all ${activeTab === 'animals' ? 'bg-teal-50 text-teal-700 border-r-4 border-teal-600' : 'hover:bg-stone-100 text-slate-500'}`}
//           >
//             <PawPrint size={20} /> Meus Animais
//           </button>
//           <button 
//             onClick={() => setActiveTab('adopters')}
//             className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all ${activeTab === 'adopters' ? 'bg-teal-50 text-teal-700 border-r-4 border-teal-600' : 'hover:bg-stone-100 text-slate-500'}`}
//           >
//             <Users size={20} /> Adotantes
//           </button>
//           <button 
//             onClick={() => setActiveTab('process')}
//             className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all ${activeTab === 'process' ? 'bg-teal-50 text-teal-700 border-r-4 border-teal-600' : 'hover:bg-stone-100 text-slate-500'}`}
//           >
//             <ClipboardCheck size={20} /> Processos
//           </button>
//         </nav>

//         <button 
//           onClick={() => setIsLogged(false)}
//           className="flex items-center gap-3 p-4 text-red-400 hover:text-red-600 font-bold transition"
//         >
//           <LogOut size={20} /> Sair
//         </button>
//       </aside>

//       {/* CONTEÚDO DINÂMICO */}
//       <main className="flex-1 overflow-y-auto">
//         <header className="bg-white border-b border-stone-200 p-6 flex justify-between items-center sticky top-0 z-10">
//           <div className="flex items-center gap-4 bg-stone-100 px-4 py-2 rounded-xl w-96">
//             <Search size={18} className="text-slate-400" />
//             <input type="text" placeholder="Buscar no sistema..." className="bg-transparent border-none outline-none text-sm w-full" />
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="text-right hidden md:block">
//               <p className="text-sm font-black text-slate-800 italic">ONG Patas Livres</p>
//               <p className="text-xs text-emerald-500 font-bold uppercase tracking-tighter tracking-widest">Painel Ativo</p>
//             </div>
//             <div className="w-10 h-10 bg-orange-100 rounded-full border-2 border-orange-200 flex items-center justify-center text-orange-600 font-bold">PL</div>
//           </div>
//         </header>

//         {activeTab === 'animals' && <AnimalsGallery />}
//         {activeTab === 'adopters' && <AdoptersList />}
//         {activeTab === 'process' && <AdoptionProcesses />}
//       </main>
//     </div>
//   );
// }
import React from 'react';
import Link from 'next/link';
import { Heart, Dog, Cat, User, ArrowRight, CheckCircle, MapPin } from 'lucide-react';

export default function PetRescueLanding() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-800 font-sans">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 font-black text-teal-600 text-2xl tracking-tight">
            <Heart className="fill-teal-600" size={28} /> 
            <span>Pet<span className="text-orange-500">Rescue</span></span>
          </Link>
          
          <div className="hidden md:flex gap-8 font-bold text-slate-600 uppercase text-xs tracking-widest">
            <Link href="#galeria" className="hover:text-teal-600 transition">Animais</Link>
            <Link href="#ong" className="hover:text-teal-600 transition">Para ONGs</Link>
            <Link href="#contato" className="hover:text-teal-600 transition">Contato</Link>
          </div>

          <Link 
            href="/login" 
            className="flex items-center gap-2 bg-slate-900 hover:bg-teal-600 text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg"
          >
            <User size={18} />
            Acesso ONG
          </Link>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative h-[90vh] flex items-center justify-center bg-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=2000" 
            alt="Cães correndo" 
            className="w-full h-full object-cover mix-blend-overlay opacity-40"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight tracking-tighter">
            Encontre seu <br/> 
            <span className="text-orange-400">melhor amigo.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-teal-50 max-w-2xl mx-auto leading-relaxed font-medium">
            Conectamos ONGs comprometidas a pessoas que buscam transformar vidas através da adoção responsável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#galeria" className="bg-orange-500 hover:bg-orange-600 text-white font-black py-5 px-10 rounded-2xl text-lg shadow-xl transition-all hover:scale-105 active:scale-95">
              Quero Adotar
            </Link>
            <Link href="/cadastro-ong" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/30 font-bold py-5 px-10 rounded-2xl text-lg transition-all">
              Sou uma ONG
            </Link>
          </div>
        </div>
      </header>

      {/* --- GALERIA DE ANIMAIS --- */}
      <section id="galeria" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-l-8 border-orange-500 pl-6">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-2 uppercase">Recém Resgatados</h2>
            <p className="text-slate-500 text-lg italic">Filtrado por ONGs parceiras na sua região.</p>
          </div>
          <button className="flex items-center gap-2 text-teal-600 font-black hover:gap-4 transition-all uppercase text-sm tracking-widest">
            Ver galeria completa <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { name: 'Pipoca', breed: 'Vira-lata (SRD)', tag: 'Cão', img: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600', ong: 'Patas Livres' },
            { name: 'Mingau', breed: 'Siamês Mix', tag: 'Gato', img: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600', ong: 'Gatos & Cia' },
            { name: 'Bento', breed: 'Golden Retriever', tag: 'Cão', img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600', ong: 'Abrigo Feliz' },
          ].map((pet, index) => (
            <div key={index} className="group bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-200 overflow-hidden">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={pet.img} 
                  alt={pet.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-slate-800 shadow-sm">
                    {pet.tag}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-black text-slate-800 mb-1">{pet.name}</h3>
                  <p className="text-slate-400 font-bold flex items-center gap-1 text-sm uppercase">
                    <MapPin size={14} className="text-orange-500" /> {pet.ong}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-stone-100 pt-6">
                  <span className="text-slate-500 font-medium italic">{pet.breed}</span>
                  <button className="bg-teal-50 text-teal-700 p-3 rounded-full hover:bg-teal-600 hover:text-white transition-colors">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SEÇÃO PARA ONGS --- */}
      <section id="ong" className="bg-slate-900 py-24 px-6 rounded-[4rem] mx-4 mb-24 overflow-hidden relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Sua ONG com gestão <span className="text-teal-400 italic font-light font-serif text-5xl lowercase">profissional.</span></h2>
            <div className="space-y-6 mb-10">
              {[
                'Gestão individual por ONG (dados privados)',
                'Controle de status de adoção em tempo real',
                'Cadastro rápido com dicas de raças',
                'Histórico de adotantes e endereços'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-300">
                  <CheckCircle className="text-orange-500" size={24} />
                  <span className="font-medium text-lg">{text}</span>
                </div>
              ))}
            </div>
            <Link href="/login" className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-black py-4 px-10 rounded-2xl text-lg transition-transform hover:-translate-y-1">
              Começar a Gerenciar
            </Link>
          </div>
          <div className="bg-white/5 p-8 rounded-[3rem] border border-white/10 backdrop-blur-sm">
             <div className="space-y-4">
                <div className="h-4 w-1/3 bg-white/20 rounded-full"></div>
                <div className="h-24 w-full bg-white/10 rounded-2xl"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-teal-500/20 rounded-2xl border border-teal-500/30"></div>
                  <div className="h-20 bg-orange-500/20 rounded-2xl border border-orange-500/30"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contato" className="bg-stone-100 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 font-black text-teal-600 text-2xl mb-6 uppercase">
              <Heart className="fill-teal-600" size={24} /> <span>PetRescue</span>
            </div>
            <p className="text-slate-500 font-medium">Plataforma dedicada ao suporte logístico de ONGs e proteção animal.</p>
          </div>
          <div className="space-y-4 text-slate-600 font-bold uppercase text-sm tracking-widest">
            <p className="text-slate-400 mb-2">Links Rápidos</p>
            <Link href="#" className="block hover:text-orange-500 transition underline underline-offset-4 decoration-stone-300">Privacidade</Link>
            <Link href="#" className="block hover:text-orange-500 transition underline underline-offset-4 decoration-stone-300">Termos de Uso</Link>
          </div>
          <div className="flex flex-col items-center md:items-end">
             <p className="text-slate-400 text-sm font-bold mb-4 italic">© 2026 PetRescue System</p>
             <div className="w-12 h-1 text-orange-500 bg-orange-500 rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}