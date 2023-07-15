function start(){
navigator.mediaDevices.getUserMedia({audio:true})
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/-hJdmyd03/model.json",modelLoaded)

}
function modelLoaded(){
console.log("modelIsLoaded")
classifier.classify(got_results);
}
function got_results(erorr,results){
if (erorr){
    console.log(erorr)
} 
else{
    console.log(results)
    document.getElementById("Hear").innerHTML="I Can Hear- "+(results[0].label)
    document.getElementById("accuracy").innerHTML="Accuracy-"+(results[0].confidence*100).toFixed(3)+"%"

    img1=document.getElementById("aliens1")
    img2=document.getElementById("aliens2")
    img3=document.getElementById("aliens3")
    img4=document.getElementById("aliens4")

    if(results[0].label=="Buzz"){
        img1.src="aliens-01.gif";
        img2.src="aliens-02.png";
        img3.src="aliens-03.png";
        img4.src="aliens-04.png";
    }
    else if(results[0].label=="Clapping"){
        img1.src="aliens-01.png";
        img2.src="aliens-02.gif";
        img3.src="aliens-03.png";
        img4.src="aliens-04.png";
    }
    else if(results[0].label=="Song"){
        img1.src="aliens-01.png";
        img2.src="aliens-02.png";
        img3.src="aliens-03.gif";
        img4.src="aliens-04.png";

    }
    else{
img1.src="aliens-01.png";
img2.src="aliens-02.png";
img3.src="aliens-03.png";
img4.src="aliens-04.gif";
    }

    
}
}
