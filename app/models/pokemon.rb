class Pokemon < ApplicationRecord
    belongs_to :user
    has_many :moves, dependent: :destroy
    validates :name, presence: true
    validates :image, presence: true
    validates :types, presence: true
end
