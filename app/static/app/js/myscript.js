$('#slider1, #slider2, #slider3').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
        0: {
            items: 5,
            nav: false,
            autoplay: true,
        },
        500: {
            items: 5,
            nav: true,
            autoplay: true,
            
        },
        1000: {
            items: 5,
            nav: true,
            autoplay: true,
        }
    }
}) 

$('.plus-cart').click(function () {
    var id = $(this).attr("pid").toString();
    var eml = this.parentNode.children[2];
    console.log(id);
    $.ajax(
        {
            type: "GET",
            url: "/pluscart",
            data: {
                prod_id: id
            },
            success: function (data) {
                console.log(data);
                eml.innerText = data.quantity;
                document.getElementById("amount").innerText = data.amount.toFixed(2);
                document.getElementById("totalamount").innerText = data.totalamount.toFixed(2);
            }
        })
});

$('.minus-cart').click(function () {
    var id = $(this).attr("pid").toString();
    var eml = this.parentNode.children[2];
    $.ajax(
        {
            type: "GET",
            url: "/minuscart",
            data: {
                prod_id: id
            },
            success: function (data) {
                console.log(data)
                eml.innerText = data.quantity;
                document.getElementById("amount").innerText = data.amount.toFixed(2);
                document.getElementById("totalamount").innerText = data.totalamount.toFixed(2);
            }
        })
});

$('.remove-cart').click(function () {
    var id = $(this).attr("pid").toString();
    var elm = this;
    $.ajax(
        {
            type: "GET",
            url: "/removecart",
            data: {
                prod_id: id
            },
            success: function (data) {
                console.log(data)
                document.getElementById("amount").innerText = data.amount;
                document.getElementById("totalamount").innerText = data.totalamount;
                elm.parentNode.parentNode.parentNode.parentNode.remove()
            }
        })
});

