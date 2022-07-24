// Newsletter PopUp


window.addEventListener("load",()=>{
  let navContent = document.getElementsByClassName("nav-content");
  navContent[0].classList.add("active");
  var popupDisplayed = sessionStorage.getItem("popupDisplayed");
  if( popupDisplayed !== "true" ){
    setTimeout(open,8000);
    function open(){
     
      document.querySelector(".subscribe-form").style.display = "block";
      document.querySelector(".subscribe-form").style.zIndex = "1000";

        
      }
  }
    
  sessionStorage.setItem("popupDisplayed", "true" );  
      
    }
    
);

let butn = document.getElementsByClassName('btn');
document.querySelector(".close-btn").addEventListener("click",()=>{
   document.querySelector(".subscribe-form").style.display = "none";
 
});
let email = document.getElementById("email");
let button = document.getElementById("button");


  button.addEventListener('click',()=>{
    let val = email.value;
    if(val != ""){
      if(val.includes('@') && val.includes(".com") && val.length > 10){
        swal("Subscribed!", "Enjoy our newsletters!", "success");
        document.querySelector(".subscribe-form").style.display = "none";
      }
      else{
        swal({
          title: "Sorry!",
          text: "Enter proper email!",
          icon: "error",
          button: "Try Again!"
        });
      }
      
    }
    else if(val == ""){
      swal("Oops!", "Please enter your email!", "warning");
    }
});





// Js code to make colour box enable or disable
let colourIcons = document.querySelector(".color-icon"),
icons = document.querySelector(".color-icon .icons");

icons.addEventListener('click',()=>{
    colourIcons.classList.toggle("open");
})

// getting all buttons

let buttons = document.querySelectorAll(".btn");
for (const button of buttons) {
    button.addEventListener('click',(e)=>{
        let target = e.target;
        let open = document.querySelector(".open");
        if(open){
            open.classList.remove("open");
        }
        document.querySelector(".active").classList.remove("active");
        target.classList.add("active");


        // JS code to switch colours (ALSO day night mode)
       let root = document.querySelector(":root");
       let dataColor = target.getAttribute("data-color"); //getting colour values of clicked button
       color = dataColor.split(" ");

       root.style.setProperty("--main-color",color[0]);
       root.style.setProperty("--background",color[1]);

      let iconName = target.className.split(" ")[2];
      
      if(target.classList.contains("fa-moon")){
        target.classList.replace(iconName, "fa-sun");
        colourIcons.style.display = "none";
      }
      else if(target.classList.contains("fa-sun")){
        target.classList.replace(iconName, "fa-moon"); 
        colourIcons.style.display = "block";
        document.querySelector(".btn.blue").click();
      }

    })
}

// Sticky Navbar

let nav = document.querySelector("nav");
        window.addEventListener("scroll",()=>{
           if(document.documentElement.scrollTop > 20){
               nav.classList.add("sticky");
           }
           else{
               nav.classList.remove("sticky");
           }
});
        
        // scroll to top button

        let calcScrollValue = ()=>{
   let scrollProgress = document.getElementById("progress");
   let progressValue = document.getElementById("progress-value");
   let pos = document.documentElement.scrollTop;
   let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   let scrollValue = Math.round((pos * 100)/ calcHeight);

   if(pos > 100){
    scrollProgress.style.display = "grid";
   }
   else{
    scrollProgress.style.display = "none";
   }

   scrollProgress.addEventListener("click",()=>{
    document.documentElement.scrollTop = 0;
   });

   scrollProgress.style.background = `conic-gradient(#4070f4 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


      // Animate Number

      const counterNum = document.querySelectorAll(".counter-numbers");
      const speed = 200;
      counterNum.forEach((curElem) =>{
        window.addEventListener("scroll",()=>{
          if(document.documentElement.scrollTop > 190){
            updateNumber();
            window.addEventListener("load",()=>{
              updateNumber();
              });
          }
         });
        
        const updateNumber = ()=>{
            const targetNumber = parseInt(curElem.dataset.number);
            const initialNum = parseInt(curElem.innerHTML);
            

            const incrementNumber = Math.trunc(targetNumber/speed);
            

            if(initialNum < targetNumber){
              curElem.innerHTML = initialNum + incrementNumber + "+";
              setTimeout(updateNumber,10);
            }
        };
      
         
      });


      // TESTIMONIALS

      const testimonials = [
        {
           name: "Elon Musk",
           job: "CEO,SpaceX",
           testimonial: "Rishav is a very hard working person. He is good at dsa and web development",
        },
        {
            name: "Mark Zukkerberg",
            job: "CEO,Meta",
            testimonial: "Rishav studies at Iem. He is good at problem solving.",
        },
        {
            name: "Jeff Bezoz",
            job: "CEO,Amazon",
            testimonial: "Rishav knows frontend very well. For backend he needs to improve a bit.",
        },
        {
            name: "Satya Nadella",
            job: "CEO,Microsoft",
            testimonial: "Rishav has very good knowledge of machine learning and its applications",
        }
        
        ];
        
        let i = 0;  // current slide
        
        let j = testimonials.length; // total slides(testimonials)
        
        let testimonialContainer = document.getElementById("testimonial-container");
        
        let nextBtn = document.getElementById("next");
        let prevBtn = document.getElementById("prev");
        
        nextBtn.addEventListener("click",()=>{
            i = (i+j+1)%j;
            displayTestimonial();
        })
        prevBtn.addEventListener("click",()=>{
            i = (i+j-1)%j;
            displayTestimonial();
        })
        let displayTestimonial = () =>{
            testimonialContainer.innerHTML = `
                 <p>${testimonials[i].testimonial}<p/>  
                 <h3>${testimonials[i].name}<h3/>
                 <h6>${testimonials[i].job}<h6/>
            `;
        };
        window.onload = displayTestimonial;
        

        // FAQS

        const ouritemDiv = document.getElementsByClassName("item");
const openIcon = document.getElementsByClassName("iconOpen");
const closeIcon = document.getElementsByClassName("iconClose");


for(let i = 0;i<ouritemDiv.length;i++){
    ouritemDiv[i].addEventListener('click',()=>{
        const result = ouritemDiv[i].classList.toggle("active");
        
        if(result){
            closeIcon[i].style.display = "block";
            openIcon[i].style.display = "none";
        }
        else{
            closeIcon[i].style.display = "none";
            openIcon[i].style.display = "block";
        }

    });
}
