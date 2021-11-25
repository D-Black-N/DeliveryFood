Rails.application.routes.draw do

  root to: 'delivery#index'   # основная страница приложения
  get 'delivery/index'        

  get 'delivery/restaurant'   # адрес для получения карточек ресторана

  post 'user/registration'              # регистрация нового пользователя в приложении
  get 'about_user', to: 'user#info'     # получение информации о пользователе
  post 'update_user', to: 'user#update' # обновление данных пользователя

  post 'login', to: 'session#create'       # создание новой сессии 
  delete 'session/destroy'                 # выход из сессии

  direct :image do |model, options|
    if model.respond_to?(:signed_id)
      route_for(
        :rails_service_blob_proxy,
        model.signed_id,
        model.filename,
        options.merge(host: ENV['CDN_HOST'])
      )
    else
      signed_blob_id = model.blob.signed_id
      variation_key  = model.variation.key
      filename       = model.blob.filename
  
      route_for(
        :rails_blob_representation_proxy,
        signed_blob_id,
        variation_key,
        filename,
        options.merge(host: ENV['CDN_HOST'])
      )
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
