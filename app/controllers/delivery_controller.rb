class DeliveryController < ApplicationController

  def index
    @restaurants_json = Partner.all.map { |rest| [rest, rest.get_image_url] } # получение всех ресторанов и преобразование в json
    @user = User.new
    respond_to do |format| # выбор формата страницы
      format.html
      format.json { render json: @restaurants_json }
    end
  end

  def restaurant
    @products_json = Partner.find_by(name: params[:name]).products # получение всех продуктов ресторана и преобразование в json
    respond_to do |format| # выбор формата страницы
      format.html
      format.json { render json: @products_json }
    end
  end

  def create_rest_card
    rest = Partner.new(rest_params)
    respond_to do |format|
      if rest.save
        format.html
        format.json { render json: rest }
      else
        format.html
        format.json { render json: rest.errors }
      end
    end
  end

  def create_product_card
    product = Product.new(product_params)
    respond_to do |format|
      if product.save
        format.html
        format.json { render json: product }
      else
        format.html
        format.json { render json: product.errors }
      end
    end
  end

  private

  def rest_params
    params.require(:restaurant).permit(:name, :delivery_time, :stars, :price, :kitchen, :image)
  end

  def product_params
    params.require(:product).permit(:name, :descriprion, :price, :price, :partner_id, :image)
  end
end
