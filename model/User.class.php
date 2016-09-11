<?php
  require dirname(__FILE__).'/Backdata.class.php';

  class User
  {

    var $backdata;

    function __construct()
    {
        $this->backdata = new Backdata();
    }

    //检测邮箱存在
    function checkEmail($mysqli, $userEmail){
      $sql = 'SELECT * FROM user WHERE U_EMAIL='.$userEmail;

      $back = array();

      if ($result = $mysqli->query($sql)) {

          if ($result->num_rows > 0) {
              $back = $this->backdata->creat(1001,'该邮箱已被注册');
          }else{
              $back = $this->backdata->creat(1002);
          }
      } else {
        $back = $this->backdata->creat(1009, 'Error: ' . $sql . '<br>' . $mysqli->error);
      }

      return  $back;
    }

    //注册
    function regist($mysqli, $postArr){

      $check = $this->checkEmail($mysqli, $postArr['userEmail']);

      if($check['state']==1009){
        echo json_encode($back);
        return FALSE;
      }

      if($check['state']==1002){
        $this->addNew($mysqli, $postArr);
        return FALSE;
      }

      if($check['state']==1001){
        echo json_encode($back);
        return FALSE;
      }
    }

    //登录
    function login($mysqli, $userEmail, $userPwd){

      $md5pwd = md5($userPwd);

      $sql = 'SELECT * FROM user WHERE U_PWD='.$md5pwd.' AND U_EMAIL='.$userEmail;

      if ($result = $mysqli->query($sql)) {

          if ($result->num_rows > 0) {
              $back = $this->backdata->creat(1000,'登录成功');
              echo json_encode($back);
          } else {
              $back = $this->backdata->creat(1002,'帐号或密码错误');
              echo json_encode($back);
          }
      } else {
          $back = $this->backdata->creat(1009, 'Error: ' . $sql . '<br>' . $mysqli->error);
          echo json_encode($back);
      }

    }

    //新增用户
    function addNew($mysqli, $postArr){
      $md5pwd = md5($postArr['userPwd']);

      $sql = 'INSERT INTO user (U_PWD, U_EMAIL, U_NAME, U_SEX, CREAT_TIME) VALUES ("'.$md5pwd.'", "'.$postArr['userEmail'].'", "'.$postArr['userName'].'", "'.$postArr['userSex'].'", "'.time().'")';

      if ($mysqli->query($sql) === TRUE) {
          $back = $this->backdata->creat(1000,'注册成功');
          echo json_encode($back);
      } else {
          $back = $this->backdata->creat(1009, 'Error: ' . $sql . '<br>' . $mysqli->error);
          echo json_encode($back);
      }

    }
  }

?>
