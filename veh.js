class veh {
constructor(x,y,r){
this.pos = createVector(x,y)
this.target = createVector(x,y)
this.vel =createVector(0,0)
this.acc = createVector(0,0)
this.maxspeed = 5
this.maxforce = .5
this.r =r

}

applyforce(f){

this.acc.add(f)


}


show (){
fill(255)
circle(this.pos.x,this.pos.y,this.r)

}

update(){

this.pos.add(this.vel)
this.vel.limit(this.maxforce)
this.vel.add(this.acc)

this.acc.mult(0)
}


arrive(target){
let force = p5.Vector.sub(target,this.pos)
let d = force.mag()
let speed = this.maxspeed
if (d <25){

speed = map (d,0,25,0,this.maxspeed)

}
force.setMag(speed)
force.sub(this.vel)
force.limit(this.maxforce)
return force

}

behavior(){

let arrive = this.arrive(this.target)


let mous = createVector(mouseX , mouseY)
let flee = this.flee(mous)
flee.setMag(5)
arrive.setMag(1)

this.applyforce(arrive)
this.applyforce(flee)

}



flee(target){
    let force = p5.Vector.sub(target,this.pos)
    let d = force.mag()
    if (d <50){
    
    force.setMag(this.maxspeed)
    force.sub(this.vel)
    force.mult(-1)
    force.limit(this.maxforce)
    }else {

force.set(0,0)

    }
    


    return force
    
    }


}