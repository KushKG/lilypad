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

    if query and query != "":
        query = query.lower()
        new_df = new_df[df['Name'].str.contains(query, case=False) | df['Description'].str.contains(query, case=False)]

    
    mask = None
    for column, values in filters.items():
        if len(values) > 0:
            if isinstance(values, list):
                condition = new_df[column].isin(values)
            else:
                condition = new_df[column] == values
            if mask is None:
                mask = condition
            else:
                mask &= condition
    
    if mask is not None:
        new_df = new_df[mask]
    
    

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
