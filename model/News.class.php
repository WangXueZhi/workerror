<?php
  require dirname(__FILE__).'/Backdata.class.php';

  class news
  {
    var $backdata;

    function __construct()
    {
        $this->backdata = new Backdata();
    }

    //根据发送人id查找消息
    function getNewsByFromId($mysqli, $fromId){
      $sql = 'SELECT * FROM news WHERE U_FROM_ID='.$fromId;

      if ($result = $mysqli->query($sql)) {

          if ($result->num_rows > 0) {
              // 输出每行数据
              $dataArray = array();
              while($row = $result->fetch_assoc()) {
                  array_push($dataArray,$row);
              }
              $back = $this->backdata->creat(1001,'',$dataArray);
              echo json_encode($back);
          } else {
              $back = $this->backdata->creat(1002,'没有消息');
              echo json_encode($back);
          }

      } else {
          $back = $this->backdata->creat(1009, 'Error: ' . $sql . '<br>' . $mysqli->error);
          echo json_encode($back);
      }

    }

    //根据接受人id查找消息
    function getNewsByToId($mysqli, $toId){
      $sql = 'SELECT * FROM news WHERE U_TO_ID='.$toId;

      if ($result = $mysqli->query($sql)) {

          if ($result->num_rows > 0) {
              // 输出每行数据
              $dataArray = array();
              while($row = $result->fetch_assoc()) {
                  array_push($dataArray,$row);
              }
              $back = $this->backdata->creat(1001,'',$dataArray);
              echo json_encode($back);
          } else {
              $back = $this->backdata->creat(1002,'没有消息');
              echo json_encode($back);
          }
      } else {
          $back = $this->backdata->creat(1009, 'Error: ' . $sql . '<br>' . $mysqli->error);
          echo json_encode($back);
      }

    }

    //新增消息
    function addNew($mysqli, $postArr){

      $sql = 'INSERT INTO news (U_FROM_ID, U_TO_ID, U_FROM_SEX, U_TO_SEX, N_CONTENT, BID, CREAT_TIME) VALUES ("'.$postArr['userFromId'].'", "'.$postArr['userToId'].'", "'.$postArr['userFromSex'].'", "'.$postArr['userToSex'].'", "'.$postArr['newsContent'].'", "'.$postArr['baoliaoId'].'", "'.time().'")';

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
