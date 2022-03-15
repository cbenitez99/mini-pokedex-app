class CreatePokemons < ActiveRecord::Migration[6.1]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :poke_type
      t.string :image
      t.integer :user_id

      t.timestamps
    end
  end
end
