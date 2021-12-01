jQuery(function(){
  $(document).ready(function(){
    $.ajax({
      type: 'get',
      url: 'delivery/index',
      dataType: 'json',
      success: function(data){
        data.forEach(element => {
          createCardRestaurant(element)
        });
      }
    })
  })
})

const cardsRestaurants = document.querySelector('.cards-restaurants'); // Получаю блок с карточками ресторанов

function createCardRestaurant(restaurant) { // Функция для генерации карточки ресторана

  const { kitchen, name, price, products, stars, delivery_time } = restaurant[0]; // Деструктуризация полученного объекта
  const image_url = restaurant[1];
  const cardRestaurant = document.createElement('a'); // Создаю ссылку с классами карточки и с свойством products
  cardRestaurant.className = 'card card-restaurant wow fadeInUp';
  cardRestaurant.setAttribute('data-wow-delay', '0.1s');
  cardRestaurant.setAttribute('id', restaurant[0].id);
  cardRestaurant.products = products;
  cardRestaurant.info = {kitchen, name, price, stars}; // Добавляю объект info для динамического заголовка ресторана в меню
  // переменная, содержащая вёрстку карточки
  const card = `
    <img src="${image_url}" alt="image" class="card-image"/>
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">${name}</h3>
        <span class="card-tag tag">${delivery_time} мин</span>
      </div>
      <div class="card-info">
        <div class="rating">
          ${stars}
        </div>
        <div class="price">От ${price} ₽</div>
        <div class="category">${kitchen}</div>
      </div>
    </div>
  `;
  cardRestaurant.insertAdjacentHTML('beforeend',card); // добавление вёрстки карточки ресторана в оболочку-ссылку
  cardsRestaurants.insertAdjacentElement('beforeend',cardRestaurant); // добавление карточки ресторана на страницу
}