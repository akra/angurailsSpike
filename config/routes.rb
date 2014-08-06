Rails.application.routes.draw do

  scope '/api', defaults: {format: 'json'} do
    devise_for :users,
      controllers: {
        registrations: "users/registrations",
        sessions: "users/sessions"
      }
    get '/users/current', to: 'users#current'
    resources :users
  end
end
