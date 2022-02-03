

let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let title = document.getElementById("title");
let welcome = document.getElementById("welcome-text");
let about = document.getElementById("about");
let aboutText = document.getElementById("about-text");
let contact = document.getElementById("contact");

arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic");
};

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};
function setLanugage(getLanuage){
if(getLanuage === "arabic"){
    title.innerHTML = " المهندسة العنود";
    welcome.innerHTML = " مرحبا بكم في صفحتي";
    about.innerHTML = "حولنا";
    aboutText.innerHTML = " انا مهندسة برمجيات";
    contact.innerHTML = "اتصل بنا";
}else if(getLanuage ==="english"){
    title.innerHTML = "THE ENGINEER ALANOUD";
    welcome.innerHTML = " welcome to my page";
    about.innerHTML = "  About US";
    aboutText.innerHTML = " i am a engineer software ";
    contact.innerHTML = "Contact us";

}


}
