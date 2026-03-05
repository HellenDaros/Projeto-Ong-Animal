import Footer from "../components/Footer"
import Header from "../components/Header"

export default function SistemaLayout({children}:{
    children: React.ReactNode
}){
    return(
        <div className="flex flex-col min-h-screen">

                  <Header />
                  
                 <main className="flex-1 flex flex-col">
                 {children}
                </main>
                  
                  <Footer />
                </div>
    )
}
