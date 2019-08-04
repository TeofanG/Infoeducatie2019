//oncontextmenu="return false;"
textbox = new Array();
rasp = new Array();
var pseudoProtectie = 0;
var pos = 0;
var nr_vers = 1;
var versuri_cantec = Array();
var nr_total_versuri;
var prop_corecte=0;
var prop_gresite=0;
var timp = 360;
var sts_timer=0;
function init(){
	for(var i = 1; i <= 3; i++){
		textbox[i] = document.getElementById("raspuns_" + i);
		rasp[i] = document.getElementById("btn_" + i);
	}
	//var pos=1;
	afisare_cantec(1);
	$('#text_total_versuri').text(nr_total_versuri);
	SetText();
	BuildMenu();
	document.getElementById("text_rezultat").disabled = true;
	BuildFunctions();
	var d = new Date();
	$("#an-actual").text(d.getFullYear());
}
function BuildFunctions(){
	$(".btn_menu2").click(function(){
		$(".btn_menu2").removeClass("active");
		$(this).addClass("active");
		afisare_cantec($(this).index() + 1);
		$('#text_total_versuri').text(nr_total_versuri);
		Reset_all();
		//document.getElementById('src_video').setAttribute("src", "assets/video/video"+($(this).index()+1)+".mp4");
		//document.getElementById('myvideo').load();
		
		document.getElementById('src_cantec').setAttribute("src", "../../melodies/cantec"+($(this).index()+1)+".mp3");
		document.getElementById('audio_cantec').load();
	});
	$(".btn_menu").click(function(){
		if($(".menu").css("display") == "block"){
			$(".menu").css("display", "none");
			$(".menu-bg").css("display", "none");
		}
		else{
			$(".menu").css("display", "block");
			$(".menu-bg").css("display", "block");
		}
	});
	$(".menu-bg").click(function(){
		$(".menu").css("display", "none");
		$(".menu-bg").css("display", "none");
	});
	$(".btn_start").click(function(){
		$(this).css("display","none");
		cronometru = setTimeout(Start_timer, 1000);
		sts_timer = 1;
		video = document.getElementById("audio_cantec");
		video.play();
		
	});
	/*document.onkeydown = function(e) {
	  if(event.keyCode == 123) {
		 return false;
	  }
	  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
		 return false;
	  }
	  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
		 return false;
	  }
	  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
		 return false;
	  }
	}*/
}
function Reset_all(){
	nr_vers = 1;
	$('#text_vers_actual').text('1');
	prop_corecte = prop_gresite = 0;
	document.getElementById("grup_btn2").style.display = 'block';
	document.getElementById("grup_btn1").style.display = 'none';
	SetText();
	if(typeof cronometru !== "undefined"){
		clearTimeout(cronometru);
	}
	timp = 360;
	sts_timer=0;
	$(".btn_start").css("display","inline");
	document.getElementById("timp").innerHTML = "6:00";
	rasp[1].style.backgroundColor = 'inherit';
	rasp[2].style.backgroundColor = 'inherit';
	rasp[3].style.backgroundColor = 'inherit';
	document.getElementById("text_rezultat").value="";
	$('.div_text').text('');
}
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
}
function AddText(){
	var currTime = document.getElementById("audio_cantec").currentTime;
	pseudoText = '';
	if(parseInt(currTime)%60 < 10) pseudoText = '0';
	text_timp = '<span class="mark">[' + parseInt(currTime/60) + ':' + pseudoText + parseInt(currTime)%60 + ']</span> ';
	document.getElementById("text_rezultat").value = document.getElementById("text_rezultat").value + text_timp + versuri_cantec[nr_vers] + '\n';
	$(".div_text").html($(".div_text").html() + text_timp + versuri_cantec[nr_vers] + '<br>');
	var div_text = document.getElementById("div_text");
	div_text.scrollTop = div_text.scrollHeight;
	nr_vers = nr_vers + 1;
	prop_corecte += 1;
}
function verificare_str(x, y){
	//console.log("Compar " + x + " cu " + y);
	if(x.length == y.length){
		for(var i = 0; i < x.length; i++)
			if(x[i] != y[i])return 0;
		//console.log("Sunt identice");
		return 1;
	}
	return 0;
}
function SetText(){
	if(nr_vers <= nr_total_versuri){	
		$('#text_vers_actual').text(nr_vers);
		pos = Math.floor(Math.random() * 3) + 1;
		//console.log("Pozitia: " + pos);
		textbox[pos].innerHTML = versuri_cantec[nr_vers];
		for(i = 1; i <= 3; i++){
			if(i != pos){
				var next = versuri_cantec[getRndInteger(1, Math.floor(nr_total_versuri))];
				//while(next==versuri_cantec[nr_vers]){
				while(verificare_str(next, versuri_cantec[nr_vers])){
					next = versuri_cantec[getRndInteger(1, Math.floor(nr_total_versuri))];
				}
				//console.log(next.length + " " + versuri_cantec[nr_vers].length);
				textbox[i].innerHTML=next;
			}
		}
	}
	else{
		document.getElementById("grup_btn2").style.display = 'none';
		document.getElementById("grup_btn1").style.display = 'block';
		clearTimeout(cronometru);
		CalculareNota();
	}
}
function CalculareNota(){
	var nota = 2;
	nota=nota+prop_corecte*(8/nr_total_versuri);
	if(prop_gresite>=4){
		nota = nota - 4 * 0.25;
		nota = nota-(8 / (nr_total_versuri * 2 - 4)*(prop_gresite - 4));
	}
	else{
		nota = nota - prop_gresite * 0.25;
	}
	//document.getElementById("nota").innerHTML = nota+"<br>Răspunsuri greșite: "+prop_gresite+"<br>Răspunsuri corecte: "+prop_corecte;
	document.getElementById("nota").innerHTML = nota;
	document.getElementById("rasp_gresite").innerHTML = prop_gresite;
	document.getElementById("rasp_corecte").innerHTML = prop_corecte;
}
function verifica(x){
	if(sts_timer == 1){
		if (nr_vers <= nr_total_versuri){
			if(x == pos){
				rasp[1].style.backgroundColor = 'inherit';
				rasp[2].style.backgroundColor = 'inherit';
				rasp[3].style.backgroundColor = 'inherit';
				rasp[x].style.backgroundColor = '#6bff67';
				setTimeout(function(){ rasp[x].style.backgroundColor = 'inherit'; }, 250);
				AddText();
				SetText();
			}
			else{
				rasp[x].style.backgroundColor = '#ff6767';
				prop_gresite += 1;
			}
		}
	}
}
function Start_timer(){
	timp = timp - 1;
	if(timp != 0){
		var time_aux = "";
		if(timp%60 < 10)time_aux = "0";
		document.getElementById("timp").innerHTML = Math.floor(timp/60)+ ":" + time_aux + timp%60;
		cronometru = setTimeout(Start_timer, 1000);
	}
	else{
		sts_timer = 0;
		document.getElementById("grup_btn2").style.display = 'none';
		document.getElementById("grup_btn1").style.display = 'block';
		CalculareNota();
	}
}
function BuildMenu(){
	menu_element = document.getElementById("menu_elements");
	menu_element.innerHTML = "<a class='btn_menu2 active' href='#'>"+titlu_cantec[1]+"</a>";
	for(var i = 2; i <= nr_cantece_disponibile; i++)
		menu_element.innerHTML = menu_element.innerHTML + "<a class='btn_menu2' href='#'>" + titlu_cantec[i] + "</a>";
}