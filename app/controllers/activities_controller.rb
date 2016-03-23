class ActivitiesController < ApplicationController
  before_action :set_activity, only: [:show, :edit]

  def index
    @activities = Activity.where(user_id: params[:user_id])
    @miles = @activities.sum(:length)
  end

  def show
  end

  def new
    @user = User.find(params[:user_id])
    @activity = Activity.new(:user_id=>params[:user_id])
  end

  def create
    @activity = Activity.new(activity_params)

    respond_to do |format|
      if @activity.save
        format.html { redirect_to user_activities_path, notice: 'Activity was successfully created.' }
        format.json { render :show, status: :created, location: @activity }
      else
        format.html { render :new }
        format.json { render json: @activity.errors, status: :unprocessable_entity }
      end
    end
  end

  def track
    @miles = params[:miles]
    puts @miles
    puts "up here?"
    @miles
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_activity
      @activity = Activity.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def activity_params
      params.require(:activity).permit(:sport, :user_id, :length)
    end
end
