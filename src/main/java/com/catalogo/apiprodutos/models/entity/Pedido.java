package com.catalogo.apiprodutos.models.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name ="pedidos")
public class Pedido  implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String descrip;
	private String coment;
	
	@Column(name="create_at")
	@Temporal(TemporalType.DATE) 
	private Date createAt;
	 
	
	@JsonIgnoreProperties(value ={"pedidos",	"hibernateLazyInitializer","handler"},allowSetters = true)
	@ManyToOne(fetch = FetchType.LAZY)	
	private Usuario usuario;
	

	@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
	@OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JoinColumn(name = "pedido_id") 
	private List<ItemPedido> items ;
	public Pedido() { 
	  items = new ArrayList<>(); 
	}
 

	@PrePersist 
	public void prePersist() {
	  this.createAt = new Date(); 
	}

	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}

	

	public String getDescrip() {
		return descrip;
	}

	public void setDescrip(String descrip) {
		this.descrip = descrip;
	}

	public String getComent() {
		return coment;
	}


	public void setComent(String coment) {
		this.coment = coment;
	}


	
	  public Date getCreateAt() { 
		  return createAt; 
	  }
	  
	  public void setCreateAt(Date createAt) { 
		  this.createAt = createAt; 
	  }
	 


		
	public List<ItemPedido> getItems() { 
			  return items; 
	}
		 	   
    public void setItems(List<ItemPedido> items) { 
    	this.items = items; 
    }
		  
	public Double getTotla() { Double total = 0.00;
		  
	 for(ItemPedido item: items) { total += item.getAmount(); }
	  
	 return total; 
	}
		 
	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	private static final long serialVersionUID = 1L;


}
