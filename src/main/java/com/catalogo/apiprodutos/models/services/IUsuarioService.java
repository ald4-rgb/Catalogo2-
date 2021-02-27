package com.catalogo.apiprodutos.models.services;

import java.util.List;

import com.catalogo.apiprodutos.models.entity.Usuario;

public interface IUsuarioService {
	
	public List<Usuario> findAll();
	
	public Usuario findyId(Long id);
	
	public Usuario findByUsername(String username );
	
//	public Usuario save(Usuario usuario);
	
	public Usuario saveRole(Usuario usuario);
	
	
}
