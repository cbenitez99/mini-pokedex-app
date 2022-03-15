class MoveSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :pokemon_id, :user_id
end
