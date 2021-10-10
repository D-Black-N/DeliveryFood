jQuery(function(){
  $("").on('click', function(){
    user_name = $("").val()
    user_surname = $("").val()
    user_phone = $("").val()
    user_address = $("").val()
    old_passwd = $("").val()
    new_passwd = $("").val()
    new_passwd_confirm = $("").val()
    csrfToken = $("").find('[name="authenticity_token"]').val()
    $.ajax({
      type: 'post',
      url: 'user_update',
      dataType: 'json',
      headers: { 'X-CSRF-Token': csrfToken },
      data: { user: {
                      name: user_name,
                      surname: user_surname,
                      phone_number: user_phone,
                      address: user_address,
                      password: old_passwd
                      // решить вопрос с новыми паролями 
                    }
      },
      success: function(update_user){
        // выдать информацию об обновлении данных пользователя
      }
    })    
  })
})