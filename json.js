$().ready(function(){
    $.getJSON( "/data.json", function( data ) {
//    console.log(data);
//    $("#text").html(data["text"]);
      var text = `Name: ${data.string}<br>
                  Amount: ${data.string}<br>
                  Image: ${data.string}`
                    
        
        $(".text").html(text);
    });
});
