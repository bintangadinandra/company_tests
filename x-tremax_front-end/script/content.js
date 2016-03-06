var articles = [
	{
		name: "Church of the Risen Christ",
		tourtype: "Guided Tour",
		placetype: "Nature",
		date: "19 July",
		latitude: 1.334816, 
		longitude: 103.850744,
		image: "image1"
	},
	{
		name: "1973 SEAP Games Village",
		tourtype: "Guided Tour",
		placetype: "Historical",
		date: "19-27 July",
		latitude: 1.333733, 
		longitude: 103.850583,
		image: "image2"
	},
	{
		name: "Chung Hwa Medical Institution",
		tourtype: "Talk",
		placetype: "Historical",
		date: "19 July",
		latitude: 1.331798, 
		longitude: 103.851315,
		image: "image3"
	},
	{
		name: "Toa Payoh Town Park",
		tourtype: "Guided Tour",
		placetype: "Nature",
		date: "19 July",
		latitude: 1.33095, 
		longitude: 103.847633,
		image: "image4"
	},
	{
		name: "Toa Payoh Dragon Playground",
		tourtype: "Guided Tour",
		placetype: "Historical",
		date: "19 July",
		latitude: 1.331967, 
		longitude: 103.854367,
		image: "image5"
	},
	{
		name: "Lian Shan Shuang Lin Monastery",
		tourtype: "Workshop",
		placetype: "Nature",
		date: "20 July",
		latitude: 1.329885, 
		longitude: 103.856462,
		image: "image6"
	},
];

function loadarticles(cnt,targetID){
	for (i in cnt){
		var div = $("<div></div>", {class: 'col-sm-4'});
		div.append($("<img>", {src: 'img/' + cnt[i].image + ".jpg", alt:'article-image'}));
		div.append($("<h3></h3>").text(cnt[i].name));
		div.append($("<h4></h4>").html(cnt[i].tourtype + "<br>" +
									   cnt[i].placetype + "<br>" +
									   cnt[i].date));
		$(targetID).append(div);
	}
}

$(document).ready(function(){
	loadarticles(articles, "article");
})












