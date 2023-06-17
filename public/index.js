// array html
var qcmHTML = [{
    questions: "Quelle balise utilisera-t-on de préférence pour le titre principal d'une page html:",
    options: ["<h1>", "<head>", "<heading>", "<h6>"],
    resultat: 0
}, {
    questions: "Quel est l'attribut à inclure dans la balise BODY pour changer la couleur des liens? ",
    options: [`LINK="#RRVVBB"`, `VLINK="#RRVVBB"`, `ALINK="#RRVVBB"`, `TEXT="#RRVVBB"`],
    resultat: 0
}, {
    questions: `On souhaite rédiger une page html avec des énoncés et des corrections.<br>
    Pour cela, on va utiliser la balise <div>. Quel est l'attribut de <div> qui permettra de différencier les énoncés des corrections ?`,
    options: [`l’attribut class= ""`, `l’attribut id=""`, `la balise <stronge>`, `la balise <p>`],
    resultat: 0
}, {
    questions: "Quel est le doctype d'un document HTML5 ?",
    options: [`<!doctype html5>`, `-<!doctype html>`, `< !doctype html PUBLIC"-//W3C//DTD HTML5.0 Strict//EN" >`, `< !doctype html4>`],
    resultat: 1
}, {
    questions: "Pour créer un lien vers la page d'accueil de Wikipédia, on écrira...",
    options: [`<a target=https://wikipedia.org>Wikipedia</a>`, `<a src= https://wikipedia.org>`, `<a href= https://wikipedia.org>`, `<a href= https://wikipedia.org></a>`],
    resultat: 3
}, {
    questions: "Quels éléments sont nécessaires pour créer une liste dont les items ne sont pas numérotés ?    ",
    options: [`ul et li`, `ol et li`, `ul et ol`, `dl et dt`],
    resultat: 0
}, {
    questions: "Laquelle de ces syntaxes est correcte pour embarquer une image dans la page html?",
    options: [`<img > src="mon-image.jpg" alt="une image"</img>`, `<img src="mon-image.jpg" alt="une image">`, `<img href="mon-image.jpg" alt="une image">`, `<img  src="mon-image.jpg" alt="une image"></img>`],
    resultat: 1
}, {
    questions: "Quelle balise utilisera-t-on pour retourner a la ligne",
    options: [`<ur>`, `<hr>`, `<br>`, `<valigne>`],
    resultat: 2
}, {
    questions: "Quelle balise utilisera-t-on pour creer le pied d'un tableu ",
    options: [`tfoot`, `footer`, `foot`, `tfooter`],
    resultat: 0
}, {
    questions: "Comment creer un comentaire dans HTML",
    options: [`//....`, `/*...*/`, `<!--...--!>`, `<!--...-->`],
    resultat: 3
}]
// array css
var qcmCSS = [
    {
        questions: "Pour la règle de style : p { position: relative ; left: 5px ; right: 20 px ;} le décalage sera :",
        options: [`de 20 pixels par rapport a la droite`, `de 15 pixels par rapport a la droite.`, `de 5 pixels a gauche et de 20 pixels a droite, soit un etirement.`, `de 5 pixels par rapport a la gauche.`],
        resultat: 3
    }, {
        questions: `Qu'est-ce que le "padding" ?`,
        options: [`la marge externe d’un element`, `l’espacement entre deusx cellules.`, `l’espacement entre deux colonnes.`, `la marge interne d’un element.`],
        resultat: 3
    }, {
        questions: `Comment définir un espacement de 15 px entre plusieurs colonnes ?`,
        options: [`p{column-margin :15px ;}`, `p{column-gap :15px;}`, `p{column-width :15px;}`, `p{column-space:15px;}`],
        resultat: 1
    }, {
        questions: `Comment placer une image à gauche à l'intérieur d'un bloc pour qu'elle soit enrobée, habillée du texte d'un article ?`,
        options: [`{colspan :left ;}`, `{span :left;}}`, `{surround :left;}`, `{float :left;}`],
        resultat: 3
    }, {
        questions: `Comment va s'afficher le mot "Hello" ici : <div style="writing-mode:tb-rl;">Hello</div> ?`,
        options: [`en tabulation centree sur la virgule.`, `en tablulation centree a gauche.`, `verticalement.`, `en tablulation centree a droite.`],
        resultat: 2
    }, {
        questions: `Pour gérer la transparence d'un texte avec une feuille de style on utilise :`,
        options: [`uniquement la fonction rgba().`, `uniquement la propriete transparency().`, `la fonction rgba() ou la propriete opacity.`, `uniquement la propriete opacity`],
        resultat: 2
    }, {
        questions: `La règle de style "p.ville { .........} " s'applique :`,
        options: [`aux paragraphe <p class="ville" >…<p>`, `aux paragraphe <p><span "ville">…</span><p>`, `aux paragraphe <p id="ville">…<p>`, `aux paragraphe <p value="ville">…<p>`],
        resultat: 0
    }, {
        questions: `Un point (unité de taille pt) est équivalent à ?`,
        options: [`0.35mm`, `1mm`, `0.5mm`, `0.45mm`],
        resultat: 0
    }, {
        questions: `Quelle balise permet la saisie de plusieurs lignes de texte ?`,
        options: [`<textarea>`, `<textbox>`, `<input type="multiple">`, `<input value="combo"> `],
        resultat: 0
    }, {
        questions: `Comment positionner un bloc par rapport à l'écran ?`,
        options: [`{position: absolute ; }`, `{position: screen ; }`, `{position: fixed ; }`, `{position: static ; }`],
        resultat: 2
    }
]

var qcmJs=[{

    questions:"Quelle propriété permet d'identifier l'OS de l'utilisateur ?",

    options:["navigator.userAgent","navigator.system","navigator.platform","navigator.os"],

    resultat:2

},{

    questions:"De quelle façon peut-on récupérer le nombre d'éléments d'un tableau T1 ?",

    options:["T1.last()","T1.count()","length(T1)","length(T1)"],

    resultat:2

},{

    questions:"i += 1 est équivalent à :",

    options:["i>=1","n’existe pas en Javascript","i=i+1","i>1"],

    resultat:2

},{

    questions:"Le mot clé 'var' permet de déclarer des variables",

    options:["n’existe pas en Javascript","locales ou globales","locales uniquement","globales uniquement"],

    resultat:1

},{

    questions:"A quoi sert l'opérateur === ?",

    options:["c’est un comparateur logique","n’existe pas en javascript","a comparer le type et la valeur de 2 donnees","a operer une affectation apres la comparaison"],

    resultat:2

},{

    questions:"L'objet 'document' par rapport à l'objet 'window' est",

    options:["pere","n’a aucun lien avec","fils","frere"],

    resultat:2

},{

    questions:"Quelle est la syntaxe correcte ?",

    options:["getElementById(window.['Monld'])","getElementById(document.[ 'Monld'])","document.getElementById('Monld')","window.getElementById('Monld')"],

    resultat:2

},{

    questions:"La fonction split() divise une chaîne selon ?",

    options:["des caracteres specifiques","un nombre de caracteres precis","une condition logique","ces trois reponses sont possibles avec split()"],

    resultat:0

},{

    questions:"Math.floor(-3.4) affiche",

    options:["n’existe pas en javascript","3.4","-4","-3"],

    resultat:0

},{

    questions:"Comment ajouter du code JavaScript dans une page HTML?",

    options:["<script type= 'javascript'></script>","<script src='text/javascript'></script>","<script type='text/javascript'></script>","<script src='javascript'></script>"],

    resultat:2

}

]
// questions + options of HTML
var questionOptionsHTML = document.querySelectorAll(".optionsPositionHTML")
var questionPositionHTML = document.querySelector(".textQuestHTML")

// questions + options of CSS
var questionOptionsCSS = document.querySelectorAll(".optionsPositionCSS")
var questionPositionCSS = document.querySelector(".textQuestCSS")

// questions + options of Javascript
var questionOptionsJS = document.querySelectorAll(".optionsPositionJS")
var questionPositionJS = document.querySelector(".textQuestJS")

// get some pages 
var home = document.querySelector(".homePage")
var htmlPage = document.querySelector(".html")
var cssPage = document.querySelector(".css")
var jsPage = document.querySelector(".js")
var scorePage = document.querySelector(".end")

var wishPage;

// HTML
function html() {
    // hide home page + show page html
    home.style.display = "none"
    htmlPage.style.display = "block"

    // show the first question
    questionPositionHTML.innerHTML = qcmHTML[0].questions
    for (j = 0; j < 4; j++) {
        questionOptionsHTML[j].value = qcmHTML[0].options[j]
    }
    
    document.getElementById("bntSuivant1").disabled=true
    
    // pour (ressayer)
    wishPage = "html"
    // show the current question
    var currentQuest = document.getElementById("counter1")
    currentQuest.innerHTML=`Quest 1 sur 10`
    
}
var counter = 1
var questionActuelle = 0
var message = document.getElementById("msg")

// var correctFalseHtml = document.getElementById("correctFalseHTML")
var answerHtml="vide";
var score = 0;
// button checked HTML
function checkedHtml(){
    var optsHtml = document.getElementsByName("questionHtml")
    document.getElementById("bntSuivant1").disabled=false
    for ( elt of optsHtml){
        if(elt.checked){
            if(elt.id==qcmHTML[questionActuelle].resultat){
                answerHtml=elt.id
                score++
            }else{
                answerHtml = ""
                
            }
        }
    }
    document.getElementById("correctFalseHTML").style.display = "inline"
    
    if(answerHtml=="" ||  answerHtml=="vide"){
        document.getElementById("correctFalseHTML").style.color="red"
        document.getElementById("correctFalseHTML").innerHTML = "faux"
        HelpHTML() 
        
    }else {
        document.getElementById("correctFalseHTML").style.color= "green";
        document.getElementById("correctFalseHTML").innerHTML = "bravo!";
    }
    // else if( answerHtml=="vide"){
    //     document.getElementById("correctFalseHTML").style.color="red"
    //     document.getElementById("correctFalseHTML").innerHTML = "non repondu"
    //     HelpHTML()
    // }
    document.getElementById("btnChecked1").disabled  = true
}

//buttom SUIVANT HTML
function suivantHTML() {
    showHelpHtml.style.backgroundColor = "#C8C8C8"
    // showHelpHtml.style.display = "none"
    showHelpHtml.innerText = ""
    if (counter < qcmHTML.length) {
        var qcmData = qcmHTML[counter]
        // putting the question in it place 
        questionPositionHTML.innerHTML = qcmData.questions
        // putting the options
        for (j = 0; j < 4; j++) {
            questionOptionsHTML[j].value = qcmData.options[j]
        }
        counter++
        document.getElementById("btnChecked1").disabled  = false
        document.getElementById("correctFalseHTML").innerHTML = "";
        document.getElementById("bntSuivant1").disabled=true
        // var radioB = document.getElementById(answerHtml)
        // radioB.checked =  false 

    } else {
        // whene the user answers at all the questions
        // show result
        htmlPage.style.display = "none"
        scorePage.style.display = "block"
        
        counter = 1
        // the table
        document.getElementById("br").innerHTML = score
        document.getElementById("fr").innerHTML = 10-score
        document.getElementById("sp").innerHTML = score*10+`%`
        document.getElementById("sc").innerHTML = score+`/10`

        // var radioB = document.getElementById(answerHtml)
        // radioB.checked =  false 

        // message at the end
        congraOups = document.getElementById("results")
        if(score >= 7){
            var result = document.getElementById("score")
            result.innerHTML = `votre score est : ${score}/10`
            // show the the details of score
            var tab = document.getElementById("scoreTable")
            tab.style.display = "inline-block"
            
           
            scorePage.style.backgroundImage = "url('stars.jpg')"
            congraOups.style.color="limegreen"
            congraOups.innerHTML = "Congratulations"
            message.innerHTML="tu as bien fait! Passons maintenant au 10/10 !"
            if(score==10){
                message.innerHTML = "Parfait"
            }
        }
        else{
            
            scorePage.style.backgroundImage = "url('sad-0.jpg')"

            var tab = document.getElementById("scoreTable")
            tab.style.display = "none"
            congraOups.style.color = "red"
            congraOups.innerHTML = "Oups!"
            // scorePage.style.backgroundColor = "red"
            message.innerHTML="Vous êtes proche, vous pouvez réessayer!"
            if(score<=4){
                message.innerHTML="Score faible, vous devriez essayer plus fort!"
            }
        }
        
    }
    questionActuelle++
    
    document.getElementById("correctFalseHTML").style.display = "none"
    // show the current question with opacity
    var currentQuest = document.getElementById("counter1")
    currentQuest.innerHTML=`Quest ${questionActuelle+1} sur 10`
    showHelpHtml.style.display = "none"
    
}


// CSS
function css() {
    // hide home page + show page css
    home.style.display = "none"
    cssPage.style.display = "block"

    // show the first question   
    questionPositionCSS.innerHTML = qcmCSS[0].questions
    for (j = 0; j < 4; j++) {
        questionOptionsCSS[j].value = qcmCSS[0].options[j]
    }

    document.getElementById("bntSuivant2").disabled=true
    
    // pour (ressayer)
    wishPage = "css"
    // show the current question
    var currentQuest = document.getElementById("counter2")
    currentQuest.innerHTML=`Quest 1 sur 10`
}

var answerCss="vide";
var answerShoosenC ;
// button checked CSS
function checkedCSS(){
    var optsCss = document.getElementsByName("questionCss")
    document.getElementById("bntSuivant2").disabled=false
    for ( elt of optsCss){
        if(elt.checked){
            if(elt.id==qcmCSS[questionActuelle].resultat){
                answerCss=elt.id
                score++
            }else{
                answerCss = ""
            }
            answerShoosenC=elt.id
        }
    }
    document.getElementById("correctFalseCSS").style.display = "inline"
    if(answerCss==""){
        document.getElementById("correctFalseCSS").style.color="red"
        document.getElementById("correctFalseCSS").innerHTML = "faux"
        HelpCSS()
    }else if(answerCss=="vide"){
        document.getElementById("correctFalseCSS").style.color="red"
        document.getElementById("correctFalseCSS").innerHTML = "non repondu"
        HelpCSS()
    }else{
        document.getElementById("correctFalseCSS").style.color= "green";
        document.getElementById("correctFalseCSS").innerHTML = "bravo!";
    }
    document.getElementById("btnChecked2").disabled  = true
}

//  button SUIVANT CSS
function suivantCSS(){
    // var optsCss = document.getElementsByName("questionCss")
    // for ( elt of optsCss){
    //     if(elt.checked){
    //         var radioB = document.getElementById(answerShoosenC)
    //         radioB.checked =  false
    //     }
    // }
    showHelpCss.style.backgroundColor = "#C8C8C8"
    showHelpCss.innerText = ""

    
    if (counter < qcmCSS.length) {
        var qcmData = qcmCSS[counter]
        // putting the question in it place 
        questionPositionCSS.innerHTML = qcmData.questions
        // putting the options
        for (j = 0; j < 4; j++) {
            questionOptionsCSS[j].value = qcmData.options[j]
        }
        counter++
        document.getElementById("btnChecked2").disabled  = false
        document.getElementById("correctFalseCSS").innerHTML = "";
        document.getElementById("bntSuivant2").disabled=true
        
    } else {
        // whene the user answers at all the questions
        // show result
        cssPage.style.display = "none"
        scorePage.style.display = "block"
        
        counter = 1
        // the table
        document.getElementById("br").innerHTML = score
        document.getElementById("fr").innerHTML = 10-score
        document.getElementById("sp").innerHTML = score*10+`%`
        document.getElementById("sc").innerHTML = score+`/10`
        // message at the end
        congraOups = document.getElementById("results")
        if(score >= 7){
            scorePage.style.backgroundImage = "url('stars.jpg')"
            
            var result = document.getElementById("score")
            result.innerHTML = `votre score est : ${score}/10`
            var tab = document.getElementById("scoreTable")
            tab.style.display = "block"
            congraOups.style.color="green"
            congraOups.innerHTML = "congratulations"
            message.innerHTML="tu as bien fait! Passons maintenant au 10/10 !"
            if(score==10){
                message.innerHTML = "parfais"
            }
        }
        else{
            scorePage.style.backgroundImage = "url('sad-0.jpg')"

            var tab = document.getElementById("scoreTable")
            tab.style.display = "none"
            congraOups.style.color = "red"
            congraOups.innerHTML = "Oups!"
            message.innerHTML="vous êtes proche, vous pouvez réessayer"
            if(score<=4){
                message.innerHTML="score faible, vous devriez essayer plus fort"
            }
        }
        // var radioB = document.getElementById(answerShoosenC)
        // radioB.checked =  false
    }
    questionActuelle++
    
    document.getElementById("correctFalseCSS").style.display = "none"
    // show the current question with opacity
    var currentQuest = document.getElementById("counter2")
    currentQuest.innerHTML=`Quest ${questionActuelle+1} sur 10`
    showHelpCss.style.display = "none"
    
}



// JAVASCRIPT
function Js() {
    // hide home page + show page javascript
    home.style.display = "none"
    jsPage.style.display = "block"

    // show the first question   
    questionPositionJS.innerHTML = qcmJs[0].questions
    for (j = 0; j < 4; j++) {
        questionOptionsJS[j].value = qcmJs[0].options[j]
    } 
    

    wishPage = "javascript"
    document.getElementById("bntSuivant3").disabled = true

     // show the current question
     var currentQuest = document.getElementById("counter3")
     currentQuest.innerHTML=`Quest 1 sur 10`
}
var answerJs="vide";

function checkedJS(){
    var optsJs = document.getElementsByName("questionJs")
    document.getElementById("bntSuivant3").disabled=false
    for ( elt of optsJs){
        if(elt.checked){
            if(elt.id==qcmJs[questionActuelle].resultat){
                answerJs=elt.id
                score++
            }else{
                answerJs = ""
                
            }
        }
    }
    document.getElementById("correctFalseJS").style.display = "inline"
    
    if(answerJs=="" ||  answerJs=="vide"){
        document.getElementById("correctFalseJS").style.color="red"
        document.getElementById("correctFalseJS").innerHTML = "faux"
        HelpJS() 
        
    }else {
        document.getElementById("correctFalseJS").style.color= "green";
        document.getElementById("correctFalseJS").innerHTML = "bravo!";
    }
    // else if( answerHtml=="vide"){
    //     document.getElementById("correctFalseHTML").style.color="red"
    //     document.getElementById("correctFalseHTML").innerHTML = "non repondu"
    //     HelpHTML()
    // }
    document.getElementById("btnChecked3").disabled  = true
}

// button SUIVANT Javascript
function suivantJS() {
    showHelpJs.style.backgroundColor = "#C8C8C8"
    // showHelpHtml.style.display = "none"
    showHelpJs.innerText = ""
    if (counter < qcmJs.length) {
        var qcmData = qcmJs[counter]
        // putting the question in it place 
        questionPositionJS.innerHTML = qcmData.questions
        // putting the options
        for (j = 0; j < 4; j++) {
            questionOptionsJS[j].value = qcmData.options[j]
        }
        counter++
        document.getElementById("btnChecked3").disabled  = false
        document.getElementById("correctFalseJS").innerHTML = "";
        document.getElementById("bntSuivant3").disabled=true
        // var radioB = document.getElementById(answerHtml)
        // radioB.checked =  false 

    } else {
        // whene the user answers at all the questions
        // show result
        jsPage.style.display = "none"
        scorePage.style.display = "block"
        
        counter = 1
        // the table
        document.getElementById("br").innerHTML = score
        document.getElementById("fr").innerHTML = 10-score
        document.getElementById("sp").innerHTML = score*10+`%`
        document.getElementById("sc").innerHTML = score+`/10`

        // var radioB = document.getElementById(answerHtml)
        // radioB.checked =  false 

        // message at the end
        congraOups = document.getElementById("results")
        if(score >= 7){
            var result = document.getElementById("score")
            result.innerHTML = `votre score est : ${score}/10`
            // show the the details of score
            var tab = document.getElementById("scoreTable")
            tab.style.display = "inline-block"
            
           
            scorePage.style.backgroundImage = "url('stars.jpg')"
            congraOups.style.color="limegreen"
            congraOups.innerHTML = "Congratulations"
            message.innerHTML="tu as bien fait! Passons maintenant au 10/10 !"
            if(score==10){
                message.innerHTML = "Parfait"
            }
        }
        else{
            
            scorePage.style.backgroundImage = "url('sad-0.jpg')"

            var tab = document.getElementById("scoreTable")
            tab.style.display = "none"
            congraOups.style.color = "red"
            congraOups.innerHTML = "Oups!"
            // scorePage.style.backgroundColor = "red"
            message.innerHTML="Vous êtes proche, vous pouvez réessayer!"
            if(score<=4){
                message.innerHTML="Score faible, vous devriez essayer plus fort!"
            }
        }
        
    }
    questionActuelle++
    
    document.getElementById("correctFalseJS").style.display = "none"
    // show the current question with opacity
    var currentQuest = document.getElementById("counter3")
    currentQuest.innerHTML=`Quest ${questionActuelle+1} sur 10`
    showHelpJs.style.display = "none"


}

// back home button
function backHome() {
    scorePage.style.display = "none"
    home.style.display = "block"
    questionActuelle = 0
    score = 0
}




// try again

function tryAgain(){
    if(wishPage==="html"){
        htmlPage.style.display="block"
        scorePage.style.display="none"
        html()      
    }else if(wishPage==="css"){
        cssPage.style.display="block"
        scorePage.style.display="none"
        css()
    }else if(wishPage==="javascript"){
        jsPage.style.display="block"
        scorePage.style.display="none"
        Js()              
    }
    questionActuelle = 0
    score = 0
    document.getElementById("btnChecked1").disabled  = false
    document.getElementById("btnChecked2").disabled  = false
    document.getElementById("btnChecked3").disabled  = false
}
// help HTML
var showHelpHtml = document.getElementById("helpHTML")
function HelpHTML(){
    showHelpHtml.style.display = "inline"
    var c=qcmHTML[questionActuelle].options[qcmHTML[questionActuelle].resultat]
    showHelpHtml.innerText = `la bonne reponse : ${c}`
    document.getElementById("btnChecked1").disabled  = true

    document.getElementById("bntSuivant1").disabled=false
    
}
// help CSS
var showHelpCss = document.getElementById("helpCSS")
function HelpCSS(){
    showHelpCss.style.display = "inline"
    var c=qcmCSS[questionActuelle].options[qcmCSS[questionActuelle].resultat]
    showHelpCss.innerText = `la bonne reponse : ${c}`
    document.getElementById("btnChecked2").disabled  = true

    document.getElementById("bntSuivant2").disabled=false
    
}

var showHelpJs = document.getElementById("helpJS")
function HelpJS(){
    showHelpJs.style.display = "inline"
    var c=qcmJs[questionActuelle].options[qcmJs[questionActuelle].resultat]
    showHelpJs.innerText = `la bonne reponse : ${c}`
    document.getElementById("btnChecked3").disabled = true

    document.getElementById("bntSuivant3").disabled = false
}