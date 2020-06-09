export default function(GAME){
    if (!this.destination) return
    if (this.destination.x > this.x)
        this.x+= this.speed*GAME.dt
    else if (this.destination.x < this.x)
        this.x-= this.speed*GAME.dt
    if (this.destination.y > this.y)
        this.y+= this.speed*GAME.dt
    else if (this.destination.y < this.y)
        this.y-= this.speed*GAME.dt
    if (this.destination.x == this.x && this.destination.y == this.y)
        this.destination = null
}