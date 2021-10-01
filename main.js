https://teachablemachine.withgoogle.com/models/Le7Q3YvJe/model.json

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Le7Q3YvJe/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy is - '+ (results[0].confidence * 100).toFixed(2)+"%";
        document.getElementById("result_confidence").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")";

img1 = document.getElementById("alien1");
img2 = document.getElementById("alien2");
img3 = document.getElementById("alien3");
img4 = document.getElementById("alien4");
        
if(results[0].label== "barking"){
    img1.src = 'bark.png';
    img2.src = 'background_noise.png';
    img3.src = 'meow.png';
    img4.src = 'chirp.png';
}else if(results[0].label== "meow"){
    img1.src = 'meow.png';
    img2.src = 'bark.png';
    img3.src = 'background_noise.png';
    img4.src = 'chirp.png';
}else if(results[0].label== "chirp"){
    img1.src = 'chirp.png';
    img2.src = 'bark.png';
    img3.src = 'background_noise.png';
    img4.src = 'meow.png';
}else {
    img1.src = 'background_noise.png';
    img2.src = 'bark.png';
    img3.src = 'chirp.png';
    img4.src = 'meow.png';
}

    }
}