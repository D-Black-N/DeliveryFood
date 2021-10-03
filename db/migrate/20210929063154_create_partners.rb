class CreatePartners < ActiveRecord::Migration[6.1]
  def change
    create_table :partners do |t|
      t.string :name
      t.integer :delivery_time
      t.float :stars
      t.integer :price
      t.string :kitchen

    end
    add_index :partners, :name, unique: true
  end
end
