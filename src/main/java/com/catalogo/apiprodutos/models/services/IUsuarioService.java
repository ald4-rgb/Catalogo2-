package com.catalogo.apiprodutos.models.services;

import java.util.List;

import com.catalogo.apiprodutos.models.entity.Region;
import com.catalogo.apiprodutos.models.entity.Usuario;

public interface IUsuarioService {
	
	public List<Usuario> findAll();
	
	public Usuario findById(Long id);
	
	public Usuario findByUsername(String username);
		
	public Usuario saveRole(Usuario usuario);

	public List<Region> findAllRegiones();
	
}
