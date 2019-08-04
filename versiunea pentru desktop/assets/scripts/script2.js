var rasp_fra = document.getElementById('rasp_fra');
var rasp_ro = document.getElementById('rasp_ro');
var btn_play = document.getElementById('btn_play');
var bifa1= document.getElementsByClassName('bifa')[0];
var bifa2= document.getElementsByClassName('bifa')[1];
var nr = document.getElementById('nr_ex'); 
var x = 1;
var nota = 0;
var r_C_fra = [
				"a",
				"J'ai entendu que ta voiture est complètement détruite.",
				"Elle lit le journal au lieu de faire la cuisine.",
				"Je crains que le dernier bus ne soit déjà parti.",
				"Je me lève des que le réveil sonne.",
				"J'ai entendu qu'elle est à l'hôpital.",
				"Le temps sera probablement meilleur demain.",
				"Je suppose qu'il est vieux.",
				"Je travaillerai aussi longtemps que je serai en bonne santè.", 
				"Autant que je le sache, il habite ici.",
				"Je me réjouis que vous vouliez acheter la maison."
];

var r_C_ro = [
				"a",
				"Eu am auzit că maşina ta este complet distrusă.",
				"Ea citeşte ziarul în loc să gătească.",
				"Eu mă tem că ultimul autobuz a plecat deja.",
				"Eu mă trezesc imediat ce sună ceasul deşteptător.",
				"Eu am auzit că ea este la spital.",
				"Vremea va fi probabil mai bună mâine.",
				"Eu bănuiesc că el este bătrân.",
				"Eu voi lucra atâta timp cât sunt sănătos.",
				"Din câte ştiu, el locuieşte aici.",
				"Eu mă bucur că vreţi să cumpăraţi casa."
];
var l = r_C_fra.length;


var r_fra = [
	"","","","","","","","","","",""
     ];

var r_ro = [
	"","","","","","","","","","",""
     ];

function play(){
	document.getElementById('audio').play();
	
};

function gata1() {
		r_fra.fill(rasp_fra.value,x,x+1);
		if(r_fra[x]==r_C_fra[x])
			bifa1.src = "../../pictures/right.jpg";
				else bifa1.src = "../../pictures/wrong.jpg";
};



function gata2() {
	r_ro.fill(rasp_ro.value,x,x+1);
	if (r_ro[x]==r_C_ro[x])
			bifa2.src="../../pictures/right.jpg";
				else bifa2.src="../../pictures/wrong.jpg";
};


function next(){		
				if(r_fra[x]==r_C_fra[x]) nota=nota+0.5;
				if(r_ro[x]==r_C_ro[x]) nota=nota+0.5;
				x++;
				if(x==l)
				{
					document.getElementsByClassName('container')[0].style.display="none";
					document.getElementById('nota').innerHTML = nota;
					document.getElementsByClassName('container ctn')[0].style.display="block";		
				};
				audio.src="../../sounds/sound_"+x+".mp3";
				rasp_fra.value=r_fra[x];
				rasp_ro.value=r_ro[x];
				nr.innerHTML = "Exerciţiul" + " " + x;
				bifa1.src="../../pictures/blank.jpg";
				bifa2.src="../../pictures/blank.jpg";
				document.getElementById('pic').src = "../../pictures/pic_"+x+".jpg";
							
};


function back(){
			if(x>1) {
				x--;
				audio.src="../../sounds/sound_"+x+".mp3";
				rasp_fra.value=r_fra[x];
					if (r_fra[x]==r_C_fra[x])
						bifa1.src="../../pictures/right.jpg";
							else bifa1.src="../../pictures/wrong.jpg";
				rasp_ro.value=r_ro[x];
					if (r_ro[x]==r_C_ro[x])
					bifa2.src="../../pictures/right.jpg";
						else bifa2.src="../../pictures/wrong.jpg";
				nr.innerHTML = "Exerciţiul" + " " + x;
				document.getElementById('pic').src = "../../pictures/pic_"+x+".jpg";
			}		
};


function Afisare1(){
	document.getElementsByClassName('help')[0].style.display = "block";
};

function Afisare2(){
	document.getElementsByClassName('help')[1].style.display = "block";
};

function Ascundere1(){
	document.getElementsByClassName('help')[0].style.display = "none";
};

function Ascundere2(){
	document.getElementsByClassName('help')[1].style.display = "none";
};

function afisare_raspunsuri(){
	var m=1;
	for (i=0;i<=l;i++)
	{
		document.getElementsByClassName('container ctn')[0].style.display = "none";
		document.getElementsByClassName('container ctn')[1].style.display = "block";
		document.getElementsByTagName('span')[i].innerHTML ="Exerciţiul "+m+": "+ r_C_fra[m]+" ("+r_C_ro[m]+")";
		m++;
	};
};
	
$(document).ready(function(){
  $("td").click(function(){
    $("#rasp_fra").focus();
  });  
});
