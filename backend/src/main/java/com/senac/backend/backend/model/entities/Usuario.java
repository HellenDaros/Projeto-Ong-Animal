package com.senac.backend.backend.model.entities;

import com.senac.backend.backend.model.enuns.EnumStatusUsuario;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table (name = "usuario")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;


    private String senha;

    private EnumStatusUsuario status = EnumStatusUsuario.ATIVO;


}

