class DeliveryController < ApplicationController
  def index
    @restaurants_json = Partner.all # получение всех ресторанов и преобразование в json
    @user = User.new
    respond_to do |format| # выбор формата страницы
      format.html
      format.json { render json: @restaurants_json }
      format.js
    end
  end

  def restaurant
    @products_json = Partner.find(params[:id]).products # получение всех продуктов ресторана и преобразование в json
    respond_to do |format| # выбор формата страницы
      format.html
      format.json { render json: @products_json }
    end
  end
end
