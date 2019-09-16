<?php
add_action( 'rest_api_init', function () {
 	register_rest_route( 'employee/v1', '/all', array(
	    'methods' => 'GET',
	    'callback' => 'action__employeedata',
  		) 
 	);
} );

function action__employeedata( $data ) {
    global $wpdb;
    $query = "SELECT * FROM `wp_employeedata`";
    $employee_data = $wpdb->get_results( $query );
    return $employee_data;
}