$( document ).ready(function() {
    
	// List js init
	var options = {
  		valueNames: [
    		{ data: ['tags'] }
	    ]
	};
	var postList = new List('posts', options);

	$('.tags-list li').click(function(){
		var _this = this ;
		if ($(this).hasClass('selected')) {
			$(this).removeClass('selected')
			postList.filter()
		} else {
			$(this).addClass('selected')
			postList.filter(function(post) {
				console.log($(_this).html())
			   if (post.values().tags.indexOf($(_this).html()) != -1) {
			       return true;
			   } else {
			       return false;
			   }
			});
		}
	});

});