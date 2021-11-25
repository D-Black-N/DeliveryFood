class Partner < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_many :products # Связь для базы данных, у каждого ресторана много продуктов (one-to-many)

  validates :price, :name, presence: true # имя не должно быть пустым
  validates :delivery_time, length: {minimum: 2, maximum:3} # минимальное время доставки должно быть двухзначным
  validates :image, presence: true # валидация наличия изображения ресторана


  has_one_attached :image # хранение логотипов для ресторанов

  # метод для определения url картинки ресторана
  def get_image_url
    url_for(self.image)
  end
end
