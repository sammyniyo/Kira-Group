from flask import Flask, render_template, request, redirect, url_for
import csv

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit_form', methods=['POST'])
def submit_form():
    email = request.form.get('email')
    phone = request.form.get('phone')
    enquiry = request.form.get('enquiry')

    with open('data1.csv', mode='a', newline='') as csv_file:
        fieldnames = ['email', 'phone', 'enquiry']
        writer = csv.DictWriter(csv_file, fieldnames=fieldnames)

        if csv_file.tell() == 0:
            writer.writeheader()

        writer.writerow({'email': email, 'phone': phone, 'enquiry': enquiry})

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
