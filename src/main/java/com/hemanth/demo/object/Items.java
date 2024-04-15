package com.hemanth.demo.object;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "menuitems")
public class Items {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String foodname;
	private Integer foodcost;
	private String image;
	private String foodtype;
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getFoodname() {
		return foodname;
	}
	public void setFoodname(String foodname) {
		this.foodname = foodname;
	}
	public Integer getFoodcost() {
		return foodcost;
	}
	public void setFoodcost(Integer foodcost) {
		this.foodcost = foodcost;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getFoodtype() {
		return foodtype;
	}
	public void setFoodtype(String foodtype) {
		this.foodtype = foodtype;
	}
	
	@Override
	public String toString() {
		return "Items [id=" + id + ", foodname=" + foodname + ", foodcost=" + foodcost + ", image=" + image
				+ ", foodtype=" + foodtype + "]";
	}
}
