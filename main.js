prediction = "";

Webcam.set({
    width: 300,
    height: 300,
    img_format: "jpeg",
    jpeg_quality: 100
});

camera = document.getElementById("camera"); 
Webcam.attach('#camera');

function TakeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "image_taken" src="'+data_uri+'"/>';
    })
}

console.log("Model Version : ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UNguisJ7y/model.json", modelLoaded);

function modelLoaded(){
    console.log("ModelLoaded");
}