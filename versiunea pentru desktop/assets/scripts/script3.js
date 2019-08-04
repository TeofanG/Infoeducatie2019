var pct = 0;
var p = 0;
var f = 0;
var l = 0;

function openNav() {
	document.getElementsByClassName("sidenav")[0].style.height = "100%";
	setTimeout(function(){
			document.getElementById('sd1').scrollIntoView();	
			},1200);
	setTimeout(function(){
			document.getElementsByClassName('s')[1].style.display = "block";	
			},1200);
}

function closeNav() {
	document.getElementsByClassName("sidenav")[0].style.height = "0%";		
	setTimeout(function(){
			document.getElementsByClassName('s')[1].style.display = "none";	
			},500);
	
}

function myFunction() {
			  document.getElementsByClassName('sidenav')[0].style.scrollBehavior = "smooth";
}

function sh_ch_lg() {
	document.getElementsByClassName('ch_lg')[0].style.marginTop = "0px";
	document.getElementsByClassName('ch_lg')[0].style.display = "block";
	setTimeout(function(){document.getElementsByClassName('ch_lg')[0].style.display = "none";
	},2500)
}


function sh_ch_lg2() {
	document.getElementsByClassName('ch_lg')[0].style.marginTop = "-78px";
	document.getElementsByClassName('ch_lg')[0].style.display = "block";
	setTimeout(function(){document.getElementsByClassName('ch_lg')[0].style.display = "none";
	},2500)
}

function hd_ch_lg() {
	document.getElementsByClassName('ch_lg')[0].style.display = "none";
}

function verif() {
	pct = 0;
	for(i=f;i<f+40;i++)
	{	
		document.getElementsByTagName('label')[i].style.color = "black";
		document.getElementsByTagName('label')[i].style.fontWeight = "normal";
		document.getElementsByClassName('var')[i].getElementsByTagName('img')[0].src = "../../pictures/blank.jpg";
	}
	for(i=p;i<p+10;i++)
			{
				x = document.getElementsByClassName('c')[i];
				x.getElementsByTagName('label')[0].style.color = "green";
				x.getElementsByTagName('label')[0].style.fontWeight = "bold";
				if(x.getElementsByTagName('input')[0].checked == true)
					{
						pct += 10;
						x.getElementsByTagName('img')[0].src="../../pictures/right.jpg";
					};
			};
	for(i=l;i<l+30;i++) 
		{
			y = document.getElementsByClassName('g')[i];
			if(y.getElementsByTagName('input')[0].checked == true)
					{
						y.getElementsByTagName('label')[0].style.color = "red";
						y.getElementsByTagName('img')[0].src="../../pictures/wrong.jpg";
					};
		};
}

function show_pct() {
				
		document.getElementById('punctaj').innerHTML = pct+ " p.";
		document.getElementById('rezultat_bg').style.display = "block";
		document.getElementById('rezultat').style.display = "block";
		if(0<=pct & pct<=10)
		{
			document.getElementById('nivel').innerHTML =  "-";
		}
			else if(11<=pct & pct<=30)
		{
			document.getElementById('nivel').innerHTML =  "A1";
		}
				else if(31<=pct & pct<=60)
		{
			document.getElementById('nivel').innerHTML =  "A2";
		}
					else if(61<=pct & pct<=80)
		{
			document.getElementById('nivel').innerHTML =  "B1";
			
		}
							else if(81<=pct & pct<=100)
		{
			document.getElementById('nivel').innerHTML =  "B2";
		}
}

function hide_pct() {
	document.getElementById('rezultat_bg').style.display = "none";
		document.getElementById('rezultat').style.display = "none";
}

function next_ex2() {
	document.getElementsByClassName('container')[0].style.display = "none";
	document.getElementsByClassName('container')[1].style.display = "block";
	f = 40;
	p = 10;
	l= 30;
}

function next_ex3() {
	document.getElementsByClassName('container')[1].style.display = "none";
	document.getElementsByClassName('container')[2].style.display = "block";
	f = 80;
	p = 20;
	l= 60;
	
}

function prev_ex2() {
	document.getElementsByClassName('container')[2].style.display = "none";
	document.getElementsByClassName('container')[1].style.display = "block";
	f = 40;
	p = 10;
	l= 30;
}

function prev_ex1() {
	document.getElementsByClassName('container')[1].style.display = "none";
	document.getElementsByClassName('container')[0].style.display = "block";
	f = 0;
	p = 0;
	l = 0;
}


