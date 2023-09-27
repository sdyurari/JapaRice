'use strict';

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()



    const target = document.querySelector(link.hash),
          adjust = 0,
      offsetTop = window.pageYOffset + target.getBoundingClientRect().top - adjust;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  })
});