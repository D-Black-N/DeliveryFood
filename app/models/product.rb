class Product < ApplicationRecord
  include Rails.application.routes.url_helpers

  belongs_to :partner # каждый товар имеет ресторан (one-to-many)

  validates :name, presence: true # имя не должно быть пустым
  
  validates :image, presence: true # валидация наличия изображения продукта
  
  has_one_attached :image # хранение изображений для продуктов

  # метод для определения url картинки товара
  def get_image_url
    url_for(self.image)
  end
end
