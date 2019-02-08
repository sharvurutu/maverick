package com.stackroute.maverick.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.maverick.domain.TokenTableModel;
import com.stackroute.maverick.repositories.TokenRegRepo;
@Service
public class TokenRegService {
	@Autowired 
	TokenRegRepo tokenRegRepo;
	
	@Autowired
    public void tokenRegRepo(TokenRegRepo tokenrepo) {
        
        this.tokenRegRepo = tokenrepo;
    }
	
//	@Bean
//	public TokenTableModel tokenRegRepo()
//	{
//		
//		return null;
//		
//	}
//	@Bean
//	public TokenTableModel tokenRegGen() {
//		return new TokenTableModel();
//	}
	
	public void addRegToken(TokenTableModel token) {
		
		tokenRegRepo.save(token);
	}
}
