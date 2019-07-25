$(function() {
    $(".devourBurger").on("click", function(event) {
        let id = $(this).data("id");
        let devoured = $(this).data("devoured");

        $.ajax("/api/burgers/"+id, {
            type : "PUT",
            data : {
                devoured : devoured
            }
        }).then(function() {
            console.log("change burger id " + id + " devoured to " + devoured);
            location.reload();
        })
    });

    $("#addBurger").on("submit", function(event) {
        event.preventDefault();

        let burgerName = $("#addBurger [name=burger]").val().trim();
        console.log("adding a burger: " + burgerName);

        $.ajax("/api/burgers", {
            type : "POST",
            data : {
                name : burgerName,
            }
        }).then(function() {
            console.log("burger " + burgerName + " is added");
            location.reload();
        });
    })
})