package com.hemanth.demo.object;

public class CartItem {

	
	private int food_id;
	private int quantity;
	public int getFood_id() {
		return food_id;
	}
	public void setFood_id(int food_id) {
		this.food_id = food_id;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	@Override
	public String toString() {
		return "CartItem [food_id=" + food_id + ", quantity=" + quantity + "]";
	}
	
	
}
