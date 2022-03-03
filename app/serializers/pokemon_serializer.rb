class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :types, :image
  belongs_to :user
end
