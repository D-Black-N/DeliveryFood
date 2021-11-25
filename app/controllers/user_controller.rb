class UserController < ApplicationController
  # регистрация нового пользователя
  def registration
    user = User.new(permit_reg_params)
    respond_to do |format|
      if user.save
        format.html 
        format.json { render json: user }
      else
        format.html 
        format.json { render json: user.errors }
      end
    end
  end

  def update
    user = current_user
    user.update_include_attributes!(update_user_params)
    respond_to do |format|
      if user.valid?
        format.html
        format.json { render json: user }
      else
        format.html
        format.json { render json: user.errors }
      end
    end
  end

  def info
    respond_to do |format|
      format.html
      format.json { render json: current_user }
    end
  end

  private

  def permit_reg_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

  def update_user_params
    params.require(:user).permit(:name, :surname, :phone_number, :password, :password_confirmation)
  end
end
