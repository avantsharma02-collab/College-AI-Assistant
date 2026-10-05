from flask import Flask, render_template,request,jsonify
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/ask",methods=["POST"])
def ask():
    question = request.json["question"]
    return jsonify({
        "answer":"I received your question:"+ question
    })

if __name__ == "__main__":
    app.run(debug=True)