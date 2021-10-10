jQuery(function(){
  $('.button-out').on('click', function(){
    $.ajax({
      type: 'post',
      url: 'session/destroy',
      success: function(){
        alert("Выход выполнен успешно!")
      }
    })    
  })
})