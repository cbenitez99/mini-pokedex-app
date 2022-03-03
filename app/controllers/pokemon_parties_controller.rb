class PokemonPartiesController < ApplicationController
    def index
        all_pokemon_parties = PokemonParty.all
        if all_pokemon_parties
            render json: all_pokemon_parties, status: :ok
        else
            render json: {error: ["No Pokemon to show."]}, status: :not_found
        end
    end

    def show
        pokemon = find_pokemon_parties
        if pokemon
            render json: pokemon, status: :ok
        else
            render json: {error: ["No pokemon to show"]}, status: :not_found
        end
    end

    def create 
        pokemon = PokemonParty.new(party_params)
        if pokemon.save
            render json: pokemon, status: :created
        else
            render json: {errors: ["IT BROKE FREE! QUICK TRY AGAIN!"]}, status: :unprocessable_entity
        end
    end

    def destroy
        pokemon = find_pokemon_parties
        if pokemon
            pokemon.destroy
            head :no_content
        else
            render json: {error: "Pokemon not found"}
        end
    end

    private

    def find_pokemon_parties
        PokemonParty.find_by(id: params[:id])
    end
    
    def party_params
        params.require(:pokemon).permit(:name, :party_count, :user_id)
    end
end
