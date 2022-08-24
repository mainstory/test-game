function save(name, value) {
   localStorage.setItem(name, value)
}
function get(name) {
   return localStorage.getItem(name)
}
function rem(name) {
   localStorage.setItem(name)
}
function off() {
   localStorage.clear();
}
//===========================================



function getLocalStorage() {

   if (localStorage.length > 0) {
      document.querySelector('[data-width]').setAttribute('data-width', get('width'))

      document.querySelector('[data-shadow-procent]').setAttribute('data-shadow-procent', get('shadowProcent'))
      document.querySelector('[data-shadow-procent]').style.width = `${get('shadowProcent')}%`

      //@@
      document.querySelector('[data-width-procent]').setAttribute('data-width-procent', get('widthProcent'))
      const widthProcent = document.querySelector('[data-width-procent]')
      const valueWidthProcent = widthProcent.getAttribute('data-width-procent')
      const modernValueWidthProcent = `${valueWidthProcent}%`
      widthProcent.style.maxWidth = modernValueWidthProcent

      document.querySelector('[data-lvl]').setAttribute('data-lvl', get('lvl'))
      document.querySelector('[data-maxValue]').setAttribute('data-maxValue', get('maxValue'))

      document.querySelector('[data-progress-text]').innerHTML = get('progressText')
      document.querySelector('[data-rung]').setAttribute('src', get('rungImg'))
      document.querySelector('[data-currency]').innerHTML = get('currency')

      document.querySelector('[data-todo-main-paste]').innerHTML = get('paste')


   } else {

      document.querySelector('[data-width]').setAttribute('data-width', '0')

      document.querySelector('[data-shadow-procent]').setAttribute('data-shadow-procent', '0')

      //@@
      document.querySelector('[data-width-procent]').setAttribute('data-width-procent', '0')
      const widthProcent = document.querySelector('[data-width-procent]')
      const valueWidthProcent = widthProcent.getAttribute('data-width-procent')
      const modernValueWidthProcent = `${valueWidthProcent}%`
      widthProcent.style.maxWidth = modernValueWidthProcent

      document.querySelector('[data-lvl]').setAttribute('data-lvl', '0')
      document.querySelector('[data-maxValue]').setAttribute('data-maxValue', '10')

      document.querySelector('[data-progress-text]').innerHTML = '0/10'
      document.querySelector('[data-rung]').setAttribute('src', 'https://fakeimg.pl/100/')
      document.querySelector('[data-currency]').innerHTML = '0 монет'


   }



}
getLocalStorage()


function saveLocalStorage() {

   document.addEventListener('click', (event) => {

      const width = document.querySelector('[data-width]').getAttribute('data-width')
      const widthProcent = document.querySelector('[data-width-procent]').getAttribute('data-width-procent')
      const lvl = document.querySelector('[data-lvl]').getAttribute('data-lvl')
      const maxValue = document.querySelector('[data-maxValue]').getAttribute('data-maxValue')
      const shadowProcent = document.querySelector('[data-shadow-procent]').getAttribute('data-shadow-procent')

      const progressText = document.querySelector('[data-progress-text]').innerHTML
      const rungImg = document.querySelector('[data-rung]').getAttribute('src')
      const currency = document.querySelector('[data-currency]').innerHTML

      save('width', width)
      save('widthProcent', widthProcent)
      save('lvl', lvl)
      save('maxValue', maxValue)
      save('progressText', progressText)
      save('shadowProcent', shadowProcent)
      save('rungImg', rungImg)
      save('currency', currency)

      const paste = document.querySelector('[data-todo-paste]').outerHTML
      save('paste', paste)
   })

}
saveLocalStorage()


//кнопка
const btnAdd = document.querySelector('[data-add]')


btnAdd.addEventListener('click', (event) => {


   //сбор
   const width = Number(document.querySelector('[data-width]').getAttribute('data-width'))
   let addVal = 2
   const maxValue = Number(document.querySelector('[data-maxValue]').getAttribute('data-maxValue'))

   //ширина
   const newWidth = width + addVal
   document.querySelector('[data-width]').setAttribute('data-width', newWidth)

   //процентная ширина
   const newWidthProcent = newWidth / maxValue * 100
   document.querySelector('[data-width]').setAttribute('data-width-procent', newWidthProcent)
   document.querySelector('[data-shadow-procent]').setAttribute('data-shadow-procent', newWidthProcent)

   //отображаемый текст
   document.querySelector('[data-progress-text]').innerHTML = `${newWidth}/${maxValue}`

   //стили-ширины
   document.querySelector('[data-width]').style.maxWidth = `${newWidthProcent}%`
   document.querySelector('[data-shadow-procent]').style.width = `${newWidthProcent}%`

   //новый уровень
   if (newWidthProcent >= 100) {

      //обнуление
      document.querySelector('[data-width]').setAttribute('data-width', '0')
      document.querySelector('[data-width-procent]').setAttribute('data-width-procent', '0')
      document.querySelector('[data-width]').style.maxWidth = `${0}%`
      document.querySelector('[data-shadow-procent]').style.width = `${0}%`


      //уровни
      const newLvl = Number(document.querySelector('[data-lvl]').getAttribute('data-lvl')) + 1
      document.querySelector('[data-lvl]').setAttribute('data-lvl', newLvl)

      //кфг уровней
      if (newLvl === 1) {
         let lvlmaxValue = 20
         document.querySelector('[data-maxValue]').setAttribute('data-maxValue', lvlmaxValue)
         document.querySelector('[data-progress-text]').innerHTML = `${0}/${lvlmaxValue}`

         //награда
         document.querySelector('[data-rung]').setAttribute('src', 'https://fakeimg.pl/100/ee4444')
         document.querySelector('[data-currency]').innerHTML = '10 монет'
      }
      if (newLvl === 2) {
         let lvlmaxValue = 40
         document.querySelector('[data-maxValue]').setAttribute('data-maxValue', lvlmaxValue)
         document.querySelector('[data-progress-text]').innerHTML = `${0}/${lvlmaxValue}`

         //награда
         document.querySelector('[data-rung]').setAttribute('src', 'https://fakeimg.pl/100/199885')
         document.querySelector('[data-currency]').innerHTML = '20 монет'
      }
      if (newLvl === 3) {
         let lvlmaxValue = 60
         document.querySelector('[data-maxValue]').setAttribute('data-maxValue', lvlmaxValue)
         document.querySelector('[data-progress-text]').innerHTML = `${0}/${lvlmaxValue}`

         //награда
         document.querySelector('[data-rung]').setAttribute('src', 'https://fakeimg.pl/100/200cff')
         document.querySelector('[data-currency]').innerHTML = '30 монет'
      }
      if (newLvl === 4) {
         let lvlmaxValue = 80
         document.querySelector('[data-maxValue]').setAttribute('data-maxValue', lvlmaxValue)
         document.querySelector('[data-progress-text]').innerHTML = `${0}/${lvlmaxValue}`

         //награда
         document.querySelector('[data-rung]').setAttribute('src', 'https://fakeimg.pl/100/550080')
         document.querySelector('[data-currency]').innerHTML = '40 монет'
      }
      if (newLvl === 5) {
         let lvlmaxValue = 100
         document.querySelector('[data-maxValue]').setAttribute('data-maxValue', lvlmaxValue)
         document.querySelector('[data-progress-text]').innerHTML = `${0}/${lvlmaxValue}`

         //награда
         document.querySelector('[data-rung]').setAttribute('src', 'https://fakeimg.pl/100/199885')
         document.querySelector('[data-currency]').innerHTML = '50 монет'

      }


   }


})

function history() {
   const billet = document.querySelector('[data-billet]')
   const paste = document.querySelector('[data-billet-paste]')

   const btns = document.querySelectorAll('[data-history-btn]')

   btns.forEach((btn) => {

      btn.addEventListener('click', (event) => {
         const copy = billet.cloneNode(true)
         copy.classList.remove('_hidden')
         paste.appendChild(copy)
      })


   })

}
history()



function todo() {
   const billet = document.querySelector('[data-todo-billet]')
   const zone = document.querySelector('[data-todo-paste]')

   const btns = document.querySelectorAll('[data-todo-btn]')
   btns.forEach((btn) => {
      btn.addEventListener('click', (event) => {
         const yourText = prompt('yourText')
         let difficult = Number(prompt('difficult (1-3)'))
         let currency = 0

         if (difficult === 0) {
            difficult = 'Not chosen'
         }
         if (difficult === 1) {
            difficult = 'Easy'
            currency = `+${10}`
         }
         if (difficult === 2) {
            difficult = 'Medium'
            currency = `+${20}`

         }
         if (difficult === 3) {
            difficult = 'Hard'
            currency = `+${30}`
         }

         if (difficult > 4) {
            difficult = 'Not chosen'
         }

         const copy = billet.cloneNode(true)
         copy.classList.remove('_hidden')
         copy.querySelector('[data-todo-text]').innerHTML = yourText
         copy.querySelector('[data-todo-difficult]').innerHTML = difficult
         copy.querySelector('[data-todo-currency]').innerHTML = currency
         zone.appendChild(copy)

      })
   })

   document.addEventListener('click', (event) => {
      if (event.target.closest('[data-todo-cross]')) {
         event.target.closest('[data-todo-billet]').remove()
         const paste = document.querySelector('[data-todo-paste]').outerHTML
         save('paste', paste)
      }
   })
}
todo()









