<?php
/**
 * Created by IntelliJ IDEA.
 * User: Mrx
 * Date: 27.11.2021
 * Time: 16:04
 */

$_POST = json_decode( file_get_contents("php://input"), true );
echo var_dump($_POST);