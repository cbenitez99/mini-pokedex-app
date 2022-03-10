class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :poke_type, :poke_moves, :image
  belongs_to :user

  # attributes :id, :name, :poke_type, :image
  # has_many :moves
  # belongs_to :users
end
