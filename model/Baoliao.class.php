<?php
  require dirname(__FILE__).'/Backdata.class.php';

  class Baoliao
  {
    var $backdata;

    function __construct()
    {
        $this->backdata = new Backdata();
    }

    //根据id增加消息数
    function addNewsNumberWidthId($mysqli, $postArr){
      $sql = 'UPDATE baoliao SET N_NUM=N_NUM+1 WHERE BID='.$id;

      if ($mysqli->query($sql) === TRUE) {
          $back = $this->backdata->creat(1000);
          echo json_encode($back);
      } else {
          $back = $this->backdata->creat(1009, 'Error: ' . $sql . '<br>' . $mysqli->error);
          echo json_encode($back);
      }
    }

    //根据id增加赞数
    function addZanNumberWidthId($mysqli, $postArr){
      $sql = 'UPDATE baoliao SET Z_NUM=Z_NUM+1 WHERE BID='.$id;

      if ($mysqli->query($sql) === TRUE) {
          $back = $this->backdata->creat(1000);
          echo json_encode($back);
      } else {
          $back = array();
          $back = $this->backdata->creat(1009, 'Error: ' . $sql . '<br>' . $mysqli->error);
          echo json_encode($back);
      }
    }

    //新增爆料
    function addNew($mysqli, $postArr){

      $sql = 'INSERT INTO baoliao (UID, CID, TID, B_CONTENT, CREAT_TIME) VALUES ("'.$postArr['userId'].'", "'.$postArr['companyId'].'", "'.$postArr['typeId'].'", "'.$postArr['baoContent'].'", "'.time().'")';

      if ($mysqli->query($sql) === TRUE) {
          $back = $this->backdata->creat(1000);
          echo json_encode($back);
      } else {
          $back = $this->backdata->creat(1009, 'Error: ' . $sql . '<br>' . $mysqli->error);
          echo json_encode($back);
      }

    }
  }

?>
