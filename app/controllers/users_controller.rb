class UsersController < ApplicationController
  respond_to :json

  def index
    @user = current_user
    respond_with @user
  end

end