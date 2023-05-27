const navbar = document.querySelector(".navbar");
const bars = document.querySelector(".hamburger ");

bars.addEventListener("click",() =>{
    bars.classList.toggle("active");
    navbar.classList.toggle("active");   
})


window.onscroll = () =>{
    navbar.classList.remove('active');
    bars.classList.remove('active');
  }


function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    if (name === '' || email === '') {
      alert('Please fill in all fields.');
      return false;
    }
    return true;
  }
  
  function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
