<?php
  require 'action.php';
  require '../conn/conn.php';

  $postArr = $_POST;
  $action = $_GET['$$action'];

  $index = new Acion();
  $index->$action($mysqli, $postArr);
?>
