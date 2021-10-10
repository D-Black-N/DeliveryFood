jQuery(function(){
  $("").on("click", function(){ // добавить querySelector кнопки, которая открывает данные о пользователе
    $.ajax({
      type: 'post',
      url: 'user/info',
      dataType: 'json',
      success: function(user_info){
        // отобразить личные данные пользователя на странице
      }
    })
  })
})