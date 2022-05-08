// phoneMenu

const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');

menu.addEventListener('click', () =>{
    nav.classList.add('open-nav');
})
close.addEventListener('click', () =>{
    nav.classList.remove('open-nav');
})

//characters

function change(id){
    switch(id){
        case 'ace':
        document.getElementById('img').src = "images/Characters/Fullimg/Hunter.png";
        document.getElementById('nameChar').innerHTML = "Ace";
        document.getElementById('charInfo').innerHTML = "Archer from the west who lost his father<br>who was his only parent but taught him to <br>communicate with the animals."
        break;
        case 'brann':
        document.getElementById('img').src = "images/Characters/Fullimg/Sentinel.png";
        document.getElementById('nameChar').innerHTML = "Brann";
        document.getElementById('charInfo').innerHTML = "Sentinel from the west who lost his father<br>who was his only parent but taught him to <br>communicate with the animals."
        break;
        case 'hanae':
        document.getElementById('img').src = "images/Characters/Fullimg/SwordMaster.png";
        document.getElementById('nameChar').innerHTML = "Hanae";
        document.getElementById('charInfo').innerHTML = "Sword Master from the west who lost his father<br>who was his only parent but taught him to <br>communicate with the animals."
        break;
        case 'lemus':
        document.getElementById('img').src = "images/Characters/Fullimg/Warrior.png";
        document.getElementById('nameChar').innerHTML = "Lemus";
        document.getElementById('charInfo').innerHTML = "Warrior from the west who lost his father<br>who was his only parent but taught him to <br>communicate with the animals."
        break;
        case 'sola':
        document.getElementById('img').src = "images/Characters/Fullimg/Witch.png";
        document.getElementById('nameChar').innerHTML = "Sola";
        document.getElementById('charInfo').innerHTML = "Witch from the west who lost his father<br>who was his only parent but taught him to <br>communicate with the animals."
        break;
        case 'yadria':
        document.getElementById('img').src = "images/Characters/Fullimg/Rogue_BG.png";
        document.getElementById('nameChar').innerHTML = "Yadria";
        document.getElementById('charInfo').innerHTML = "Assassin from the west who lost his father<br>who was his only parent but taught him to <br>communicate with the animals."
        break;
        }
}

//ranking

function ranking(strUser){
    var e = document.getElementById("period");
    var strUser = e.value; 
    var olTable = document.getElementById("olTable");
    olTable.classList.remove('float');
    olTable.offsetWidth;
    olTable.classList.add('float');
switch(strUser){
    case "Spring":
        document.getElementById("ol").innerHTML ="<li>Astrates</li><li>Vels</li><li>Autz</li><li>Kres12</li><li>Eresn</li><li>Bersnz</li><li>AWeesk</li><li>Aww912</li><li>Mabess</li><li>Qsaw1</li>"
        break;
    case "Summer":
        document.getElementById("ol").innerHTML ="<li>AstSummer</li><li>Sass</li><li>Kels</li><li>Asg21</li><li>Lesssa</li><li>Veslas</li><li>AWPES</li><li>Messas</li><li>Vesasz</li><li>Lkseq</li>"
        break;
    case "Fall":
        document.getElementById("ol").innerHTML ="<li>Ernessa</li><li>Lessvsa</li><li>Lieks</li><li>Ooess</li><li>Vevs</li><li>Kilassz</li><li>Mesqw</li><li>MGKwqa</li><li>BBSQ</li><li>Iksask</li>"
        break;
    case "Winter":
        document.getElementById("ol").innerHTML ="<li>Oesqzz</li><li>Wesagr</li><li>Iesaq</li><li>Beszaq</li><li>Vorls</li><li>Eeqwaz</li><li>Nesmz</li><li>Uiioz</li><li>Jweqqsz</li><li>Qsaw1</li>"
        break;
    }
}