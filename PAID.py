from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

API_KEY = # Your API key
URL = # Your URL

headers = { 
    "Content-Type": "application/json",
    "Apikey": f"Api-Key {API_KEY}"
}

@app.route('/send-message', methods=['POST'])
def send_message():
    data = request.get_json()
    message = data.get('message')

    payload = {
        "payload": message
    }

    response = requests.post(URL, headers=headers, json=payload)
    response_json = response.json()  # Parse the response as JSON

    # Extract the 'text' field from the response
    diagnosis_text = response_json.get('text', 'No diagnosis found')

    return jsonify({'response': diagnosis_text})

if __name__ == '__main__':
    app.run(debug=True)
