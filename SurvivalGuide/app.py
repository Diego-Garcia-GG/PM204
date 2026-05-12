from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    from flask import redirect
    return redirect('/aventura')

@app.route('/aventura')
def aventura():
    return render_template('aventura.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
