$(function(){
	var $white_background = $('#white_background');
	var $modal_container = $('#modal_container');
	var $botao_testar = $('#botao_testar');
	var $conteudo_modal_container = $('#conteudo_modal_container');
	var $botao_close = $('#botao_close');
	var modal_aparecendo = false;
	
	function toggle_modal(){
		if(modal_aparecendo){
			close_modal();
			return;
		}
		mostra_modal(300,'/gcm_testing/mensageiro');
	}

	function mostra_modal(tempo,url){
		modal_aparecendo = true;
		if(typeof(tempo) === 'undefined'){
			tempo = 300;
		}
		$white_background.fadeIn(tempo);
		$modal_container.fadeIn(tempo);
		setTimeout(function(){
			$conteudo_modal_container.html(
				'<div class="text-center">' +
				'<p class="lead text-muted">Carregando...</p>' + 
				'</div>');
			$conteudo_modal_container.load(url,function(){
				$conteudo_modal_container.fadeIn();
			});
		},tempo);
	}

	function close_modal(tempo){
		modal_aparecendo = false;
		if(typeof(tempo) === 'undefined'){
			tempo = 300;
		}
		$white_background.fadeOut(tempo);
		$modal_container.fadeOut(tempo);
		setTimeout(function(){
			$conteudo_modal_container.html('');
		},300);
	}

	$botao_testar.click(function(){
		toggle_modal();
	});

	$botao_close.click(function(){
		toggle_modal();
	});

	$(document).keyup(function(e){
		if(modal_aparecendo){
			if(e.keyCode == 27){
				toggle_modal();
			}
		}
	});
});