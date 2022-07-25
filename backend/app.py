import datetime
import os
from flask import Flask, jsonify

app = Flask(__name__)


# @app.route('/')
# def index():
#     return jsonify({'message':'hello'})


@app.route('/linereg')
def mortgage():
    return jsonify(status=200, label="Linear Regression")


@app.route('/time')
def date_time():
    date_and_time = {'Name': 'Microsoft Experience', 'Age': 190, 'Date': datetime.datetime.now()}
    return jsonify(date_and_time)


if __name__ == "__main__":
    ENVIRONMENT_DEBUG = os.environ.get("APP_DEBUG", True)
    ENVIRONMENT_PORT = os.environ.get("APP_PORT", 5001)
    app.run(host='0.0.0.0', port=ENVIRONMENT_PORT, debug=ENVIRONMENT_DEBUG)