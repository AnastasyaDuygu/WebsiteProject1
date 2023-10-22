var found = [];
$(function(){
    
    //alert("deneme")
    //asign random letters
    
    var letters = ["A", "D", "O", "R", "E"];
    var rand = null;
    for(let i = 1; i < 6; i++){
        $(`#letter${i}`)//.css("border", "2px solid white")
                 .css("width", "50px")
                 .css("height", "50px") 
                 .css("border-radius", "25px") 
        rand = Math.floor(Math.random()*letters.length);
        $(`#letter${i}`).text(`${letters[rand]}`)
        letters.splice(rand, 1);
    }
    
    $(".fa-shuffle").click(function(){
        
        //alert("deneme")
        var text = $(".selectedLetters").text()
        if(text == ""){
            var letters = ["A", "D", "O", "R", "E"];
            var rand = null;
         
        for(let i = 1; i < 6; i++){
            $(`#letter${i}`)//.css("border", "2px solid white")
                     .css("width", "50px")
                     .css("height", "50px") 
                     .css("border-radius", "25px") 
            rand = Math.floor(Math.random()*letters.length);
            $(`#letter${i}`).text(`${letters[rand]}`)
            letters.splice(rand, 1);
        }
            
        } else {
            $(this).animate({left : "-=8px"}, 90 )
            .animate({left : "+=16px"}, 90 )
            .animate({left : "-=16px"}, 90 )
            .animate({left : "+=8px"}, 90 )
        }
        
    })
    $(".fa-shuffle, .fa-lightbulb, #letter1, #letter2, #letter3, #letter4, #letter5").click(function(e){
        //console.log(e);
    })
    .mouseenter(function(e){
        $(this).css("background", "#f04c8a") ;
    })
    .mouseleave(function(e){
        $(this).css("background", "") ;
    })

    $("#letter1, #letter2, #letter3, #letter4, #letter5").click(function(){
        //alert("click")
        var clicked = $(this).text();
        //console.log(clicked)
        if($(this).hasClass("Selected")){
            $(this).animate({top : "-=8px"}, 90 )
                   .animate({top : "+=16px"}, 90 )
                   .animate({top : "-=16px"}, 90 )
                   .animate({top : "+=8px"}, 90 )
                   
        }else{
            $(this).addClass("Selected")
                    .css("color", "black")
            $(".selectedLetters").css("visibility", "visible")
            $(".selectedLetters").append(`${clicked}`)
        }  
    })
    
   
    let checkAdore = 0;
    let checkRead = 0;
    let checkOre = 0;
    let checkRod = 0;
    let checkEra = 0;
    $(".selectWheel").contextmenu(function(e){
        e.preventDefault() ;
        var text = $(".selectedLetters").text()
        if(text == "ADORE" || text == "ORE" || text == "ROD" || text == "ERA" || text == "READ"){
            switch(text){
                case "ADORE": 
                for ( var i = 0 ; i < found.length; i++) {
                    if(found[i] == "adore"){
                        checkAdore =1;
                    }
                 }
                 if(checkAdore == 0){
                $(".adore, #intersectAdoreRead, #intersectAdoreOre, #intersectAdoreEra ").animate({backgroundColor: "#f04c8a"}, 400)
                found.push("adore"); 
                $(".selectedLetters").css("visibility", "hidden")
                .text("")
                for(let i = 1; i< 6; i++){
                    if($(`#letter${i}`).hasClass("Selected")){
                        $(`#letter${i}`).removeClass("Selected")
                        .css("color", "white")
                    }
                }    
                } else {
                    $(".selectedLetters").animate({left : "-=8px"}, 90 )
                        .animate({left : "+=16px"}, 90 )
                        .animate({left : "-=16px"}, 90 )
                        .animate({left : "+=8px"}, 90, function(){
                    $(this).css("visibility", "hidden")
                        .text("")

                    $(".adore, #intersectAdoreRead, #intersectAdoreOre, #intersectAdoreEra").animate({color: "#f04c8a"}, 100)
                                                                                            .animate({color: "white"}, 100)
                                                                                            .animate({color: "#f04c8a"}, 100)
                                                                                            .animate({color: "white"}, 100)
                                                                                            .animate({color: "#f04c8a"}, 100)
                                                                                            .animate({color: "white"}, 100)
            })
            for(let i = 1; i< 6; i++){
                if($(`#letter${i}`).hasClass("Selected")){
                    $(`#letter${i}`).removeClass("Selected")
                    .css("color", "white")
                }
            }
                }   
                break;
                case "ORE": 
                for ( var i = 0 ; i < found.length; i++) {
                    if(found[i] == "ore"){
                        checkOre =1;
                    }
                 }
                 if(checkOre == 0){
                $(".ore, #intersectAdoreOre").animate({backgroundColor: "#f04c8a"}, 400)
                found.push("ore"); 
                $(".selectedLetters").css("visibility", "hidden")
                .text("")
                for(let i = 1; i< 6; i++){
                    if($(`#letter${i}`).hasClass("Selected")){
                        $(`#letter${i}`).removeClass("Selected")
                        .css("color", "white")
                    }
                } 
                } else {
                    $(".selectedLetters").animate({left : "-=8px"}, 90 )
                        .animate({left : "+=16px"}, 90 )
                        .animate({left : "-=16px"}, 90 )
                        .animate({left : "+=8px"}, 90, function(){
                    $(this).css("visibility", "hidden")
                        .text("")

                        $(".ore, #intersectAdoreOre").animate({color: "#f04c8a"}, 100)
                        .animate({color: "white"}, 100)
                        .animate({color: "#f04c8a"}, 100)
                        .animate({color: "white"}, 100)
                        .animate({color: "#f04c8a"}, 100)
                        .animate({color: "white"}, 100)


                        })
                }
                break;
                case "ROD": 
                for ( var i = 0 ; i < found.length; i++) {
                    if(found[i] == "rod"){
                        checkRod =1;
                    }
                 }
                if(checkRod == 0){
                    $(".rod, #intersectRodRead").animate({backgroundColor: "#f04c8a"}, 400)
                    found.push("rod"); 
                    $(".selectedLetters").css("visibility", "hidden")
                            .text("")
                    for(let i = 1; i< 6; i++){
                        if($(`#letter${i}`).hasClass("Selected")){
                            $(`#letter${i}`).removeClass("Selected")
                            .css("color", "white")
                        }
                    } 
                } else {
                    $(".selectedLetters").animate({left : "-=8px"}, 90 )
                    .animate({left : "+=16px"}, 90 )
                    .animate({left : "-=16px"}, 90 )
                    .animate({left : "+=8px"}, 90, function(){
                    $(this).css("visibility", "hidden")
                    .text("")

                    $(".rod, #intersectRodRead").animate({color: "#f04c8a"}, 100)
                    .animate({color: "white"}, 100)
                    .animate({color: "#f04c8a"}, 100)
                    .animate({color: "white"}, 100)
                    .animate({color: "#f04c8a"}, 100)
                    .animate({color: "white"}, 100)
                    })

                }
                break;
                case "ERA": 
                for ( var i = 0 ; i < found.length; i++) {
                    if(found[i] == "era"){
                        checkEra =1;
                    }
                 }
                if(checkEra == 0){
                $(".era, #intersectAdoreEra").animate({backgroundColor: "#f04c8a"}, 400)
                    found.push("era"); 
                    $(".selectedLetters").css("visibility", "hidden")
                                    .text("")
                    for(let i = 1; i< 6; i++){
                        if($(`#letter${i}`).hasClass("Selected")){
                            $(`#letter${i}`).removeClass("Selected")
                            .css("color", "white")
                        }
                    } 
                } else {
                    $(".selectedLetters").animate({left : "-=8px"}, 90 )
                    .animate({left : "+=16px"}, 90 )
                    .animate({left : "-=16px"}, 90 )
                    .animate({left : "+=8px"}, 90, function(){
                    $(this).css("visibility", "hidden")
                    .text("")

                    $(".era, #intersectAdoreEra").animate({color: "#f04c8a"}, 100)
                    .animate({color: "white"}, 100)
                    .animate({color: "#f04c8a"}, 100)
                    .animate({color: "white"}, 100)
                    .animate({color: "#f04c8a"}, 100)
                    .animate({color: "white"}, 100)
                    })
                }
                break;
                case "READ": 
                for ( var i = 0 ; i < found.length; i++) {
                    if(found[i] == "read"){
                        checkRead =1;
                    }
                 }
                if(checkRead == 0){
                $(".read, #intersectRodRead, #intersectAdoreRead").animate({backgroundColor: "#f04c8a"}, 400)
                    found.push("read"); 
                    $(".selectedLetters").css("visibility", "hidden")
                                        .text("")
                    for(let i = 1; i< 6; i++){
                        if($(`#letter${i}`).hasClass("Selected")){
                            $(`#letter${i}`).removeClass("Selected")
                            .css("color", "white")
                        }
                    }            
                } else {
                    $(".selectedLetters").animate({left : "-=8px"}, 90 )
                    .animate({left : "+=16px"}, 90 )
                    .animate({left : "-=16px"}, 90 )
                    .animate({left : "+=8px"}, 90, function(){
                    $(this).css("visibility", "hidden")
                    .text("")

                    $(".read, #intersectRodRead, #intersectAdoreRead").animate({color: "#f04c8a"}, 100)
                    .animate({color: "white"}, 100)
                    .animate({color: "#f04c8a"}, 100)
                    .animate({color: "white"}, 100)
                    .animate({color: "#f04c8a"}, 100)
                    .animate({color: "white"}, 100)
                    })
                }
                break;
            }
            
         
        }else{
            $(".selectedLetters").animate({left : "-=8px"}, 90 )
            .animate({left : "+=16px"}, 90 )
            .animate({left : "-=16px"}, 90 )
            .animate({left : "+=8px"}, 90, function(){
               $(this).css("visibility", "hidden")
                      .text("")
            })
          
        }
        for(let i = 1; i< 6; i++){
            if($(`#letter${i}`).hasClass("Selected")){
                $(`#letter${i}`).removeClass("Selected")
                .css("color", "white")
            }
        }
    })

    

    $(".fa-lightbulb").hover(function(){
        $(this).animate({fontSize: "30px"}, 60)
                .css("color", "yellow")
    }, function(){
        $(this).animate({fontSize: "25px"}, 60)
                .css("color", "white")
    })
    
    let x=0;
    $(".fa-lightbulb").click(function(){
        if(x==0){
            x=1;
        }else{
            x=0;
        } 
        if(x==1){
           $(".puzzle table td").animate({color: "#d3d3d3"}, 300, function(){
            if(jQuery.inArray("adore", found) !== -1){
                //alert("deneme")
                $(".adore, #intersectAdoreRead, #intersectAdoreOre, #intersectAdoreEra ").css("color", "white")
            }
            if(jQuery.inArray("ore", found) !== -1){
                $(".ore, #intersectAdoreOre").css("color", "white")
            }
            if(jQuery.inArray("rod", found) !== -1){
                $(".rod, #intersectRodRead").css("color", "white")
            }
            if(jQuery.inArray("era", found) !== -1){
                $(".era, #intersectAdoreEra").css("color", "white")
            }
            if(jQuery.inArray("read", found) !== -1){
                $(".read, #intersectRodRead, #intersectAdoreRead").css("color", "white")
            }
           })
           
            
        }else {
                $(".puzzle table td").animate({color: "white"}, 300)
        }
       
    })


})