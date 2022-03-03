class Pokemon < ApplicationRecord
    belongs_to :user
    belongs_to :pokemon_party
    validates :name, presence: true
    validates :image, presence: true
    validates :types, presence: true
end
