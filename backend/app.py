import datetime
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/time')
def date_time():
    date_and_time = {'Name': 'Microsoft Experience', 'Age': 190, 'Date': datetime.datetime.now()}
    return jsonify(date_and_time)

if __name__ == "__main__":
    app.run(debug=True)