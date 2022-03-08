class User < ApplicationRecord
    has_secure_password
    has_many :pokemons
    has_many :moves, through: :pokemons
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true

    # has_secure_password
    # has_many :moves
    # has_many :pokemons, through: :moves
    # validates :username, presence: true, uniqueness: true
    # validates :password, presence: true
end
