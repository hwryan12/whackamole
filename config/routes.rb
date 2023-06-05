Rails.application.routes.draw do
  root 'game#index'
  get 'whack', to: 'game#whack'
end

