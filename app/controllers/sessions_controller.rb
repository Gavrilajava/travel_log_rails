class SessionsController < ApplicationController

  skip_before_action :authorized, only: [:new, :create]

  def create
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
       session[:user_id] = @user.id
       redirect_to root_path
    else
       redirect_to login_path
    end

  end

  def new

  end
end
