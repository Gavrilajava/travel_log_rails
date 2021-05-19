class ApplicationController < ActionController::Base

  before_action :authorized

  def current_user
    return nil unless session[:user_id]
    User.find_by(id: session[:user_id])  
  end

  def logged_in? 
    !current_user.nil?  
  end

  def authorized
    redirect_to login_path unless logged_in?
 end

end
