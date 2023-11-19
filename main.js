function takesnapshot() {
    save("selfie.jpg")
}

function preload() {
noseimg=loadImage("moustache.png")
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}
noseX=0
noseY=0
function draw() {
    image(video, 0, 0, 300, 300)
    fill("red")
    stroke("red")
    // circle(noseX,noseY,20)
    image(noseimg,noseX-25,noseY,50,30)
}

function modelLoaded() {
    console.log("poseNet is ready");
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        noseX=result[0].pose.nose.x
        noseY=result[0].pose.nose.y
        console.log("x= "+noseX+" y= " +noseY);

    }
}