// When the html document is ready (drawn)
$(document).ready(function () {
    //taking the markup element with id jq-notification for ajax notifications into a variable
    var successMessage = $("#jq-notification");

    // //catching the click event on the add to cart button
    // $(document).on("click", ".add-to-cart", function (e) {
    //     //blocking its basic action
    //     e.preventDefault();

    //     //taking the counter element in the cart icon and take the value from there
    //     var goodsInCartCount = $("#goods-in-cart-count");
    //     var cartCount = parseInt(goodsInCartCount.text() || 0);

    //     //getting the product id from the attribute data-product-id
    //     var product_id = $(this).data("product-id");

    //     //from the href attribute we take a link to the django controller
    //     var add_to_cart_url = $(this).attr("href");

    //     //making a post request via ajax without reloading the page
    //     $.ajax({
    //         type: "POST",
    //         url: add_to_cart_url,
    //         data: {
    //             product_id: product_id,
    //             csrfmiddlewaretoken: $("[name=csrfmiddlewaretoken]").val(),
    //         },
    //         success: function (data) {
    //             // Messages
    //             successMessage.html(data.message);
    //             successMessage.fadeIn(400);
    //             //In 7 seconds the message is gone
    //             setTimeout(function () {
    //                 successMessage.fadeOut(400);
    //             }, 7000);

    //             //increasing the number of items in the cart (rendered in the template)
    //             cartCount++;
    //             goodsInCartCount.text(cartCount);

    //             //changing the contents of the cart to the response from django (a new rendered fragment of the cart markup)
    //             var cartItemsContainer = $("#cart-items-container");
    //             cartItemsContainer.html(data.cart_items_html);

    //         },

    //         error: function (data) {
    //             console.log("Error adding item to cart");
    //         },
    //     });
    // });




    // //catching the event of a click on the button to remove an item from the cart
    // $(document).on("click", ".remove-from-cart", function (e) {
    //     //Blocking its basic action
    //     e.preventDefault();

    //     //taking the counter element in the cart icon and take the value from there
    //     var goodsInCartCount = $("#goods-in-cart-count");
    //     var cartCount = parseInt(goodsInCartCount.text() || 0);

    //     //getting the cart id from the attribute data-cart-id
    //     var cart_id = $(this).data("cart-id");
    //     //from the href attribute we take a link to the controller django
    //     var remove_from_cart = $(this).attr("href");
    
    //     // making a post request via ajax without reloading the page
    //     $.ajax({

    //         type: "POST",
    //         url: remove_from_cart,
    //         data: {
    //             cart_id: cart_id,
    //             csrfmiddlewaretoken: $("[name=csrfmiddlewaretoken]").val(),
    //         },
    //         success: function (data) {
    //             //message
    //             successMessage.html(data.message);
    //             successMessage.fadeIn(400);
    //             // In 7 seconds the message is gone
    //             setTimeout(function () {
    //                 successMessage.fadeOut(400);
    //             }, 7000);

    //             //reducing the number of items in the cart (rendering)
    //             cartCount -= data.quantity_deleted;
    //             goodsInCartCount.text(cartCount);

    //             //changing the contents of the cart to the response from django (a new rendered fragment of the cart markup)
    //             var cartItemsContainer = $("#cart-items-container");
    //             cartItemsContainer.html(data.cart_items_html);

    //         },

    //         error: function (data) {
    //             console.log("Error adding item to cart");
    //         },
    //     });
    // });




    // //Now + - quantity of goods 
    // //event handler for decrementing value
    // $(document).on("click", ".decrement", function () {
    //     //taking a link to the django controller from the attribute data-cart-change-url
    //     var url = $(this).data("cart-change-url");

    //     //taking the cart id from the attribute data-cart-id
    //     var cartID = $(this).data("cart-id");

    //     //looking for the nearest input with quantity
    //     var $input = $(this).closest('.input-group').find('.number');

    //     //we take the value of the quantity of goods
    //     var currentValue = parseInt($input.val());

    //     //if there is more than one quantity, then only do -1
    //     if (currentValue > 1) {
    //         $input.val(currentValue - 1);
    //         //run the function defined below
    //         //with arguments (card id, new quantity, quantity decreased or added, url)
    //         updateCart(cartID, currentValue - 1, -1, url);
    //     }
    // });

    // //event handler for increasing value
    // $(document).on("click", ".increment", function () {
    //     //taking a link to the django controller from the attribute data-cart-change-url
    //     var url = $(this).data("cart-change-url");

    //     //taking the cart id from the attribute data-cart-id
    //     var cartID = $(this).data("cart-id");

    //     //looking for the nearest input with quantity 
    //     var $input = $(this).closest('.input-group').find('.number');

    //     //taking the value of the quantity of goods
    //     var currentValue = parseInt($input.val());

    //     $input.val(currentValue + 1);

    //     // Run the function defined below
    //     // with arguments (card id, new quantity, quantity decreased or increased, url)
    //     updateCart(cartID, currentValue + 1, 1, url);
    // });

    // function updateCart(cartID, quantity, change, url) {
    //     $.ajax({
    //         type: "POST",
    //         url: url,
    //         data: {
    //             cart_id: cartID,
    //             quantity: quantity,
    //             csrfmiddlewaretoken: $("[name=csrfmiddlewaretoken]").val(),
    //         },
 
    //         success: function (data) {
    //              // messages
    //             successMessage.html(data.message);
    //             successMessage.fadeIn(400);

    //              // In 7seconds message should gone
    //             setTimeout(function () {
    //                  successMessage.fadeOut(400);
    //             }, 7000);
 
    //             //changing quantity of goods in basket
    //             var goodsInCartCount = $("#goods-in-cart-count");
    //             var cartCount = parseInt(goodsInCartCount.text() || 0);
    //             cartCount += change;
    //             goodsInCartCount.text(cartCount);

    //             //changes in basket
    //             var cartItemsContainer = $("#cart-items-container");
    //             cartItemsContainer.html(data.cart_items_html);

    //         },
    //         error: function (data) {
    //             console.log("Error adding item to cart");
    //         },
    //     });
    // }
});