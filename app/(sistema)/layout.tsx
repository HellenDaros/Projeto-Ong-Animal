import Footer from "../components/Footer"
import Header from "../components/Header"

export default function SistemaLayout({children}:{
    children: React.ReactNode
}){
return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <Header />
      
      {/* 1. Adicionamos pt-[80px] para compensar o Header fixo.
         2. Usamos flex-1 e justify-center para tentar centralizar,
            mas permitimos que o conteúdo cresça se for maior que a tela.
      */}
      <main className="flex-1 flex flex-col items-center justify-center pt-[100px] pb-12 px-4">
          {children}
      </main>

      <Footer />
    </div>
  );
}
