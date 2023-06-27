function preload(){
    moustache = loadImage("moustache.png")
}
function setup(){
canvas = createCanvas(500,500)
canvas.center()
video = createCapture(VIDEO)
video.size(500,500)
video.hide()
poseNet = ml5.poseNet(video,modelLoaded)
poseNet.on("pose", gotPoses)
}
nosex= 0 
nosey= 0
function modelLoaded(){
    console.log("Model has loaded.")
}
function gotPoses(result){
if (result.length > 0) {
    console.log(result)
    nosex = result[0].pose.nose.x
    nosey = result[0].pose.nose.y
    console.log("nosex="+result[0].pose.nose.x)
    console.log("nosey="+result[0].pose.nose.y)
}
}
function draw(){
image(video,0,0,500,500)   
image(moustache,nosex - 45,nosey+15,100,75)
}

function Snap(){
    save("filtered_image.png")
}