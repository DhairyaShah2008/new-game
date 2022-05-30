class Form{
constructor(){
    this.button1=createButton("Next")
    this.but0to1=createButton("Next")
this.help=createButton("Help")
    this.Name=createInput("Name")
    this.buynow1=createButton("Buy now")
    this.buynow2=createButton("Buy now")
    this.buynow3=createButton("Buy now")
}
hide(){
    this.button1.hide()
    this.Name.hide()
    help.hide()
    this.but0to1.hide()
}

styleSheetForInput(){
this.Name.class("inputStyle")
}



display(){
this.but0to1.position(width/1.2,height/1.15) 
this.but0to1.class("buttonStyle")
this.but0to1.hide()
    
this.Name.position(width/2,height/2)
this.Name.class("inputStyle")
this.Name.hide()

this.styleSheetForInput()
this.button1.position(width/1.2,height/1.15) 
this.button1.class("buttonStyle")

this.buynow1.hide()
this.buynow2.hide()
this.buynow3.hide()



    this.button1.mousePressed(()=>{
        

        if(gameState===0){
        gameState=1
        this.Name.show()
        this.button1.hide()
        this.but0to1.show()
    }

    if(gameState===2){
        gameState=7
        this.Name.hide()
        this.button1.hide()
        this.but0to1.hide()
    }





    })

    this.but0to1.mousePressed(()=>{
        

        if(gameState===1){
        gameState=2
        this.Name.hide()
        
        swal({
            title: `Welcome `+player.name,
            confirmButtonText: "OK"
            
          });
    }



    })
    


      

/*          
    this.buynow1.show()
    this.buynow2.show()
    this.buynow3.show()
this.buynow1.position(width/1.5,height/4)
this.buynow2.position(width/1.5,height/2.5)
this.buynow3.position(width/1.5,height/1.75)
this.buynow1.class("buttonStyle")
this.buynow2.class("buttonStyle")
this.buynow3.class("buttonStyle")
this.button1.show() 
*/

    

      
    
    


    
}
}