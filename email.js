const scriptURL = 'https://script.google.com/macros/s/AKfycbzr5qlKkpB8S2iJCvCuh5_qW02-WI9bFf4qteh4RCoIx5JamPWXo7W-yMDNHk-43C5p4A/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
         msg.innerHTML="Thank You for Subscribing!"
         
         setTimeout(function(){
         msg.innerHTML=""
         },5000)

         form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

