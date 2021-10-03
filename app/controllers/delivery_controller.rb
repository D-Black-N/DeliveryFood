class DeliveryController < ApplicationController
  def index
    @restaurants_json = Partner.all.to_json # получение всех ресторанов и преобразование в json
    respond_to do |format| # выбор формата страницы
      format.html
      format.json { render json: @restaurants_json }
    end
  end

  def restaurant
    @products_json = Partner.first.products.to_json # получение всех продуктов ресторана и преобразование в json
    respond_to do |format| # выбор формата страницы
      format.html
      format.json { render json: @products_json }
    end
  end
end
