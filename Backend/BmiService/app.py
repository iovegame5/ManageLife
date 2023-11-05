from flask import Flask, request

app = Flask(__name__)

@app.route('/calBmi', methods=["POST"])
def calBMI():
    weight = float(request.args['weight'])
    height = float(request.args['height']) / 100
    bmi = weight / (height ** 2)

    if bmi < 18.50:
        result = "น้ำหนักน้อย / ผอม (มากกว่าคนปกติ)"
    elif 18.50 <= bmi <= 22.90:
        result = "ปกติ (สุขภาพดี) (เท่าคนปกติ)"
    elif 23.00 <= bmi <= 24.90:
        result = "ท้วม / โรคอ้วนระดับ 1 (อันตรายระดับ 1)"
    elif 25.00 <= bmi <= 29.90:
        result = "อ้วน / โรคอ้วนระดับ 2 (อันตรายระดับ 2)"
    else:
        result = "อ้วนมาก / โรคอ้วนระดับ 3 (อันตรายระดับ 3)"

    return f'Your BMI is: {bmi:.2f}, {result}'

# config to aws lambda function
def lambda_handler(event, context):
    return app(event, context)

if __name__ == '__main__':
    app.run(debug=True, host="localhost", port=2000)
