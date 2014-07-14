class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
  before_action :set_cors_headers
  before_action :cors_preflight
  before_action :authenticate_user_from_token!
  before_action :authenticate_user!

  def set_cors_headers
    headers['Access-Control-Allow-Origin'] = Rails.application.secrets.client['origin']
    headers['Access-Control-Allow-Methods'] = 'GET,POST,PUT,DELETE,OPTIONS'
    headers['Access-Control-Allow-Headers'] = '*'
    headers['Access-Control-Max-Age'] = "3628800"
  end

  def cors_preflight
    head(:ok) if request.method == :options
  end

  private

    def authenticate_user_from_token!
    user_email = request.headers["X-Auth-Email"].presence
    user_token = request.headers["X-Auth-Token"].presence
    user       = user_email && User.find_by_email(user_email)

    if user && Devise.secure_compare(user.authentication_token, user_token)
      sign_in user, store: false
    end
  end
end
