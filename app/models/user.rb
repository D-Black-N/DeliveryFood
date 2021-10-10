class User < ApplicationRecord
  before_save { self.email = email.downcase } # перевод почтового адреса в нижний регистр
  VALID_EMAIL_REGEXP = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i # регулярное выражение для проверки ввода email
  VALID_PHONE_REGEXP = /\A\+79([\d]){9}\z/
  
  validates :email, presence: true, length: {maximum: 255}, 
                    format: { with: VALID_EMAIL_REGEXP }, # проверка правильности формата введенной почты
                    uniqueness: { case_sensitive: false } # уникальные адреса почты нечувствуительные к регистру
  validates :password, presence: true, length: {minimum: 8, maximum: 30}
                      #  format: { with: //} # валидация пароля
                       # добавить валидацию формата пароля
  validates :name, length: {minimum: 2, maximum: 30} # валидация длины имени и фамилии

  has_secure_password # создание безопасного хэшированного пароля 
end
