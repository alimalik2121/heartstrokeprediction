from flask import Flask, request, jsonify
import random
from heartDisease import HeartDiseaseModel
from model import db, UserCredentials
from geminipy import Geminipy

app = Flask(__name__)

<<<<<<< HEAD

=======
>>>>>>> 206e6f4 (project files)
# Load the Flask app configuration with the database URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///heartstrokeprediction.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable SQLAlchemy event tracking
db.init_app(app)

# Route to register a new user
@app.route('/signup', methods=['POST'])
def register_user():
    data = request.get_json()  # Get JSON data from the request
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Check if username or email already exists in the database
    if UserCredentials.query.filter_by(username=username).first() is not None:
        return jsonify({'error': 'Username already exists'}), 400
    if UserCredentials.query.filter_by(email=email).first() is not None:
        return jsonify({'error': 'Email already exists'}), 400

    # Create a new User object and add it to the database
    new_user = UserCredentials(username=username, email=email, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201

# Route to login a user
@app.route('/login', methods=['POST'])
def login_user():
    data = request.get_json()  # Get JSON data from the request
    username = data.get('username')
    password = data.get('password')

    # Find the user in the database by username
    user = UserCredentials.query.filter_by(username=username).first()

    if user and user.password == password:
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'error': 'Invalid credentials'}), 401

# Code for meal plannner
meal_plan = {
    'breakfast': ['Oats', 'Poha', 'Dosa', 'Sandwich', 'Uttapam', 'Omlet', 'Boiled egg'],
    'lunch': ['Grilled vegetables', 'Chickpea salad', 'Black Chana', 'Kabuli chana', 'Mix veg dry', 'Mix veg gravy', 'Mix veg with Paneer', 'Chicken curry'],
    'dinner': ['Grilled vegetables', 'Chickpea salad', 'Black Chana', 'Kabuli chana', 'Mix veg dry', 'Mix veg gravy', 'Mix veg with Paneer']
}

@app.route('/mealplan', methods=['POST'])
def generate_meal_plan():
    data = request.json
    age = data.get('age')
    weight = data.get('weight')
    restrictions = data.get('restrictions')
    preferences = data.get('preferences')
    
    # Logic to generate personalized meal plan based on user input
    breakfast = random.choice(meal_plan['breakfast'])
    lunch = random.choice(meal_plan['lunch'])
    dinner = random.choice(meal_plan['dinner'])
    
    return jsonify({'breakfast': breakfast, 'lunch': lunch, 'dinner': dinner})

#Code for Stroke Prediction
@app.route("/predict", methods=['POST'])
def predict_heart_disease():
    data = request.get_json()

    ready_data = {
        'age': int(data['age']),
        'gender': data['gender'],
        'hypertension': int(data['hypertension']),
        'heart_disease': int(data['heart_disease']),
        'ever_married': data['ever_married'],
        'work_type': data['work_type'],
        'residence_type': data['residence_type'],
        'smoking_status': data['smoking_status'],
        'avg_glucose_level': float(data['avg_glucose_level']),
        'bmi': float(data['bmi'])
    }

    model = HeartDiseaseModel()
    df = model.make_dataframe(ready_data)

    stroke = model.predict(df)

    return {"stroke": str(stroke)}

    #Code for Medical Suggestions
# @app.route('/medical-suggestions', methods=['POST'])
# def get_medical_suggestions():
#     data = request.json
#     prediction_result = data.get('prediction')

#     gemini = Geminipy(api_key='AIzaSyA-QwyOtAn2Ug2IXeIn7NUBd2nrwZCU19M')
#     suggestions = gemini.get_medical_suggestions(prediction_result)

#     return jsonify({'suggestions': suggestions})
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
