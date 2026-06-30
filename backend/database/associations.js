import User from "../models/user.js";
import Customer from "../models/customer.js";
import Restaurant from "../models/Restaurant.js";
import Driver from "../models/Driver.js";
import Category from "../models/Category.js";
import Product from "../models/Product.js";
import Cart from "../models/Cart.js";
import CartItem from "../models/CartItem.js";
import Order from "../models/Order.js";
import OrderItem from "../models/OrderItem.js";
import Payment from "../models/Payment.js";
import Delivery from "../models/Delivery.js";
import Review from "../models/Review.js";
import Notification from "../models/Notification.js";
import FavouriteProduct from "../models/FavouriteProduct.js";
import FavouriteRestaurant from "../models/FavouriteRestaurant.js";

// user
User.hasOne(Customer, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Customer.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasOne(Restaurant, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Restaurant.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasOne(Driver, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Driver.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Notification, {
  foreignKey: "user_id",
});
Notification.belongsTo(User, {
  foreignKey: "user_id",
});

//product

Restaurant.hasMany(Product, {
  foreignKey: "restaurant_id",
});
Product.belongsTo(Restaurant, {
  foreignKey: "restaurant_id",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
});
Product.belongsTo(Category, {
  foreignKey: "category_id",
});
// card

Customer.hasOne(Cart, {
  foreignKey: "customer_id",
  onDelete: "CASCADE",
});
Cart.belongsTo(Customer, {
  foreignKey: "customer_id",
});

Cart.hasMany(CartItem, {
  foreignKey: "cart_id",
  onDelete: "CASCADE",
});
CartItem.belongsTo(Cart, {
  foreignKey: "cart_id",
});

Product.hasMany(CartItem, {
  foreignKey: "product_id",
});
CartItem.belongsTo(Product, {
  foreignKey: "product_id",
});

//Order

Customer.hasMany(Order, {
  foreignKey: "customer_id",
});
Order.belongsTo(Customer, {
  foreignKey: "customer_id",
});

Restaurant.hasMany(Order, {
  foreignKey: "restaurant_id",
});
Order.belongsTo(Restaurant, {
  foreignKey: "restaurant_id",
});

Order.hasMany(OrderItem, {
  foreignKey: "order_id",
  onDelete: "CASCADE",
});
OrderItem.belongsTo(Order, {
  foreignKey: "order_id",
});

Product.hasMany(OrderItem, {
  foreignKey: "product_id",
});
OrderItem.belongsTo(Product, {
  foreignKey: "product_id",
});

//payment

Order.hasOne(Payment, {
  foreignKey: "order_id",
  onDelete: "CASCADE",
});
Payment.belongsTo(Order, {
  foreignKey: "order_id",
});

//delivery
Order.hasOne(Delivery, {
  foreignKey: "order_id",
  onDelete: "CASCADE",
});
Delivery.belongsTo(Order, {
  foreignKey: "order_id",
});

Driver.hasMany(Delivery, {
  foreignKey: "driver_id",
});
Delivery.belongsTo(Driver, {
  foreignKey: "driver_id",
});

//review

Customer.hasMany(Review, {
  foreignKey: "customer_id",
});
Review.belongsTo(Customer, {
  foreignKey: "customer_id",
});

Product.hasMany(Review, {
  foreignKey: "product_id",
});
Review.belongsTo(Product, {
  foreignKey: "product_id",
});

//Favourite Restaurants

Customer.hasMany(FavouriteRestaurant, {
  foreignKey: "customer_id",
});

FavouriteRestaurant.belongsTo(Customer, {
  foreignKey: "customer_id",
});

Restaurant.hasMany(FavouriteRestaurant, {
  foreignKey: "restaurant_id",
});

FavouriteRestaurant.belongsTo(Restaurant, {
  foreignKey: "restaurant_id",
});

// Favourite Products
Customer.hasMany(FavouriteProduct, {
  foreignKey: "customer_id",
});

FavouriteProduct.belongsTo(Customer, {
  foreignKey: "customer_id",
});

Product.hasMany(FavouriteProduct, {
  foreignKey: "product_id",
});

FavouriteProduct.belongsTo(Product, {
  foreignKey: "product_id",
});

export {
  User,
  Customer,
  Restaurant,
  Driver,
  Category,
  Product,
  Cart,
  CartItem,
  Order,
  OrderItem,
  Payment,
  Delivery,
  Review,
  Notification,
};