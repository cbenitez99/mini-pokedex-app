class User < ApplicationRecord
    has_many :trainers
    validates :username, presence: true, uniqueness: true, length: {minimum: 2}
    has_secure_password
end
