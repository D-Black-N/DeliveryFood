Rails.application.routes.draw do

  root to: 'delivery#index'   # основная страница приложения
  get 'delivery/index'        

  get 'delivery/restaurant'   # адрес для получения карточек ресторана

  post 'user/registration'              # регистрация нового пользователя в приложении
  get 'about_user', to: 'user#info'     # получение информации о пользователе
  post 'update_user', to: 'user#update' # обновление данных пользователя

  post 'login', to: 'session#create'       # создание новой сессии 
  delete 'session/destroy'                 # выход из сессии

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
