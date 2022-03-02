class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :types, :image
  # belongs_to :user
  has_many :moves
end
