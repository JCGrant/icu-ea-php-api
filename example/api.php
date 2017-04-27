<?php
require_once("../icu_ea_api.php");
$csp_code = getenv('CSP_CODE');
$api_key = getenv('API_KEY');
$year = getenv('YEAR');
$api = new ICUEActivitiesAPI($csp_code, $api_key, $year);
echo $api->list_members();
?>