class StatsController < ApplicationController
    def index
        all_stats = Stat.all
        if all_stats
            render json: all_stats, status: :ok
        else
            render json: {error: ["No stats to show."]}, status: :not_found
        end
    end

    def show
        stat = find_stat
        if stat
            render json: stat, status: :ok
        else
            render json: {error: ["No stats to show"]}, status: :not_found
        end
    end

    private 

    def find_stat
        Stat.find_by(id: params[:id])
    end
end
