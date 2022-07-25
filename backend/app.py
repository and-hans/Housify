import datetime
import os
from flask import Flask, jsonify, render_template, request

app = Flask(__name__, template_folder="../frontend/public", static_folder="../frontend/public")


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    """ This is a catch all that is required for react-router """
    return render_template('index.html')

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