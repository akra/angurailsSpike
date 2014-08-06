Rails.application.routes.draw do

  scope '/api', defaults: {format: 'json'} do
    devise_for :users,
      controllers: {
        registrations: "users/registrations",
        sessions: "users/sessions"
      }
    resources :users
  end
end
