// Déclaration des variable
var  tabImg = document.getElementsByClassName("slideImage");
var etape = 0;
var nbrImg = tabImg.length;

//Function les autres image pour laisser une seule active
function desactivationImg(){
    for (let i = 0; i < nbrImg.length; i++) {
        tabImg[i].classList.remove("active");
        
    }
}

// fonction assurant le défilement automatique des images
setInterval(function(){
    
    etape++;

    if (etape>= nbrImg) {
        etape =0;
        
    }
    desactivationImg();
    tabImg[etape].classList.add("active"); 

}, 2000)



const arrow1 = document.querySelector(".btn1");
const arrow2 = document.querySelector(".btn2");
arrow1.disabled = true;

const slideFooter=()=>{
    const img1 = document.querySelectorAll('.imgFooter1');
    const img2 = document.querySelectorAll('.imgFooter2');

    for (let i = 0; i < img1.length; i++) 
    {
        const slide1 = img1[i];
        const slide2 = img2[i];
        if (slide1.style.display == 'block') {
            slide1.style.display = 'none';
            slide2.style.display = 'block';
            arrow2.disabled = true;
            arrow1.disabled = false;   
        }else{
            slide1.style.display = 'block';
            slide2.style.display = 'none';
            arrow1.disabled = true;
            arrow2.disabled = false; 
        }    
    }
}


/* 
 function tabMenuGauche(){
    var tabemenu = [
        {
            phone : "Téléphone",
            maison : "";
        }
    ]
}
 */
/* 
function afficherInput() {
    var saisie = document.getElementById("nom").value;    
    var saisie1 = document.getElementById("telephone").value;
    var saisie2 = document.getElementById("mail").value;  
    var saisie3 = document.getElementById("objet").value;
    var saisie4 = document.getElementById("message").value;  

    /*----------------------------- -------------------------------------
    
            
            var tabInput= [
                        {Nom : saisie,
                        Téléphone: saisie1,
                        email : saisie2,
                        objet: saisie3,
                        message: saisie4
                        }
                    ]
                    tabInput = document.getElementById("afficheur");
                    tabInput.innerHTML= "Nom Prénom : " +saisie + "\n\nTéléphone : " + saisie1 + "\n\nEmail : " + saisie2 + "\n\nObjet : " + saisie3 + "\n\nMessage : " + saisie4;
                    console.table(tabInput); 
} */