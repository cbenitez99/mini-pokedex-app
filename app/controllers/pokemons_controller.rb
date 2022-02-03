class PokemonsController < ApplicationController
    def index
        all_pokemon = Pokemon.all
        if all_pokemon
            render json: all_pokemon
        else
            render json: {error: ["No Pokemon to show."]}
        end
    end

    def show
        pokemon = Pokemon.find_by(id: params[:id])
        if pokemon
            render json: pokemon
        else
            render json: {error: ["No pokemon to show"]}
        end
    end
end
