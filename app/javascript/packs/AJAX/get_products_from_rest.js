jQuery(function(){
  
  $(".card-restaurant").click(function(event){
    console.log("click_to_rest")
    openGoods(event)
    rest_name = $("h3.card-title").text()
    $.ajax({
      type: 'get',
      url: 'delivery/restaurant',
      dataType: 'json',
      data: { name: rest_name },
      success: function(products){
        console.log(products)
        products.forEach(element => {
          createCardGood(element)
        });
      }
    })
  })
})



function createCardGood(goods) { // Функция создания карточки в меню ресторана
  const { description, id, image, name, price } = goods;
  const card = document.createElement('div');
  card.className = 'card wow fadeInUp';
  card.setAttribute('data-wow-delay', '0.1s');
  card.id = id;
  card.insertAdjacentHTML('beforeend', `
			<img src="${image}" alt="image" class="card-image"/>
			<div class="card-text">
				<div class="card-heading">
					<h3 class="card-title card-title-reg">${name}</h3>
				</div>
				<div class="card-info">
					<div class="ingredients">${description}</div>
				</div>
				<div class="card-buttons">
					<button class="button button-primary button-add-cart">
					  <span class="button-card-text">В корзину</span>
					  <span class="button-cart-svg"></span>
				  </button>
				  <strong class="card-price card-price-bold">${price} ₽</strong>
			  </div>
			</div>
  `);
  cardsMenu.insertAdjacentElement('beforeend',card)
}

function openGoods(event) { // Функция создания меню конкретного ресторана
  const target = event.target;
  if (localStorage.getItem('userLogin')) {
      cardsMenu.textContent = ''; // Очищаем меню
      containerPromo.classList.add('hide'); // Добавляю класс hide блоку с промо
      restaurants.classList.add('hide'); // Добавляю класс hide блоку с ресторанами
      menu.classList.remove('hide'); // Удаляю класс hide у блока с меню ресторана, на который кликнули
      const {name, kitchen, price, stars} = restaurant.info; // Деструктуризация полученного объекта (получаю от объекта карточки ресторана поля для того, чтобы в меню ресторана подставить в шапку)
      restaurantTitle.textContent = name; // Присваиваю элементам заголовка поля, принадлежащие объекту info объекта ресторана
      restautantRating.textContent = stars;
      restaurantPrice.textContent = `От ${price} ₽`;
      restaurantCategory.textContent = kitchen;
  } else {
    toggleModalAuth();
  }
}
