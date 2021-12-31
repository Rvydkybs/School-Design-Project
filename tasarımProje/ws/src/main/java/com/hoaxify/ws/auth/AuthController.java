package com.hoaxify.ws.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.hoaxify.ws.shared.GenericResponse;

@RestController
public class AuthController {// authentication=kimlik doğrulama
	
	@Autowired
	AuthService authService;
	
	@PostMapping("/api/1.0/auth")//istemci istek atar
	AuthResponse handleAuthentication(@RequestBody Credentials credentials) {
		return authService.authenticate(credentials);
	}
	
	@PostMapping("/api/1.0/logout")
	GenericResponse handleLogout(@RequestHeader(name = "Authorization") String authorization) {//Authorization parametresini al-RequestHeader=header isteklerini alır
		String token = authorization.substring(7);
		authService.clearToken(token);
		return new GenericResponse("Logout success");
	}

}
