class ground{
constructor(x,y,w,h){
var options = {
    isStatic:true
}


this.body= Boidies.circle(x,y,w,h,options)
this.w=w
this.h=h
World.add(world,this.body)
}
display(){
    var pos =this.body.position
    ellipse(pos.x,pos.y,this.w,this.h)
}
}
