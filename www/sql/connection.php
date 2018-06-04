<?php  
$username = "root";
$password="1417vaultPole";
		 //$password = "BCUbcs683";
		 $hostname = "localhost"; 
		 $dbh = mysql_connect($hostname, $username, $password) or die("Unable to connect to MySQL");
		 mysql_select_db ("weprintbarcodes_new"); 
		 //echo "dbh = " . $dbh . "<br />"; 
?>
