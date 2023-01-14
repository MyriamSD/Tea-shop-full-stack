import firebase_admin
import json
import os


from flask import Flask, request, render_template, redirect, flash, session, jsonify
from random import randrange
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
CORS(app)


app.config['SECRET_KEY'] = "secret"
debug = DebugToolbarExtension(app)

product_post_args = reqparse.RequestParser()
product_post_args.add_argument("name", type=str, help="Add a name", required=True)
product_post_args.add_argument("price", type=str, help="Add a price", required=True)
product_post_args.add_argument("description", type=str, help="Add a description", required=True)
product_post_args.add_argument("imageUrl", type=str, help="Add image", required=True)
product_post_args.add_argument("id", type=int, help="Add id", required=False)



def find_product(id):
    for p in all_products:
        if p['id'] == id:
            return p


all_products = [doc.to_dict() for doc in products.stream()]



class Products(Resource):
  def get(self):
      return jsonify({"results": all_products})
  
  def post(self):
    args = product_post_args.parse_args()
    args['id'] = randrange(0, 100000)
    products.document(args['name']).set(args)
    return {'sucess': args}

class Product(Resource):
  def get(self, product_id):
    product = find_product(product_id)

    return jsonify({"product": product})

  def put(self, product_id):
    args = product_post_args.parse_args()
    product = find_product(product_id)
    args['id'] = product['id']
    
    products.document(product['name']).set(args, merge=True)
    return{'success': args}

  def delete(self, product_id):
    product = find_product(product_id)
    products.document(product['name']).delete()
    return {'message': "delete"}

    


api.add_resource(Products, '/')
api.add_resource(Product, "/<int:product_id>")
# api.add_resource(Products, "/")

if __name__ == '__main__':
    app.run(debug=True)






