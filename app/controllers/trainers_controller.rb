class TrainersController < ApplicationController
    def index
        trainers = Trainer.all
        if trainers
            render json: trainers
        else
            render json: {error: ["No trainers available."]}
        end
    end

    def show
        trainer = Trainer.find_by(id: params[:id])
        render json: trainer, except: [:created_at, :updated_at], include: :pokemon
    end
    
end
