jQuery(function(){
  $("#UpdateForm").submit(function(event){
    event.preventDefault()
    user_name = $("#name-update").val()
    user_surname = $("#surname").val()
    user_phone = $("#phone_number").val()
    new_passwd = $("#password-update").val()
    new_passwd_confirm = $("#password-update-conf").val()
    csrfToken = $("#UpdateForm").find('[name="authenticity_token"]').val()
    $.ajax({
      type: 'post',
      url: 'update_user',
      dataType: 'json',
      headers: { 'X-CSRF-Token': csrfToken },
      data: { user: {
                      name: user_name,
                      surname: user_surname,
                      phone_number: user_phone,
                      password: new_passwd,
                      password_confirmation: new_passwd_confirm
                    }
      },
      success: function(update_user){
        toggleModalUser()
        alert("Данные успешно обновлены!")
      }
    })    
  })
})

modalUser = document.querySelector('.modal-user');

function toggleModalUser() { // функция навешивания класса is-open для отображения модального окна данных пользователя
  modalUser.classList.toggle("is-open");
  if (modalUser.classList.contains("is-open")){
    disableScroll();
  } else {
    enableScroll();
  }
}