class Security {

    constructor(){

        // Add code to create the input and button elements
this.access1=createInput("Code1")
this.access1.position(100,90)
this.access1.style('background','white')

this.button1=createButton("check")
this.button1.position(100,120)
this.button1.style('background','light grey')

this.access2=createInput("Code1")
this.access2.position(700,170)
this.access2.style('background','white')

this.button2=createButton("check")
this.button2.position(700,200)
this.button2.style('background','light grey')

this.access3=createInput("Code1")
this.access3.position(100,300)
this.access3.style('background','white')

this.button3=createButton("check")
this.button3.position(100,330)
this.button3.style('background','light grey')

    }

    display(){

        // Add code to make the buttons function as expected
this.button1.mousePressed(() =>{
    if(system.authenticate(accessCode1,this.access1.value())){
        this.button1.hide();
        this.access1.hide();
        score++;
    }
})
this.button2.mousePressed(() =>{
    if(system.authenticate(accessCode2,this.access2.value())){
        this.button2.hide();
        this.access2.hide();
        score++;
    }
})

this.button3.mousePressed(() =>{
    if(system.authenticate(accessCode3,this.access3.value())){
        this.button3.hide();
        this.access3.hide();
        score++;
    }})

    }}