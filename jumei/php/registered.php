<?php
	header("content-type:text/html;charset=utf-8");
	$conn=new mysqli('localhost','root','','db_student_admin','3306');
	$username=$_GET['username'];
	$password=$_GET['password'];
	$conn->query("set names utf8");
   	//接受客户端传递的数据   
   	//编写sql语句
   	$sql="INSERT INTO `login_score`(`username`, `password`) VALUES ('$username','$password')";
   	//执行sql语句  参数一 ：连接数据库的返回值 参数二：sql语句
   	$rows = mysqli_query($conn,$sql);//增删改，返回值都是受影响的行数；
	if($rows){
		echo "<script>alert('注册成功');
		location.href='../index.html';
		</script>";
	}else{
		echo "<script>alert('注册失败');
		location.href='../register.html';
		</script>";
	}
	
?>