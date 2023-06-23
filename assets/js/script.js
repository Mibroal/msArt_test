for(let item of document.querySelectorAll('input')){
    item.addEventListener('input', function(e){
       document.querySelector('.checked').classList.remove('checked')
       e.target.classList.add('checked')
    })
  }