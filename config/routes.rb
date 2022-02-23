Rails.application.routes.draw do
  resources :moves, only: [:index, :create, :show, :destroy]
  resources :pokemons, only: [:index, :show, :create]
  resources :users, only: [:show, :create]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  delete "/pokemons/:id", to: "pokemons#destroy"

end
