class CreateStats < ActiveRecord::Migration[6.1]
  def change
    create_table :stats do |t|
      t.integer :hp
      t.integer :height
      t.integer :weight
      t.integer :pokedex_number
      t.integer :pokemon_id
      t.integer :user_id
  
      t.timestamps
    end
  end
end
