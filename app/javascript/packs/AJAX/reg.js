jQuery(function(){
  $("#RegForm").submit(function(event){
    event.preventDefault()
    user_name = $("#name-reg").val()
    user_email = $("#email-reg").val()
    user_passwd = $("#password-reg").val()
    user_passwd_confirm = $("#retry-password-reg").val()
    csrfToken = $("#RegForm").find('[name="authenticity_token"]').val()
    $.ajax({
      url: 'user/registration',
      type: 'post',
      dataType: 'json',
      headers: { 'X-CSRF-Token': csrfToken },
      data: { user: { name: user_name, 
                      email: user_email, 
                      password: user_passwd, 
                      password_confirmation: user_passwd_confirm
                    }
            },
      success: function(){
        toggleModalAuth()
        toggleModalReg()
      }
    })  
  })
})

const modalAuth = document.querySelector('.modal-auth'); // Получаю модальное окно авторизации

const modalReg = document.querySelector('.modal-reg'); // Получаю модальное окно регистрации

function toggleModalAuth() { // функция навешивания класса is-open для отображения модального окна авторизации
  modalAuth.classList.toggle("is-open");
  if (modalAuth.classList.contains("is-open")){
    disableScroll();
  } else {
    enableScroll();
  }
}

function toggleModalReg() { // функция навешивания класса is-open для отображения модального окна регистрации
  modalReg.classList.toggle("is-open");
  if (modalReg.classList.contains("is-open")){
    disableScroll();
  } else {
    enableScroll();
  }
}