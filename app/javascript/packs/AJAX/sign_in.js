jQuery(function(){
  $('#logInForm').submit(function(event){
    if (event.originalEvent.submitter.classList.contains('button-login')) {
      event.preventDefault()
      login = $("#login").val()
      password = $("#password").val()
      csrfToken = $("#logInForm").find('[name="authenticity_token"]').val()
      $.ajax({
        type: 'post',
        url: 'login',
        dataType: 'json',
        headers: { 'X-CSRF-Token': csrfToken },
        data: { session: { email: login, password: password }},
        success: function(user){
          $('.button-auth').hide()
          $('.button-out').css("display", "flex")
          $('#cart-button').css("display", "flex")
          $(".user-name").css("display", "inline")
          $(".user-name").text(user.name)
          $(".input-address").val(user.address)
          localStorage.setItem('userLogin', user.name); 
        }
      })   
    }
  })
})

modalAuth = document.querySelector('.modal-auth');

function toggleModalAuth() { // функция навешивания класса is-open для отображения модального окна авторизации
  modalAuth.classList.toggle("is-open");
  if (modalAuth.classList.contains("is-open")){
    disableScroll();
  } else {
    enableScroll();
  }
}


