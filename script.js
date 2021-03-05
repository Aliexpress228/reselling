function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

$('document').ready(function(){
    jQuery('.teamate').on('click',function(){
       $('#middle').append('<h4 class="opps" style="color:red;">Извините. Но клуб МОЛОДЫХ И ПЕРСПЕКТИВНЫХ открыт только для МОЛОДЫХ И ПЕРСПЕКТИВНЫХ</h4>');
        sleep(5000).then(() => {
            $( ".opps" ).remove();
    });
    });
});
