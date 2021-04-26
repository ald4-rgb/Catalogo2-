package com.catalogo.apiprodutos.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.catalogo.apiprodutos.models.entity.Pedido;

public interface IPedidoDao extends CrudRepository<Pedido, Long>  {

}
