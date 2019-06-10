<?php
header("Content-Text:application/json charset=utf-8");
require_once("init.php");
@$uname=$_REQUEST["uname"];
@$upwd=$_REQUEST["upwd"];
if($uname&&$upwd){
    $sql="SELECT uid FROM emp WHERE uname='$uname' and upwd='$upwd'";
    $result=mysqli_query($conn,$sql);
    $data=mysqli_fetch_row($result);
    //var_dump($data);
    //$output=[
    //   "true",
//       "dname"=>$data[1],
//       "uname"=>$data[2],
//       "upwd"=>$data[3],
//       "sex"=>$data[4],
//       "user_name"=>$data[5],
//       "email"=>$data[6],
//       "phone"=>$data[7]
 //       "data"=>$data
 // ];
    if($data){
        session_start();
		$_SESSION["uid"]=$data[0];
//        var_dump( $data);
        echo "true";
    }else{
        echo "false";
    }
}