class Pokemon < ApplicationRecord
    belongs_to :user
    # has_many :moves
    # has_many :types
    validates :name, presence: true
    validates :image, presence: true
    validates :poke_type, presence: true

    # has_many :moves
    # has_many :users, through: :moves
    # has_many :types
    # validates :name, presence: true
    # validates :image, presence: true
    # validates :poke_type, presence: true
end
