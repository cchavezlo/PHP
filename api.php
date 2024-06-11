<?php
$publicKey = '5204ef4e7c3d37daa9a5f8fd38649e2f'; 
$privateKey = '70b76e267e366dcf11d8cdf5dd6c95fc5fd91852'; 

$timestamp = time();
$hash = md5($timestamp . $privateKey . $publicKey);

$nameStartsWith = $_GET['nameStartsWith'] ?? '';

$url = "https://gateway.marvel.com/v1/public/characters?nameStartsWith=$nameStartsWith&ts=$timestamp&apikey=$publicKey&hash=$hash";

$response = file_get_contents($url);
echo $response;
