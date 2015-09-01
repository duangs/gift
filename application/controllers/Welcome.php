<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {
	
	public function index()
	{
		$view_data = array('assets_url'=>ASSETS_URL);
		$this->load->view('html/index/index.tpl.php',$view_data);
	}

}
