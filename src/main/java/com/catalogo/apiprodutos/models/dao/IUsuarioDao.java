package com.catalogo.apiprodutos.models.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.jdbc.repository.query.Query;
//import org.springframework.data.repository.CrudRepository;

import com.catalogo.apiprodutos.models.entity.Region;
import com.catalogo.apiprodutos.models.entity.Role;
import com.catalogo.apiprodutos.models.entity.Usuario;

public interface IUsuarioDao extends JpaRepository<Usuario, Long> {

	
	public Usuario findByUsername (String username);
	
	@Query("from Region")
	public List<Region>findAllRegiones();
	
	public Region findByName(String name);
	
	@Query("from Role")
	public List<Role>findAllRoles();
	
	
		
	
}
