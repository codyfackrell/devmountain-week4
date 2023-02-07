///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const summedPrice = cart.reduce((accumlator, currentValue) => accumlator + currentValue.price, 0);

console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let final = ((cartTotal * tax) + cartTotal) - couponValue;

    return final
}

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object.

    Plan out a customer object for the cart page.
    Think about the information that a
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    1. Name - String because the input would contain letters and words. basic information to identify the customer. 
    2. Phone number - Number - the input would only be numbers. For loytaly program, reservations, etc.
    3. Address - String - the input would be letters and numbers. This would allow the restuarant to send the customer ads, coupons, etc. 
    4. Loyalty Program - Boolean - to provide a true or false if the customer is enrolled. This would allow the resturant to know if the customer is enrolled in their loyalty program. If false, then the resturant can market to this customer. 

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

let customer = { 
    name: "Jackson Smith",
    phoneNumber: 8015553333,
    address: "555 N 600 W",
    loyaltyProgram: true,
}