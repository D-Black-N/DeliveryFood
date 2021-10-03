class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :name
      t.string :surname
      t.string :address
      t.string :phone_number, unique: true

    end
    add_index :users, :email, unique: true
  end
end
