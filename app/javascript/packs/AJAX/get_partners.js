jQuery(function(){
  $(document).ready(function(){
    $.ajax({
      type: 'get',
      url: '/',
      dataType: 'json',
      success: function(data){
        // заполнить страницу ресторанами
      }
    })
  })
})
