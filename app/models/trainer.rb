class Trainer < ApplicationRecord
    has_many :pokemon
    belongs_to :user
end
