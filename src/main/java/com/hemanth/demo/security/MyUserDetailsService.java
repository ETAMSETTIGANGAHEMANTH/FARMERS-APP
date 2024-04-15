package com.hemanth.demo.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hemanth.demo.Repository.UsersRepository;
import com.hemanth.demo.object.User;


@Service
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	private UsersRepository repo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = repo.findByUsername(username);
		if(user == null) {
			throw new UsernameNotFoundException("USER DOES NOT FOUND.");
		}
		return new UserPrincipal(user);
	}

}
