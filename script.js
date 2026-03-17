document.getElementById("login-form").addEventListener("submit", login);

function login(e){

e.preventDefault();

const id = document.getElementById("id").value;
const email = document.getElementById("email").value;

document.body.innerHTML = `

<div class="result-stage">

<img id="result-image" class="result-image">

<h2 id="result-label"></h2>

<button id="roll-btn" class="image-btn">

<img class="btn-img" src="Images/IMG_1203.png">

<span class="btn-text">ROLL</span>

</button>

</div>

`;

setupRoll();
}

function setupRoll(){

const rollBtn = document.getElementById("roll-btn");
const resultImage = document.getElementById("result-image");
const resultLabel = document.getElementById("result-label");

rollBtn.addEventListener("click",()=>{

rollBtn.disabled=true;
rollBtn.querySelector(".btn-text").textContent="Rolling";

setTimeout(()=>{

const pick = Math.random()<0.5 ? "sirius":"spike";

if(pick==="sirius"){

resultImage.src="Images/IMG_1181.jpeg";
resultLabel.textContent="SIRIUS";

}else{

resultImage.src="Images/IMG_1186.jpeg";
resultLabel.textContent="SPIKE";

}

rollBtn.disabled=false;
rollBtn.querySelector(".btn-text").textContent="Roll";

},2000);

});

}
