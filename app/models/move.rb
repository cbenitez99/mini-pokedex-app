class Move < ApplicationRecord
    belongs_to :pokemon #, dependent: :destroy
    belongs_to :user
end
