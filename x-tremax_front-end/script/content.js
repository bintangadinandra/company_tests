function loadarticles(cnt,targetID){
	for (i in cnt){
		var div = $("<div></div>", {class: 'col-sm-4'});
		var link = $("<a></a>", {href: '#', onclick: "myClick(" + i + "); return false"});
		link.append($("<img>", {src: 'img/' + cnt[i].image + ".jpg", alt:'article-image'}));
		div.append(link);
		div.append($("<h3></h3>").text(cnt[i].name));
		div.append($("<h4></h4>").html(cnt[i].tourtype + "<br>" +
									   cnt[i].placetype + "<br>" +
									   cnt[i].date));
		$(targetID).append(div);
	}
}


$(document).ready(function(){
	$.getJSON("script/data.json", function(result){
        loadarticles(result, "article");
    });

    $.getJSON("script/aside.json", function(result){
    	for (i in result){
	    	var div = $("<div></div>");
	    	div.append($("<img>",{src: 'img/' + result[i].image }));
	    	div.append($("<span></span>").text(result[i].name));

	    	$("aside").append(div);
	    }
    });
})












