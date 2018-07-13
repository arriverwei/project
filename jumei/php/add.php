<?php
	header("content-type:text/html;charset=utf-8");
	$conn=new mysqli('localhost','root','','db_student_admin','3306');
	$conn->query("set names utf8");
  	$uname=$_REQUEST['studentname'];
    $h5=$_REQUEST['h5'];
    $js=$_REQUEST['js'];
    $sql="INSERT INTO `login_score`( `username`,`password` ) VALUES ('$username','$password')";
    $rows=mysqli_query($conn,$sql);
    if($rows){
    	echo"<script>alert('添加成功');location.href='../index.html';</script>";
    }else{
    	echo "<script>alert('添加失败');location.href='../registered.html';</script>";
    		
    }
?>