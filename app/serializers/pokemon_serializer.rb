class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :poke_type, :image, :created_at
  has_many :moves  
  has_many :stats
end
