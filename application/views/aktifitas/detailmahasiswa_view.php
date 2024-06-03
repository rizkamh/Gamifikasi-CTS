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
				Home</a> <a href="aktifitas" class="current">Aktifitas</a> </div>
		<h1><span class="icon-briefcase"></span>
			Aktifitas <small>Detail Mahasiswa </small></h1>
	</div>
	<hr>

	<div class="container-fluid">
		<div class="row-fluid pull-left">
			<?php if (!empty($studentActivities)) : ?>
				<table class="table table-striped table-bordered data-table" style="max-width: 300px;">
					<thead>
						<tr>
							<th>Nim</th>
							<th>Nama</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><?php echo $studentActivities[0]['nim']; ?></td>
							<td><?php echo $studentActivities[0]['nama']; ?></td>
						</tr>
					</tbody>
				</table>
			<?php else : ?>
				<p>No activities found.</p>
			<?php endif; ?>
		</div>

		<div class="row-fluid mt-3">
			<div class="quick-actions_homepage offset1">
				<ul class="quick-actions">
					<li class="bg_lb" style="width: 250px;"> <a href="#">
							<div style="display: flex; flex-direction: row-reverse;"> <i class="icon-file" style="margin-top: 18px;
    margin-left: 1px;"></i>
								<div class="col" style="text-align: left;">
									<h3><?= $total_questions ?></h2>
										<h4>Total Pertanyaan</h4>
								</div>
							</div>
						</a> </li>
					<li class="bg_lo" style="width: 250px;"> <a href="#">
							<div style="display: flex; flex-direction: row-reverse;"> <i class="icon-remove-sign" style="margin-top: 18px;
    margin-left: 15px;"></i>
								<div class="col" style="text-align: left;">
									<h3><?= $total_incorrect ?></h3>
									<h4>Jawaban Salah</h4>
								</div>
							</div>
						</a> </li>
					<li class="bg_lg" style="width: 250px;"> <a href="#">
							<div style="display: flex; flex-direction: row-reverse;"> <i class="icon-thumbs-up" style="margin-top: 18px;
    margin-left: 15px;"></i>
								<div class="col" style="text-align: left;">
									<h3><?= $total_correct ?></h3>
									<h4>Jawaban Benar:</h4>
								</div>
							</div>
						</a> </li>
					<li class="bg_ly" style="width: 250px;"> <a href="#">
							<div style="display: flex; flex-direction: row-reverse;"> <i class="icon-time" style="margin-top: 18px;
    margin-left: 70px;"></i>
								<div class="col" style="text-align: left;">
									<h3> <?= $total_time ?></h3>
									<h4>Waktu:</h4>
								</div>
							</div>
						</a> </li>
				</ul>
			</div>
		</div>


		<div class="row-fluid">
			<?php if (!empty($studentActivities)) : ?>
				<table class="table table-striped table-bordered data-table">
					<thead>
						<tr>
							<th>Nomer</th>
							<th>Kategori</th>
							<th>Nomer pertanyaan</th>
							
							<th>Hasil</th>
							<th>Waktu</th>
							<th>action</th>
						</tr>
					</thead>
					<tbody>
						<?php $no = 1;  ?>
						<?php foreach ($studentActivities as $activity) : ?>
							<tr>
								<td><?php echo $no++; ?></td>
								<td><?php echo $activity['nama_level'] ?></td>
								<td><?php echo $activity['idsoal']; ?></td>
								
								<td><?php echo $activity['nilai']; ?></td>
								<td><?php echo $activity['timer']; ?></td>
								<td><a href="<?= base_url('aktifitas/detailsoalmahasiswa/' . $activity['nim'] . '/' . $activity['idsoal']); ?>" class='btn btn-info btn-block'>
										<span class='icon-pencil'></span> Detail Soal
									</a></td>

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