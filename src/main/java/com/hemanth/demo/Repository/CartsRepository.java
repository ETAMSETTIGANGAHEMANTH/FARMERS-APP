package com.hemanth.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hemanth.demo.object.Carts;

public interface CartsRepository extends JpaRepository<Carts,Long>{
	
	
	@Query("SELECT c.id FROM Carts c WHERE c.user_id = :userId")
	Long findIdByUserId(int userId);
	
}
