<?php $this->load->view('components/head'); ?>
<base href="<?= base_url(); ?>">
<!-- <link rel="stylesheet" href="assets/css/bootstrap-wysihtml5.css" /> -->

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

<li class="submenu"> <a href="#"><i class="icon icon-inbox"></i> <span>Aktifitas</span> <span class="icon icon-chevron-down pull-right" style="margin-right: 5px;"></span></a>
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
				Home</a> <a href="aktifitas" class="current">Aktifitas</a> </div>
		<h1><span class="icon-briefcase"></span>
			Aktifitas <small>Mahasiswa</small></h1>
	</div>
	<hr>

	<div class="container-fluid">
		<!-- modal kirim -->
		<div class="row-fluid">


			<?php if (!empty($histori)) : ?>
				<table class="table table-striped table-bordered data-table">
					<thead>
						<tr>
							<th>Nim</th>
							<th>Nama</th>
							
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<?php foreach ($histori as $activity) : ?>
							<tr>
								<td><?php echo $activity->nim; ?></td>
								<td><?php echo $activity->nama; ?></td>
								
								
								<td>
									<a href="<?= base_url('aktifitas/detailmahasiswa/' . $activity->nim); ?>" class='btn btn-info btn-block'>
										<span class='icon-pencil'></span> Detail Mahasiswa
									</a>
								</td>
								
							</tr>
						<?php endforeach; ?>
					</tbody>
				</table>
			<?php else : ?>
				<p>No activities found.</p>
			<?php endif; ?>
		</div>
	</div>
</div>
</div>

<?php $this->load->view('components/foot'); ?>
<script src="assets/js/app/myfunction.js"></script>
<script src="assets/js/app/soalesai.js"></script>
<?php $this->load->view('components/jsfoot'); ?>


</body>

</html>