class Pokemon < ApplicationRecord
    has_many :moves, dependent: :destroy
    has_many :stats
    belongs_to :user
    validates :name, presence: true
    validates :image, presence: true
    validates :poke_type, presence: true
end
