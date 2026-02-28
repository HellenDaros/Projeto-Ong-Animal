import Footer from "../components/Footer"
import Header from "../components/Header"

export default function SistemaLayout({children}:{
    children: React.ReactNode
}){
    return(
        <div className="flex flex-col min-h-screen">
                  {/* <Sidebar/> */}
                  <Header />
                  
                  <main className="flex-1">
                    {/* Div interna que envolve o conteúdo, com espaçamento e cor suave */}
                    <div className="max-w-7xl mx-auto p-6 sm:p-8">
                      {children}  
                    </div>
                  </main>
                  
                  <Footer />
                </div>
    )
}
