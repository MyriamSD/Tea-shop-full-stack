import firebase_admin
import json

# import pyrebase
# import json
import os

# from fastapi import FastAPI
# from fastapi.params import Body
from pydantic import BaseModel
from flask import Flask, request, render_template, redirect, flash, session, jsonify
from flask_pydantic import validate
from flask_cors import CORS
from firebase_admin import credentials, firestore, initialize_app
from flask_restful import Resource, Api, reqparse, abort
from flask_debugtoolbar import DebugToolbarExtension
from typing import Optional


cred = credentials.Certificate('./helpers/fbAdminConfig.json')
default_app = initialize_app(cred)
db = firestore.client()

products = db.collection('products')




app = Flask(__name__)
api = Api(app)
# app = FastAPI()
CORS(app)


app.config['SECRET_KEY'] = "secret"
debug = DebugToolbarExtension(app)

# users = [{'uid': 1, 'name': 'Md Schairer'}]
# @app.route('/')
# def userinfo():
#     return {'data': users}, 200

names = {
'Myriam': {'age': 24, 'gender': 'female'} , 
'SM': {'age': 45, 'gender': 'male'}
}

# product_id = request.args.get('id')
all_products = [doc.to_dict() for doc in products.stream()]
# print(json.dumps(all_products))

class QueryParams(BaseModel):
    name: Optional[str]
    # price: str
    # description: str
    # imageUrl: str

class ResponseModel(BaseModel):
  name: str







# class Products(Resource):
  @app.route('/', methods=["GET"])
  @validate()
  def get():
    # product_id = request.args.get('id')
    # all_products = [doc.to_dict() for doc in products.stream()]
    # print('hello')
    # {'Hello': 'world'}, 200
     
    return jsonify({"results": all_products})
    
  @app.route('/new', methods=["POST"])
  @validate()
  def post(query: QueryParams):
    print(query)
    return {'sucess': f'{query}'}
    # ResponseModel(
    #   name=name
    # )

  def put():
    pass

# class User(Resource):
#     def get(self, user_id):
#         abort_if_user_id_doesnt_exist(user_id)
#         return users[user_id]

#     def put(self, user_id):
#         abort_if_user_already_exists(user_id)
#         args = user_put_args.parse_args()       
#         users[user_id] = args
#         return users[user_id], 201 

#     def delete(self, user_id):
#         abort_if_user_id_doesnt_exist(user_id)
#         del users[user_id]
#         return '', 204

# api.add_resource(HelloWorld, '/<string:name>')
# api.add_resource(Products, "/")
# api.add_resource(Products, "/new")

if __name__ == '__main__':
    app.run(debug=True)






