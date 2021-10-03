class Partner < ApplicationRecord
  has_many :products # Связь для базы данных, у каждого ресторана много продуктов (one-to-many)

  validates :price, :name, presence: true # имя не должно быть пустым
  validates :delivery_time, length: {minimum: 2, maximum:3} # минимальное время доставки должно быть двухзначным

  has_one_attached :image # хранение логотипов для ресторанов
end
