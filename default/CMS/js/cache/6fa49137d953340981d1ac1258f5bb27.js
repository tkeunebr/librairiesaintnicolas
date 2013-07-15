/**************  MENU  ****************/	
	
	var niv1_on = null;
	var d = null;
	var delais = 500;
	var timeOut = null;
	function montre(id) {
		annulerCache();
		if (d) {d.style.display='none';}
		d = document.getElementById(id);
		if (d) { d.style.display='block'; }
	}
	function cacheDelais(id){
		timeOut = setTimeout('cacheMenu()', delais);
	}
	function cacheMenu(){
		if (d) {d.style.display='none';}
		if( niv1_on ){
			niv1_on.className = 'niv1' ;
		}
	}
	function annulerCache(){
		if(timeOut){
			clearTimeout(timeOut);
		}
	}
	function clearNiv1On(){
		if(niv1_on){
			niv1_on.className = 'niv1' ;
		}
		niv1_on=null;
	}
	function clear_hover(html_obj, indice){
		html_obj.className = 'niv'+indice ;
	}
	function set_hover(html_obj, indice){
		if(indice == 1 ){
			niv1_on = html_obj ;
		}
		if(indice > 1 && niv1_on){
			niv1_on.className = 'niv1_on' ;
		}
		html_obj.className = 'niv'+indice+'_on' ;
	}
	function clic_hover(html_obj){
		table_html_a = html_obj.getElementsByTagName("a");
		window.location.replace(table_html_a[0].getAttribute("href"));
	};