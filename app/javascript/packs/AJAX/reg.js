jQuery(function(){
  $("#RegForm").submit(function(event){
    event.preventDefault()
    user_name = $("#name").val()
    user_email = $("#email").val()
    user_passwd = $("#password-reg").val()
    user_passwd_confirm = $("#retry-password-reg").val()
    csrfToken = $("#RegForm").find('[name="authenticity_token"]').val()
    $.ajax({
      url: 'registration',
      type: 'post',
      headers: { 'X-CSRF-Token': csrfToken },
      data: { user: { name: user_name, 
                      email: user_email, 
                      password: user_passwd, 
                      password_confirmation: user_passwd_confirm
                    }
            },
      success: function(){
        alert("Registration success!")
      }
    })  
  })
})

