<?php

  class Backdata{
    function creat($state=1009, $msg='', $data=array()){
      $back = array();
      $back['state'] = $state;
      $back['msg'] = $msg;
      $back['data'] = $data;
      return $back;
    }
  }
 ?>
