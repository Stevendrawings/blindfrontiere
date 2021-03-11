    /* ==============
       JAVASCRIPT
     ============== */

var sel = document.querySelector(".hamburgergold");
var selmenu = document.querySelector(".navbar-collapse");
var btnGold = document.getElementById("lineGold"); // Selectionne un ID dans le html
btnGold.addEventListener("click", function(){ // fait reference à la syntaxe jQuery => $("selector").click( function() { }
console.log(sel)
// classList permet d'ajouter un element css il y a d'autre exemple comme celui ci classList.remove() etc
sel.classList.toggle("closed")
selmenu.classList.toggle("navbar-active") });

if ($('#scrollbot').length > 0) {

    var last_scroll_top = 0;
    $(window).on('scroll', function() {
  
      scroll_top = $(this).scrollTop();
  
     window.requestAnimationFrame(function(){ 
  
      if(scroll_top === 0) {
        $('.menu nav li a').css({ color: "#fff" })
        $("#scrollbot")
            .css({ 
              transition: 'ease-out .2s',
              position : "absolute",
              padding: "35px 0 35px 0",
              background: "transparent",
              top: '0',
              boxShadow: '0 4px 10px -10px rgba(0,0,0,0)' 
            })

        $(".cls-3").css({ fill: "#fff" })

        $('.hamburgergold span').css({ background: "#fff"})

      } else if(scroll_top > 226){

        if(scroll_top < last_scroll_top) {
          $('.menu nav li a').css({ color: "#000" })
          $('.hamburgergold span').css({ background: "#000"})
         $("#scrollbot")
            .css({
              transform: "translate3d(0px, 0px, 0px)",
              position: "fixed", 
              top: '0' }) 
      } else if(scroll_top > last_scroll_top){
          $("#scrollbot")
            .css({ 
              background: "#fff",
              padding: "0",
              boxShadow: '0 4px 10px -10px rgba(0,0,0,.6)'
            })
          $("#scrollbot")
            .css({ 
              padding: "10px 0 10px 0",
              transform: "translate3d(0px, -102px, 0px)", })
              $(".cls-3").css({  fill: "#000" })
          }
      }
        last_scroll_top = scroll_top;
    
      }) }) }

      var slides_img = document.querySelectorAll(".right_img_blindfrontiere");
      var slides_text = document.querySelectorAll(".slider_txt")
      var slide_active = document.querySelectorAll(".slider_img")   
      var index = 0
      
      slides_img[index].style.display = 'block' 
      slides_text[index].style.display = 'block'
      slide_active[index].style.opacity = 1  
      slide_active[index].style.transform = 'translateX(10px)'
      slide_active[index].style.transition = 'all 1s ease-in-out, opacity 1s'

      requestAnimationFrame(slider);

    function slider(){

      setTimeout(function(){ 
        
          slides_img[index].style.display = 'none'
          slides_text[index].style.display = 'none'
          slide_active[index].style.opacity = 0       
          slide_active[index].style.transform = 'translateX(-10px)' 
          slide_active[index].style.transition = 'all 1s ease-in-out, opacity 1s'

            if(index <= slides_img.length || index <= slides_text.length)  index++ 
            if(index == slides_img.length || index == slides_text.length)  index = 0 

            anime_slide = slides_text[index].children
            
          slides_img[index].style.display = 'block' 
          slides_text[index].style.display = 'block'
          slide_active[index].style.opacity = 1  
          slide_active[index].style.transform = 'translateX(10px)'
          slide_active[index].style.transition = 'all 1s ease-in-out, opacity 1s'

          tl = new TimelineMax();
          tl
          .staggerFrom(anime_slide, 1, { autoAlpha: 0, y: 20 } )

          requestAnimationFrame(slider);
        }, 2000)
     }

     gsap.registerPlugin(ScrollTrigger)

     gsap.from('.container_fusee', { 
      scrollTrigger : {
        trigger: '.container_fusee',
        toggleActions: "play resume none play",
      },
      x:"100%", 
      y:"-70%"  
    })
