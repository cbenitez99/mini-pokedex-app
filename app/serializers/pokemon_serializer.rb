class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :types, :url
  belongs_to :trainer
end
