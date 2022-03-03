class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :types, :image, :moves, :stats
  belongs_to :user
end
