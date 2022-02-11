class User < ApplicationRecord
    has_many :trainers
    has_many :pokemons, through: :trainers
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
end