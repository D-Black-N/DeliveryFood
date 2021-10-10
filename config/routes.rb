Rails.application.routes.draw do
  root to: 'delivery#index'

  get 'delivery/restaurant'

  post 'registration', to: 'user/registration'
  post 'user/info'
  post 'update_user', to: 'user#update'

  post 'login', to: 'sessions#create'       # создание новой сессии 
  delete 'session/destroy'                  # выход из сессии

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
