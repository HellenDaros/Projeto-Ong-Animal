import { Usuario } from "../context/AuthContext";

export class UsuarioMock{

    private static usuarioDB: Usuario[] = [
                new Usuario(1,"Hellen Daros", "46566356", true),
                new Usuario(2,"João Silva", "9556635566", true),
                new Usuario(3,"Maria Souza", "659856896", true),
                new Usuario(4,"Lucas Gomes", "685406665", true),
                new Usuario(5,"Fernanda Ferreira", "49856985", true),
    ]; 
    
    static async listarTodos(): Promise<Usuario[]>{
        return [...this.usuarioDB]
    }

    static async salvar(usuario: Usuario):Promise<void>{

        const indexExistente = this.usuarioDB.findIndex(u=> u.codigo === usuario.codigo)

        if (indexExistente === -1){

        const novoCodigo = Math.max(...this.usuarioDB.map(u=>u.codigo)) + 1;

        usuario.codigo = novoCodigo

        this.usuarioDB.push(usuario)

        console.log(`Usuario Id${novoCodigo} salvo com sucesso`)

        } else{
            this.usuarioDB[indexExistente].name = usuario.name
            this.usuarioDB[indexExistente].cpf = usuario.cpf

            console.log(`Usuario Id${usuario.codigo} atualizado com sucesso!`)
        }

        
    } 

    static async buscarPorId(codigo: Number): Promise<Usuario| undefined>{

        return this.usuarioDB.find(u=>u.codigo === codigo)

    }
}