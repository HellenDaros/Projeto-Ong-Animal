package com.senac.backend.backend.controllers;

import com.senac.backend.backend.model.DTO.AlterarStatusRequest;
import com.senac.backend.backend.model.entities.Usuario;
import com.senac.backend.backend.model.repository.UsuarioRepository;
<<<<<<< HEAD
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
=======
>>>>>>> 8c27e9341bb309bb63a2a895e6a177024741aecb
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping ("/usuarios")

<<<<<<< HEAD
@Tag(name = "Gestão de Usuários", description = "Serviços para controle dos usuários")
=======
>>>>>>> 8c27e9341bb309bb63a2a895e6a177024741aecb
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping
<<<<<<< HEAD
    @Operation(summary = "Listar todos", description = "Retorna a lista completa de usuários cadastrados")
=======
>>>>>>> 8c27e9341bb309bb63a2a895e6a177024741aecb
    public ResponseEntity<?> listarTodos(){

        var usuarios = usuarioRepository.findAll();
        return ResponseEntity.ok(usuarios);
    }

    @GetMapping("/{id}")
<<<<<<< HEAD
    @Operation(summary = "Buscar por ID", description = "Busca os detalhes de um usuário específico através do código identificador")
=======
>>>>>>> 8c27e9341bb309bb63a2a895e6a177024741aecb
    public ResponseEntity<Usuario> buscarPorId(@PathVariable Long id){
        return  ResponseEntity.ok(usuarioRepository.findById(id).orElse(null));
    }

    @PostMapping
<<<<<<< HEAD
    @Operation(summary = "Criar novo usuário", description = "Cadastra um novo usuário no sistema")
=======
>>>>>>> 8c27e9341bb309bb63a2a895e6a177024741aecb
    public ResponseEntity<Long> salvar(@RequestBody Usuario usuario){
        return ResponseEntity.ok(usuarioRepository.save(usuario).getId());
    }

    @PutMapping("/{id}")
<<<<<<< HEAD
    @Operation(summary = "Atualizar usuário", description = "Altera os dados de um usuário existente")
=======
>>>>>>> 8c27e9341bb309bb63a2a895e6a177024741aecb
    public ResponseEntity<?> salvar(@PathVariable Long id, @RequestBody Usuario usuario){

        var usuarioBanco = usuarioRepository.findById(id).orElse(null);

        if (usuarioBanco != null){
            usuarioBanco.setEmail(usuario.getEmail());
            usuarioBanco.setName(usuario.getName());
            usuarioBanco.setSenha(usuario.getSenha());
            usuarioBanco.setStatus(usuario.getStatus());
            usuarioRepository.save(usuarioBanco);

            return ResponseEntity.ok("Atualizado com sucesso!");
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}/AlterarStatus")
<<<<<<< HEAD
    @Operation(summary = "Alterar Status", description = "Ativa ou inativa um usuário")
=======
>>>>>>> 8c27e9341bb309bb63a2a895e6a177024741aecb
    public  ResponseEntity<?> AlterarStatus(@PathVariable Long id, @RequestBody AlterarStatusRequest statusRequest) {
        var usuarioBanco = usuarioRepository.findById(id).orElse(null);
        if (usuarioBanco != null){
            usuarioBanco.setStatus(statusRequest.status());
            usuarioRepository.save(usuarioBanco);
            return ResponseEntity.ok("Atualizado com sucesso!");
    }
        return ResponseEntity.notFound().build();
    }

}
