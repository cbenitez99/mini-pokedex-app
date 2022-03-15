class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :poke_type, :image
  has_many :moves  
end
