class CreatePokemons < ActiveRecord::Migration[6.1]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :types
      t.string :url
      t.integer :trainer_id

      t.timestamps
    end
  end
end
