function preload(){
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is initialized' )
}
function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    console.log("nose_x = " + results[0].poseNet.nose.x);
    console.log("nose_y = " + results[0].poseNet.nose.y);
}
}
function draw(){
    image(video,0,0,300,300);

}
function take_snapshot(){
    save('myFilterImage.png');
}


    


