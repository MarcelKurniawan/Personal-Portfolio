// Typed word

var typed = new Typed(".input", {
    strings:["CS Student", "UI/UX Designer", "Tech Enthusiast"],
    typeSpeed: 70,
    backSpeed: 60,
    loop:true
});


// Hamburger

let hamburger = document.querySelector(".hamb");
let navlist = document.querySelector(".nav-list");
let links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function(){
  this.classList.toggle("click");
  navlist.classList.toggle("open");
})


//Scroll reveal

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    reset: true
})

sr.reveal('.container-about',{delay:200, origin:'top'})
sr.reveal('.container-skill',{delay:200, origin:'top'})
sr.reveal('.services',{delay:200, origin:'top'})
sr.reveal('.portfolio',{delay:200, origin:'top'})
sr.reveal('.contact-container',{delay:200, origin:'top'})

//Form Validation

function validate(){
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(name.value == "" || email.value == "" || msg.value == ""){
      emptyerror();
    }else{
      success();
    }
  })
}

validate();

function emptyerror(){
  alert("Fields Cannot be Empty!")
}

function success(){
  alert("Your email has been sent");
}

function submit_contact() {
	
	var name = document.getElementById("name").value;
	var email = document.getElementById("comment").value;
	
	if(name != ""){
    success_comment();
		document.getElementById("comment-display").innerHTML += "From : "+ name + "<br>"
		+ "Comment : " + email + "<br>" + "<br>";
	} else if (name == "") {
		emptyerror();
	}
}

function success_comment(){
  alert("Your comment has been post");
}
