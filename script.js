$(document).ready(function () {
    $(window).scroll(function () {
      // sticky navbar on scroll script
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      // scroll-up button show/hide script
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    // slide-up script
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      // removing smooth scroll on slide-up button click
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      // applying again smooth scroll on menu items click
      $("html").css("scrollBehavior", "smooth");
    });
  
    // toggle menu/navbar script
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    // typing text animation script
    var typed = new Typed(".typing", {
      strings: ["Back-End Developer", "Believer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    var typed = new Typed(".typing-2", {
      strings: ["Back-End Developer", "Believer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    // owl carousel script
    $(".carousel").owlCarousel({
      margin: 20,
    loop: false,
      autoplay: false,   //for carousel effect turn it true
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
  });


 


  function validate (e) {
   
   

    const username =document.getElementById('name').value;
    const  email  =document.getElementById('email').value;
    const subject =document.getElementById('subject').value;
    const msgtext =document.getElementById('text').value;
    const mobile =document.getElementById('mobile').value;
    var collab = document.getElementById("collab");
    var gender = document.getElementsByName("gender");
   const errormsg=document.getElementById('errormsg');
  var emailregex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
   var nameregex=/^[A-Za-z ]+$/ ;
  
   errormsg.innerHTML=' ';

 if(!nameregex.test(username)){
   e.preventDefault();
   errormsg.innerHTML='Enter a valid Name';
    return;
 }
  if(!emailregex.test(email)){
   e.preventDefault();
   errormsg.innerHTML='Enter a valid Email';
    return;}
   if(mobile.trim().length!=10){
    e.preventDefault();
    errormsg.innerHTML='Enter a valid Mobile Number';
     return;}
 if(subject.trim() === '' || subject === null){
   e.preventDefault();
   errormsg.innerHTML='Subjet Required';
    return;
 }
 if(msgtext.trim() === '' || msgtext === null){
  e.preventDefault();
  errormsg.innerHTML='Message field Reqired';
   return;
 }
 if (collab.value == 0) {
  e.preventDefault(); 
  errormsg.innerHTML = "Kindly select the reason for your enquiry ";
   return ;
}
 
   
 if (!(gender[0].checked || gender[1].checked||gender[2].checked)) {
  e.preventDefault();
  errormsg.innerHTML='KIndly select yor Gender';
   return;
}

    
 
}




  
  $("#submit-form").submit((e)=>{
   
      e.preventDefault()
      $.ajax({
          url:"https://script.google.com/macros/s/AKfycbwi4iKue3sAEPuHkcCQqZOEt7-pX2b89_O7XxSTK-uxCaqHe5HOdgKrUFtIn708Z5BdRQ/exec",
          data:$("#submit-form").serialize(),
          method:"post",
          success:function (response){
            Swal.fire({
              title: 'I will get back to you soon. ...',
          
              icon: 'sucess',
              
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'OK'
            }).then((result) => {
              window.location.reload()
            })
              
              
          },
          error:function (err){
            Swal.fire('Error')

          }
      })
  })

 

