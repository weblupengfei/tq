<?php
//$output=["ok"=>1,"uname"=>""]
header("Content-Type:application/json");
require_once("init.php");
session_start();
@$uid=$_SESSION["uid"];
if($uid){
    $sql="select uname,dname,sex,user_name,email,phone from emp WHERE uid=$uid";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($result);
//    var_dump ($row);
    $output=[
        "ok"=>1,
        "uname"=>$row[0],
        "dname"=>$row[1],
        "sex"=>$row[2],
        "user_name"=>$row[3],
        "email"=>$row[4],
        "phone"=>$row[5],

    ];
    echo json_encode($output);
}else{
    echo json_encode(["ok"=>0]);
}
