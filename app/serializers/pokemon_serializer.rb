class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :types, :url, :moves
  # belongs_to :user
  # has_many :moves
end
