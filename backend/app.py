from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/search')
def search():
    query = request.args.get('q')
    filters = request.json

    if not query:
        return jsonify({"error": "Search query parameter 'q' is required."}), 400

    

    return jsonify({"query": query})


if __name__ == '__main__':
    app.run(debug=True)
