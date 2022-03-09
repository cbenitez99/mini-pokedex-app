Rails.application.routes.draw do
  resources :moves
  resources :types
  resources :pokemons, only: [:index, :show, :create]
  resources :users, only: [:show, :create]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  delete "/pokemons/:id", to: "pokemons#destroy"
  patch "/pokemons/:id", to: "pokemons#update"
end
