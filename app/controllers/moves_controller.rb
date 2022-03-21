class MovesController < ApplicationController 
    def index
        moves = Move.all
        if moves
            render json: moves, status: :ok
        else
            render json: {error: ["No move to show."]}, status: :not_found
        end
    end

    def show
        move = find_move
        if move
            render json: move, status: :ok
        else
            render json: {error: ["No move to show"]}, status: :not_found
        end
    end

    def create 
        move = Move.new(move_params)
        if move.save
            render json: move, status: :created
        else
            render json: {errors: move.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update 
        move = find_move
        move.update(move_params)
        render json: move, status: :ok
    end

    def destroy
        move = find_move
        if move
            move.destroy
            head :no_content
        else
            render json: {error: "Move not found"}, status: :not_found
        end
    end

    private

    def find_move
        Move.find_by(id: params[:id])
    end

    def move_params
        params.permit(:name, :description, :pokemon_id, :user_id)
    end
end
