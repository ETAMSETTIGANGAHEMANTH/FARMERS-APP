package com.hemanth.demo.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.hemanth.demo.Repository.CartItemItemRepository;
import com.hemanth.demo.Repository.CartsRepository;
import com.hemanth.demo.Repository.ItemsRepository;
import com.hemanth.demo.Repository.UsersRepository;
import com.hemanth.demo.object.CartItem;
import com.hemanth.demo.object.CartItemItem;
import com.hemanth.demo.object.Carts;
import com.hemanth.demo.object.Credentials;
import com.hemanth.demo.object.GetAllusers;
import com.hemanth.demo.object.Items;
import com.hemanth.demo.object.User;
import com.hemanth.demo.security.UserPrincipal;

import jakarta.transaction.Transactional;

@Service
public class UserServiceImplementation implements UserService {
	
	
	//private static final Object token = null;
	Authentication currentAuthentication;
	
	long globalcart ;

	@Autowired
	public AuthenticationManager authenticationManager;
	
	@Autowired
	private UsersRepository repo;
	
	@Autowired
	private ItemsRepository itemss;

	@Autowired
	private CartItemItemRepository ct;
	
	@Autowired 
	private CartsRepository cart;
	
	@Override
	public String saveuser(User user) {
		// TODO Auto-generated method stub
		
		try {
			repo.save(user);
			System.out.println("the details wear saved.");
			
			Carts cartss = new Carts();
			cartss.setUser_id(user.getId());
			cart.save(cartss);
			
			return "saved";
		}
		catch(Exception e) {
			String error = "There was error in saving the data :" + e.getMessage();
			return error;
		}
		
	}

	@Override
	public ResponseEntity<?> authentication(@RequestBody Credentials cred) {
		try {
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(cred.getUsername(), cred.getPassword())
            );
            
            SecurityContextHolder.getContext().setAuthentication(authentication);
            
             currentAuthentication = SecurityContextHolder.getContext().getAuthentication();
            
            
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            
            String userType = "USER"; // Default user type
            if (userDetails.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ADMIN"))) {
                userType = "ADMIN";
            }
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Login successful");
            response.put("token", "...");
            response.put("user", userType);
            response.put("username",cred.getUsername());
            
            
            return ResponseEntity.ok(response);
        } 
		catch (Exception e) {
			Map<String, Object> errorResponse = new HashMap<>();
	        errorResponse.put("success", false);
	        errorResponse.put("message", "Login failed: " + e.getMessage());
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
        }
	}

	@Override
	public List<Items> gettingMenuItems() {
	    try {
	        List<Items> items = (List<Items>) itemss.findAll();
	        return items;
	    } catch(Exception e) {
	        System.out.print("Error retrieving data from the database: " + e.getMessage());
	        e.printStackTrace();
	        return null;
	    }
	}

	@Override
	public String add_food_item(@RequestBody Items food) {
	
		
		try {
			itemss.save(food);
			return "saved";
		}
		catch(Exception e) {
			String error = "There was an error in adding food items :" + e.getMessage();
			return error;
		}
	}

	@Override
	public String add_cart_item(@RequestBody CartItem item) {
		
		int foodId  = item.getFood_id();
		int quantity = item.getQuantity();
		
		
		CartItemItem cartItemItem = new CartItemItem();
		cartItemItem.setFood_id(foodId);
		cartItemItem.setQuantity(quantity);
		
		UserPrincipal userPrincipal = (UserPrincipal) currentAuthentication.getPrincipal();
	    int userId = userPrincipal.getUserId();
	    System.out.println(userId);
	    Long cartId = cart.findIdByUserId(userId);
	    globalcart = cartId;
		System.out.println(cartId);
	    if (cartId != null) {
	    	
	        cartItemItem.setCart_id(cartId);
	        ct.save(cartItemItem);

	        // Return a success message
	        return "CartItemItem added to cart successfully";
	    } else {
	        // Handle the case where the cart ID was not found
	        return "Error: Cart ID not found for the user";
	    }	
	}

	@Override
	public List<Items> get_cart_items() {
		
		
		UserPrincipal userPrincipal = (UserPrincipal) currentAuthentication.getPrincipal();
	    int userId = userPrincipal.getUserId();
	    
	    
	    Long cartId = cart.findIdByUserId(userId);
	    
	    List<Items> itemList = new ArrayList<>();
	    
	    if(cartId != null) {
	    	List<CartItemItem> it  =  ct.findByCartId(cartId);
	    	
	    	System.out.println("this is cartitem item : " + it);
	    	
	    	for( CartItemItem cartitem : it) {
	    		
	    		Items item = itemss.findById(cartitem.getFood_id()).orElse(null);
	    		if(item != null) {
	    			itemList.add(item);
	    		}	
	    	}
	    	System.out.println("these are the cart items for the particular user : " + itemList);
	    }
	    else {
	    	System.out.println("mg there is no cart id based on user id .");
	    }
	    
		return itemList;
	}

	@Override
	public List<GetAllusers> getallusers() {
		
		List<GetAllusers> lis = repo.findAllusers();
		return lis;
	}

	@Override
	 @Transactional
	public String removeitemfromcart( @PathVariable int foodid) {
		// TODO Auto-generated method stub
		UserPrincipal userPrincipal = (UserPrincipal) currentAuthentication.getPrincipal();
	    int userId = userPrincipal.getUserId();
	    System.out.println(userId);
	    Long cartId = cart.findIdByUserId(userId);
		
	    System.out.println("the cart and food id is:"+cartId +"and"+foodid);
		
		try {
		
		ct.deleteItem(cartId,foodid);
		return "removed successfully.";
		
		}
		catch(Exception e) {
			return "got this error while removing the item : "+e.getMessage();
			
		}
	}


}
