from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/compliment')
def compliment():
    return render_template('compliment.html')


@app.route('/for_you')
def for_you():
    return render_template('for_you.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)