/**
 *  TODO// recriar a logica para nao precisar do JS direto
 *  no HTML e entao ser possivel minificar --> fazer com padrao
 *  de projeto melhor
 */

var $info_aparelhos = $('#info_aparelhos');
var $aparelho = $('.aparelho');
var $exemplo_aparelho = $('#exemplo_aparelho');
var regid_aparelho = null;

function altera_mensagem_channel(mensagem){
  $info_aparelhos.fadeOut(150,function(){
    $info_aparelhos
      .html('<p class="text-muted text-center"><strong>' + mensagem + 
        '</strong></p>')
      .fadeIn();
  });
}

function onOpened(){
  altera_mensagem_channel('Aguardando por aparelhos...');
}

function onMessage(msg){
  var message = $.parseJSON(msg.data);
  $info_aparelhos.html(
    '<div class="aparelho" id=" '+ message.regid +'">' +
    '<h4><strong>'+ message.modelo + '</strong></h4>' +
    '</div>'
  );
  regid_aparelho = message.regid;
  console.log(regid_aparelho);
}

function onError(){
  altera_mensagem_channel('Erro de conexão com o channel. Atualize a página');
}

function onClose(){
  altera_mensagem_channel('Channel fechado. Tente novamente mais tarde');
}

channel = new goog.appengine.Channel('{{token}}');
var handler = {
    'onopen': onOpened,
    'onclose': onClose,
    'onmessage': onMessage,
    'onerror': onError
};

socket = channel.open(handler);
socket.onopen = onOpened;
socket.onmessage = onMessage;


var $botao_enviar = $('#botao_enviar');
var $input_mensagem = $('#input_mensagem');

function verifica_se_pode_enviar(elemento){
  if(elemento.val().length > 0 && regid_aparelho !== null){
    return true;
  }
  return false;
}

function envia_mensagem(botao,url,data){
  console.log(data);
  $.ajax({
    type:'POST',
    url:url,
    data:data
  }).done(function(msg){
    var response = $.parseJSON(msg);
    console.log(response);
    var has_error = false;
    for(var key in response){
      if(key == 'error'){
        has_error = true;
      }
    }
    if(!has_error){
      botao
        .removeClass("default")
        .addClass("success")
        .text("Enviada com sucesso!");
      setTimeout(function(){
        botao
          .removeClass("success")
          .addClass("default")
          .text("Enviar");
      },5000);
    } else {
      botao
        .removeClass("default")
        .addClass("danger")
        .text("Erro ao enviar");
      setTimeout(function(){
        botao
          .removeClass("danger")
          .addClass("default")
          .text("Enviar");
      },5000);
    }
  });
}

$botao_enviar.click(function(){
  $(this).text("Enviando");
  if(verifica_se_pode_enviar($input_mensagem)){
    envia_mensagem($botao_enviar,'/gcm_testing/send_to_gcm',{
      registration_ids: regid_aparelho,
      message: $input_mensagem.val()
    });
  }
});