<!-- Assignment 2 tmnt.html for team Scrum City. Written by Chris Bell -->


<?php

$movie = $_REQUEST["film"];
$text = file_get_contents("/var/www/html/3/moviefiles/$movie/info.txt");
$info = explode("\n", $text);
$title = $info[0];
$year = $info[1];
$rating = $info[2];
$overviewimg = "moviefiles/$movie/overview.png";
$overviewtext = file_get_contents("/var/www/html/3/moviefiles/$movie/overview.txt");
$overviewinfo = explode("\n", $overviewtext);
$reviews = glob("/var/www/html/3/moviefiles/$movie/review*.txt");
$numreviews = count($reviews);



?>

<!DOCTYPE html>
<html>
	<head>
		<title><?= $title ?> - Rancid Tomatoes</title>

		<meta charset="utf-8" />

		<link href="movie.css" type="text/css" rel="stylesheet" />



		<link href="rotten.gif" type="image/gif" rel="shortcut icon" />
	</head>

	<body>
		<div id="banner">
			<img src="banner.png" alt="Rancid Tomatoes" />

			<div>
				<form action="search.php" method="post">	
					<div id="search">			
			<input type="text" name="q" value="Search for a Movie"/>
					<input type="submit" value="Search"/>
					</div>
				</form>
	<a href="minimal.php?film=<?php echo $movie; ?>"> Click here for a minimalist version of the site! </a>
			</div>
			
		</div>

		<h1><?= $title ?> (<?= $year ?>) </h1>
		<div id="content">
		<div id="overview">
			<img src=<?= $overviewimg ?> alt="general overview" />
		<dl>

		<?php
		foreach($overviewinfo as $value){
			$line = explode(":", $value);
		?>

		<dt><?= $line[0] ?></dt>
		<dd><?= $line[1] ?></dd>	

		<?php
		}
		?>

		</dl>
		
	</div>

		<div id="tableheader">

			<?php
			if($rating < 60) {
			?>

			<img id="tableheadicon" src="rottenbig.png" alt="Rotten" />

			<?php
			}

			else{
			?>

			<img id="tableheadicon" src="freshbig.png" alt="Fresh" />
			
			<?php			
			}			
			?>

			<?= $rating ?>%
		</div>
		
		<div class="column">

		<?php
		for($i=0; $i<(int)($numreviews/2); $i++){
			$thisreviewtext = file_get_contents($reviews[$i]);
			$thisreview = explode("\n", $thisreviewtext);		
		?>

			<p class="quote">

				<?php
				if($thisreview[1] == "FRESH"){
				?>

					<img class="icon" src="fresh.gif" alt="Fresh" />
		
				<?php
				}

				else if($thisreview[1] == "ROTTEN"){
				?>

					<img class="icon" src="rotten.gif" alt="Rotten"/>
			
				<?php
				}
				?>
		
			<q><?= $thisreview[0] ?></q>
			</p>
			<p class="critic">
			<img class="icon" src="critic.gif" alt="Critic"/>
			<?= $thisreview[2] ?> <br />
			<em><?= $thisreview[3] ?></em>
			</p>
		<?php
		}
		?>
		</div>


		<div class="column">
		
		<?php
		for($i= (int)($numreviews/2); $i<$numreviews; $i++){
			$thisreviewtext = file_get_contents($reviews[$i]);
			$thisreview = explode("\n", $thisreviewtext);
		?>
			
			<p class="quote">

				<?php
				if($thisreview[1] == "FRESH"){
				?>
				
					<img class="icon" src="fresh.gif" alt="Fresh" />
				
				<?php
				}
			
				else if($thisreview[1] == "ROTTEN"){
				?>
			
					<img class="icon" src="rotten.gif" alt="Rotten"/>
			
				<?php
				}
				?>
			
			<q><?= $thisreview[0] ?></q>
			</p>
			<p class="critic">
			<img class="icon" src="critic.gif" alt="Critic"/>
			<?= $thisreview[2] ?> <br />
			<em><?= $thisreview[3] ?></em>
			</p>
		<?php
		}
		?>
		</div>

		<p id="bar">(1-<?= $numreviews ?>) of <?= $numreviews ?></p>
		</div>

		<div id="validation">
			<a href="http://validator.w3.org/check?uri=http%3A%2F%2Fec2-54-213-135-202.us-west-2.compute.amazonaws.com%2F3%2Fmovie.php%3Ffilm%3Dprincessbride">
			   <img src="w3c-xhtml.png" alt="Valid HTML5" /></a> <br />
			<a href="http://jigsaw.w3.org/css-validator/check/referer">
			   <img src="w3c-css.png" alt="Valid CSS" /></a>
		</div>
	</body>
</html>


