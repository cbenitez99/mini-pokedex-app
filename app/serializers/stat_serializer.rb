class StatSerializer < ActiveModel::Serializer
  attributes :hp, :weight, :height, :pokedex_number, :pokemon_id, :user_id
end
