package com.hemanth.demo.service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.hemanth.demo.object.CartItem;
import com.hemanth.demo.object.Credentials;
import com.hemanth.demo.object.GetAllusers;
import com.hemanth.demo.object.Items;
import com.hemanth.demo.object.User;

public interface UserService {

	
	public String saveuser(User user);
	
	public ResponseEntity<?> authentication(@RequestBody Credentials cred);
	
	public List<Items> gettingMenuItems();
	
	public String add_food_item(Items food);
	
	public String add_cart_item(@RequestBody CartItem item);
	
	
	public List<Items> get_cart_items ();
	
	public List<GetAllusers> getallusers();
	
	public String removeitemfromcart( @PathVariable int foodid );
}
