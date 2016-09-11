<?php
  require dirname(__FILE__).'/Backdata.class.php';

  class Company
  {
    var $backdata;

    function __construct()
    {
        $this->backdata = new Backdata();
    }

    //搜索公司
    function search($mysqli, $postArr){
      $sql = "SELECT * FROM company";

      $searchTxt = '';

      if(empty($postArr['searchTxt'])){
        $back = $this->backdata->creat(1002, '没有参数：searchTxt');
        echo json_encode($back);
        return FALSE;
      }

      $searchTxt = $postArr['searchTxt'];

      $searchArr = explode(' ',$searchTxt);

      foreach ($searchArr as $key => $value) {
        if($key==0){
          $sql.=" WHERE";
        }else{
          $sql.=" OR";
        }
        $sql.=" C_NAME LIKE '%$value%'";;
      }

      foreach ($searchArr as $key => $value) {
        $sql.=" OR C_KEYWORDS LIKE '%$value%'";
      }

      //设置编码
      $mysqli->query("SET NAMES 'utf8'");

      if ($result = $mysqli->query($sql)) {
        if ($result->num_rows > 0) {
            // 输出每行数据
            $dataArray = array();
            while($row = $result->fetch_assoc()) {
                array_push($dataArray,$row);
            }
            $back = $this->backdata->creat(1001, '', $dataArray);
            echo json_encode($back);
        } else {
            $back = $this->backdata->creat(1002, '没有匹配的公司');
            echo json_encode($back);
        }
      } else {
          $back = $this->backdata->creat(1009, 'Error: ' . $sql . '<br>' . $mysqli->error);
          echo json_encode($back);
      }
    }


    //根据关键词，所在城市查找公司
    function chose($mysqli, $postArr){

      $sql = '';

      if($postArr['name']){
        $sql = 'SELECT company WHERE C_CITY="'.$postArr['city'].'" AND C_TYPE="'.$postArr['type'].'" AND C_NAME LIKE "%'.$postArr['name'].'%"';
      }else{
        $sql = 'SELECT company WHERE C_CITY="'.$postArr['city'].'" AND C_TYPE="'.$postArr['type'].'"';
      }

      //设置编码
      $mysqli->query("SET NAMES 'utf8'");

      if ($result = $mysqli->query($sql)) {
        if ($result->num_rows > 0) {
            // 输出每行数据
            $dataArray = array();
            while($row = $result->fetch_assoc()) {
                array_push($dataArray,$row);
            }
            $back = $this->backdata->creat(1001, '', $dataArray);
            echo json_encode($back);
        } else {
            $back = $this->backdata->creat(1002, '没有匹配的公司');
            echo json_encode($back);
        }
      } else {
          $back = $this->backdata->creat(1009, 'Error: ' . $sql . '<br>' . $mysqli->error);
          echo json_encode($back);
      }
    }

    //根据id增加女性参与人总数
    function addJoinWomanNumberWidthId($mysqli, $postArr){
      $sql = 'UPDATE company SET JOIN_WOMAN_NUM=JOIN_WOMAN_NUM+1 AND JOIN_NUM=JOIN_NUM+1 WHERE CID='.$postArr['id'];

      if ($mysqli->query($sql) === TRUE) {
          $back = $this->backdata->creat(1000);
          echo json_encode($back);
      } else {
          $back = $this->backdata->creat(1009, 'Error: ' . $sql . '<br>' . $mysqli->error);
          echo json_encode($back);
      }
    }

    //根据id增加男性参与人总数
    function addJoinManNumberWidthId($mysqli, $postArr){
      $sql = 'UPDATE company SET JOIN_MAN_NUM=JOIN_MAN_NUM+1 AND JOIN_NUM=JOIN_NUM+1 WHERE CID='.$postArr['id'];

      if ($mysqli->query($sql) === TRUE) {
          $back = $this->backdata->creat(1000);
          echo json_encode($back);
      } else {
          $back = $this->backdata->creat(1009, 'Error: ' . $sql . '<br>' . $mysqli->error);
          echo json_encode($back);
      }
    }

    //根据id增加参与人总数
    function addJoinNumberWidthId($mysqli, $postArr){
      $sql = 'UPDATE company SET JOIN_NUM=JOIN_NUM+1 WHERE CID='.$postArr['id'];

      if ($mysqli->query($sql) === TRUE) {
          $back = $this->backdata->creat(1000);
          echo json_encode($back);
      } else {
          $back = $this->backdata->creat(1009, 'Error: ' . $sql . '<br>' . $mysqli->error);
          echo json_encode($back);
      }
    }

    //根据id增加爆料数
    function addBaoliaoNumberWidthId($mysqli, $postArr){
      $sql = 'UPDATE company SET B_NUM=B_NUM+1 WHERE CID='.$postArr['id'];

      if ($mysqli->query($sql) === TRUE) {
          $back = $this->backdata->creat(1000);
          echo json_encode($back);
      } else {
          $back = $this->backdata->creat(1009, 'Error: ' . $sql . '<br>' . $mysqli->error);
          echo json_encode($back);
      }
    }

    //新增公司
    function addNew($mysqli, $postArr){

      $sql = 'INSERT INTO company (C_NAME, CREAT_TIME) VALUES ("'.$postArr['companyName'].'", "'.time().'")';

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
