jQuery(function(){
  $(".user-name").click(function(event){ // добавить querySelector кнопки, которая открывает данные о пользователе
    event.preventDefault()
    toggleModalUser()
    $.ajax({
      type: 'get',
      url: 'about_user',
      dataType: 'json',
      success: function(user){
        $('.modal-user').find('legend').text(user.email)
        $('#name-update').val(user.name)
        $('#surname').val(user.surname)
        $('#phone_number').val(user.phone_number)
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