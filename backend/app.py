from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

df = pd.read_csv('plants.csv')

@app.route('/search')
def search():
    query = request.args.get('q')
    filters = request.json

    matching_rows = []
    new_df = df.copy(deep=True)

    for column, value in filters.items():
        new_df = df[df[column] == value]
    
    if query and query != "":
        new_df = new_df[df['Name'].str.contains(query)]

    matching_rows = new_df.to_dict('records')

    return jsonify({"results": matching_rows})


@app.route('/plant')
def plant():
    query = request.args.get('name')

    plant_row = df[df['Name'] == query]

    plant_row = plant_row.to_dict('records')

    return jsonify({"results": plant_row[0]})

if __name__ == '__main__':
    app.run(debug=True)
