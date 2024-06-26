<?php $this->load->view('components/head'); ?>
<base href="<?= base_url(); ?>">

<link rel="stylesheet" href="assets/css/bootstrap-wysihtml5.css" />
<?php $this->load->view('components/navbar'); ?>
<!--sidebar-menu-->
<li><a href="home"><i class="icon icon-home"></i> <span>Dashboard</span></a> </li>
<li class="submenu"> <a href="#"><i class="icon icon-th-list"></i> <span>Manage Mahasiswa</span> <span class="icon icon-chevron-down pull-right" style="margin-right: 5px;"></span></a>
	<ul>
		<li><a href="mahasiswa">Data Mahasiswa</a></li>
		<li><a href="nilai">Nilai</a></li>
	</ul>
</li>
<li class="submenu"> <a href="#"><i class="icon icon-print"></i> <span>Laporan</span> <span class="icon icon-chevron-down pull-right" style="margin-right: 5px;"></span></a>
	<ul>
		<li><a href="laporan/mahasiswalaporan">Laporan Mahasiswa</a></li>
		<li><a href="laporan/nilailaporan">Laporan Nilai</a></li>
	</ul>

</li>

<li class="submenu"> <a href="#"><i class="icon icon-print"></i> <span>Aktifitas</span> <span class="icon icon-chevron-down pull-right" style="margin-right: 5px;"></span></a>
	<ul>
		<li><a href="aktifitas">Aktifitas Mahasiswa</a></li>
	</ul>
</li>
</ul>
</div>
<!--sidebar-menu-->
<div id="content">
	<div id="content-header">
		<div id="breadcrumb"> <a href="home" title="Go to Home" class="tip-bottom"><i class="icon-home"></i>
				Home</a> <a href="banksoal" class="current">Bank Soal</a> </div>
		<h1><span class="icon-briefcase"></span>
			Manage Soal<small> Computational Thinking </small></h1>
	</div>
	<hr>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="quick-actions_homepage offset2">
				<ul class="quick-actions">
					<li class="bg_lo span3"> <a href="banksoal"> <i class="icon-book"></i> Bank Soal</a> </li>
					<li class="bg_lg span3"> <a href="soalterkirim"> <i class="icon-ok-circle"></i> Soal Terkirim</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<hr>
</div>

<?php $this->load->view('components/foot'); ?>
<script src="assets/js/app/myfunction.js"></script>
<script src="assets/js/app/banksoal.js"></script>
<?php $this->load->view('components/jsfoot'); ?>
</body>

</html>