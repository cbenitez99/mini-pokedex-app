class MoveSerializer < ActiveModel::Serializer
  attributes :name, :description, :pokemon_id, :user_id
end
