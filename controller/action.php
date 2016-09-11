<?php

  class Acion
  {
    var $Company;
    var $Baoliao;
    var $News;
    var $User;

    //加载模型
    function loadModel($model){
      require dirname(__FILE__).'/../model/'.$model.'.class.php';
      $this->$model = new $model();
    }

    /***  公司相关  start ***/

    //搜索公司
    function searchCompany($mysqli, $postArr){
      $this->loadModel('Company');
      $this->Company->search($mysqli, $postArr);
    }

    //选择公司
    function choseCompany($mysqli, $postArr){
      $this->loadModel('Company');
      $this->Company->chose($mysqli, $postArr);
    }

    //增加女性参与人数
    function addJoinWomanNumber($mysqli, $postArr){
      $this->loadModel('Company');
      $this->Company->addJoinWomanNumberWidthId($mysqli, $postArr);
    }

    //增加男性参与人数
    function addJoinManNumber($mysqli, $postArr){
      $this->loadModel('Company');
      $this->Company->addJoinManNumberWidthId($mysqli, $postArr);
    }

    //增加参与人总数
    function addJoinNumber($mysqli, $postArr){
      $this->loadModel('Company');
      $this->Company->addJoinNumberWidthId($mysqli, $postArr);
    }

    //增加爆料数
    function addBaoliaoNumber($mysqli, $postArr){
      $this->loadModel('Company');
      $this->Company->addBaoliaoNumberWidthId($mysqli, $postArr);
    }

    //新增公司
    function addCompany($mysqli, $postArr){
      $this->loadModel('Company');
      $this->Company->addNew($mysqli, $postArr);
    }

    /***  公司相关  end ***/

    /***  爆料相关  start ***/

    //增加消息数
    function addNewsNumber($mysqli, $postArr){
      $this->loadModel('Baoliao');
      $this->Baoliao->addNewsNumberWidthId($mysqli, $postArr);
    }

    //增加赞数
    function addZanNumber($mysqli, $postArr){
      $this->loadModel('Baoliao');
      $this->Baoliao->addZanNumberWidthId($mysqli, $postArr);
    }

    //新增爆料
    function addBaoliao($mysqli, $postArr){
      $this->loadModel('Baoliao');
      $this->Baoliao->addNew($mysqli, $postArr);
    }

    /***  爆料相关  end ***/

    /***  消息相关  start ***/

    //根据发送人id查找消息
    function getNewsFID($mysqli, $postArr){
      $this->loadModel('News');
      $this->News->getNewsByFromId($mysqli, $postArr);
    }

    //根据发送人id查找消息
    function getNewsTID($mysqli, $postArr){
      $this->loadModel('News');
      $this->News->getNewsByToId($mysqli, $postArr);
    }

    //新增消息
    function addNews($mysqli, $postArr){
      $this->loadModel('News');
      $this->News->addNew($mysqli, $postArr);
    }

    /***  消息相关  end ***/

    /***  用户相关  start ***/

    //登录
    function userRegist($mysqli, $postArr){
      $this->loadModel('User');
      $this->User->getNewsByFromId($mysqli, $postArr);
    }

    //注册
    function userLogin($mysqli, $postArr){
      $this->loadModel('User');
      $this->User->getNewsByToId($mysqli, $postArr);
    }

    /***  用户相关  end ***/
  }
?>
