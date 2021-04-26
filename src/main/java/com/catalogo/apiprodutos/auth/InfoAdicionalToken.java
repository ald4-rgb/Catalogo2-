package com.catalogo.apiprodutos.auth;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.TokenEnhancer;
import org.springframework.stereotype.Component;

import com.catalogo.apiprodutos.models.entity.Usuario;

import com.catalogo.apiprodutos.models.services.IUsuarioService;

@Component
public class InfoAdicionalToken implements TokenEnhancer {

	@Autowired
	private IUsuarioService usuarioService;

	@Override
	public OAuth2AccessToken enhance(OAuth2AccessToken accessToken, OAuth2Authentication authentication) {

		Usuario user = usuarioService.findByUsername(authentication.getName());

		Map<String, Object> info = new HashMap<>();

		info.put("info_adicional", "Hola bienvenido: ".concat(authentication.getName()));
		info.put("id", user.getId());
		info.put("name", user.getName());
		info.put("lastName", user.getLastName());
		info.put("email", user.getEmail());
		info.put("foto", user.getFoto());
		((DefaultOAuth2AccessToken) accessToken).setAdditionalInformation(info);
		return accessToken;
	}

}
