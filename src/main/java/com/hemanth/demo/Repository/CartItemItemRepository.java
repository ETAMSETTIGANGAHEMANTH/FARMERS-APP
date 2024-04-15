package com.hemanth.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hemanth.demo.object.CartItemItem;

public interface CartItemItemRepository extends JpaRepository<CartItemItem,Long> {

	
	@Query("SELECT c FROM CartItemItem c WHERE c.cart_id = :cartId")
    List<CartItemItem> findByCartId(@Param("cartId") Long cartId);
	
	
	@Modifying
	@Query("DELETE FROM CartItemItem c WHERE c.cart_id = :cartId AND c.food_id = :foodid")
	void deleteItem(@Param("cartId") Long cartId, @Param("foodid") int foodid);


	
}
