class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest
  has_many :pokemons
  has_many :moves, through: :pokemons
end
