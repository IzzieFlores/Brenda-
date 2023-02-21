// const exampleEl = document.getElementById('example')
// const popover = new bootstrap.Popover(exampleEl, options)

// const popover = new bootstrap.Popover('.example-popover', {
//     container: 'body'
//   })

// alert("hola")
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))