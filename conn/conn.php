<?php
	$server = 'localhost';
	$user = 'root';
	$pass = 'root';
	$database = 'workerror';

	//mysql
	// $connection = mysql_connect($server, $user, $pass) or die ("连接mysql失败");
	//
	// mysql_select_db($database, $connection) or die ("连接数据库失败");
	// mysql_query("set names 'utf8'");
	//
	//   //This stops SQL Injection in POST vars
	//   foreach ($_POST as $key => $value) {
	//     $_POST[$key] = mysql_real_escape_string($value);
	//   }
	//
	//   //This stops SQL Injection in GET vars
	//   foreach ($_GET as $key => $value) {
	//     $_GET[$key] = mysql_real_escape_string($value);
	//   }


		//mysqli
		$mysqli = new mysqli($server, $user, $pass, $database);

		/*
		* This is the "official" OO way to do it,
		* BUT $connect_error was broken until PHP 5.2.9 and 5.3.0.
		*/
		if ($mysqli->connect_error) {
		    die("连接失败: " . $mysqli->connect_error);
		}

?>
