class CreateTypes < ActiveRecord::Migration[6.1]
  def change
    create_table :types do |t|
      t.string :name
      t.integer :pokemon_id
      t.integer :move_id

      t.timestamps
    end
  end
end
