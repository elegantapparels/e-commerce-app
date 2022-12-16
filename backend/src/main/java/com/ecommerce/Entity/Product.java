package com.ecommerce.Entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
public class Product {
    @Id
    private String product_id;
    private String product_name;
    private Category product_category;
    private String product_description;
    private List<Colour> product_colours;
    private String product_company;
    public double product_price;
    public double product_discount;
    public double discountPrice;
    private int product_quantity;
    private int product_sold;

    public Product(String product_id, String product_name, Category product_category, String product_description,
            List<Colour> product_colours, String product_company, double product_price, double product_discount,
            double discountPrice, int product_quantity, int product_sold) {
        super();
        this.product_id = product_id;
        this.product_name = product_name;
        this.product_category = product_category;
        this.product_description = product_description;
        this.product_colours = product_colours;
        this.product_company = product_company;
        this.product_price = product_price;
        this.product_discount = product_discount;
        this.discountPrice = discountPrice;
        this.product_quantity = product_quantity;
        this.product_sold = product_sold;
    }

    public String getProduct_id() {
        return product_id;
    }

    public void setProduct_id(String product_id) {
        this.product_id = product_id;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public Category getProduct_category() {
        return product_category;
    }

    public void setProduct_category(Category product_category) {
        this.product_category = product_category;
    }

    public String getProduct_description() {
        return product_description;
    }

    public void setProduct_description(String product_description) {
        this.product_description = product_description;
    }

    public List<Colour> getProduct_colour() {
        return product_colours;
    }

    public void setProduct_colour(List<Colour> product_colours) {
        this.product_colours = product_colours;
    }

    public String getProduct_company() {
        return product_company;
    }

    public void setProduct_company(String product_company) {
        this.product_company = product_company;
    }

    public double getProduct_price() {
        return product_price;
    }

    public void setProduct_price(double product_price) {
        this.product_price = product_price;
    }

    public double getProduct_discount() {
        return product_discount;
    }

    public void setProduct_discount(double product_discount) {
        this.product_discount = product_discount;
    }

    public double getDiscountPrice() {
        return discountPrice;
    }

    public void setDiscountPrice(double discountPrice) {
        this.discountPrice = discountPrice;
    }

    public int getProduct_quantity() {
        return product_quantity;
    }

    public void setProduct_quantity(int product_quantity) {
        this.product_quantity = product_quantity;
    }

    public int getProduct_sold() {
        return product_sold;
    }

    public void setProduct_sold(int product_sold) {
        this.product_sold = product_sold;
    }

}