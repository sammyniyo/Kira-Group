from flask import Flask, request, render_template
import csv

app = Flask(__name__)

@app.route('/submit_c_form', methods=['POST'])
def submit_form():
    # Get data from the form
    email = request.form['email']
    phone = request.form['phone']
    enquiry = request.form['enquiry']

    # Write the data to a CSV file
    with open('form_data.csv', mode='a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow([email, phone, enquiry])

    return 'Form submitted successfully!'

if __name__ == '__main__':
    app.run(debug=True)
