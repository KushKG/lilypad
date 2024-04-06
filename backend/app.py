from flask import Flask, request, jsonify
import pandas as pd
import json

app = Flask(__name__)

df = pd.read_csv('plants.csv')

@app.route('/search', methods=['POST', 'GET'])
def search():
    query = request.args.get('q')
    filters = json.loads(request.args.get('filters'))
    region = int(request.args.get('region'))

    matching_rows = []
    new_df = df.copy(deep=True)
    new_df = df[df['Region'] == region]

    for column, value in filters.items():
        new_df = df[df[column] == value]
    
    if query and query != "":
        query = query.lower()
        new_df = new_df[df['Name'].str.contains(query, case=False) | df['Description'].str.contains(query, case=False)]

    new_df = new_df.drop_duplicates(subset=['Name'], keep='first')
    new_df = new_df.dropna(subset=['Image'])

    matching_rows = new_df.to_dict('records')

    return jsonify({"results": matching_rows})


@app.route('/plant')
def plant():
    query = request.args.get('name')
    region = int(request.args.get('region'))

    plant_row = df[(df['Name'] == query) & (df['Region'] == region)]

    plant_row = plant_row.to_dict('records')

    return jsonify({"results": plant_row[0]})

if __name__ == '__main__':
    app.run(debug=True)
