prodi = $("#prodi").val();
semester = $("#semester").val();
nim = $("#nim").val();
var idsoal = "";
var tipesoal = "";
var tipetugas = "";
var absen = "";
var intervalId = null;

katahbs = "waktu kamu sudah habis!";
kataselesai = "Jawaban tersimpan!";
$(document).ready(function () {
	waktu(30, 00);
	tampilsoal(prodi, semester, nim);
	$("#tampilsoal").css("display", "none");
	$("#tampilriwayat").css("display", "none");
	$("#tampilnilai").css("display", "none");
	$("#tampilstart").css("display", "none");

	$("tbody#tblsoalmhs").on("click", "#kerjakan", function () {
		// if (confirm("Anda yakin ingin mengerjakan soal?")) {
		idsoal = $(this).data("id");
		tipesoal = $(this).data("tipesoal");
		tipetugas = $(this).data("tipetugas");
		absen = $(this).data("absenke");

		absenke = generateabs(absen);
		$("#abske").val(absenke);
		$("#temp").val(absen);
		// console.log(tipetugas,tipesoal,absen,absenke);
		if (tipesoal == "e" && (tipetugas == "quiz" || tipetugas == "uts")) {
			bacasoalesai(idsoal); //masukan dalam json cari
			$("#tampilstart").css("display", "block");
			$("#startkembali").css("display", "inline");
			// $("#tampilsoal").css("display", "block");
			$("#tampilawal").css("display", "none");
			$("#idsoaltp").text(idsoal);
			$("#tipesoaltp").text("Essai");
			$("#tipetugastp1").val(tipetugas);
		} else if (tipesoal == "p" && (tipetugas == "quiz" || tipetugas == "uts")) {
			bacasoalpilgan(idsoal); //masukan dalam json cari
			$("#tampilstart").css("display", "block");
			$("#startkembali").css("display", "inline");
			// $("#tampilsoal").css("display", "block");
			$("#tampilawal").css("display", "none");
			$("#idsoaltp").text(idsoal);
			$("#tipesoaltp").text("Pilihan berganda");
			$("#tipetugastp1").val(tipetugas);
		} else if (
			tipesoal == "e" &&
			(tipetugas == "tugas" || tipetugas == "kelompok")
		) {
			bacasoalesai(idsoal); //masukan dalam json cari
			// $("#timer").css("display", "none");
			$("#tampilsoal").css("display", "block");
			$("#tampilawal").css("display", "none");
			$("#idsoaltp").text(idsoal);
			$("#tipesoaltp").text("Essai");
			$("#tipetugastp1").val(tipetugas);
		} else if (
			tipesoal == "p" &&
			(tipetugas == "tugas" || tipetugas == "kelompok")
		) {
			bacasoalpilgan(idsoal); //masukan dalam json cari
			// $("#timer").css("display", "none");
			$("#tampilsoal").css("display", "block");
			$("#tampilawal").css("display", "none");
			$("#idsoaltp").text(idsoal);
			$("#tipesoaltp").text("Pilihan berganda");
			$("#tipetugastp1").val(tipetugas);
		}
	});
	$("#start").click(function () {
		if (confirm("Waktu akan dimulai ketika Anda klik OK!")) {
			$("#tampilstart").css("display", "none");
			$("#tampilsoal").css("display", "block");
			klikstart();
			$("#timer").css("display", "block");
			waktu(30, 00);
			intervalId = window.setInterval("up()", 1000);
			window.setTimeout("setelahtimeout(katahbs)", 1000 * 60 * 30);
			window.onbeforeunload = function () {
				return "Soal akan terkirim jika anda meninggalkan page ini, Anda yakin?";
			};
		}
		// 1000*60*2 2=1menit
	});

	$("#selesai").click(function () {
		// $('#customModal').css('display', 'block');
		if (confirm("Kirim jawaban ?")) {
			if (tipesoal == "e") {
				// var confident = 'yakin';
				klikstart(confident);
				// alert(kataselesai);
				$("#tampilsoal").css("display", "none");
				$("#tampilawal").css("display", "block");
				// location.reload();
				tampilsoal(prodi, semester, nim);
			} else if (tipesoal == "p") {
				// var confident = 'yakin';
				klikstart(confident);
				// alert(kataselesai);
				$("#tampilsoal").css("display", "none");
				$("#tampilawal").css("display", "block");
				location.reload();
				tampilsoal(prodi, semester, nim);
			}
		}
	});

	// 	let confident = '';

	// 	$('#yakin').click(function() {
	// 		confident = 'yakin';
	// 		$('#customModal').css('display', 'none');
	// 		executeSelesaiLogic(confident);
	// 	});

	// 	$('#takyakin').click(function() {
	// 		confident = 'tidak yakin';
	// 		$('#customModal').css('display', 'none');
	// 		executeSelesaiLogic(confident);
	// 	});

	// 	$(window).click(function(event) {
	// 		var modal = $('#customModal')[0];
	// 		if (event.target == modal) {
	// 			$('#customModal').css('display', 'none');
	// 		}
	// 	});

	// 	function executeSelesaiLogic(confident) {
	// 		if (confirm("Kirim jawaban ?")) {
	// 		if (tipesoal == "e") {
	// 			klikstart(confident);
	// 			$("#tampilsoal").css("display", "none");
	// 			$("#tampilawal").css("display", "block");
	// 			tampilsoal(prodi, semester, nim);
	// 		} else if (tipesoal == "p") {
	// 			klikstart(confident);
	// 			$("#tampilsoal").css("display", "none");
	// 			$("#tampilawal").css("display", "block");
	// 			tampilsoal(prodi, semester, nim);
	// 		}
	// 	}
	// }

	$("#startkembali").click(function () {
		// if (confirm("Data akan terhapus, tetap kembali ?")) {
		// location.reload();
		tampilsoal(prodi, semester, nim);

		$("#tampilawal").css("display", "block");
		$("#tampilsoal").css("display", "none");
		$("#tampilriwayat").css("display", "none");
		$("#tampilnilai").css("display", "none");
		$("#startkembali").css("display", "none");
		$("#tampilstart").css("display", "none");
		// $("#start").css("display", "none");
		// }
	});
	$("#kembali").click(function () {
		if (confirm("Data akan terhapus, tetap kembali ?")) {
			// location.reload();
			tampilsoal(prodi, semester, nim);
			location.reload();
			$("#tampilawal").css("display", "block");
			$("#tampilsoal").css("display", "none");
			$("#tampilriwayat").css("display", "none");
			$("#tampilnilai").css("display", "none");
		}
	});
	$("#kembali1").click(function () {
		// location.reload();
		tampilsoal(prodi, semester, nim);
		$("#tampilawal").css("display", "block");
		$("#tampilsoal").css("display", "none");
		$("#tampilriwayat").css("display", "none");
		$("#tampilnilai").css("display", "none");
	});
	$("#kembali2").click(function () {
		// location.reload();
		tampilsoal(prodi, semester, nim);
		$("#tampilawal").css("display", "block");
		$("#tampilsoal").css("display", "none");
		$("#tampilriwayat").css("display", "none");
		$("#tampilnilai").css("display", "none");
	});

	$("tbody#tblsoalmhs").on("click", "#lihat", function () {
		var idsoal = $(this).data("id");
		var tipesoal = $(this).data("tipesoal");
		if (tipesoal == "e") {
			lihatsoalesai(nim, tipesoal, idsoal);
			$("#tampilsoal").css("display", "none");
			$("#tampilawal").css("display", "none");
			$("#tampilriwayat").css("display", "block");
			$("#idsoaltp1").text(idsoal);
			$("#tipesoaltp1").text("Essai");
		} else if (tipesoal == "p") {
			lihatsoalpilgan(nim, tipesoal, idsoal);
			$("#tampilsoal").css("display", "none");
			$("#tampilawal").css("display", "none");
			$("#tampilriwayat").css("display", "block");
			$("#idsoaltp1").text(idsoal);
			$("#tipesoaltp1").text("Pilihan berganda");
		}
	});
	$("tbody#tblsoalmhs").on("click", "#lihatnilai", function () {
		var idsoal = $(this).data("id");
		var tipesoal = $(this).data("tipesoal");
		lihatnilai(nim, tipesoal, idsoal);
		$("#tampilnilai").css("display", "block");
		$("#tampilawal").css("display", "none");
	});
});

function klikstart(confident) {
	var tipesoal = $(this).data("tipesoal");

	tp = $("span#tipesoaltp").text();

	if (tp == "Essai") {
		try {
			var textarea = $("#form1").find("textarea");
			nim = $("#nim1").val();
			var tanya = [];
			var input = [];

			for (let i = 0; i < questionss.length; i++) {
				var questionData = JSON.parse(localStorage.getItem("question_" + i));
				if (questionData) {
					var idsoal = questionData.idsoal;
					var jawabanesai = questionData.jawaban;
					var isisoal = questionData.isiesai;
					var confident = questionData.confident;

					tanya[i] = isisoal;
					input[i] =
						"<input class='del' type='hidden' name='tanya" +
						i +
						"' id='tanya" +
						i +
						"'>";
					$("#form2").append(input[i]);
					$("#tanya" + i).val(tanya[i]);
					$("#jawaban" + i).val(jawabanesai[i]);
					$("#form2").append(
						"<input type='hidden' name='confident' value='" + confident + "'>"
					);
					$("#form1").append(
						"<input type='hidden' name='confident' value='" + confident + "'>"
					);
					$("#form2").append();

					// Debugging statements
					console.log("Question " + i + ": " + tanya[i]);
					console.log("Answer " + i + ": " + jawaban[i]);
					console.log("ID Soal " + i + ": " + idsoal);
				}
			}

			// Set additional hidden inputs
			$("#idsoal").val(idsoal);
			$("#jlh").val(questionss.length - 1);
			$("#jlhup").val(questionss.length);

			simpanesai();
		} catch (error) {
			console.error("Error in Essai section:", error); // Log specific error for debugging
		}
	} else if (tp == "Pilihan berganda") {
		try {
            var ol = $("#form1").find($("ol"));
			nim = $("#nim1").val();
            nama = $("#nama1").val();
            timer = $("#timer").text();
            tipetugastp1 = $("#tipetugastp1").val();
            tanggal = $("#tanggal").val();
            idsoal = $("#idsoaltp").text();
            $("#idsoal").val(idsoal);
            $("#jlh").val(ol.length - 1);
            var tanya = [];
            var input = [];
            var pila = [];
            var pilb = [];
            var pilc = [];
            var pild = [];
            var exa = [];
            var exb = [];
            var exc = [];
            var exd = [];
            var jb = [];
            var jwbpil = [];
          
            var input_timer = "<input class='del' type='hidden' name='timer' id='timer_val' value='" + timer + "'>";
            $('#form2').append(input_timer);

            for (let i = 0; i < questions.length; i++) {
                var questionData = JSON.parse(localStorage.getItem('questions_' + i));
                if (questionData) {
                    var idsoal = questionData.idsoal;
                    var jawabanpilgan = questionData.jawaban;
					var nopilgan = questionData.nopilgan;
                    var isisoal = questionData.isiesai;
					var apil = questionData.a;
					var bpil = questionData.b;
					var cpil = questionData.c;
					var dpil = questionData.d;
                    var confident = questionData.confident;

                    tanya[i] = isisoal;
                    input[i] = "<input class='del' type='hidden' name='tanya" + i + "' id='tanya" + i + "'>";
                    $('#form2').append(input[i]);
                    $("#tanya" + i).val(tanya[i]);
                    $('#form2').append();
                    $('#form2').append("<input type='hidden' name='confident" + i + "' value='" + confident + "'>");
                    $('#form1').append("<input type='hidden' name='confident" + i + "' value='" + confident + "'>");
                    pila[i] = $("label[for='radioa" + i + "'] #lia" + i + " input").next("span.ra" + i + "").html();
                    pilb[i] = $("label[for='radiob" + i + "'] #lib" + i + " input").next("span.rb" + i + "").html();
                    pilc[i] = $("label[for='radioc" + i + "'] #lic" + i + " input").next("span.rc" + i + "").html();
                    pild[i] = $("label[for='radiod" + i + "'] #lid" + i + " input").next("span.rd" + i + "").html();

                    exa[i] = "<input class='del' type='hidden' name='pila" + i + "' id='pila" + i + "'>";
                    exb[i] = "<input class='del' type='hidden' name='pilb" + i + "' id='pilb" + i + "'>";
                    exc[i] = "<input class='del' type='hidden' name='pilc" + i + "' id='pilc" + i + "'>";
                    exd[i] = "<input class='del' type='hidden' name='pild" + i + "' id='pild" + i + "'>"; //buat input ke controler
                    $('#form2').append(exa[i]);
                    $('#form2').append(exb[i]);
                    $('#form2').append(exc[i]);
                    $('#form2').append(exd[i]);
                    $("#pila" + i).val(apil[i]);
                    $("#pilb" + i).val(bpil[i]);
                    $("#pilc" + i).val(cpil[i]);
                    $("#pild" + i).val(dpil[i]); //pertanyaan a b c d

                    var selected = [];
                    $('#jwb_' + i + ' input:checked').each(function() {
                        selected.push($(this).attr('value'));
                    });
                    jb[i] = selected.join(",");  // Join the selected values with commas
                    jwbpil[i] = "<input class='del' type='hidden' name='jbpil" + i + "' id='jbpil" + i + "'>";
                    $('#form2').append(jwbpil[i]);
                    $("#jbpil" + i).val(jawabanpilgan[i]);
                    $('#form2').append("<input class='del' type='hidden' name='nopilgan" + i + "' value='" + questions[i].nopilgan + "'>");

                    // Debugging statements
             
                }
            }

			simpanpilgan(nim, nama, timer, tipetugastp1, tanggal);
        } catch (error) {
            console.error("Error in Pilihan berganda section:", error); // Log specific error for debugging
        }
	}
}

function setelahtimeout(kata) {
	clearInterval(intervalId);
	alert(kata);
	$("#tampilsoal").css("display", "none");
	$("#tampilawal").css("display", "block");
	tampilsoal(prodi, semester, nim);
}

function up() {
	stop = $("#time").text();
	// console.log(stop);
	tp = $("span#tipesoaltp").text();
	if (tp == "Essai") {
		esai();
	} else if (tp == "Pilihan berganda") {
		pilgan();
	}
}

function esai() {
	var textarea = $("#form1").find($("textarea"));
	nim = $("#nim1").val();
	idsoal = $("#jawaban0").data("id");
	$("#idsoal").val(idsoal);
	$("#jlh").val(textarea.length - 1);
	$("#jlhup").val(textarea.length);
	var tanya = [];
	var input = [];
	for (let i = 0; i < textarea.length; i++) {
		str = "jawaban";
		str += i;
		$("#jawaban" + i).val(CKEDITOR.instances[str].getData());
		tanya[i] = $("#pertanyaan" + i).text();
		input[i] =
			"<input class='del' type='hidden' name='tanya" +
			i +
			"' id='tanya" +
			i +
			"'>";
		$("#form2").append(input[i]);
		$("#tanya" + i).val(tanya[i]);
	}
	// simpanesai();
	updatenilaiesai();
}

function updatenilaiesai() {
	$.ajax({
		url: "hmahasiswa/soalmhs/upesai",
		type: "POST",
		data: $("#form1,#form2").serialize(),
		dataType: "JSON",
		success: function (data) {
			console.log($("#form1,#form2").serialize());
			$(".del").remove();
		},
	});
	// setTimeout(updatenilaiesai, 2000);
}

function pilgan() {
	// console.log($("#li0").eq(0).text());
	var ol = $("#form1").find($("ol"));
	nim = $("#nim1").val();
	// nama = $("#nama1").val();
	idsoal = $("#idsoaltp").text();
	$("#idsoal").val(idsoal);
	$("#jlh").val(ol.length - 1);
	$("#jlhup").val(ol.length);
	var tanya = [];
	var input = [];
	var pila = [];
	var pilb = [];
	var pilc = [];
	var pild = [];
	var exa = [];
	var exb = [];
	var exc = [];
	var exd = [];
	var jb = [];
	var jwbpil = [];
	for (let i = 0; i < ol.length; i++) {
		tanya[i] = $("#pertanyaan" + i).html();
		input[i] =
			"<input class='del' type='hidden' name='tanya" +
			i +
			"' id='tanya" +
			i +
			"'>";
		$("#form2").append(input[i]);
		$("#tanya" + i).val(tanya[i]);

		pila[i] = $("#lia" + i).html();
		pilb[i] = $("#lib" + i).html();
		pilc[i] = $("#lic" + i).html();
		pild[i] = $("#lid" + i).html();
		exa[i] =
			"<input class='del' type='hidden' name='pila" +
			i +
			"' id='pila" +
			i +
			"'>";
		exb[i] =
			"<input class='del' type='hidden' name='pilb" +
			i +
			"' id='pilb" +
			i +
			"'>";
		exc[i] =
			"<input class='del' type='hidden' name='pilc" +
			i +
			"' id='pilc" +
			i +
			"'>";
		exd[i] =
			"<input class='del' type='hidden' name='pild" +
			i +
			"' id='pild" +
			i +
			"'>"; //buat input ke controler
		$("#form2").append(exa[i]);
		$("#form2").append(exb[i]);
		$("#form2").append(exc[i]);
		$("#form2").append(exd[i]);
		$("#pila" + i).val(pila[i]);
		$("#pilb" + i).val(pilb[i]);
		$("#pilc" + i).val(pilc[i]);
		$("#pild" + i).val(pild[i]); //pertanyaan a b c d
		jb[i] = $("input[name=radio" + i + "]:checked").val(); //jawaban
		jwbpil[i] =
			"<input class='del' type='hidden' name='jbpil" +
			i +
			"' id='jbpil" +
			i +
			"'>";
		$("#form2").append(jwbpil[i]);
		$("#jbpil" + i).val(selectedAnswers[i]);
	}
	// simpanpilgan();
	updatenilaipilgan();
}

function updatenilaipilgan() {
	$.ajax({
		url: "hmahasiswa/soalmhs/uppilgan",
		type: "POST",
		data: $("#form1,#form2").serialize(),
		dataType: "JSON",
		success: function (data) {
			console.log($("#form1,#form2").serialize());
			$(".del").remove();
		},
	});
	// setTimeout(updatenilaiesai, 2000);
}

function waktu(menit, detik) {
	document.getElementById("timer").innerHTML = menit + ":" + detik;
	startTimer();
}

function startTimer() {
	var presentTime = document.getElementById("timer").innerHTML;
	var timeArray = presentTime.split(/[:]+/);
	var m = timeArray[0];
	var s = checkSecond(timeArray[1] - 1);
	if (s == 59) {
		m = m - 1;
	}
	//if(m<0){alert('timer completed')}

	document.getElementById("timer").innerHTML = m + ":" + s;
	setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
	if (sec < 10 && sec >= 0) {
		sec = "0" + sec;
	} // add zero in front of numbers < 10
	if (sec < 0) {
		sec = "59";
	}
	return sec;
}

function generateabs(nilai) {
	nilai = "a" + nilai;
	return nilai;
}

function updateabsen(abs) {
	$.ajax({
		url: "hmahasiswa/soalmhs/updateabsen/" + abs,
		type: "POST",
		data: $("#form1,#form2").serialize(),
		dataType: "JSON",
		success: function (data) {
			console.log("absen update", data);
		},
	});
}

function lihatnilai(nim, tipesoal, idsoal) {
    $.ajax({
        url: "hmahasiswa/soalmhs/tampil/" + nim + "/" + tipesoal + "/" + idsoal,
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            console.log(data); // Tambahkan log untuk memeriksa data yang diterima
            nama = $("#nama").val();
            var html = "";
            for (i = 0; i < 1; i++) {
                str = data[i].jawabesai;
                hasil = $(str).text();
                html +=
                    "<table class='fontsoal' style='width:500px; font-size:15px;'>" +
                    "<tr>" +
                    "<td style='width:50px;'><strong>NIM</strong></td>" +
                    "<td style='width:180px;'>: " +
                    data[i].nim +
                    "</td>" +
                    "<td style='width:100px;'><strong>Tipe soal</strong></td>" +
                    "<td>: <span id='tipesoal'>" +
                    (data[i].tipetugas ? data[i].tipetugas.toUpperCase() : 'N/A') + // Periksa apakah tipetugas ada
                    " - " +
                    konversiTipesoal(data[i].tipesoal) +
                    "</span></td>" +
                    "</tr>" +
                    "<tr>" +
                    "<td style='width:50px;'><strong>Nama</strong></td>" +
                    "<td style='width:180px;'>: " +
                    nama +
                    "</td>" +
                    "<td style='width:100px;'><strong>Tanggal kirim</strong></td>" +
                    "<td>: <span id='tipesoal'>" +
                    data[i].tanggal +
                    "</span></td>" +
                    "</tr>" +
                    "</table>" +
                    "<hr>" +
                    "<table class='fontsoal' style='width:500px; font-size:32px; margin-top:20px; text-align:center;'>" +
                    "<tr>" +
                    "<td><strong>Point Soal : " +
                    data[i].total_nilai +
                    "</strong></td>" +
                    "</tr>" +
                    "</table>" +
                    "<hr>";
            }
            $("#hasilnilai").html(html);
            CKEDITOR.replaceAll();
        },
    });
}



function lihatsoalpilgan(nim, tipesoal, idsoal) {
	$.ajax({
		url: "hmahasiswa/soalmhs/tampil/" + nim + "/" + tipesoal + "/" + idsoal,
		type: "POST",
		dataType: "JSON",
		success: function (data) {
			var html = "";
			var hasil = "";
			for (i = 0; i < data.length; i++) {
				jb = data[i].jawabpilgan;
				if (jb == "a") {
					hasil = data[i].a;
				} else if (jb == "b") {
					hasil = data[i].b;
				} else if (jb == "c") {
					hasil = data[i].c;
				} else if (jb == "d") {
					hasil = data[i].d;
				}
				var res = hasil.replace("<p>", "").replace("</p>", "");
				html +=
					"<li>" +
					data[i].isisoal +
					"</li>" +
					"<strong>Jawaban</strong>" +
					"<blockquote>" +
					jb.toUpperCase() +
					". " +
					res +
					"</blockquote>" +
					"<br>";
			}
			$("#form3").html(html);
			CKEDITOR.replaceAll();
		},
	});
}

function lihatsoalesai(nim, tipesoal, idsoal) {
	$.ajax({
		url: "hmahasiswa/soalmhs/tampil/" + nim + "/" + tipesoal + "/" + idsoal,
		type: "POST",
		dataType: "JSON",
		success: function (data) {
			var html = "";
			for (i = 0; i < data.length; i++) {
				str = data[i].jawabesai;
				hasil = $(str).text();
				html +=
					"<li>" +
					data[i].isisoal +
					"</li>" +
					"<strong>Jawaban</strong>" +
					"<blockquote>" +
					data[i].jawabesai +
					"</blockquote>" +
					"<br>";
			}
			$("#form3").html(html);
			CKEDITOR.replaceAll();
		},
	});
}

// function simpanpilgan() {
//     // Serialize form data into an array of objects
//     var formDataArray = $('#form1,#form2').serializeArray();

//     // Convert array of objects into a single object
//     var formDataObject = {};
//     formDataArray.forEach(function(item) {
//         formDataObject[item.name] = item.value;
//     });

//     // Create an array to hold each question's data
//     var questionsData = [];
//     var jlh = parseInt(formDataObject.jlh, 10);

//     for (var i = 0; i <= jlh; i++) {
//         var questionData = {
//             "tipetugastp1": formDataObject.tipetugastp1,
//             "jlh": formDataObject.jlh,
//             "jlhup": formDataObject.jlhup,
//             "nim1": formDataObject.nim1,
//             "nama1": formDataObject.nama1,
//             "idsoal": formDataObject.idsoal,
//             "tanggal": formDataObject.tanggal,
//             "temp": formDataObject.temp,
//             "confident": formDataObject.confident,
//             "timer": formDataObject.timer,
//             "tanya": formDataObject["tanya" + i] || "",
//             "nomor": formDataObject["nomor" + i] || "",
//             "pila": formDataObject["pila" + i] || "",
//             "pilb": formDataObject["pilb" + i] || "",
//             "pilc": formDataObject["pilc" + i] || "",
//             "pild": formDataObject["pild" + i] || "",
//             "jbpil": formDataObject["jbpil" + i] || "",
//             "nopilgan": formDataObject["nopilgan" + i] || ""
//         };
//         questionsData.push(questionData);
//     }

//     // Log the form data in a pretty format
//     console.log("Form Data: ", JSON.stringify(questionsData, null, 2));

//     $.ajax({
//         url: "hmahasiswa/soalmhs/simpanpilgan",
//         type: "POST",
//         data: JSON.stringify(questionsData),
//         contentType: "application/json",
//         dataType: "JSON",
//         success: function (data) {
//             console.log("Response Data: ", JSON.stringify(data, null, 2)); // Log the response data for debugging
//             if (data.status) {
//                 $(".del").remove();
//                 // tampilsoal(prodi, semester, nim);
//                 // $("#tampilsoal").css("display", "none");
//                 // $("#tampilawal").css("display", "block");
//                 // location.reload();
//             } else {
//                 alert('No');
//             }
//         },
//         error: function (xhr, status, error) {
//             console.error("Error: ", error); // Log any errors for debugging
//             console.error("Status: ", status);
//             console.error("Response: ", xhr.responseText); // Log the response text for debugging
//         }
//     });
// }

function simpanpilgan(nim, nama, timer, tipetugastp1, tanggal) {
    try {
        // Collect form data from localStorage
        var formData = [];
        for (let i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.startsWith("questions_")) {
                var questionData = JSON.parse(localStorage.getItem(key));
                formData.push(questionData);
            }
        }

        // Log the collected formData for debugging
        console.log("Form Data collected from localStorage: ", formData);

        // Serialize form data from the forms
        var serializedFormData = $("#form1,#form2").serializeArray();
        console.log("Serialized Form Data: ", serializedFormData);

        // Combine form data with localStorage data and additional data
        var combinedData = {
            formData: formData,
            serializedFormData: serializedFormData,
            nim: nim,
            nama: nama,
            timer: timer,
            tipetugastp1: tipetugastp1,
            tanggal: tanggal
        };
		console.log("Combinate Form Data: ", combinedData);
        // Send the data via AJAX
        $.ajax({
            url: "hmahasiswa/soalmhs/simpanpilgan",
            type: "POST",
            data: JSON.stringify(combinedData),
            contentType: "application/json",
            dataType: "JSON",
            success: function (data) {
                console.log("AJAX request successful. Server response: ", data);
                if (data.status) {
                    $(".del").remove();
                    // Uncomment the following lines if needed
                    // tampilsoal(prodi, semester, nim);
                    // $("#tampilsoal").css("display", "none");
                    // $("#tampilawal").css("display", "block");
                    // location.reload();
                } else {
                    console.error("Server returned an error status.");
                    alert("No");
                }
            },
            error: function (xhr, status, error) {
                console.error("Error: ", error); // Log any errors for debugging
                console.error("Status: ", status);
                console.error("Response: ", xhr.responseText); // Log the response text for debugging
            },
        });
    } catch (error) {
        console.error("Error in simpanpilgan function: ", error);
    }
}



function simpanesai() {
	$.ajax({
		url: "hmahasiswa/soalmhs/simpanesai",
		type: "POST",
		data: $("#form1, #form2").serialize(),
		dataType: "JSON",
		success: function (data) {
			if (data.status) {
				var abs = $("#abske").val();
				updateabsen(abs);
				console.log(abs + " ini absensi ke");
				$(".del").remove();
			} else {
				alert("No");
			}
		},
		error: function (xhr, status, error) {
			console.error("Error: ", error); // Log any errors for debugging
			console.error("Status: ", status);
			console.error("Response: ", xhr.responseText); // Log the response text for debugging
		},
	});
}

var questions = [];
var currentQuestionIndex = 0;
var selectedAnswers = [];
var currentQuestionType = "";
var confident = "";

function bacasoalpilgan(idsoal) {
	$.ajax({
		url: "hmahasiswa/soalmhs/bacapilgan/" + idsoal,
		type: "POST",
		dataType: "JSON",
		success: function (data) {
			questions = data;
			currentQuestionIndex = 0;
			currentQuestionType = "pilgan";
			renderQuestion();
		},
	});
}

function renderQuestion() {
	if (questions.length === 0) return;

	var question = questions[currentQuestionIndex];

	var s = question.a;
	var o = $(s);
	var texta = o.text();
	var b = question.b;
	var x = $(b);
	var textb = x.text();
	var y = question.c;
	var n = $(y);
	var textc = n.text();
	var z = question.d;
	var g = $(z);
	var textd = g.text();

	var a = s.replace(/<p[^>]*>/g, "").replace(/<\/p>/g, "");
	var b = b.replace(/<p[^>]*>/g, "").replace(/<\/p>/g, "");
	var c = y.replace(/<p[^>]*>/g, "").replace(/<\/p>/g, "");
	var d = z.replace(/<p[^>]*>/g, "").replace(/<\/p>/g, "");

	var html =
		"<li id='pertanyaan" +
		currentQuestionIndex +
		"'>" +
		question.isipilgan +
		"</li>" +
		"<blockquote id='jwb_" +
		currentQuestionIndex +
		"'><ol start='1' type='A' data-id='" +
		question.idsoalpil +
		"'>" +
		"<input type='hidden' id='nopilgan" +
		currentQuestionIndex +
		"' value='" +
		question.nopilgan +
		"' />" +
		"<div class='form-inline' style='margin-top:15px;'><label for='radioa" +
		currentQuestionIndex +
		"'> <li id='lia" +
		currentQuestionIndex +
		"'><input type='radio' name='radio" +
		currentQuestionIndex +
		"' id='radioa" +
		currentQuestionIndex +
		"' style='margin-bottom:5px;' value='A'><span class='ra" +
		currentQuestionIndex +
		"'>" +
		a +
		"</span></li> </label> </div>" +
		"<div class='form-inline' style='margin-top:15px;'><label for='radiob" +
		currentQuestionIndex +
		"'> <li id='lib" +
		currentQuestionIndex +
		"'><input type='radio' name='radio" +
		currentQuestionIndex +
		"' id='radiob" +
		currentQuestionIndex +
		"' style='margin-bottom:5px;' value='B'><span class='rb" +
		currentQuestionIndex +
		"'>" +
		b +
		"</span></li> </label> </div>" +
		"<div class='form-inline' style='margin-top:15px;'><label for='radioc" +
		currentQuestionIndex +
		"'> <li id='lic" +
		currentQuestionIndex +
		"'><input type='radio' name='radio" +
		currentQuestionIndex +
		"' id='radioc" +
		currentQuestionIndex +
		"' style='margin-bottom:5px;' value='C'><span class='rc" +
		currentQuestionIndex +
		"'>" +
		c +
		"</span></li> </label> </div>" +
		"<div class='form-inline' style='margin-top:15px;'><label for='radiod" +
		currentQuestionIndex +
		"'> <li id='lid" +
		currentQuestionIndex +
		"'><input type='radio' name='radio" +
		currentQuestionIndex +
		"' id='radiod" +
		currentQuestionIndex +
		"' style='margin-bottom:5px;' value='D'><span class='rd" +
		currentQuestionIndex +
		"'>" +
		d +
		"</span></li> </label> </div>" +
		"</ol></blockquote>" +
		"<br>";

	$("#soal-container").html(html);
	$("#listsoal").attr("start", currentQuestionIndex + 1);

	if (selectedAnswers[currentQuestionIndex]) {
		$(
			"input[name='radio" +
				currentQuestionIndex +
				"'][value='" +
				selectedAnswers[currentQuestionIndex] +
				"']"
		).prop("checked", true);
	}

	$("input[name='radio" + currentQuestionIndex + "']").change(function () {
		selectedAnswers[currentQuestionIndex] = $(this).val();
		saveToLocalStoragee(
			currentQuestionIndex,
			question.idsoalpil,
			question.nopilgan,
			question.a,
			question.b,
			question.c,
			question.d,
			question.isipilgan,
			selectedAnswers[currentQuestionIndex]
		);
	});
}

function saveToLocalStoragee(index, idsoal, nopilgan, a, b, c, d, isiesai, jawaban, confident) {
	var questionData = {
		idsoal: idsoal,
		nopilgan: nopilgan,
		a: a,
		b: b,
		c: c,
		d: d,
		isiesai: isiesai,
		jawaban: jawaban,
		confident: confident,
	};
	localStorage.setItem("questions_" + index, JSON.stringify(questionData));
}

function nextSoal() {
	if (currentQuestionType === "pilgan") {
		if (currentQuestionIndex < questions.length - 1) {
			currentQuestionIndex++;
			renderQuestion();
		}
	} else if (currentQuestionType === "esai") {
		if (currentQuestionIndexs < questionss.length - 1) {
			currentQuestionIndexs++;
			renderEsaiQuestion();
		}
	}
}

function prevSoal() {
	if (currentQuestionType === "pilgan") {
		if (currentQuestionIndex > 0) {
			currentQuestionIndex--;
			renderQuestion();
		}
	} else if (currentQuestionType === "esai") {
		if (currentQuestionIndexs > 0) {
			currentQuestionIndexs--;
			renderEsaiQuestion();
		}
	}
}

function checkAnswer() {
	if (currentQuestionType === "pilgan") {
		$("#customModal").css("display", "block");
	} else if (currentQuestionType === "esai") {
		$("#customModalEsai").css("display", "block");
	}
}
$(document).ready(function () {
	$(".close-button").click(function () {
		$("#customModal").css("display", "none");
	});

	$("#yakin").click(function () {
		// var correct = checkIfAnswerIsCorrect();
		// if (correct) {
		confident = "yakin";
		saveToLocalStoragee(
			currentQuestionIndex,
			questions[currentQuestionIndex].idsoalpil,
			questions[currentQuestionIndex].nopilgan,
			questions[currentQuestionIndex].a,
			questions[currentQuestionIndex].b,
			questions[currentQuestionIndex].c,
			questions[currentQuestionIndex].d,
			questions[currentQuestionIndex].isipilgan,
			selectedAnswers[currentQuestionIndex],
			confident
		);
		$("#customModal").css("display", "none");
		nextSoal();
		// } else {
		//     alert("Jawaban Anda salah! tolong check kembali jawaban Anda.");
		//     $("#customModal").css("display", "none");
		// }
	});

	$("#takyakin").click(function () {
		confident = "tidak yakin";
		saveToLocalStoragee(
			currentQuestionIndex,
			questions[currentQuestionIndex].idsoalpil,
			questions[currentQuestionIndex].nopilgan,
			questions[currentQuestionIndex].a,
			questions[currentQuestionIndex].b,
			questions[currentQuestionIndex].c,
			questions[currentQuestionIndex].d,
			questions[currentQuestionIndex].isipilgan,
			selectedAnswers[currentQuestionIndex],
			confident
		);
		$("#customModal").css("display", "none");
		nextSoal();
	});
});

// function checkIfAnswerIsCorrect() {
//     var correctAnswer = questions[currentQuestionIndex].jawabanpilgan.trim().toLowerCase(); // Convert to lowercase
//     var selectedAnswer = $("input[name='radio" + currentQuestionIndex + "']:checked").val().trim().toLowerCase(); // Convert to lowercase

//     return selectedAnswer === correctAnswer;
// }

var questionss = [];
var currentQuestionIndexs = [];
var answers = [];

function bacasoalesai(idsoal) {
	$.ajax({
		url: "hmahasiswa/soalmhs/bacaesai/" + idsoal,
		type: "POST",
		dataType: "JSON",
		success: function (data) {
			questionss = data;
			currentQuestionIndexs = 0;
			currentQuestionType = "esai";
			renderEsaiQuestion();
		},
	});
}

function renderEsaiQuestion() {
	if (questionss.length === 0) return;

	var question = questionss[currentQuestionIndexs];
	var oldvalue = answers[currentQuestionIndexs] || "";

	console.log(questionss[currentQuestionIndexs]);
	var html =
		"<ol start='" +
		(currentQuestionIndexs + 1) +
		"' id='listsoal' class='fontsoal'>" +
		"<li id='pertanyaan" +
		currentQuestionIndexs +
		"'>" +
		question.isiesai +
		"</li>" +
		"<textarea class='span12' rows='4' name='jawaban" +
		currentQuestionIndexs +
		"' id='jawaban" +
		currentQuestionIndexs +
		"' placeholder='Ketikan jawaban...' data-id='" +
		question.idsoal +
		"' oldvalue='" +
		oldvalue +
		"'>" +
		oldvalue +
		"</textarea>" +
		"<div class='confidence' style='margin-top:10px;'></div><br>" +
		"</ol>";

	$("#form1").html(html);
	CKEDITOR.replaceAll();

	var editor = CKEDITOR.instances["jawaban" + currentQuestionIndexs];
	if (editor) {
		editor.setData(oldvalue);
	}

	$("#jawaban" + currentQuestionIndexs).on("input", function () {
		answers[currentQuestionIndexs] = $(this).val();
		saveToLocalStorage(
			currentQuestionIndexs,
			question.idsoal,
			question.isiesai,
			answers[currentQuestionIndexs]
		);
	});

	if (editor) {
		editor.on("change", function () {
			answers[currentQuestionIndexs] = editor.getData();
			saveToLocalStorage(
				currentQuestionIndexs,
				question.idsoal,
				question.isiesai,
				answers[currentQuestionIndexs]
			);
		});
	}

	// Debugging statement to check if data-id is set correctly
	console.log(
		"Data-id set for question " + currentQuestionIndexs + ": " + question.idsoal
	);
}

function saveToLocalStorage(index, idsoal, isiesai, jawaban, confident) {
	var questionData = {
		idsoal: idsoal,
		isiesai: isiesai,
		jawaban: jawaban,
		confident: confident,
	};
	localStorage.setItem("question_" + index, JSON.stringify(questionData));
}

$(document).ready(function () {
	$(".close-button").click(function () {
		$("#customModalEsai").css("display", "none");
	});

	$("#yakinEssai").click(function () {
		var correct = checkIfEsaiAnswerIsCorrect();
		if (correct) {
			confident = "yakin";
			$("#customModalEsai").css("display", "none");
			nextSoal();
		} else {
			alert("Jawaban Anda salah! tolong check kembali jawaban Anda.");
			$("#customModalEsai").css("display", "none");
		}
	});

	$("#takyakinEssai").click(function () {
		confident = "tidak yakin";
		$("#customModalEsai").css("display", "none");
	});
});

function checkIfEsaiAnswerIsCorrect() {
	var correctAnswer = questionss[currentQuestionIndexs].jawaban
		.trim()
		.toLowerCase(); // Convert to lowercase
	var tempDiv = document.createElement("div");
	tempDiv.innerHTML = correctAnswer;
	correctAnswer = tempDiv.textContent || tempDiv.innerText || "";

	var editor = CKEDITOR.instances["jawaban" + currentQuestionIndexs];
	var answerss = "";
	if (editor) {
		answerss = editor.getData().trim().toLowerCase();

		var tempDivUser = document.createElement("div");
		tempDivUser.innerHTML = answerss;
		answerss = tempDivUser.textContent || tempDivUser.innerText || "";
	}

	console.log("Correct Answer from DB:", correctAnswer);
	console.log("Answer by User:", answerss);

	return answerss === correctAnswer;
}

function tampilsoal(prodi, semester, nim) {
	const params = new URLSearchParams(window.location.search);
	var level = params.has("level") ? params.get("level") : "all";
	$.ajax({
		url: "hmahasiswa/soalmhs/ambilriwayat/" + nim + "/" + level,
		type: "POST",
		dataType: "JSON",
		success: function (data) {
			var html = "";
			for (i = 0; i < data.length; i++) {
				if (data[i].status == "belum") {
					html +=
						"<tr>" +
						"<td class='taskDesc'><i class='icon-info-sign alert-danger'></i>Quiz " +
						(i + 1) +
						" </td>" +
						"<td class='taskDesc'><i class='icon-info-sign'></i> Tipe Soal : " +
						konversiTipesoal(data[i].tipesoal) +
						"</td>" +
						"<td class='taskStatus'>" +
						data[i].tanggal +
						"</td>" +
						"" +
						Statustampil(data[i].status) +
						"" +
						"<td style='width:80px;'><button id='kerjakan' class='btn btn-warning btn-block' data-absenke='" +
						data[i].absensike +
						"' data-tipetugas='" +
						data[i].tipetugas +
						"' data-tipesoal='" +
						data[i].tipesoal +
						"' data-id='" +
						data[i].idsoalriw +
						"'>" +
						"<span class='icon-circle-arrow-up'></span> Kerjakan</button>" +
						"</td>" +
						"</tr>";
					localStorage.removeItem("question_" + i);
					localStorage.removeItem("questions_" + i);
				} else if (data[i].status == "proses") {
					html +=
						"<tr>" +
						"<td class='taskDesc'><i class='icon-info-sign alert-success'></i>Quiz " +
						(i + 1) +
						" </td>" +
						"<td class='taskDesc'><i class='icon-info-sign'></i> Tipe Soal : " +
						konversiTipesoal(data[i].tipesoal) +
						"</td>" +
						"<td class='taskStatus'>" +
						data[i].tanggal +
						"</td>" +
						"" +
						Statustampil(data[i].status) +
						"" +
						"<td style='width:80px;'><button id='lihat' class='btn btn-info btn-block'  data-tipetugas='" +
						data[i].tipetugas +
						"' data-tipesoal='" +
						data[i].tipesoal +
						"' data-id='" +
						data[i].idsoalriw +
						"'>" +
						"<span class='icon-circle-arrow-up'></span> Lihat</button>" +
						"</td>" +
						"</tr>";
					localStorage.removeItem("question_" + i);
					localStorage.removeItem("questions_" + i);
				} else if (data[i].status == "selesai") {
					html +=
						"<tr>" +
						"<td class='taskDesc'><i class='icon-info-sign alert-info'></i>Quiz " +
						(i + 1) +
						" </td>" +
						"<td class='taskDesc'><i class='icon-info-sign'></i> Tipe Soal : " +
						konversiTipesoal(data[i].tipesoal) +
						"</td>" +
						"<td class='taskStatus'>" +
						data[i].tanggal +
						"</td>" +
						"" +
						Statustampil(data[i].status) +
						"" +
						"<td style='width:80px;'><button id='lihatnilai' class='btn btn-success btn-block' data-tipetugas='" +
						data[i].tipetugas +
						"' data-tipesoal='" +
						data[i].tipesoal +
						"' data-id='" +
						data[i].idsoalriw +
						"'>" +
						"<span class='icon-circle-arrow-up'></span> Lihat</button>" +
						"</td>" +
						"</tr>";
					localStorage.removeItem("question_" + i);
					localStorage.removeItem("questions_" + i);
				}
			}
			$("tbody#tblsoalmhs").html(html);
		},
	});
}

function showalert(stat, mode) {
	var divMessage =
		"<div class='alert alert-" +
		stat +
		"'>" +
		"<strong>" +
		mode.toUpperCase() +
		"</strong>" +
		"</div>";
	$(divMessage).prependTo(".ini").delay(5000).slideUp("slow");
}
