package com.hemanth.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.hemanth.demo.object.GetAllusers;
import com.hemanth.demo.object.User;

public interface UsersRepository extends JpaRepository<User,Integer>{
	User findByUsername(String username);
	
	@Query("SELECT new com.hemanth.demo.object.GetAllusers(c.username, c.email, c.image) FROM User c")
    List<GetAllusers> findAllusers();
	
}
