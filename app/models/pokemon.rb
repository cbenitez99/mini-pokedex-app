class Pokemon < ApplicationRecord
    belongs_to :user
    validates :name, presence: true, uniqueness: true  
    validates :url, presence: true
    validates :types, presence: true
end
