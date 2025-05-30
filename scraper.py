from importlib import resources
from flask import Flask, request, jsonify
from bs4 import BeautifulSoup
import requests
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={r"/scrape": {"origins": "http://localhost:5173"}}) #enables CORS for react app


@app.route('/scrape', methods=['POST'])

def scrape():

  try:
    data = request.json
    url = data.get('url')

    if not url:
      return jsonify({"error": "URL is required"}), 400
    
    response = requests.get(url)

    if response.status_code != 200:
      return jsonify({"error": "Failed to fetch the URL"}), response.status_code

    soup = BeautifulSoup(response.text, 'html.parser')

    return jsonify({"html": soup.prettify()})
  
  except Exception as e:
    return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
  app.run(debug=True)