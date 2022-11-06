function preload()
{
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position (200,200);
    video = createCapture(VIDEO);
    video.hide();


}

function draw() {
    image(video, 20, 20, 600, 440);
    fill(20,20,100)
    circle(20,20,100)
    circle(20,460,100)
    circle(620,20,100)
    circle(620,460,100)

}

function take_snapshot() {
    save('student_name.png');
}

