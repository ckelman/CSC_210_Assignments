
<?php
$query=$_POST["q"];

if($query=="tmnt" || $query=="tmnt2" || $query=="mortalkombat" || $query=="princessbride")
{
header("Location: movie.php?film=$query");
exit;
}

else
{
header("Location: error.php");
exit;
}

?>

