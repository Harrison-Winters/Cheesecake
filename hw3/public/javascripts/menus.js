
menuHand = function( event ) {
    
    var value = $('#instruct').val();
    if(~value.indexOf('vegan')) {
        alert("Warning: Cheesecake contains dairy");
    }
    

    else {
        $("form").toggle();
        $("textarea").replaceWith("<h2>Thank you for your order!</h2><p>Order Details:</p>");
        $("#order").toggle();


        //Display details

        //For Radio Buttons:
        var ele = document.getElementsByName('topping');

        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            document.getElementById("details").innerHTML = "Topping: "+ele[i].value;

        }
        //For Dropdown Menu (num toppings):
        var select = document.getElementById('topnum');
        var num = select.options[select.selectedIndex].value;
        document.getElementById("quantity").innerHTML = "Quantity: "+ num;
        document.getElementById("notes").innerHTML = "Notes: "+ value;

    }

 }



 $(function() {
    $("#order").click(menuHand);
 });












/* $("#order").on("click", function(){
    var value = $('#instruct').val();
    if(~value.indexOf('vegan')) {
        alert("Warning: Cheesecake contains dairy");
    }
    

    else {
        $("form").toggle();
        $("textarea").replaceWith("<h2>Thank you for your order!</h2><p>Order Details:</p>");
        $("#order").toggle();


        //Display details

        //For Radio Buttons:
        var ele = document.getElementsByName('topping');

        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            document.getElementById("details").innerHTML = "Topping: "+ele[i].value;

        }
        //For Dropdown Menu (num toppings):
        var select = document.getElementById('topnum');
        var num = select.options[select.selectedIndex].value;
        document.getElementById("quantity").innerHTML = "Quantity: "+ num;
        document.getElementById("notes").innerHTML = "Notes: "+ value;

    }


}); */