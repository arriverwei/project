
<?php
	$json=file_get_contents('../index.json')
//	$json=json_decode($json)
	foreach($json as $key =>$value){
		echo '<script>
			<a href="#"><img src=$value->src/></a>
			</script>';
	}
?>
