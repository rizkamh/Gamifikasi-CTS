<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class AktifitasController extends CI_Controller {
	function __construct(){
		parent::__construct();
			//validasi jika user belum login
			if($this->session->userdata('islogin') != 'masuk'){
				redirect('login');
			}
			$this->load->model("aktifitas");
			$this->load->helper("security");
	}

	public function index()
	{
		$data['histori'] = $this->aktifitas->getAktifitas();
        $this->load->view('aktifitas/aktifitas_view', $data);
	}

	public function showStudentActivity($idnilai, $level='all') {
		$data['studentActivities'] = $this->aktifitas->getCofidentKondisi($idnilai, $level);
		$data['total_questions'] = $this->aktifitas->getTotalQuestions();
        $data['total_correct'] = $this->aktifitas->getTotalCorrectAnswers();
        $data['total_incorrect'] = $this->aktifitas->getTotalIncorrectAnswers();
        $data['total_time'] = $this->aktifitas->getTotalTime();
		$this->load->view('aktifitas/detailmahasiswa_view', $data);
	}

	public function showSoalStudent($idnilai, $idsoal, $level='all') {

		$data['studentActivities'] = $this->aktifitas->getSoalKondisi($idnilai, $idsoal, $level);
		$this->load->view('aktifitas/detailsoalmahasiswa_view', $data);
	}
	

	
}
