<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset='utf-8'>
	<!-- Link for Bootstrap CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
	<header class='container-fluid' style='padding:0px'>
		<div style='background: #22bbc8 url(img/texture-top.png) no-repeat'>
			<div class='container'>
				<div class='row vertical-align' style='height:170px; padding-bottom:20px'>
					<div class='col-sm-2' style='height:80px; margin-top:20px'>
						<img src="img/logo-top.png">
					</div>
					<div class='col-sm-4 col-sm-offset-6' style='height:30px;align-self: flex-end; display:inline-block'>
					    <img src="img/gylph-left.png">
					    <form class="form-search form-horizontal pull-right">
		                    <input type="text" placeholder="">
		                    <button type="submit" class="btn search-button"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></i></button>
			            </form>
					</div>
				</div>
			</div> <!-- End of LOGO AND SEARCH CONTAINER-->
		</div> <!-- End of the Blue Part of Header -->
		<div style='background: #fff; box-shadow: 0px 0px 20px #333; position:absolute; width: 100%'>
			<nav class='container flexbox flex_column' style='height:40px;'> 
				<div class='row' style='margin:auto 15px'>
					<ul class='list-inline flexbox col-sm-10 col-sm-offset-1' style='justify-content: space-between;margin-bottom:0px;'>
						<img src="img/clock.png">
						<li><a href="">Home</a></li>
						<img src="img/clock.png">
						<li><a href="">Lorem</a></li>
						<img src="img/clock.png">
						<li><a href="">Ipsum</a></li>
						<img src="img/clock.png">
						<li><a href="">Dolor</a></li>
						<img src="img/clock.png">
					</ul>
				</div>
			</nav>
		</div> <!-- End of the Navigation(white) Part of Header -->
		<div style='background: #a60b43 url(img/texture.png); color: white; padding-top:40px; box-shadow: inset 0px 0px 10px #555'>
			<div class='container' style='height:170px; padding-top:20px;'>
				<p>Home</p>
				<h1 style="font-weight:100">Attractions</h1>
			</div>
		</div> <!-- End of the Page Information (Purple) Part of Header -->
	</header> <!-- End of the HEADER-->

	<div class='container' style='position:relative; top: -40px'>
		<div style='height:54px; background: white; padding: 0px 20px'>
			<img src="img/socmed.jpg" class='pull-right' style='margin-top:20px'>
		</div> <!-- End of the SHARE-->
		<div class='row'>
			<section class='col-sm-9' style='border-right: 1px solid #333;'>
				<div id='map' style='height: 500px; width: 670px; margin:0px 0px 24px 20px'>
				</div> <!-- End of the MAP-->
				<div class='flexbox' style='height: 20px; margin-bottom: 90px; justify-content: space-around'>
					<label class='custom-select'>Type
						<select style='width:88px'>
						  <option value="all">ALL</option>
						</select>
					</label>

					<label class='custom-select'>Category
						<select style='width:88px'>
						  <option value="all">ALL</option>
						</select>
					</label>

					<div>
						<label class='custom-select'>From
							<select style='width:88px'>
							  <option value="all">17 APR</option>
							</select>
						</label>
						<label class='custom-select'>To
							<select style='width:88px'>
							  <option value="all">17 APR</option>
							</select>
						</label>
					</div>
				</div> <!-- End of the DROPDOWN AND LABELS-->
				<article class='row' style='margin:0px'>
				</article> <!-- End of ARTICLE -->
				<nav class="flexbox" style='justify-content:center'>
				  <ul class="pagination" >
				  	<li>
				  		<a href=""><span class="glyphicon glyphicon-step-backward" aria-hidden="true"></span></a>
				  	</li>
				    <li>
				      <a href="#" aria-label="Previous">
				        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
				      </a>
				    </li>
				    <li><a class='active' href="#">1</a></li>
				    <li><a href="#">2</a></li>
				    <li><a href="#">3</a></li>
				    <li><a href="#">4</a></li>
				    <li>
				      <a href="#" aria-label="Next">
				        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				      </a>
				    </li>
				    <li>
				  		<a href=""><span class="glyphicon glyphicon-step-forward" aria-hidden="true"></span></a>
				  	</li>
				  </ul>
				</nav> <!-- End of the PAGINATION-->
			</section> <!-- End of SECTION -->
			<aside class='col-sm-3'>
				<h3>Popular Attractions</h3>
			</aside> <!-- End of ASIDE-->
		</div>
	</div> <!-- End of the SECTION AND ASIDE-->

	<footer class='container-fluid' style='padding:0px;color: white'>
		<div style='background: #a8c9c2;'>
			<div class='container' style="height:200px;">
				<h3 style='margin-top:40px'>OUR PARTNERS</h3>
				<ul class='list-inline flexbox' style='justify-content: space-between'>
					<li><a href="#"><img src="img/logo_ft_1.png"></a></li>
					<li><a href="#"><img src="img/logo_ft_2.png"></a></li>
					<li><a href="#"><img src="img/logo_ft_3.png"></a></li>
					<li><a href="#"><img src="img/logo_ft_4.png"></a></li>
					<li><a href="#"><img src="img/logo_ft_5.png"></a></li>
				</ul>
			</div> <!-- End of the PARTNER FOOTER CONTAINER-->
		</div> <!-- End of the PARTNERS (GREY-BLUE)-->
		<div style='background: #083f54'>
			<div class='container'>
				<div class='row'>
					<div class='col-sm-6 flexbox flex_column' style='justify-content: space-between; height:240px;'>
						<h3>CONTACT</h3>
						<div>
							<p>For enquiries, please e-mail to</p>
							<h4>bbf@fungov.org</h4>
						</div>
						<p><a href='#'>Privacy Statement</a> | <a href='#'>Terms of Use</a></p>
					</div>
					<div class='col-sm-6 flexbox flex_column text-right' style='justify-content: space-between; height:240px'>
						<h3>CONNECT WITH US</h3>
						<ul class='list-inline'>
							<li><a href="#" style='display:block; width:53px; height:53px; border-radius:50%; background: #396676 url(img/facebook.png) no-repeat center'></a></li>
							<li><a href="#" style='display:block; width:53px; height:53px; border-radius:50%; background: #396676 url(img/youtube.png) no-repeat center'></a></li>
							<li><a href="#" style='display:block; width:53px; height:53px; border-radius:50%; background: #396676 url(img/path.png) no-repeat center'></a></li>
						</ul>
						<p>Copyright &copy; Fun Gov 2015. All rights reserved</p>
					</div>
				</div>
			</div> <!-- End of the CONTACT FOOTER CONTAINER-->
		</div> <!-- End of the CONTACT FOOTER(DARK BLUE)-->
	</footer> <!-- End of FOOTER-->

	<!-- SCRIPTS -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<!-- LOAD ASIDE AND ARTICLE SCRIPT -->
	<script src="script/content.js"></script>

	<!-- MAP SCRIPTS -->
	<script src="https://maps.googleapis.com/maps/api/js"></script>
    <script src="script/script.js"></script>
</body>
</html>