module SessionHelper
  # вход пользователя
  def log_in(user)
    session[:user_id] = user.id
  end

  # Возвращает текущего вошедшего пользователя
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  # проверка входа в систему
  def logged_in?
    !current_user.nil?
  end

  # выход из системы
  def log_out
    session.delete(:user_id)
    @current_user = nil
  end
end
