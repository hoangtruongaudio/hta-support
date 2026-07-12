/*==========================================
HOANG TRUONG AUDIO
Support Center
==========================================*/


/*=============================
CARD CLICK EFFECT
=============================*/

document.querySelectorAll(".menu-card").forEach(card=>{

    card.addEventListener("click",function(){

        this.classList.add("clicked");

        setTimeout(()=>{

            this.classList.remove("clicked");

        },180);

    });

});


/*=============================
BUTTON EFFECT
=============================*/

document.querySelectorAll(".tips-button").forEach(btn=>{

    btn.addEventListener("click",function(){

        this.style.transform="scale(.95)";

        setTimeout(()=>{

            this.style.transform="";

        },180);

    });

});

const acc = document.querySelectorAll(".accordion");

acc.forEach(btn=>{

    btn.addEventListener("click",function(){

        this.classList.toggle("active");

        const panel=this.nextElementSibling;

        if(panel.style.maxHeight){

            panel.style.maxHeight=null;

        }else{

            panel.style.maxHeight=panel.scrollHeight+"px";

        }

    });

});