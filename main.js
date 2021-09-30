https://teachablemachine.withgoogle.com/models/Le7Q3YvJe/model.json

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Le7Q3YvJe/model.json', modelReady);
}