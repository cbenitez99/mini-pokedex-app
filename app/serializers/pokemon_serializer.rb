class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :poke_type, :image
  belongs_to :user
end
