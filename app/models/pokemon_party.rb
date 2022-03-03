class PokemonParty < ApplicationRecord
    has_many :pokemons
    belongs_to :user
end
