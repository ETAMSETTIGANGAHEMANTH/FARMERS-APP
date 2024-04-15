package com.hemanth.demo.object;

public class GetAllusers {

	private String username;
	private String email;
	private String image;
	
	
	
	 public GetAllusers(String username, String email, String image) {
	        this.username = username;
	        this.email = email;
	        this.image = image;
	    }
	 
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	
	@Override
	public String toString() {
		return "GetAllusers [username=" + username + ", email=" + email + ", image=" + image + "]";
	}
	
	
}
