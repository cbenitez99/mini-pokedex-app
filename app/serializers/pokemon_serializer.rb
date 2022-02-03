class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :types, :url
end
