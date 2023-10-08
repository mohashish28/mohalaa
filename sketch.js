let vehicle
let vehicles =[]
let cols =25

function setup() {
  createCanvas(400, 400);
for (let i=0; i<cols; i++){
  vehicles [i]=[]
  for (let j =0; j<cols; j++){
  push();
 let  w = width/cols
//translate(i*w,j*w)
vehicles[i][j] = new veh(w*i,w*j,w)
//vehicles[i].push(vehicle)
//vehicles[i][j].push(vehicle)
pop();
}
}
}

function draw() {
  background(220);
  for (let i =0; i<cols; i++){
    for (let j =0; j<cols; j++){


vehicles[i][j].show();
vehicles[i][j].update();
vehicles[i][j].behavior();

}}}




