//Function to append articles and insert to HTML
function loadarticles(cnt,targetID){
	for (i in cnt){
		var div = $("<div></div>", {class: 'col-sm-4', style: 'padding:0px 26px'});
		//add function to googlemap trigger marker click (see script.json, line 124)
		var link = $("<a></a>", {href: '#', onclick: "myClick(" + i + "); return false"});
		link.append($("<img>", {src: 'img/' + cnt[i].image + ".jpg", alt:'article-image'}));
		div.append(link);
		div.append($("<h4></h4>").text(cnt[i].name));
		div.append($("<p></p>", {style: "line-height:30px"}).html(cnt[i].tourtype + "<br>" +
									   cnt[i].placetype + "<br>" +
									   cnt[i].date));
		$(targetID).append(div);
	}
}


$(document).ready(function(){
	//Asychronously load DATA(places) JSON file
	$.getJSON("script/data.json", function(result){
        loadarticles(result, "article");
    });

    //Asychronously load ASIDE JSON file, and append the content
    $.getJSON("script/aside.json", function(result){
    	for (i in result){
	    	var div = $("<div></div>");
	    	div.append($("<img>",{src: 'img/' + result[i].image }));
	    	div.append($("<span></span>").text(result[i].name));

	    	$("aside").append(div);
	    }
    });
})












