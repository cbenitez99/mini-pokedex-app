class Pokemon < ApplicationRecord
    belongs_to :user
    has_many :types
    has_many :moves
    validates :name, presence: true
    validates :image, presence: true
    validates :poke_type, presence: true
end
