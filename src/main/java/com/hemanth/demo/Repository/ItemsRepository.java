package com.hemanth.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hemanth.demo.object.Items;

public interface ItemsRepository extends JpaRepository<Items,Integer> {
	

}
