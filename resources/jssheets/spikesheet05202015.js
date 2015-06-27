/**
 * @author HTsao
 */



//login starts here


var attempt = 3; // Variable for counting login attempts. 3 attempts total
// function for login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "DaVinci" && password == "password"){
//alert ("Login successfully. Thank you for testing");
window.location = "Homeairbase.html"; // Redirecting to other page, but disable this feature here
return false;
}
else{
attempt --;// Decrementing by one.
alert("Incorrect User Name or Password. You have "+attempt+" attempt(s)  left");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

//login ends here

//page transition starts       
$(document).ready(function(){
    $("body").css("display", "none");
    $("body").fadeIn(2500);
    //no_blank is a class I created
    $(".no_blank").click(function(event){
      
        //however, this prevents target="_blank"
        event.preventDefault();
        linkLocation=this.href;
        //to work with spike's power on/off, keep the below fadeOut at 0. adjust above fadeIn if needed
        $("body").fadeOut(0, redirectPage);
    });
    
    function redirectPage(){
        window.location = linkLocation;
       
    }
    
});
//page transation ends

 

////////Date, Clock js starting here. this one is NON GMT //
//http://www.sitepoint.com/create-jquery-digital-clock-jquery4u/-->
//http://www.sitepoint.com/10-cool-jquery-clock-tutorials-analog-digital/-->

$(document).ready(function() {
// Create two variable with the names of the months and days in an array
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// Create a newDate() object
var newDate = new Date();
// Extract the current date from Date object
newDate.setDate(newDate.getDate());
// Output the day, date, month and year   
$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

setInterval( function() {
    // Create a newDate() object and extract the seconds of the current time on the visitor's
    var seconds = new Date().getSeconds();
    // Add a leading zero to seconds value
    $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
    },1000);
    
setInterval( function() {
    // Create a newDate() object and extract the minutes of the current time on the visitor's
    var minutes = new Date().getMinutes();
    // Add a leading zero to the minutes value
    $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);
    
setInterval( function() {
    // Create a newDate() object and extract the hours of the current time on the visitor's
    var hours = new Date().getHours();
    // Add a leading zero to the hours value
    $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);   
});
/////NON GMT date clock ends here.


///////GMT ZULU clock starts there. modified by Spike/////////

 function gmtClock(){
   
/* Basic gmt clock */
var time = new Date();
var gmtMS = time.getTime() + (time.getTimezoneOffset() * 60000);
var gmtTime = new Date(gmtMS);
var hour = gmtTime.getHours();
var minute = gmtTime.getMinutes();
var second = gmtTime.getSeconds();
var temp = "" + ((hour < 10) ? "0" : "") + hour;
temp += ((minute < 10) ? ":0" : ":") + minute;
temp += ((second < 10) ? ":0" : ":") + second;
document.getElementById("clockForm").innerHTML = temp;
setTimeout("gmtClock()",1000);
};
///////GMT clock ends there/////////

////////////////////Date Clock js ends here//////

/////////axial compressor img shake starting here
//might need use css to add a frame sound the image
 $(document).ready(function(){
          $("#axialcompressor_img").click(function(){
              $("#axialcompressor_img").effect("shake",
               {direction: "down", distance:15, time:5
                   
               }, 1000);});

});
////////axia compressor img shake ends here

///MFDs individualy (power on/off) fadeIn & fadeOut with jQuery. ONLOAD or refresh homepage will automatically turn MFD power on. need to use hide in order to get the fadein effect.//
//when MFD power off, added setTimeout in order to remove text content after the fadeOut. subpages may have different mfd layout//     
         $(document).ready(function(){
            $("#power_off_mfdL").click(function(){
                $("#homeairbasemfdL1, #homeairbasemfdL2,#powerplantmfdL1, #byNASA, #pclubmfdL1, #pclubmfdL2").fadeOut(2000);$("#homeairbasemfdL1, #homeairbasemfdL2,#powerplantmfdL1, #byNASA,#pclubmfdL1, #pclubmfdL2").setTimeout(function(){$("#homeairbasemfdL1, #homeairbasemfdL2,#powerplantmfdL1, #byNASA,#pclubmfdL1, #pclubmfdL2").text("");},500);});
                
               $("#power_on_mfdL").click(function(){
               $("#homeairbasemfdL1, #homeairbasemfdL2,#powerplantmfdL1, #byNASA,#pclubmfdL1, #pclubmfdL2").hide();$("#homeairbasemfdL1, #homeairbasemfdL2,#powerplantmfdL1, #byNASA,#pclubmfdL1, #pclubmfdL2").fadeIn(2000);$("#homeairbasemfdL1, #homeairbasemfdL2,#powerplantmfdL1, #byNASA,#pclubmfdL1, #pclubmfdL2").css("color","white", "font-size","1.25em");});

            
            $("#power_off_mfdR").click(function(){
               $("#homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #accordion,#pclubmfdR1, #pclubmfdR2").fadeOut(2000);$("#homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #accordion,#pclubmfdR1, #pclubmfdR2").setTimeout(function(){$("#homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #accordion,#pclubmfdR1, #pclubmfdR2").text("");},500);});
                
             $("#power_on_mfdR").click(function(){
               $("#homeairbasemfdR1, #homeairbasemfdR2,#g1, #g2, #g3, #g4, #g5, #g6, #accordion,#pclubmfdR1, #pclubmfdR2").hide();$("#homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #accordion,#pclubmfdR1, #pclubmfdR2").fadeIn(2000);$("#homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #accordion,#pclubmfdR1, #pclubmfdR2").css("color","white", "font-size","1.25em");});
        
        });
        
        
///////////MAIN POWER on/off starting here for all systems///////////////////////// 
//Main power ON when window onload (without click) , make Main power on btn neon, and eyebrow message blinking.
$(window).load(function(){
$("#mainpower_on_btn").addClass("mainpower_on_btnclass");//neon
$("#eyebrow_parap").hide();$("#homeairbasemfdL1, #homeairbasemfdL2, #homeairbasemfdR1, #homeairbasemfdR2,  #g1, #g2, #g3, #g4, #g5, #g6, #homeairbase_lowercentermonitorpara, #powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara, #pclublower_centerpara, #pclublower_Rightpara").hide();$("#eyebrow_parap").fadeIn(1000);$("#eyebrow_parap").css("color","white");$("#eyebrow_parap").css("font-size","1.25em");$("#eyebrow_parap").text("Main power on system scan in progress");

//next line has call back function to change text and color 
 $("#eyebrow_parap").fadeOut(1000, function(){$("#eyebrow_parap").fadeIn(1000);$("#eyebrow_parap").css("color","black");$("#eyebrow_parap").text("Flight System is now ready");
 $("#homeairbasemfdL1, #homeairbasemfdL2, #homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #homeairbase_lowercentermonitorpara, #powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara, #pclublower_centerpara, #pclublower_Rightpara").fadeOut(2000);$("#powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara, #pclublower_centerpara, #pclublower_Rightpara").fadeIn(3000);
 $("#homeairbase_lowercentermonitorpara, #powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara,  #pclublower_centerpara, #pclublower_Rightpara").show();$("#homeairbasemfdL1, #homeairbasemfdL2, #homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #homeairbase_lowercentermonitorpara,#powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara, #pclublower_centerpara, #pclublower_Rightpara").css("color","white", "font-size","1.25em");

 });   
 });



//Main power manually CLICK ON , make Main power on btn neon, and eyebrow message blinking.
$(document).ready(function(){
$("#mainpower_on_btn").click(function(){
$("#mainpower_on_btn").addClass("mainpower_on_btnclass");//neon
$("#eyebrow_parap").hide();$("#homeairbasemfdL1, #homeairbasemfdL2, #homeairbasemfdR1, #homeairbasemfdR2, #homeairbase_lowercentermonitorpara, #powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara, #pclublower_centerpara, #pclublower_Rightpara").hide();$("#eyebrow_parap").fadeIn(1000);$("#eyebrow_parap").css("color","white");$("#eyebrow_parap").css("font-size","1.25em");$("#eyebrow_parap").text("Main power on system scan in progress");

//next line has call back function to change text and color 
 $("#eyebrow_parap").fadeOut(1000, function(){$("#eyebrow_parap").fadeIn(1000);$("#eyebrow_parap").css("color","black");$("#eyebrow_parap").text("Flight System is now ready");
 $("#homeairbasemfdL1, #homeairbasemfdL2, #homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #homeairbase_lowercentermonitorpara,#powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara, #pclublower_centerpara, #pclublower_Rightpara").fadeOut(2000);$("#homeairbasemfdL1, #homeairbasemfdL2, #homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #homeairbase_lowercentermonitorpara,#powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara, #pclublower_centerpara, #pclublower_Rightpara").fadeIn(3000);
 $("#homeairbasemfdL1, #homeairbasemfdL2, #homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #homeairbase_lowercentermonitorpara,#powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara, #pclublower_centerpara, #pclublower_Rightpara").show();$("#homeairbasemfdL1, #homeairbasemfdL2, #homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #homeairbase_lowercentermonitorpara,#powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara, #pclublower_centerpara, #pclublower_Rightpara").css("color","white", "font-size","1.25em");

 });   
 });
 });
        
  
 //Main power manually CLICK OFF make Mainpower on btn style normal (without neon). //then callback to stop eyebrow message's multiple fadeIn and fadeOuts,
 // then remove text for both eyebrows and mfds
 $(document).ready(function(){
 $("#mainpower_off_btn").click(function(){
    
    $("#mainpower_on_btn").removeClass("mainpower_on_btnclass");
    $("#eyebrow_parap").stop(function(){$("#eyebrow_parap").stop();});
    $("#eyebrow_parap").text("");
 $("#homeairbasemfdL1, #homeairbasemfdL2, #homeairbasemfdR1, #homeairbasemfdR2, #g1, #g2, #g3, #g4, #g5, #g6, #homeairbase_lowercentermonitorpara,#powerplantmfdL1, #byNASA, #accordion, #pclubmfdL1, #pclubmfdL2, #pclubmfdR2, #pclubmfdR1,#powerplantphotocourtesy,#jetengine_static_para, #powerplantlower_Rightpara,#pclublower_Leftpara, #pclublower_centerpara, #pclublower_Rightpara").hide();

    });
    });

//////////////MAIN power on/off ends here////////////////////////////////////////////


//span jQuery ui animation test script starting here
        
        $(document).ready(function(){
            $("#spantest1_1").click(function(){
                $("#f20cockpitopen_1").toggle("blind", {direction:"up", distance:"5px", easing:"easeOutBounce"},500);});
              });
              
        $(document).ready(function(){
             $("#spantest1_2").click(function(){
                $("#f20scramble_1").toggle("blind", {direction:"down", distance:"5px", easing:"easeOutBounce"},1000);});
              });
              
         $(document).ready(function(){
             $("#spantest1_3").click(function(){
                $("#f20frontview_1").toggle("blind", {direction:"up", distance:"5px", easing:"easeOutBounce"},3000);});
              });
   
      
          $(document).ready(function(){
            $("#spantest2_1").mouseenter(function(){
                $("#f16airtog1small_1").effect("shake", {direction:"down", distance:5, times:10} ,200);});
              });
              $(document).ready(function(){
            $("#spantest2_2").mouseenter(function(){
                $("#f16airtoa1small_1").effect("shake", {direction:"down", distance:5, times:10} ,3000);});
              });
               $(document).ready(function(){
            $("#spantest2_3").mouseenter(function(){
                $("#f16airtog2small_2").effect("shake", {direction:"down", distance:5, times:10} ,1000);});
              });
              $(document).ready(function(){
            $("#spantest2_4").mouseenter(function(){
                $("#f16airtoa2small_2").effect("shake", {direction:"down", distance:5, times:10} ,500);});
              });
              
         $(document).ready(function(){
            $("#spantest3_1").click(function(){
                $("#jetenginesmall_1").toggle("explode", {pieces:16},300);});
          });
       $(document).ready(function(){
            $("#spantest3_2").mouseenter(function(){
                $("#jetenginesmall_2").effect("shake", {direction:"right", distance:5, times:10} ,1000);});
            });
               
        $(document).ready(function(){
            $("#spantest3_3").mouseenter(function(){
                $("#jetengineaxialsmall_1").effect("shake", {direction:"down", distance:5, times:10} ,1000);});
             });
             
          $(document).ready(function(){
            $("#spantest3_4").mouseenter(function(){
                $("#jetbeetle").effect("shake", {direction:"left", distance:5, times:10} ,1000);});
             });
                 
        //span jQuery ui animation test script ends here
      
//////////Gauges javaScript strarting here//       
            
            var g1, g2, g3, g4, g5, g6;
      
      window.onload = function(){
          try
          {
      var g1 = new JustGage({
        id: "g1", 
        value: (60),//spike's syntax for use with slider
        //value: getRandomInt(0, 100), //initial page load value, see below for setInterval
        min: 0,
        max: 120,
        title: "Throttle Level",
        label: "", 
         levelColors: [
          "#1172bc",
          
        ],             
        //gaugeWidthScale: 0.2          
      });
      
      var g2 = new JustGage({
        id: "g2", 
        value: getRandomInt(0, 100), 
        min: 0,
        max: 100,
        title: "Temp",
        label: "",    
        shadowOpacity: 1,
        shadowSize: 0,
        shadowVerticalOffset: 10        
      });
      
      var g3 = new JustGage({
        id: "g3", 
        value: getRandomInt(0, 100), 
        min: 0,
        max: 100,
        title: "RPM x 1000",
        label: "",  
        levelColors: [
          "#0fa300",
          "#ffd300",
          "#ff0000"
        ]          
      });
      
      var g4 = new JustGage({
        id: "g4", 
        value: getRandomInt(0, 100), 
        min: 0,
        max: 100,
        title: "Nozzle Position",
        showMinMax: true       
      });
     
      
      var g5 = new JustGage({
        id: "g5", 
        value: getRandomInt(0, 100), 
        min: 0,
        max: 100,
        title: "Nozzle Temp",
        label: "",  
        startAnimationTime: 2000,
        startAnimationType: ">",
        refreshAnimationTime: 1000,
        refreshAnimationType: "bounce"                
      });
      
      var g6 = new JustGage({
        id: "g6", 
        value: getRandomInt(0, 100), 
        min: 0,
        max: 10000,
        title: "Fuel Flow PPH",//pound per hour
        label: "",  
        showMinMax: true,
        gaugeColor: "#fff",
        levelColors: [
        "#00e6e6", 
        "ed31ec", 
        "1d0370",
        
        ],
        showInnerShadow: true,        
        startAnimationTime: 1,
        startAnimationType: "linear",
        refreshAnimationTime: 1,
        refreshAnimationType: "linear"          
      });
      
        setInterval(function() {
          g1.refresh(getRandomInt(0, 100));
          g2.refresh(getRandomInt(0, 100));          
          g3.refresh(getRandomInt(0, 100));
          g4.refresh(getRandomInt(0, 100));
          g5.refresh(getRandomInt(0, 100));          
          g6.refresh(getRandomInt(593, 10000));
        }, 2500);
        }
        catch (error){
            //console.log(error) // we expect this to fail on all pages but powerplant.html
        }
      };
           
//Gauges javaScript ends here

//slide show starting here 
  
$(window).load(function(){
        var pages = $('#lower_center_monitortd li'), current=0;
        var currentPage,nextPage;
        var timeoutID;
        var buttonClicked=0;

        var handler1=function(){
            buttonClicked=1;
            $('#lower_center_monitortd .button').unbind('click');
            currentPage= pages.eq(current);
            if($(this).hasClass('prevButton'))
            {
                if (current <= 0)
                    current=pages.length-1;
                    else
                    current=current-1;
            }
            else
            {

                if (current >= pages.length-1)
                    current=0;
                else
                    current=current+1;
            }
            nextPage = pages.eq(current);
            //keep opacity at 1   
            currentPage.fadeTo('slow',1,function(){
                nextPage.fadeIn('slow',function(){
                    nextPage.css("opacity",1);
                    currentPage.hide();
                    currentPage.css("opacity",1);
                    $('#lower_center_monitortd .button').bind('click',handler1);
                }); 
            });         
        }

        var handler2=function(){
            if (buttonClicked==0)
            {
            $('#lower_center_monitortd .button').unbind('click');
            currentPage= pages.eq(current);
            if (current >= pages.length-1)
                current=0;
            else
                current=current+1;
            nextPage = pages.eq(current);   
            currentPage.fadeTo('slow',1,function(){
                nextPage.fadeIn('slow',function(){
                    nextPage.css("opacity",1);
                    currentPage.hide();
                    currentPage.css("opacity",1);
                    $('#lower_center_monitortd .button').bind('click',handler1);             
                }); 
            });
            timeoutID=setTimeout(function(){
                handler2(); 
            }, 4000);
            }
        }

        $('#lower_center_monitortd .button').click(function(){
            clearTimeout(timeoutID);
            handler1();
        });

        timeoutID=setTimeout(function(){
            handler2(); 
            }, 4000);
        
});

 //slide show ends here   
 
 
  ///////////toggle engine switches and sounds javaScript starting here, also see newer using jQuery
 //function toggleEnginesound()
       // {
              //var turboimg = document.getElementById("turboreacteur_forsl");
           // var gaugegroup = document.getElementById("g1,g2,g3,g4,g5,g6");
           // var image_of_togggle = document.getElementById("toggle");
           // var mainpower_switch_sound = document.getElementById("mainpowerswitch_sound");
          //  var enginesound_startup_shutdown = document.getElementById("engine_sound");
          //  if (toggle.src.match("img/toggle_on.png"))
          //  {toggle.src="img/toggle_off.png";
           //   turboimg.style.opacity="0.2";
            
          //  mainpowerswitch_sound.src="audio/toggle_off_mainpower.mp3";
          // mainpower_switch_sound.play();
          // engine_sound.src="audio/f16_engineshotdown.mp3";
          //  engine_sound.play();
            
           // $(document).ready(function(){
              // $("#g1, #g2, #g3, #g4, #g5, #g6").fadeOut(2000);
          // });
             
            
          //  }
          //  else
           // {
               // toggle.src="img/toggle_on.png";
                     
               // mainpowerswitch_sound.src="audio/toggle_on_mainpower.mp3";
               // mainpower_switch_sound.play();
               // engine_sound.src="audio/f16_enginestartup.mp3";
               // setTimeout(function(){turboimg.style.opacity="1";}, 3000);
                
          // engine_sound.play();
          
          //  }
          // $(document).ready(function(){
            //   $("#g1, #g2, #g3, #g4, #g5, #g6").fadeOut(2000);
           //    $("#g1, #g2, #g3, #g4, #g5, #g6").fadeIn(2000);
             //  $("#g1, #g2, #g3, #g4, #g5, #g6").show();
         //  });
             
       // }     
//toggle engine javaScript ends here. see below for toggle eingine jQuery version
        
        /////toggle engine all jQuery starts here
       
          //in html, set class to "", and toggle switch to off position when page load 
           $(document).ready(function(){
            
               var switchsrc = $("#toggle").attr("src");
            $("#toggle").click(function(){
            if($("#toggle").hasClass(""))
            {
               $("#toggle").attr("src", "img/toggle_on.png"); 
               $("#mainpowerswitch_sound").attr("src","audio/toggle_on_mainpower.mp3").trigger("play"); 
               $("#engine_sound").attr("src","audio/f16_enginestartup.mp3").trigger("play");
               $("#turboreacteur_forsl").css("opacity","1");
               $("#g1, #g2, #g3, #g4, #g5, #g6").fadeOut(2000);
               $("#g1, #g2, #g3, #g4, #g5, #g6").fadeIn(2000);
               $("#g1, #g2, #g3, #g4, #g5, #g6").show();
              
               $("#toggle").addClass("nextturnOFF");
               }
                  
               else 
              
               {
                   //alert("test");
                $("#toggle").attr("src", "img/toggle_off.png"); 
                $("#mainpowerswitch_sound").attr("src","audio/toggle_off_mainpower.mp3").trigger("play"); 
                $("#engine_sound").attr("src","audio/f16_engineshotdown.mp3").trigger("play");
                $("#turboreacteur_forsl").css("opacity","0.2");
                $("#g1, #g2, #g3, #g4, #g5, #g6").fadeOut(2000);
                $("#toggle").removeClass("nextturnOFF");
              }
         
    });
   });
 
        
   //toggle engine switches jQuery version ends here     
            
 ///////////toggle engine switches and sounds ends here  
 
 
        

//F16 loadout starting here
/////////////////entire loadout starting here. keep this block underneath the cube script block if place inline.
 //////////fuel starting here
//if else if action will activate functions either cleFuel_forloopshowall() or cleFuel_forloopshowindividual()
       function cleThrottle_select()
       {
           var cleThrottle_v = document.getElementById("clethrottle_se").value;
           if (cleThrottle_v=="cleshowall")          
           {document.getElementById("clefuelshow").innerHTML=cleFuel_forloopshowall().clefueltext}
           else if(cleThrottle_v=="0")
           {document.getElementById("clefuelshow").innerHTML=cleFuel_forloopshowindividual().cleFuel_inditext}
           else if(cleThrottle_v=="1")
           {document.getElementById("clefuelshow").innerHTML=cleFuel_forloopshowindividual().cleFuel_inditext}
           else if(cleThrottle_v=="2")
           {document.getElementById("clefuelshow").innerHTML=cleFuel_forloopshowindividual().cleFuel_inditext}
           else if(cleThrottle_v=="3")
           {document.getElementById("clefuelshow").innerHTML=cleFuel_forloopshowindividual().cleFuel_inditext}
           else if(cleThrottle_v=="4")
           {document.getElementById("clefuelshow").innerHTML=cleFuel_forloopshowindividual().cleFuel_inditext}
           else if(cleThrottle_v=="5")
           {document.getElementById("clefuelshow").innerHTML=cleFuel_forloopshowindividual().cleFuel_inditext}
           else if(cleThrottle_v=="6")
           {document.getElementById("clefuelshow").innerHTML=cleFuel_forloopshowindividual().cleFuel_inditext}
           else if(cleThrottle_v=="7")
           {document.getElementById("clefuelshow").innerHTML=cleFuel_forloopshowindividual().cleFuel_inditext}
           else if(cleThrottle_v=="8")
           {document.getElementById("clefuelshow").innerHTML=cleFuel_forloopshowindividual().cleFuel_inditext}
           else if(cleThrottle_v=="9")
           {document.getElementById("clefuelshow").innerHTML=cleFuel_forloopshowindividual().cleFuel_inditext}
      }


///////////
//for loop to generate Clean load out plus all throttle level and fuel burn data together

        function cleFuel_forloopshowall()
    {
        var clefueltext ="";
        var i;
        for (i=0; i< 5925; i=i+592.4)
     
       {
           clefueltext +="<br>"+"burn"+" "+i.toFixed(2)+" "+"Ib"+" "+"per hour"; //round to decimal second place
       }
        document.getElementById("clefuelshow").style.color= "white";
        document.getElementById("clefuelshow").innerHTML= clefueltext;
        
         var cle_allpercenttext="";//show all Clean load out throttle percent
           var x;
           for(x=0; x<110; x=x+10)
           
       {
          cle_allpercenttext +="<br>"+"at"+" "+x+" "+"%"+" "+"throttle";
           
       }
           document.getElementById("clepercentshow").style.color="white";
           document.getElementById("clepercentshow").innerHTML= cle_allpercenttext;
           
       }
       
       
       
       function cleFuel_forloopshowindividual()//need var for text, need var for array, need var to grab array's length, need var i
       {
           
           var cleFuel_inditext="";
           var cleFuelflowindi = ["592.40", "1184.80", "1777.20", "2369.60", "2962.00", "3554.40", "4146.80", "4739.20", "5331.60", "5924.00"];
           var cleFuelflowindi_length = cleFuelflowindi.length;
           var i=document.getElementById("clethrottle_se").value;
           
           
           do {cleFuel_inditext +="<br>"+"fuel burn at"+" "+cleFuelflowindi[i]+" "+"Ib"+" "+"per hour";
          i=i.value; //do not change this part, it links to the result of select id clethrottle_se
            }
           
           while (i<cleFuelflowindi_length)
           document.getElementById("clefuelshow").style.color="white";
           document.getElementById("clefuelshow").innerHTML= cleFuel_inditext;
           document.getElementById("clepercentshow").innerHTML="";
      }
      
      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      
      function aa2Throttle_select()//not working on aa1 for now since it's fuel total is the same as clean load
       {
           var aa2Throttle_v = document.getElementById("aa2throttle_se").value;
           if (aa2Throttle_v=="aa2showall")          
           {document.getElementById("aa2fuelshow").innerHTML=aa2Fuel_forloopshowall().aa2fueltext}
           else if(aa2Throttle_v=="0")
           {document.getElementById("aa2fuelshow").innerHTML=aa2Fuel_forloopshowindividual().aa2Fuel_inditext}
           else if(aa2Throttle_v=="1")
           {document.getElementById("aa2fuelshow").innerHTML=aa2Fuel_forloopshowindividual().aa2Fuel_inditext}
           else if(aa2Throttle_v=="2")
           {document.getElementById("aa2fuelshow").innerHTML=aa2Fuel_forloopshowindividual().aa2Fuel_inditext}
           else if(aa2Throttle_v=="3")
           {document.getElementById("aa2fuelshow").innerHTML=aa2Fuel_forloopshowindividual().aa2Fuel_inditext}
           else if(aa2Throttle_v=="4")
           {document.getElementById("aa2fuelshow").innerHTML=aa2Fuel_forloopshowindividual().aa2Fuel_inditext}
           else if(aa2Throttle_v=="5")
           {document.getElementById("aa2fuelshow").innerHTML=aa2Fuel_forloopshowindividual().aa2Fuel_inditext}
           else if(aa2Throttle_v=="6")
           {document.getElementById("aa2fuelshow").innerHTML=aa2Fuel_forloopshowindividual().aa2Fuel_inditext}
           else if(aa2Throttle_v=="7")
           {document.getElementById("aa2fuelshow").innerHTML=aa2Fuel_forloopshowindividual().aa2Fuel_inditext}
           else if(aa2Throttle_v=="8")
           {document.getElementById("aa2fuelshow").innerHTML=aa2Fuel_forloopshowindividual().aa2Fuel_inditext}
           else if(aa2Throttle_v=="9")
           {document.getElementById("aa2fuelshow").innerHTML=aa2Fuel_forloopshowindividual().aa2Fuel_inditext}
      }
      
      
      function aa2Fuel_forloopshowall()//not working on aa1 for now since it's fuel total is the same as clean load
    {
        var aa2fueltext ="";
        var aa2;
        for (aa2=0; aa2< 7965; aa2=aa2+796.4)
     
       {
           aa2fueltext +="<br>"+"burn"+" "+aa2.toFixed(2)+" "+"Ib"+" "+"per hour"; //round to decimal second place
       }
        document.getElementById("aa2fuelshow").style.color= "white";
        document.getElementById("aa2fuelshow").innerHTML= aa2fueltext;
        
         var aa2_allpercenttext="";//show all aa2 load out throttle percent
           var x;
           for(x=0; x<110; x=x+10)
           
       {
          aa2_allpercenttext +="<br>"+"at"+" "+x+" "+"%"+" "+"throttle";
           
       }
           document.getElementById("aa2percentshow").style.color="white";
           document.getElementById("aa2percentshow").innerHTML= aa2_allpercenttext;
           
       }
       
       
       
       function aa2Fuel_forloopshowindividual()//need var for text, need var for array, need var to grab array's length, need var i
       {
           
           var aa2Fuel_inditext="";
           var aa2Fuelflowindi = ["796.40", "1592.80", "2389.20", "3185.60", "3982.00", "4778.40", "5574.80", "6371.20", "7167.60", "7964.00"];
           var aa2Fuelflowindi_length = aa2Fuelflowindi.length;
           var aa2=document.getElementById("aa2throttle_se").value;
           
           
           do {aa2Fuel_inditext +="<br>"+"fuel burn at"+" "+aa2Fuelflowindi[aa2]+" "+"Ib"+" "+"per hour";
          aa2=aa2.value; //do not change this part, it links to the result of select id aa2throttle_se
            }
           
           while (aa2<aa2Fuelflowindi_length)
           document.getElementById("aa2fuelshow").style.color="white";
           document.getElementById("aa2fuelshow").innerHTML= aa2Fuel_inditext;
           document.getElementById("aa2percentshow").innerHTML="";
      }
        
         ////////////////////////////////////////////////////////////
        ////////loadout weight calculations starts here
        
        var cleanweight = 20300;//clean weight is known number
             
             
         function grossweight (muniweight, fuel)
         {
           this.muniweight=muniweight;
           this.fuel=fuel;
           this.gross = grossweighttotal;          
         }
         
         
         function grossweighttotal()
         {
             var grosscalcu = cleanweight+this.muniweight+this.fuel;
             return grosscalcu;
         }
         
         var viperaa1gross = new grossweight (1508, 5924);//give muni and fuel weight
       
        //document.write(viperaa1gross.gross());//place document.write underneath the var viperaa1gross
        
        var viperaa2gross = new grossweight (2800, 7964);
        
        var viperaa3gross = new grossweight (3448, 10956);
        
        var viperag1gross = new grossweight (5128, 7964);
         //alert(viperag1gross.gross());
        
        var viperag2gross = new grossweight (10066, 7964);
        
        var viperag3gross = new grossweight (7348, 10956);
        
        var vipercleangross = new grossweight (0, 5924);
        /////////////////////
        
        
        //$( document ).ready(function() {
            try
            {
                
                document.getElementById("aa1").onmouseover = function(){airtoair1()};
                document.getElementById("aa1").onmouseout = function(){airtoair1_empt()};
                document.getElementById("aa2").onmouseover = function(){airtoair2()};
                document.getElementById("aa2").onmouseout = function(){airtoair2_empt()};
                document.getElementById("aa3").onmouseover = function(){airtoair3()};
                document.getElementById("aa3").onmouseout = function(){airtoair3_empt()};
                document.getElementById("ag1").onmouseover = function(){airtoground1()};
                document.getElementById("ag1").onmouseout = function(){airtoground1_empt()};
                document.getElementById("ag2").onmouseover = function(){airtoground2()};
                document.getElementById("ag2").onmouseout = function(){airtoground2empt()};
                document.getElementById("ag3").onmouseover = function(){airtoground3()};
                document.getElementById("ag3").onmouseout = function(){airtoground3empt()};
                document.getElementById("cle").onmouseover = function(){empty_butshowcleangross()};
                document.getElementById("cle").onmouseout = function(){empty()};
            }
            catch(error){
                //console.log(error); // we expect this to throw on all pages but Hangar.html
                
            }
            //console.log( "ready!" );
        //});

        //var ele = document.getElementById("cle");
        //if(ele){
        //    ele.onmouseover = function(){empty()};
        //}
        
        //ele = document.getElementById("aa1");
        //if (ele){
        //    ele.onmouseover = function(){airtoair1()};
        //    ele.onmouseout = function(){airtoair1_empt()};
        //}        
       
        function airtoair1()
            {
             document.getElementById("loadoutpic").src="img/f16airtoair1.png";
             document.getElementById("load_table_h3").textContent="A-A Load Out 1";
             document.getElementById("aabutton1").style.backgroundColor='#7ec2ef';
             document.getElementById("munitions").style.color="#e8f2fd";
             document.getElementById("munitions").textContent="Munitions Weight: 1508 Ib";
             document.getElementById("fuel").style.color="#e8f2fd";
             document.getElementById("fuel").textContent="Fuel Weight: 5924 Ib";
             document.getElementById("r1_station9").textContent="AIM-9";              
             document.getElementById("r2_station8").textContent="AIM-9";
             document.getElementById("r3_station7").textContent="AIM-9";
             document.getElementById("r1_station1").textContent="AIM-9";
             document.getElementById("r2_station2").textContent="AIM-9";
             document.getElementById("r3_station3").textContent="AIM-9";
            document.getElementById("grossnumber").value=viperaa1gross.gross();
            }
            
            function airtoair1_empt()
            {
              document.getElementById("loadoutpic").src="img/f16empty.png";
             document.getElementById("load_table_h3").textContent="Clean";
             document.getElementById("aabutton1").style.backgroundColor='#ffffff';  
             document.getElementById("r1_station9").textContent="*"; 
             document.getElementById("r2_station8").textContent="*";             
             document.getElementById("r3_station7").textContent="*"; 
             document.getElementById("r1_station1").textContent="*";
             document.getElementById("r2_station2").textContent="*";
             document.getElementById("r3_station3").textContent="*"; 
             
             document.getElementById("munitions").style.color="#84f924";
             document.getElementById("munitions").textContent="Munitions Weight: 0 Ib";
             document.getElementById("fuel").style.color="#84f924";
             document.getElementById("fuel").textContent="Fuel Weight: 5924 Ib";
             document.getElementById("grossnumber").value="";
               
            }
        
        //document.getElementById("aa2").onmouseover = function(){airtoair2()};
        //document.getElementById("aa2").onmouseout = function(){airtoair2_empt()};
        
       
        function airtoair2()
            {
             document.getElementById("loadoutpic").src="img/f16airtoair2.png";
             document.getElementById("load_table_h3").textContent="A-A Load Out 2";
             document.getElementById("aabutton2").style.backgroundColor='#7ec2ef';
             
             document.getElementById("r1_station9").textContent="AIM-120";              
             document.getElementById("r2_station8").textContent="AIM-120";
             document.getElementById("r3_station7").textContent="AIM-120";
             document.getElementById("r5_station5").textContent="370 G Fuel Tank";
             document.getElementById("r1_station1").textContent="AIM-120";
             document.getElementById("r2_station2").textContent="AIM-120";
             document.getElementById("r3_station3").textContent="AIM-120";
             document.getElementById("munitions").style.color="#e8f2fd";
             document.getElementById("munitions").textContent="Munitions Weight: 2800 Ib";
             document.getElementById("fuel").style.color="#e8f2fd";
             document.getElementById("fuel").textContent="Fuel Weight: 7964 Ib";
             document.getElementById("grossnumber").value=viperaa2gross.gross();          
            
            }
            
            function airtoair2_empt()
            {
             document.getElementById("loadoutpic").src="img/f16empty.png";
             document.getElementById("load_table_h3").textContent="Clean";
             document.getElementById("aabutton2").style.backgroundColor='#ffffff';  
             document.getElementById("r1_station9").textContent="*"; 
             document.getElementById("r2_station8").textContent="*";             
             document.getElementById("r3_station7").textContent="*"; 
             document.getElementById("r5_station5").textContent="*";
             document.getElementById("r1_station1").textContent="*";
             document.getElementById("r2_station2").textContent="*";
             document.getElementById("r3_station3").textContent="*"; 
             
              document.getElementById("munitions").style.color="#84f924";
             document.getElementById("munitions").textContent="Munitions Weight: 0 Ib";
             document.getElementById("fuel").style.color="#84f924";
             document.getElementById("fuel").textContent="Fuel Weight: 5924 Ib";
             document.getElementById("grossnumber").value="";
             }
 
        
        //document.getElementById("aa3").onmouseover = function(){airtoair3()};
        //document.getElementById("aa3").onmouseout = function(){airtoair3_empt()};
       
        function airtoair3()
            {
             document.getElementById("loadoutpic").src="img/f16airtoair3.png";
             document.getElementById("load_table_h3").textContent="A-A Load Out 3";
             document.getElementById("aabutton3").style.backgroundColor='#7ec2ef';
             
             document.getElementById("r1_station9").textContent="AIM-9";              
             document.getElementById("r2_station8").textContent="AIM-9";
             document.getElementById("r3_station7").textContent="AIM-120";
             document.getElementById("r4_station6").textContent="370 G Fuel Tank";
             document.getElementById("r4_station4").textContent="370 G Fuel Tank";
             document.getElementById("r3_station3").textContent="AIM-120";
             document.getElementById("r2_station2").textContent="AIM-9";
             document.getElementById("r1_station1").textContent="AIM-9";
             document.getElementById("munitions").style.color="#e8f2fd";
             document.getElementById("munitions").textContent="Munitions Weight: 3448 Ib";
             document.getElementById("fuel").style.color="#e8f2fd";
             document.getElementById("fuel").textContent="Fuel Weight: 10956 Ib";
             document.getElementById("grossnumber").value=viperaa3gross.gross();
             
             }
             
             function airtoair3_empt()
            {
             document.getElementById("loadoutpic").src="img/f16empty.png";
             document.getElementById("load_table_h3").textContent="Clean";
             document.getElementById("aabutton3").style.backgroundColor='#ffffff';   
             document.getElementById("r1_station9").textContent="*"; 
             document.getElementById("r2_station8").textContent="*";             
             document.getElementById("r3_station7").textContent="*"; 
             document.getElementById("r4_station6").textContent="*";
             document.getElementById("r4_station4").textContent="*";
             document.getElementById("r1_station1").textContent="*";
             document.getElementById("r2_station2").textContent="*";
             document.getElementById("r3_station3").textContent="*";
             
              document.getElementById("munitions").style.color="#84f924";
             document.getElementById("munitions").textContent="Munitions Weight: 0 Ib";
             document.getElementById("fuel").style.color="#84f924";
             document.getElementById("fuel").textContent="Fuel Weight: 5924 Ib";
             document.getElementById("grossnumber").value="";  
            }
             
           
        
        //document.getElementById("ag1").onmouseover = function(){airtoground1()};
        //document.getElementById("ag1").onmouseout = function(){airtoground1_empt()};
       
        function airtoground1()
            {
             document.getElementById("loadoutpic").src="img/f16airtog1.png";
             document.getElementById("load_table_h3").textContent="A-G Load Out 1";
             document.getElementById("agbutton1").style.backgroundColor='#7ec2ef';
             
             document.getElementById("r1_station9").textContent="AIM-9";                           
             document.getElementById("r3_station7").textContent="AGM-65 X 3";
             document.getElementById("r5_station5").textContent="370 G Fuel Tank";             
             document.getElementById("r3_station3").textContent="AGM-65 X 3";
             document.getElementById("r1_station1").textContent="AIM-9";
             document.getElementById("munitions").style.color="#e8f2fd";
             document.getElementById("munitions").textContent="Munitions Weight: 5128 Ib";
             document.getElementById("fuel").style.color="#e8f2fd";
             document.getElementById("fuel").textContent="Fuel Weight: 7964 Ib";
             document.getElementById("grossnumber").value=viperag1gross.gross();
            }
        
        function airtoground1_empt()
            {
             document.getElementById("loadoutpic").src="img/f16empty.png";
             document.getElementById("load_table_h3").textContent="Clean";
             document.getElementById("agbutton1").style.backgroundColor='#ffffff';   
             document.getElementById("r1_station9").textContent="*";                           
             document.getElementById("r3_station7").textContent="*";
             document.getElementById("r5_station5").textContent="*";             
             document.getElementById("r3_station3").textContent="*";
             document.getElementById("r1_station1").textContent="*";
             
              document.getElementById("munitions").style.color="#84f924";
             document.getElementById("munitions").textContent="Munitions Weight: 0 Ib";
             document.getElementById("fuel").style.color="#84f924";
             document.getElementById("fuel").textContent="Fuel Weight: 5924 Ib";
             document.getElementById("grossnumber").value="";
            }
        
        
        
        //document.getElementById("ag2").onmouseover = function(){airtoground2()};
        //document.getElementById("ag2").onmouseout = function(){airtoground2empt()};
       
        function airtoground2()
            {
             document.getElementById("loadoutpic").src="img/f16airtog2.png";
             document.getElementById("load_table_h3").textContent="A-G Load Out 2";
             document.getElementById("agbutton2").style.backgroundColor='#7ec2ef';
             document.getElementById("r1_station9").textContent="AIM-9";                           
             document.getElementById("r3_station7").textContent="MK-84L";
             document.getElementById("r4_station4").textContent="MK-84A";
             document.getElementById("r5_station5").textContent="370 G Fuel Tank";
             document.getElementById("r4_station6").textContent="MK-84A";             
             document.getElementById("r3_station3").textContent="MK-84L";
             document.getElementById("r1_station1").textContent="AIM-9";
             document.getElementById("munitions").style.color="#e8f2fd";
             document.getElementById("munitions").textContent="Munitions Weight: 10066 Ib";
             document.getElementById("fuel").style.color="#e8f2fd";
             document.getElementById("fuel").textContent="Fuel Weight: 7964 Ib";
             document.getElementById("grossnumber").value=viperag2gross.gross();
                        
            }
            
            function airtoground2empt()
            {
             document.getElementById("loadoutpic").src="img/f16empty.png";
             document.getElementById("load_table_h3").textContent="Clean";
             document.getElementById("agbutton2").style.backgroundColor='#ffffff';            
             document.getElementById("r1_station9").textContent="*";                          
             document.getElementById("r3_station7").textContent="*";
             document.getElementById("r4_station4").textContent="*";
             document.getElementById("r5_station5").textContent="*";
             document.getElementById("r4_station6").textContent="*";             
             document.getElementById("r3_station3").textContent="*";
             document.getElementById("r1_station1").textContent="*"; 
             
              document.getElementById("munitions").style.color="#84f924";
             document.getElementById("munitions").textContent="Munitions Weight: 0 Ib";
             document.getElementById("fuel").style.color="#84f924";
             document.getElementById("fuel").textContent="Fuel Weight: 5924 Ib"; 
             document.getElementById("grossnumber").value="";  
            }
        
        //document.getElementById("ag3").onmouseover = function(){airtoground3()};
        //document.getElementById("ag3").onmouseout = function(){airtoground3empt()};
       
        function airtoground3()
            {
             document.getElementById("loadoutpic").src="img/f16airtog3.png";
             document.getElementById("load_table_h3").textContent="A-G Load Out 3";
             document.getElementById("agbutton3").style.backgroundColor='#7ec2ef';
             document.getElementById("r1_station9").textContent="AIM-9";                                        
             document.getElementById("r3_station7").textContent="GBU-32 x 2";
             document.getElementById("r4_station6").textContent="370 G Fuel Tank";
             document.getElementById("r4_station4").textContent="370 G Fuel Tank";
             document.getElementById("r3_station3").textContent="GBU-32 x 2";                        
             document.getElementById("r1_station1").textContent="AIM-9";
             document.getElementById("munitions").style.color="#e8f2fd";
             document.getElementById("munitions").textContent="Munitions Weight: 7348 Ib";
             document.getElementById("fuel").style.color="#e8f2fd";
             document.getElementById("fuel").textContent="Fuel Weight: 10956 Ib";
             document.getElementById("grossnumber").value=viperag3gross.gross();
            }
        
         function airtoground3empt()
         {           
             document.getElementById("loadoutpic").src="img/f16empty.png";
             document.getElementById("load_table_h3").textContent="Clean";
             document.getElementById("agbutton3").style.backgroundColor='#ffffff';
             document.getElementById("r1_station9").textContent="*";                                      
             document.getElementById("r3_station7").textContent="*";
             document.getElementById("r4_station6").textContent="*";
             document.getElementById("r4_station4").textContent="*";
             document.getElementById("r3_station3").textContent="*";                        
             document.getElementById("r1_station1").textContent="*";
             
              document.getElementById("munitions").style.color="#84f924";
             document.getElementById("munitions").textContent="Munitions Weight: 0 Ib";
             document.getElementById("fuel").style.color="#84f924";
             document.getElementById("fuel").textContent="Fuel Weight: 5924 Ib";
             document.getElementById("grossnumber").value="";
         }
        
        
        //document.getElementById("cle").onmouseover = function(){empty_butshowcleangross()};
        //document.getElementById("cle").onmouseout = function(){empty()};
        
        function empty_butshowcleangross()
            {
             document.getElementById("loadoutpic").src="img/f16empty.png";
             document.getElementById("load_table_h3").textContent="Clean";
             
              document.getElementById("munitions").style.color="#84f924";
             document.getElementById("munitions").textContent="Munitions Weight: 0 Ib";
             document.getElementById("fuel").style.color="#84f924";
             document.getElementById("fuel").textContent="Fuel Weight: 5924 Ib";
              document.getElementById("grossnumber").value=vipercleangross.gross();//populate grossweight digits into text box  
            }
            
           function empty()
            {
             document.getElementById("loadoutpic").src="img/f16empty.png";
             document.getElementById("load_table_h3").textContent="Clean";
             
              document.getElementById("munitions").style.color="#84f924";
             document.getElementById("munitions").textContent="Munitions Weight: 0 Ib";
             document.getElementById("fuel").style.color="#84f924";
             document.getElementById("fuel").textContent="Fuel Weight: 5924 Ib";
             document.getElementById("grossnumber").value="";  
            }
//F16 entire loadout ends here
    
    
    

