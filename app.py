from flask import Flask, render_template, request, redirect, url_for
import csv

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/subscribe', methods=['POST'])
def subscribe():
    first_name = request.form.get('first_name')
    last_name = request.form.get('last_name')
    email = request.form.get('email')

    with open('data.csv', mode='a', newline='') as csv_file:
        fieldnames = ['first_name', 'last_name', 'email']
        writer = csv.DictWriter(csv_file, fieldnames=fieldnames)

        if csv_file.tell() == 0:
            writer.writeheader()

        writer.writerow({'first_name': first_name, 'last_name': last_name, 'email': email})

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
