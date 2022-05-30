class Game{
constructor(){

}
display(){

}
async start(){
form=new Form()
form.display()
player=new Player
playerCount=player.getCount()
soldiers=[soldier,soldier2]

}
play(){
  Player.GetplayersInfo()
  if(keyWentDown("up")){
    soldier.velocityY=-10
  }
  if(allPlayers!==undefined){
      var index=0
      console.log(player.index)
      for(var plr in allPlayers){
          index+=1
          var x=allPlayers[plr].SX
          var y=allPlayers[plr].SY
          soldiers[index-1].SX=x
          soldiers[index-1].SY=y
          
          if(index===player.index){
            stroke(15)
            fill("red")
            textSize(100)
        }
      }
//      this.playerControl()
  }


}

/*playerControl(){
    if(keyDown("Up")){
        player.SY-=10
        player.updateThings()
        }
}*/
}