class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :types, :image, :moves
  # belongs_to :user
  # has_many :moves
end
