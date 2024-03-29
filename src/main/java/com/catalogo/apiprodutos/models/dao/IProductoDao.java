package com.catalogo.apiprodutos.models.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.catalogo.apiprodutos.models.entity.Producto;

public interface IProductoDao extends CrudRepository<Producto, Long> {

	@Query("select p from  Producto p where p.name like %?1%")
	public List<Producto> findByName(String term);
	
}
