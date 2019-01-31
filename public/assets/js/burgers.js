//Devouring a burger requires a value change to 'devoured' column in MySql
//Send PUT request to make that change.
$(function () {

    $(".change-devour").on("click", event => {
        var id = $(event.currentTarget).data("id");
        var newDevour = $(event.currentTarget).data("newdevour");
  
        var newDevourState = {
            devoured: newDevour
        }
  
        $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: newDevourState
            })
            .then(() => {
                console.log("changed devoured to", newDevour);
  
                location.reload();
            })
    });

    // A new burger name created here. Name captured and 'devoured' value set to '1'
    // via a POST request.
  
    $('.create-form').on('submit', event => {
        event.preventDefault();
  
        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 1
  
        };
  
        $.ajax("/api/burgers", {
                type: 'POST',
                data: newBurger
            })
            .then(
                () => {
                    console.log("new burger created");
  
                    location.reload();
                }
            )
  
    });
  });
