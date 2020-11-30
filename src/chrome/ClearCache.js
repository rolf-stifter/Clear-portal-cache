(function() {
	$("body").empty();
	$("body").append("Clearing portal cache...");
    $.get("/_services/about", function(data, status){
        var form = $(data).find("form");
		if (form.length == 0){
			$("body").empty();
			$("body").append("It was not possible to clear the cache. Make sure you have the administrator webrole assigned to you!");
			return;
        }
        debugger;
        var postData = {}
        var token = form.find("input[name='AboutProductHandlerXSRFToken']");
        var submit = form.find("input[name='clearCache']");
        postData[token.attr("name")] = token.val();
        postData[submit.attr("name")] = submit.val();

        $.post( "/_services/about", postData)
        .done(function( data ) {
            location.reload(true);
        });
      });
})();