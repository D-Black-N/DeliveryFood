jQuery(function(){
  $('.button-out').click(function(event){
    event.preventDefault()
    csrfToken = $(".button-out").find('[name="authenticity_token"]').val()
    $.ajax({
      type: 'delete',
      url: 'session/destroy',
      headers: { 'X-CSRF-Token': csrfToken },
      success: function(data){
        $('.button-out').hide()
        $('#cart-button').hide()
        $(".user-name").hide()
        $('.button-auth').css("display", "")
        $(".user-name").text("")
        $(".input-address").val("")
        localStorage.removeItem('userLogin'); // Удаляю логин пользователя из локального хранилища
        alert("Выход выполнен успешно!")
      }
    })    
  })
})