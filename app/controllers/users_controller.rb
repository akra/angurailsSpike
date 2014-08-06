class UsersController < ApplicationController
  respond_to :json

  def index
    @users = User.all
    respond_with @users
  end

  def show
    @user = current_user
    respond_with @user
  end

end