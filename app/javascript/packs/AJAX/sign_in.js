jQuery(function(){
  $('.button-login').on('click', function(){
    login = $("#login").val()
    password = $("#password").val()
    csrfToken = $("#logInForm").find('[name="authenticity_token"]').val()
    $.ajax({
      type: 'post',
      url: 'login',
      dataType: 'json',
      headers: { 'X-CSRF-Token': csrfToken },
      data: { session: { email: login, password: password }},
      success: function(){
        
      }
    })    
  })
})