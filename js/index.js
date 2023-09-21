console.log('JS running')
const navbar = document.querySelector(".top-navbar")

// SCROLL TO CHANGE NNAVBAR COLOUR 


window.addEventListener('scroll', ()=>{
    // console.log('ho gaya bhai')
    // navbar.classList.toggle('remove-bg', window.scrollY > 100)
    navbar.classList.toggle("remove-bg", window.scrollY > 100);
    
    // on scroll close menu

    // navul.classList.remove('show-nav');
    // burger.classList.remove('burgerc');
    // header.classList.remove(`hide`);
    // l1.classList.remove(`line1`);
    // l2.classList.remove(`line2`);
    // l3.classList.remove(`line3`);
    // navbar.classList.remove('h-increase');
})

const items = document.getElementsByTagName('a');
// items.addEventListener('click', ()=>{
//     navbar.classList.remove('remove-bg')
// })

// items.addEventListener('click', ()=>{
//     navbar.classList.remove("remove-bg")
// })


const anchor = document.querySelector('.anchor-item')

// anchor.addEventListener('click', ()=>{
//     console.log("clicked")
// })

const burger = document.querySelector(".burger")
const header = document.querySelector(".nav-header")
const navul = document.querySelector(".nav-ul")
const navitem = document.querySelectorAll("navitem")


// Burger lines
const l1 = document.getElementById("l1")
const l2 = document.getElementById("l2")
const l3 = document.getElementById("l3")


// CLICK EVENT ON BURGER 


burger.addEventListener('click', ()=>{
    // navitem.classList.toggle(`m-navitem`);
    navul.classList.toggle('show-nav');
    burger.classList.toggle('burgerc');
    header.classList.toggle(`hide`);
    l1.classList.toggle(`line1`);
    l2.classList.toggle(`line2`);
    l3.classList.toggle(`line3`);
    navbar.classList.toggle('h-increase');
    // burger.classList.toggle('burger-h');
    // window.addEventListener('scroll', ()=>{
    //     navbar.classList.toggle("remove-bg", window.scrollY > 100);
    //     navul.classList.remove('show-nav')
    //     header.classList.remove('hide')
    //     navbar.classList.remove('h-increase')

    // })
})

const item1 = document.getElementById('anchor1')
const item3 = document.getElementById('anchor3')
const item2 = document.getElementById('anchor2')
const item4 = document.getElementById('anchor4')
item1.addEventListener('click', ()=>{
    console.log('click ho gaya')
    navul.classList.toggle('show-nav');
    // navitem.classList.toggle(`m-navitem`);
    header.classList.toggle(`hide`)
    navbar.classList.toggle('h-increase');
    l1.classList.toggle(`line1`);
    l2.classList.toggle(`line2`);
    l3.classList.toggle(`line3`);
})

item2.addEventListener('click', ()=>{
    console.log('click ho gaya')
    navul.classList.toggle('show-nav');
    // navitem.classList.toggle(`m-navitem`);
    header.classList.toggle(`hide`)
    navbar.classList.toggle('h-increase');
    l1.classList.toggle(`line1`);
    l2.classList.toggle(`line2`);
    l3.classList.toggle(`line3`);
})

item3.addEventListener('click', ()=>{
    console.log('click ho gaya')
    navul.classList.toggle('show-nav');
    // navitem.classList.toggle(`m-navitem`);
    header.classList.toggle(`hide`)
    navbar.classList.toggle('h-increase');
    l1.classList.toggle(`line1`);
    l2.classList.toggle(`line2`);
    l3.classList.toggle(`line3`);
})

item4.addEventListener('click', ()=>{
    console.log('contact pr click ho gaya')
    navul.classList.toggle('show-nav');
    // navitem.classList.toggle(`m-navitem`);
    header.classList.toggle(`hide`)
    navbar.classList.toggle('h-increase');
    l1.classList.toggle(`line1`);
    l2.classList.toggle(`line2`);
    l3.classList.toggle(`line3`);
})



// ////////  Emailform EmailJS ///////////

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_nu7c1va";
    const templateID = "template_qxydo5h";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
