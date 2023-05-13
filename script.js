"use strict"
// const form = document.querySelector('form');
// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // prevent form submission
//   const job = form.job.value;
//   const location = form.location.value;
//   const url = `/search?job=${encodeURIComponent(job)}&location=${encodeURIComponent(location)}`;
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       // display the search results on the page
//     })
//     .catch(error => {
//       console.error(error);
//     });
// });

const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})