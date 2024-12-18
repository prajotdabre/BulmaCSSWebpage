const burgerIcon = document.querySelector('#burger')
const navbarMenu = document.querySelector('#link')

burgerIcon.addEventListener('click', () =>{
    navbarMenu.classList.toggle('is-active')
})

const tabs = document.querySelectorAll('.tabs li')
const tabcontentBoxes = document.querySelectorAll('#tab-info > div')

tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        tabs.forEach(item=>item.classList.remove('is-active'))
        tab.classList.add('is-active')

        const target = tab.dataset.target
        tabcontentBoxes.forEach(box=>{
            if(box.getAttribute('id')===target){
                box.classList.remove('is-hidden')
            }
            else{
                box.classList.add('is-hidden')
            }
        })
    })
})

// Modal
const signup_btn = document.querySelector('#signup')
const modal_bg = document.querySelector('.modal-background')
const modal = document.querySelector('.modal')

signup_btn.addEventListener('click',()=>{
    modal.classList.add('is-active')
})

modal_bg.addEventListener('click',()=>{
    modal.classList.remove('is-active')
})