class CreatePokemonParties < ActiveRecord::Migration[6.1]
  def change
    create_table :pokemon_party do |t|
      t.string :name
      t.integer :party_count
      t.integer :user_id

      t.timestamps
    end
  end
end
