Rails.application.routes.draw do
  resources :moves, only: [:index, :show, :create]
  resources :pokemons, only: [:index, :show, :create]
  resources :users, only: [:show, :create]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  delete "/pokemons/:id", to: "pokemons#destroy"
  patch "/pokemons/:id", to: "pokemons#update"
  patch "/moves/:id", to: "moves#update"
  delete "/moves/:id", to: "moves#destroy"
end
