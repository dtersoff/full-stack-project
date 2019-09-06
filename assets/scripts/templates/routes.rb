
# frozen_string_literal: true

Rails.application.routes.draw do
  resources :meals
  resources :appointments
  resources :loans
  resources :borrowers, except: %i[new edit]
  resources :recipes, except: %i[new edit]
  resources :doctors, except: %i[new edit]
  resources :books, except: %i[new edit]
  resources :authors, except: %i[new edit]
  # RESTful routes
  resources :books, except: %i[new edit]
  resources :patients, except: %i[new edit]
  resources :ingredients, except: %i[new edit]

  # post '/books' => 'books#create'
  # get '/books' => 'books#index'
  # get '/books/:id' => 'books#show'
  # delete '/books/:id' => 'books#destroy'
  # patch '/books/:id' => 'books#update'

  # post '/patients' => 'patients#create'
  # get '/patients' => 'patients#index'
  # get '/patients/:id' => 'patients#show'
  # delete '/patients/:id' => 'patients#destroy'
  # patch '/patients/:id' => 'patients#update'

  # post '/ingredients' => 'ingredients#create'
  # get '/ingredients' => 'ingredients#index'
  # get '/ingredients/:id' => 'ingredients#show'
  # delete '/ingredients/:id' => 'ingredients#destroy'
  # patch '/ingredients/:id' => 'ingredients#update'

  resources :examples, except: %i[new edit]

  # Custom routes
  post '/sign-up' => 'users#signup'
  post '/sign-in' => 'users#signin'
  delete '/sign-out' => 'users#signout'
  patch '/change-password' => 'users#changepw'
end
