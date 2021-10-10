class SessionController < ApplicationController
  # создание сессии пользователя
  def create
    user = User.find_by(email: params[:session][:email])
    respond_to do |format|
      if user && user.authenticate(params[:session][:password])
        log_in user
        format.html
        format.json { render json: user }
      else
        format.html
        format.json { render json: "Ошибка аутентификации" }
      end
    end
  end

  # удаление сессии пользователя
  def destroy
    log_out
    render json: "Выход выполнен успешно!"
  end
end
