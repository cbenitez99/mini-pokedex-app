class Pokemon < ApplicationRecord
    belongs_to :trainer
    validates :name, presence: true, uniqueness: true  
    validates :url, presence: true
    validates :types, presence: true
end
