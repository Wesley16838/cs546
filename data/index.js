const userData = require("./user");
const bookData = require("./book");
const cartData = require("./cart");
const orderData = require("./order");
const bookRequestData=require("./bookRequest");

module.exports = {
  user: userData,
  book: bookData,
  cart: cartData,
  order: orderData,
  bookRequest:bookRequestData
};