import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios'; 

const StrokePrediction = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBMI] = useState('');
  const [glucoseLevel, setGlucoseLevel] = useState('');
  const [hyperTension, setHyperTension] = useState('');
  const [Married, setMarriageStatus] = useState('')
  const [workType, setWorkType] = useState('')
  const [smoking, setSmokingStatus] = useState('')
  const [residence, setResidence] = useState('')
  const [heartDisease, setHeartDisease] = useState('')
  const [prediction, setPrediction] = useState('');

  const handlePredict = async () => {
    const data = {
      age: parseFloat(age),
      gender: String(gender),
      bmi: parseFloat(bmi),
      avg_glucose_level: parseFloat(glucoseLevel),
      hypertension: parseInt(hyperTension),
      ever_married: String(Married),
      work_type: String(workType),
      smoking_status: String(smoking),
      residence_type: String(residence),
      heart_disease: parseInt(heartDisease)
    };
  
    try {
      const response = await axios.post('http://192.168.1.15:5000/predict', data, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      let haveStroke = response.data.stroke;
      
      if(haveStroke == "True"){
        setPrediction("Yes")
      }else{
        setPrediction("No")
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to make prediction');
    }
  };
  

  return (
    <View style={styles.container}>
       <Text style={styles.heading}>Enter your details for prediction</Text>
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Gender (Male, Female, Other)"
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        style={styles.input}
        placeholder="BMI"
        value={bmi}
        onChangeText={setBMI}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Glucose Level"
        value={glucoseLevel}
        onChangeText={setGlucoseLevel}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Hypertension"
        value={hyperTension}
        onChangeText={setHyperTension}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Heart Disease"
        value={heartDisease}
        onChangeText={setHeartDisease}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Married? (Yes/No)"
        value={Married}
        onChangeText={setMarriageStatus}
      />
      <TextInput
        style={styles.input}
        placeholder="Work Type? (children, govt_job, self-employed, private, never_worked, unknown)"
        value={workType}
        onChangeText={setWorkType}
      />
      <TextInput
        style={styles.input}
        placeholder="Do you Smoke? (never smoked, formely smoked, smokes, unknown)"
        value={smoking}
        onChangeText={setSmokingStatus}
      />
      <TextInput
        style={styles.input}
        placeholder="Residence (urban, rural)"
        value={residence}
        onChangeText={setResidence}
      />
      <Button title="Predict" onPress={handlePredict} />
      {<Text>Have Stroke: {prediction}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  }
})

export default StrokePrediction;
