jQuery(function(){
  $("a.card-restaurant").on("click", function(){
    rest_id = $("").find("input#hidden-rest-id").val() // определить откуда искать id ресторана
    $.ajax({
      type: 'get',
      url: 'delivery/restaurant',
      dataType: 'json',
      data: { id: rest_id },
      success: function(products){
        // заполнить страницу продуктами ресторана 
      }
    })
  })
})

