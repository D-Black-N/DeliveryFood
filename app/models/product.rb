class Product < ApplicationRecord
  belongs_to :partner # каждый товар имеет ресторан (one-to-many)

  validates :name, presence: true # имя не должно быть пустым
  # validates :password_digest # подобрать ограничения для пароля
  validates_format_of :phone_number, with: /\+\7([\d]){10}/

  has_one_attached :image # хранение изображений для продуктов
end
