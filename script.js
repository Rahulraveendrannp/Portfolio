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
  
  $("#submit-form").submit((e)=>{
      e.preventDefault()
      $.ajax({
          url:"https://script.google.com/macros/s/AKfycbzzp2IdwKetbOa3pYgG1eb_H4x710_5UZhhRwLfXMHFEckHm9RENk7gE6mZrw9ktE2p/exec",
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
              if (result.isConfirmed) {
                Swal.fire(
                  window.location.reload()
                )
              }
            })
              
              
          },
          error:function (err){
            Swal.fire('Error')

          }
      })
  })

  const form = document.getElementById('submit-form'),
        name =document.getElementById('name'),
        email  =document.getElementById('email'),
        subject =document.getElementById('subject'),
        message =document.getElementById('text')

function sendMail(e){
  e.preventDefault();
       
        Email.send({
          Host : "smtp.elasticemail.com",
          Username : "rahulraveendrannp@gmail.com",
          Password : "C3759256C03A638D6DE87494456640D89045",
          To : 'rahulraveendrannp@gmail.com',
          From : 'rahulraveendrannp1996@gmail.com',
          Subject : subject.value,
          Body : message.value
      }).then(
        message => console.log(message)
      );
    }
