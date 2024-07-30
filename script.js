var toggler = document.querySelector('.menu-toggle'),
navLink = document.querySelector('.navbar-links');

toggler.onclick = ()=>{
	navLink.classList.toggle('toggle-show');
}