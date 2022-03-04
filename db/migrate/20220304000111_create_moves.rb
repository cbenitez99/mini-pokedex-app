class CreateMoves < ActiveRecord::Migration[6.1]
  def change
    create_table :moves do |t|
      t.string :name
      t.integer :user_id
      t.integer :pokemon_id

      t.timestamps
    end
  end
end
