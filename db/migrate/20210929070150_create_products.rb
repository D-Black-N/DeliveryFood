class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.integer :price
      t.belongs_to :partner, index: true, foreign_key: true

    end
    add_index :products, :name
  end
end
