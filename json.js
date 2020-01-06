$().ready(function(){
    $.getJSON( "/data.json", function( data ) {
//    console.log(data);
//    $("#text").html(data["text"]);
      var text = `Name: ${data.name}<br>
                  Amount: ${data.amount}<br>
                  Image: ${data.image}`
                    
        
        $("#text").html(text);
    });
});
