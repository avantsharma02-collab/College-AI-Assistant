from flask import Flask, render_template,request,jsonify
import json
app = Flask(__name__)

with open("faq.json","r") as file:
    faqs = json.load(file)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/ask",methods=["POST"])
def ask():
    question = request.json["question"].lower()
    answer = "Sorry, I don't know the answer to that question yet."

    for faq in faqs:
        if faq["question"].lower() in question:
            answer = faq["answer"]
            break
    return jsonify({"answer": answer})

if __name__ == "__main__":
    app.run(debug=True)