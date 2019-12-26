window.onload = function(){
	var r = document.getElementById('r')
	var ra = r.getElementsByTagName('a')
	for (var i = 0; i < ra.length; i++) {
		ra[i].onclick = function(){
			for (var i = 0; i < ra.length; i++) {
				ra[i].style.backgroundColor = '#fff';
				ra[i].style.borderColor = '#C1C1C2';
			};
			this.style.backgroundColor = '#CC0000';
			this.style.borderColor = '#620601';
		}
	}
	var ls = document.getElementById('ls')
	var rs = document.getElementById('rs')
	var lun = document.getElementById('lun')
	var lunt = lun.getElementsByTagName('li')
	var a=-510;
	var e=1;
	ls.onclick = function(){
		if (a<0) {
			a+=660;
			lun.style.left=a+'px';
			for (var i = 0; i < lunt.length; i++) {
				lunt[i].className = '';
			}
			e--
			if (e>-1) {
				lunt[e].className = 'active';
			}
		}	
	}
	rs.onclick = function(){
		if (a>-1170) {
			a-=660;
			lun.style.left=a+'px';
			for (var i = 0; i < lunt.length; i++) {
				lunt[i].className = '';
			}
			e++
			if (e>-1) {
				lunt[e].className = 'active';
			}
		}	
	}
}
