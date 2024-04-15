package com.hemanth.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hemanth.demo.object.CartItem;
import com.hemanth.demo.object.Credentials;
import com.hemanth.demo.object.GetAllusers;
import com.hemanth.demo.object.Items;
import com.hemanth.demo.object.User;
import com.hemanth.demo.service.UserService;


@RestController
@RequestMapping("/efarmers")
@CrossOrigin(origins ="http://localhost:3000")
public class MainController {
	
	@Autowired
	private UserService service;
	
	@PostMapping("/saveUser")
	public String saveUser(@RequestBody User user) {
		
		String st = service.saveuser(user);
		return st;
	}
	
	@PostMapping("/credentials")
	public ResponseEntity<?> authentication(@RequestBody Credentials cred) {
		System.out.println(cred);
		ResponseEntity<?>  conform = service.authentication(cred);
		System.out.println(conform);
		return conform;
	}
	
	
	@GetMapping("/get_items")
	public List<Items> menu(){
		List<Items> items = service.gettingMenuItems();
		System.out.println(items);
		return items;
	}
	
	@PostMapping("/add_food_item")
	public String add_food_item(@RequestBody Items food) {
		System.out.println(food);
		String response = service.add_food_item(food);
		System.out.println(response);
		return response;
	}
	
	//adding item to the cart
	@PostMapping("/add_cart_item")
	public String add_cart_item(@RequestBody CartItem item) {
		String s = service.add_cart_item(item);
		return s;
	}
	
	
	@GetMapping("/get_cart_items")
	public List<Items> get_cart_items (){
		List<Items> lis = service.get_cart_items();
		System.out.println("the item List is returned .");
		return lis;
	}
	
	@GetMapping("/getallusers")
	public List<GetAllusers> getallusers(){
		List<GetAllusers> lis2 = service.getallusers();
		System.out.println(lis2);
		return lis2;
	}
	
	@DeleteMapping("/removeitemfromcart/{foodid}")
	public String removeitemfromcart(@PathVariable int foodid) {
	    System.out.println("this is main controller : " + foodid);
	    String feed = service.removeitemfromcart(foodid);
	    return feed;
	}
	
}
