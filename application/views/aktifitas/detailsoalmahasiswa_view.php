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
				Home</a> <a href="aktifitas" 
                class="current">Aktifitas</a> <a href="<?= base_url('aktifitas/detailmahasiswa/' . $studentActivities[0]['nim']); ?>" 
                class="current">Detail Mahasiswa</a> </div>
		<h1><span class="icon-briefcase"></span>
			Aktifitas <small>Detail Soal Mahasiswa </small></h1>
	</div>
	<hr>
	<div class="container-fluid">
		<div class="row-fluid" style="margin-left: 15px;">
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
	<div class="container-fluid">
		


		<div class="row-fluid">
			<?php if (!empty($studentActivities)) : ?>
				<table class="table table-striped table-bordered data-table">
					<thead>
						<tr>
							<th>Nomer</th>
							<th>Kategori</th>
							<th>Nomer pertanyaan</th>
							<th>Nomer soal</th>
							<th>Pertanyaan</th>
							<th>jawaban</th>
							<th>Confident Tag</th>
							<th>Hasil</th>
							<th>Waktu</th>
							
						</tr>
					</thead>
					<tbody>
						<?php $no = 1;  ?>
						<?php foreach ($studentActivities as $activity) : ?>
							<tr>
								<td><?php echo $no++; ?></td>
								<td><?php echo $activity['nama_level'] ?></td>
								<td><?php echo $activity['idsoal']; ?></td>
								<td><?php echo $activity['nosoal']; ?></td>
								<td><?php echo $activity['isisoal']; ?></td>
								<td>
                            <?php 
                           
                            echo !empty($activity['jawabesai']) ? $activity['jawabesai'] : $activity['jawabpilgan']; 
                            ?>
                        </td>
								<td><?php echo !empty($activity['confident']) ? $activity['confident'] : 'Tidak ada confident dari databases'; ?></td>
								<td><?php echo $activity['nilai']; ?></td>
								<td><?php echo $activity['tanggal']; ?></td>
								

							</tr>
						<?php endforeach; ?>
					</tbody>
				</table>
			<?php else : ?>
				<p>No activities soal found.</p>
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