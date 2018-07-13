<?php
	header("content-type:text/html;charset=utf-8");
	$conn=new mysqli('localhost','root','','db_student_admin','3306');
	$username=$_GET['username'];
	$password=$_GET['password'];
	$sql="SELECT * FROM `login_score` WHERE username='$username'";
	$res=mysqli_query($conn,$sql);
	$n=mysqli_num_rows($res);
   	if(!$n){
   		echo"<script>alert('用户名不存在');location.href='../registered.html'</script>";	
   	}else{  		
   	    $data=mysqli_fetch_assoc($res);
   	    if($data["username"]==$username&&$data["password"]==$password){
   	    	echo"<script>alert('登录成功');location.href='../index.html';</script>";
   	    } else{
   	    	echo"<script>alert('密码错误');location.href='../login.html';</script>";
   	    }   
   	}
?>