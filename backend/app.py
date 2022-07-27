import os
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def route():
    return jsonify(message="hello")

@app.route('/random_forest')
def linereg():
    return jsonify(status=200, label="Random Forest")

# @app.route('/mortgage', method=["POST"])
# def mortgage():
#     query = [
#         request.args.get("house_info"), 
#         request.args.get("about"),
#         request.args.get("house_type")
#     ]
#     pass


if __name__ == "__main__":
    ENVIRONMENT_DEBUG = os.environ.get("APP_DEBUG", True)
    ENVIRONMENT_PORT = os.environ.get("APP_PORT", 5002)
    app.run(host='0.0.0.0', port=ENVIRONMENT_PORT, debug=ENVIRONMENT_DEBUG)