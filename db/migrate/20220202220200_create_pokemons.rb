class CreatePokemons < ActiveRecord::Migration[6.1]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :types
      t.string :image
      t.string :moves
      t.string :stats
      t.integer :pokemon_party_id
      t.integer :user_id

      t.timestamps
    end
  end
end
