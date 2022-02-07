class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :types, :url
  has_many :trainers
end
