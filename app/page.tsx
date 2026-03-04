// "use client";

// import React from 'react';

// export default function LandingPage() {
//   return (
//     <div className="min-h-screen bg-white font-[family-name:var(--font-poppins)] selection:bg-[#BDB2FF] selection:text-white">
      
//       {/* --- HERO SECTION: CONECTANDO VIDAS --- */}
//       <section className="w-full bg-[#BDB2FF]/10 pt-20 pb-28 px-6 overflow-hidden">
//         <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 items-center">
          
//           <div className="col-span-12 lg:col-span-7">
//             <span className="bg-[#FF69EB]/10 text-[#FF69EB] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 inline-block">
//               Encontre seu match perfeito
//             </span>
//             <h1 className="text-slate-800 text-6xl md:text-7xl font-[900] leading-[1.1] tracking-tighter mb-8">
//               Onde o amor <br/>
//               <span className="text-[#BDB2FF]">encontra um lar.</span>
//             </h1>
//             <p className="text-slate-500 text-xl font-medium max-w-xl mb-10 leading-relaxed">
//               Uma plataforma segura que conecta ONGs comprometidas a pessoas que desejam adotar com responsabilidade.
//             </p>
            
//             {/* CTA Duplo: Foco no Adotante e na ONG */}
//             <div className="flex flex-wrap gap-4">
//               <button className="bg-[#BDB2FF] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-[#BDB2FF]/30">
//                 Quero Adotar um Pet
//               </button>
//               <button className="bg-white text-slate-600 border-2 border-slate-100 px-8 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
//                 Sou uma ONG / Protetor
//               </button>
//             </div>
//           </div>

//           {/* Galeria Visual (O que o adotante vê) */}
//           <div className="col-span-12 lg:col-span-5 relative">
//              <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-white p-3 rounded-[2.5rem] shadow-xl border border-slate-50 rotate-[-4deg] hover:rotate-0 transition-transform">
//                    <div className="aspect-square bg-slate-100 rounded-[2rem] mb-4 bg-[url('https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400')] bg-cover"></div>
//                    <p className="text-center font-bold text-slate-700">Buddy, 2 anos</p>
//                 </div>
//                 <div className="bg-white p-3 rounded-[2.5rem] shadow-xl border border-slate-50 rotate-[4deg] mt-8 hover:rotate-0 transition-transform">
//                    <div className="aspect-square bg-slate-100 rounded-[2rem] mb-4 bg-[url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400')] bg-cover"></div>
//                    <p className="text-center font-bold text-slate-700">Mimi, 1 ano</p>
//                 </div>
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* --- FLUXO PARA OS DOIS PÚBLICOS --- */}
//       <section className="w-full py-24 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
//             {/* Lado Adotante */}
//             <div className="space-y-8">
//                <h3 className="text-3xl font-black text-slate-800 tracking-tight flex items-center gap-3 italic">
//                  <span className="w-10 h-10 bg-[#9BF6FF] rounded-full flex items-center justify-center not-italic">🐾</span>
//                  Para quem quer Adotar
//                </h3>
//                <div className="space-y-6">
//                   <div className="flex gap-4 items-start">
//                      <div className="text-[#9BF6FF] text-2xl font-black">01</div>
//                      <p className="text-slate-500 font-medium">Explore a <strong>Galeria de Animais</strong> com fotos reais e características detalhadas do temperamento de cada pet.</p>
//                   </div>
//                   <div className="flex gap-4 items-start">
//                      <div className="text-[#9BF6FF] text-2xl font-black">02</div>
//                      <p className="text-slate-500 font-medium">Cadastre seu endereço rapidamente via <strong>CEP</strong> e inicie seu processo de adoção com um clique.</p>
//                   </div>
//                   <div className="flex gap-4 items-start">
//                      <div className="text-[#9BF6FF] text-2xl font-black">03</div>
//                      <p className="text-slate-500 font-medium">Acompanhe o <strong>Status da sua Adoção</strong> (Em Análise, Aprovado ou Rejeitado) em tempo real.</p>
//                   </div>
//                </div>
//             </div>

//             {/* Lado ONG */}
//             <div className="space-y-8">
//                <h3 className="text-3xl font-black text-slate-800 tracking-tight flex items-center gap-3 italic">
//                  <span className="w-10 h-10 bg-[#FFDC5E] rounded-full flex items-center justify-center not-italic">🏠</span>
//                  Para ONGs e Protetores
//                </h3>
//                <div className="space-y-6">
//                   <div className="flex gap-4 items-start">
//                      <div className="text-[#FFDC5E] text-2xl font-black">01</div>
//                      <p className="text-slate-500 font-medium">Gerencie sua <strong>Galeria Privada</strong>. O sistema garante que você só visualize os animais resgatados pela sua ONG.</p>
//                   </div>
//                   <div className="flex gap-4 items-start">
//                      <div className="text-[#FFDC5E] text-2xl font-black">02</div>
//                      <p className="text-slate-500 font-medium">Use a <strong>Sugestão de Características</strong> automática para descrever raças e comportamentos rapidamente.</p>
//                   </div>
//                   <div className="flex gap-4 items-start">
//                      <div className="text-[#FFDC5E] text-2xl font-black">03</div>
//                      <p className="text-slate-500 font-medium">Acesso seguro com <strong>E-mail e Senha</strong>, mantendo os dados dos seus adotantes protegidos e organizados.</p>
//                   </div>
//                </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* --- CARDS TÉCNICOS (RESUMO DAS ENTIDADES) --- */}
//       <section className="w-full py-20 px-6 bg-slate-50/50">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
//           <div className="bg-white p-8 rounded-[2rem] border border-slate-100 text-center">
//             <p className="text-[#BDB2FF] font-black text-2xl mb-1">Entidade</p>
//             <p className="font-bold text-slate-700">Animal</p>
//             <p className="text-xs text-slate-400 mt-2 italic">Fotos, Espécie e Raça</p>
//           </div>
//           <div className="bg-white p-8 rounded-[2rem] border border-slate-100 text-center">
//             <p className="text-[#9BF6FF] font-black text-2xl mb-1">Entidade</p>
//             <p className="font-bold text-slate-700">Adotante</p>
//             <p className="text-xs text-slate-400 mt-2 italic">Cadastro via CEP</p>
//           </div>
//           <div className="bg-white p-8 rounded-[2rem] border border-slate-100 text-center">
//             <p className="text-[#FF69EB] font-black text-2xl mb-1">Entidade</p>
//             <p className="font-bold text-slate-700">Processo</p>
//             <p className="text-xs text-slate-400 mt-2 italic">Status em Tempo Real</p>
//           </div>
//           <div className="bg-white p-8 rounded-[2rem] border border-slate-100 text-center">
//             <p className="text-[#FFDC5E] font-black text-2xl mb-1">Entidade</p>
//             <p className="font-bold text-slate-700">ONG</p>
//             <p className="text-xs text-slate-400 mt-2 italic">Silo de Dados Seguro</p>
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

//         <p className="text-slate-400 text-sm">
//             © 2026 Pets Amigos. <br/> Todos os direitos reservados.
//            </p>
//          </div>
//       </footer>
//     </div>
//    );
//  }

// import React from 'react';
// import Link from 'next/link';
// import { Heart, Dog, Cat, User, ArrowRight, CheckCircle, MapPin } from 'lucide-react';

// export default function PetRescueLanding() {
//   return (
//     <div className="min-h-screen bg-stone-50 text-slate-800 font-sans">
      
//       {/* --- NAVBAR --- */}
//       <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 px-6 py-4">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <Link href="/" className="flex items-center gap-2 font-black text-teal-600 text-2xl tracking-tight">
//             <Heart className="fill-teal-600" size={28} /> 
//             <span>Pet<span className="text-orange-500">Rescue</span></span>
//           </Link>
          
//           <div className="hidden md:flex gap-8 font-bold text-slate-600 uppercase text-xs tracking-widest">
//             <Link href="#galeria" className="hover:text-teal-600 transition">Animais</Link>
//             <Link href="#ong" className="hover:text-teal-600 transition">Para ONGs</Link>
//             <Link href="#contato" className="hover:text-teal-600 transition">Contato</Link>
//           </div>

//           <Link 
//             href="/login" 
//             className="flex items-center gap-2 bg-slate-900 hover:bg-teal-600 text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg"
//           >
//             <User size={18} />
//             Acesso ONG
//           </Link>
//         </div>
//       </nav>

//       {/* --- HERO SECTION --- */}
//       <header className="relative h-[90vh] flex items-center justify-center bg-teal-700 text-white overflow-hidden">
//         <div className="absolute inset-0">
//           <img 
//             src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=2000" 
//             alt="Cães correndo" 
//             className="w-full h-full object-cover mix-blend-overlay opacity-40"
//           />
//         </div>
//         <div className="relative z-10 text-center px-4 max-w-4xl">
//           <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight tracking-tighter">
//             Encontre seu <br/> 
//             <span className="text-orange-400">melhor amigo.</span>
//           </h1>
//           <p className="text-xl md:text-2xl mb-10 text-teal-50 max-w-2xl mx-auto leading-relaxed font-medium">
//             Conectamos ONGs comprometidas a pessoas que buscam transformar vidas através da adoção responsável.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="#galeria" className="bg-orange-500 hover:bg-orange-600 text-white font-black py-5 px-10 rounded-2xl text-lg shadow-xl transition-all hover:scale-105 active:scale-95">
//               Quero Adotar
//             </Link>
//             <Link href="/cadastro-ong" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/30 font-bold py-5 px-10 rounded-2xl text-lg transition-all">
//               Sou uma ONG
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* --- GALERIA DE ANIMAIS --- */}
//       <section id="galeria" className="py-24 px-6 max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-l-8 border-orange-500 pl-6">
//           <div>
//             <h2 className="text-4xl font-black text-slate-900 mb-2 uppercase">Recém Resgatados</h2>
//             <p className="text-slate-500 text-lg italic">Filtrado por ONGs parceiras na sua região.</p>
//           </div>
//           <button className="flex items-center gap-2 text-teal-600 font-black hover:gap-4 transition-all uppercase text-sm tracking-widest">
//             Ver galeria completa <ArrowRight size={20} />
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {[
//             { name: 'Pipoca', breed: 'Vira-lata (SRD)', tag: 'Cão', img: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600', ong: 'Patas Livres' },
//             { name: 'Mingau', breed: 'Siamês Mix', tag: 'Gato', img: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600', ong: 'Gatos & Cia' },
//             { name: 'Bento', breed: 'Golden Retriever', tag: 'Cão', img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600', ong: 'Abrigo Feliz' },
//           ].map((pet, index) => (
//             <div key={index} className="group bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-200 overflow-hidden">
//               <div className="relative h-80 overflow-hidden">
//                 <img 
//                   src={pet.img} 
//                   alt={pet.name} 
//                   className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
//                 />
//                 <div className="absolute top-4 left-4 flex gap-2">
//                   <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-slate-800 shadow-sm">
//                     {pet.tag}
//                   </span>
//                 </div>
//               </div>
//               <div className="p-8">
//                 <div className="mb-6">
//                   <h3 className="text-3xl font-black text-slate-800 mb-1">{pet.name}</h3>
//                   <p className="text-slate-400 font-bold flex items-center gap-1 text-sm uppercase">
//                     <MapPin size={14} className="text-orange-500" /> {pet.ong}
//                   </p>
//                 </div>
//                 <div className="flex items-center justify-between border-t border-stone-100 pt-6">
//                   <span className="text-slate-500 font-medium italic">{pet.breed}</span>
//                   <button className="bg-teal-50 text-teal-700 p-3 rounded-full hover:bg-teal-600 hover:text-white transition-colors">
//                     <ArrowRight size={20} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- SEÇÃO PARA ONGS --- */}
//       <section id="ong" className="bg-slate-900 py-24 px-6 rounded-[4rem] mx-4 mb-24 overflow-hidden relative">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <div className="text-white">
//             <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Sua ONG com gestão <span className="text-teal-400 italic font-light font-serif text-5xl lowercase">profissional.</span></h2>
//             <div className="space-y-6 mb-10">
//               {[
//                 'Gestão individual por ONG (dados privados)',
//                 'Controle de status de adoção em tempo real',
//                 'Cadastro rápido com dicas de raças',
//                 'Histórico de adotantes e endereços'
//               ].map((text, i) => (
//                 <div key={i} className="flex items-center gap-4 text-slate-300">
//                   <CheckCircle className="text-orange-500" size={24} />
//                   <span className="font-medium text-lg">{text}</span>
//                 </div>
//               ))}
//             </div>
//             <Link href="/login" className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-black py-4 px-10 rounded-2xl text-lg transition-transform hover:-translate-y-1">
//               Começar a Gerenciar
//             </Link>
//           </div>
//           <div className="bg-white/5 p-8 rounded-[3rem] border border-white/10 backdrop-blur-sm">
//              <div className="space-y-4">
//                 <div className="h-4 w-1/3 bg-white/20 rounded-full"></div>
//                 <div className="h-24 w-full bg-white/10 rounded-2xl"></div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="h-20 bg-teal-500/20 rounded-2xl border border-teal-500/30"></div>
//                   <div className="h-20 bg-orange-500/20 rounded-2xl border border-orange-500/30"></div>
//                 </div>
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* --- FOOTER --- */}
//       <footer id="contato" className="bg-stone-100 py-20 px-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
//           <div>
//             <div className="flex items-center justify-center md:justify-start gap-2 font-black text-teal-600 text-2xl mb-6 uppercase">
//               <Heart className="fill-teal-600" size={24} /> <span>PetRescue</span>
//             </div>
//             <p className="text-slate-500 font-medium">Plataforma dedicada ao suporte logístico de ONGs e proteção animal.</p>
//           </div>
//           <div className="space-y-4 text-slate-600 font-bold uppercase text-sm tracking-widest">
//             <p className="text-slate-400 mb-2">Links Rápidos</p>
//             <Link href="#" className="block hover:text-orange-500 transition underline underline-offset-4 decoration-stone-300">Privacidade</Link>
//             <Link href="#" className="block hover:text-orange-500 transition underline underline-offset-4 decoration-stone-300">Termos de Uso</Link>
//           </div>
//           <div className="flex flex-col items-center md:items-end">
//              <p className="text-slate-400 text-sm font-bold mb-4 italic">© 2026 PetRescue System</p>
//              <div className="w-12 h-1 text-orange-500 bg-orange-500 rounded-full"></div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

import React from 'react';
import Link from 'next/link';
// Usando SVGs manuais (w3.org) conforme solicitado anteriormente para manter consistência
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-800 font-sans selection:bg-teal-100">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 font-black text-teal-600 text-2xl tracking-tight group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-teal-600 group-hover:scale-110 transition-transform">
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001Z" />
            </svg>
            <span>PET<span className="text-orange-500 underline decoration-2 underline-offset-4">RESCUE</span></span>
          </Link>
          
          <div className="hidden md:flex gap-8 font-medium text-slate-600">
            <Link href="#galeria" className="hover:text-teal-600 transition">Animais</Link>
            <Link href="#sobre" className="hover:text-teal-600 transition">Como funciona</Link>
            <Link href="#contato" className="hover:text-teal-600 transition">Contato</Link>
          </div>

          <Link 
            href="/login" 
            className="group relative flex items-center"
          >
            <div className="flex items-center gap-2 bg-[#1e293b] hover:bg-[#0f172a] text-white pl-5 pr-8 py-2.5 rounded-full font-bold transition-all duration-300 shadow-md z-10 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              Acesso ONG
            </div>
            <div className="absolute right-[-4px] w-10 h-full bg-orange-500 rounded-full z-0 group-hover:right-[-6px] transition-all"></div>
          </Link>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative h-screen flex items-center justify-center bg-teal-700 text-white overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=2000" 
            alt="Resgate animal" 
            className="w-full h-full object-cover mix-blend-overlay opacity-50"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
            🐶 Unindo ONGs e Adotantes em uma só rede
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight tracking-tighter">
            Amor não se compra, <br/> 
            <span className="text-orange-400">se adota.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-teal-50 max-w-2xl mx-auto leading-relaxed">
            Dê um novo começo para quem só conhece a solidão. A PetRescue ajuda sua ONG a gerenciar resgates e encontrar o lar perfeito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#galeria" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 px-10 rounded-2xl text-lg shadow-xl transition-all hover:scale-105 active:scale-95">
              Encontrar meu pet
            </Link>
            <Link href="/login" className="bg-white hover:bg-teal-50 text-teal-700 font-bold py-5 px-10 rounded-2xl text-lg shadow-xl transition-all border-b-4 border-stone-200 active:border-b-0">
              Sou uma ONG
            </Link>
          </div>
        </div>
      </header>

      {/* --- GALERIA DE ANIMAIS --- */}
      <section id="galeria" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Esperando por um lar</h2>
            <p className="text-slate-500 text-lg">Conheça alguns dos nossos amigos que estão prontos para ir para casa.</p>
          </div>
          <button className="flex items-center gap-2 text-teal-600 font-bold hover:gap-4 transition-all group">
            Ver todos os animais 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { name: 'Pipoca', tag: 'Dócil', age: '2 anos', img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600', color: 'bg-blue-100 text-blue-700' },
            { name: 'Mingau', tag: 'Brincalhão', age: '5 meses', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600', color: 'bg-purple-100 text-purple-700' },
            { name: 'Bento', tag: 'Protetor', age: '4 anos', img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600', color: 'bg-orange-100 text-orange-700' },
          ].map((pet, index) => (
            <div key={index} className="group bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 overflow-hidden">
              <div className="relative h-72 overflow-hidden">
                <img src={pet.img} alt={pet.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <span className={`absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${pet.color}`}>
                  {pet.tag}
                </span>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-black text-slate-800">{pet.name}</h3>
                  <span className="text-slate-400 font-medium">{pet.age}</span>
                </div>
                <button className="w-full bg-stone-100 hover:bg-teal-600 hover:text-white text-slate-600 font-bold py-4 rounded-xl transition-colors duration-300">
                  Conhecer história
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROCESSO DE ADOÇÃO --- */}
      <section id="sobre" className="bg-slate-900 py-24 px-6 rounded-[3rem] mx-4 mb-24 overflow-hidden relative text-white text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-white leading-tight">Adotar na <span className="text-teal-400">PetRescue</span> é simples:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl rotate-3 flex items-center justify-center mx-auto mb-8 text-white font-black text-2xl shadow-lg">01</div>
              <h4 className="text-xl font-bold mb-4 italic">O "Match" Perfeito</h4>
              <p className="text-slate-400">Escolha o pet que mais combina com seu estilo de vida e rotina.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-teal-500 rounded-2xl -rotate-3 flex items-center justify-center mx-auto mb-8 text-white font-black text-2xl shadow-lg">02</div>
              <h4 className="text-xl font-bold mb-4 italic">A Entrevista</h4>
              <p className="text-slate-400">A ONG responsável fará um papo rápido para validar a adoção.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl rotate-6 flex items-center justify-center mx-auto mb-8 text-white font-black text-2xl shadow-lg">03</div>
              <h4 className="text-xl font-bold mb-4 italic">A Entrega</h4>
              <p className="text-slate-400">Agora é só preparar a caminha e curtir o novo membro da família!</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contato" className="bg-stone-50 py-16 px-6 border-t border-stone-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 font-black text-teal-600 text-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001Z" />
              </svg>
              <span>PETRESCUE</span>
            </div>
            <p className="text-slate-500 max-w-xs">Plataforma dedicada a conectar ONGs e adotantes para salvar vidas animais desde 2018.</p>
          </div>
          
          <div className="flex gap-4">
             <div className="text-center md:text-right">
                <p className="text-slate-400 text-sm">
                  © {new Date().getFullYear()} PetRescue. <br/> Todos os direitos reservados.
                </p>
             </div>
          </div>
        </div>
      </footer>
    </div>
  )}