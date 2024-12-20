
for(var i=0; i<3; i++)
    {
        var myVar = document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
            var text = this.innerHTML;     
            play_audio(text);
            animation_button(text)
        });
    }


    document.addEventListener("keypress",function(event){
        var text = event.key;
        play_audio(text)
    });
    
    
    function play_audio(text){
        switch(text){
            case "a":
                var play_top = new Audio("/DOM/audio/number1.mp3")
                play_top.play();
                break;
            case "b":
                var play_mid = new Audio("/DOM/audio/number2.mp3")
                play_mid.play();
                break;
            case "c":
                var play_hindi = new Audio("/DOM/audio/hindi.mp3")
                play_hindi.play();
                break;
            case "top":
                var play_top = new Audio("/DOM/audio/number1.mp3")
                play_top.play();
                break;
            case "mid":
                var play_mid = new Audio("/DOM/audio/number2.mp3")
                play_mid.play();
                break;
            case "hindi":
                var play_hindi = new Audio("/DOM/audio/hindi.mp3")
                play_hindi.play();
                break;
        }
    }



    function animation_button(text)
    {
        var myAnim = document.querySelector("."+ text);
        myAnim.classList.add("anim");

        setTimeout(function () {
            myAnim.classList.remove("anim");
        }, 10000);
    }