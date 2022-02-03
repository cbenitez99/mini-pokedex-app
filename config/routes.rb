Rails.application.routes.draw do
  resources :pokemons
  resources :trainers
  resources :users, only: [:index, :show]

end
