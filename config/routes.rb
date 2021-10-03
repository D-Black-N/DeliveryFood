Rails.application.routes.draw do
  root to: 'delivery#index'

  get 'delivery/index'
  get 'delivery/restaurant'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
