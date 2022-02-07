class Trainer < ApplicationRecord
    has_many :pokemons
    belongs_to :user
end
