class MoveSerializer < ActiveModel::Serializer
  attributes :id, :name, :pokemon_id
  belongs_to :pokemon
  belongs_to :user
end
