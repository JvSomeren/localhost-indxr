<?php

//  _             _             
// (_) _ __    __| |__  __ _ __ 
// | || '_ \  / _` |\ \/ /| '__|
// | || | | || (_| | >  < | |   
// |_||_| |_| \__,_|/_/\_\|_|   
//

header('Access-Control-Allow-Origin: *');

$dirs = array_values(array_filter(glob('*'), 'is_dir'));

header('Content-type: application/json');
echo json_encode($dirs);
