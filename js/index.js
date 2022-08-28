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


   }



}
// getLocalStorage()


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
// saveLocalStorage()



//=================================================================================================

function activeTask() {


   document.addEventListener('click', (event) => {

      if (event.target.closest('[data-todo-billet]')) {

         event.target.closest('[data-todo-billet]').style.backgroundColor = 'rgba(217, 0, 255, 0.385)'

         const paste = document.querySelector('[data-todo-paste]').outerHTML
         save('paste', paste)
      }
   })


}
activeTask()


function checkBoxs() {

   document.addEventListener('click', (event) => {


      if (event.target.closest('[data-checkbox]')) {
         event.target.closest('[data-checkbox]').closest('[data-todo-billet]').style.backgroundColor = 'rgba(9, 255, 0, 0.385)'
         event.target.closest('[data-checkbox]').setAttribute('data-success', '')

         //монеты
         const currency = Number(event.target.closest('[data-checkbox]').closest('[data-todo-billet]').querySelector('[data-todo-currency]').getAttribute('data-todo-currency'))
         // console.log(currency);

         //exp
         event.target.closest('[data-checkbox]').closest('[data-todo-billet]')
         const exp = Number(event.target.closest('[data-checkbox]').closest('[data-todo-billet]').querySelector('[data-todo-exp]').getAttribute('data-todo-exp'))

         if (event.target.closest('[data-checkbox]').getAttribute('data-checkbox') === 'made') {

         } else {
            addProgressBar(exp)


            const todoCurrency = Number(event.target.closest('[data-todo-billet]').querySelector('[data-todo-currency]').getAttribute('data-todo-currency'))
            const newCurrency = Number(document.querySelector('[data-currency]').getAttribute('data-currency')) + todoCurrency

            document.querySelector('[data-currency]').setAttribute('data-currency', newCurrency)
            document.querySelector('[data-currency]').innerHTML = newCurrency
         }


         event.target.closest('[data-checkbox]').setAttribute('data-checkbox', 'made')

         //сохранение
         const paste = document.querySelector('[data-todo-paste]').outerHTML
         save('paste', paste)
      }
   })

}
checkBoxs()




function addProgressBar(addVal) {

   //сбор
   const width = Number(document.querySelector('[data-width]').getAttribute('data-width'))

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

         const rewardСurrency = Number(document.querySelector('[data-currency]').getAttribute('data-currency')) + 10
         document.querySelector('[data-currency]').innerHTML = rewardСurrency
         document.querySelector('[data-currency]').setAttribute('data-currency', rewardСurrency)
      }
      if (newLvl === 2) {
         let lvlmaxValue = 40
         document.querySelector('[data-maxValue]').setAttribute('data-maxValue', lvlmaxValue)
         document.querySelector('[data-progress-text]').innerHTML = `${0}/${lvlmaxValue}`

         //награда
         document.querySelector('[data-rung]').setAttribute('src', 'https://fakeimg.pl/100/199885')

         const rewardСurrency = Number(document.querySelector('[data-currency]').getAttribute('data-currency')) + 20
         document.querySelector('[data-currency]').innerHTML = rewardСurrency
         document.querySelector('[data-currency]').setAttribute('data-currency', rewardСurrency)

      }
      if (newLvl === 3) {
         let lvlmaxValue = 60
         document.querySelector('[data-maxValue]').setAttribute('data-maxValue', lvlmaxValue)
         document.querySelector('[data-progress-text]').innerHTML = `${0}/${lvlmaxValue}`

         //награда
         document.querySelector('[data-rung]').setAttribute('src', 'https://fakeimg.pl/100/200cff')

         const rewardСurrency = Number(document.querySelector('[data-currency]').getAttribute('data-currency')) + 30
         document.querySelector('[data-currency]').innerHTML = rewardСurrency
         document.querySelector('[data-currency]').setAttribute('data-currency', rewardСurrency)

      }
      if (newLvl === 4) {
         let lvlmaxValue = 80
         document.querySelector('[data-maxValue]').setAttribute('data-maxValue', lvlmaxValue)
         document.querySelector('[data-progress-text]').innerHTML = `${0}/${lvlmaxValue}`

         //награда
         document.querySelector('[data-rung]').setAttribute('src', 'https://fakeimg.pl/100/550080')

         const rewardСurrency = Number(document.querySelector('[data-currency]').getAttribute('data-currency')) + 40
         document.querySelector('[data-currency]').innerHTML = rewardСurrency
         document.querySelector('[data-currency]').setAttribute('data-currency', rewardСurrency)

      }
      if (newLvl === 5) {
         let lvlmaxValue = 100
         document.querySelector('[data-maxValue]').setAttribute('data-maxValue', lvlmaxValue)
         document.querySelector('[data-progress-text]').innerHTML = `${0}/${lvlmaxValue}`

         //награда
         document.querySelector('[data-rung]').setAttribute('src', 'https://fakeimg.pl/100/199885')

         const rewardСurrency = Number(document.querySelector('[data-currency]').getAttribute('data-currency')) + 50
         document.querySelector('[data-currency]').innerHTML = rewardСurrency
         document.querySelector('[data-currency]').setAttribute('data-currency', rewardСurrency)

      }


   }


}



// function history() {
//    const billet = document.querySelector('[data-billet]')
//    const paste = document.querySelector('[data-billet-paste]')

//    const btns = document.querySelectorAll('[data-history-btn]')

//    btns.forEach((btn) => {

//       btn.addEventListener('click', (event) => {
//          const copy = billet.cloneNode(true)
//          copy.classList.remove('_hidden')
//          paste.appendChild(copy)
//       })


//    })

// }
// history()



function todo() {
   const billet = document.querySelector('[data-todo-billet]')
   const zone = document.querySelector('[data-todo-paste]')

   document.addEventListener('keydown', (event) => {

      if (event.code === 'Enter') {

         function fnCheckOne() {
            if (document.querySelectorAll('[data-lvl-selected]').length > 0) {
               let difficult = document.querySelector('[data-lvl-selected]').getAttribute('data-lvl-difficulty')
               return difficult
            } else {
               let difficult = 'None'
               return difficult
            }
         }
         let difficult = fnCheckOne()




         let yourText = document.querySelector('[data-todo-btn]').value

         function fnCheckTwo() {
            if (yourText === '') {
               let yourText = 'None'
               return yourText
            } else {
               return yourText
            }
         }
         yourText = fnCheckTwo()



         let currency = `0xp`
         let exp = `${0}xp`
         let expSet = 0
         let currencyAttribute = 0




         if (difficult === 'Easy') {
            difficult = 'Easy'
            currency = `+${10}`
            exp = `+${2}xp`
            expSet = 2
            currencyAttribute = 10
         }
         if (difficult === 'Medium') {
            difficult = 'Medium'
            currency = `+${20}`
            exp = `+${4}xp`
            expSet = 4
            currencyAttribute = 20



         }
         if (difficult === 'Hard') {
            difficult = 'Hard'
            currency = `+${30}`
            exp = `+${6}xp`
            expSet = 6
            currencyAttribute = 30


         }

         let expColor = '#fff'


         let test = document.querySelector('[data-todo-btn]').value


         if (test === '' || document.querySelectorAll('[data-lvl-selected]').length === 0) {

         } else {

            const copy = billet.cloneNode(true)
            copy.classList.remove('_hidden')
            copy.querySelector('[data-todo-text]').innerHTML = yourText
            copy.querySelector('[data-todo-difficult]').innerHTML = difficult
            copy.querySelector('[data-todo-currency]').innerHTML = currency
            copy.querySelector('[data-todo-currency]').setAttribute('data-todo-currency', currencyAttribute)
            copy.querySelector('[data-todo-exp]').innerHTML = exp
            copy.querySelector('[data-todo-exp]').style.color = expColor
            copy.querySelector('[data-todo-exp]').setAttribute('data-todo-exp', expSet)
            zone.appendChild(copy)


            document.querySelector('[data-todo-btn]').value = ''

         }

      }

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






function choise() {

   document.addEventListener('click', (event) => {

      if (event.target.closest('[data-choise]')) {
         event.target.closest('[data-choise]').querySelector('.sample').classList.add('_active')
      } else {
         document.querySelector('.sample').classList.remove('_active')
      }

   })

   function difficultyLvl() {

      const btns = document.querySelectorAll('[data-lvl-anim]')

      btns.forEach((btn) => {

         btn.addEventListener('click', (event) => {

            const newBtns = document.querySelectorAll('[data-lvl-anim]')

            newBtns.forEach((newBtn) => {

               if (newBtn === event.target) {

                  event.target.classList.add('_active')
                  event.target.setAttribute('data-lvl-selected', '')


               } else {

                  newBtn.classList.remove('_active')
                  newBtn.removeAttribute('data-lvl-selected')


               }

            })

         })

      })

   }
   difficultyLvl()


   function selects() {

      const btns = document.querySelectorAll('[data-select-anim]')

      btns.forEach((btn) => {

         btn.addEventListener('click', (event) => {

            const newBtns = document.querySelectorAll('[data-select-anim]')

            newBtns.forEach((newBtn) => {

               if (newBtn === event.target) {

                  event.target.style.backgroundColor = 'rgba(26, 26, 26, 0.385)'
                  event.target.setAttribute('data-select-selected', '')



               } else {

                  newBtn.style.backgroundColor = 'transparent'
                  newBtn.removeAttribute('data-select-selected')


               }

            })

         })

      })

   }
   selects()


}
choise()



function store() {

   const btnShow = document.querySelector('[data-store-on]')

   btnShow.addEventListener('click', (event) => {
      document.querySelector('[data-store]').classList.add('_active')
   })
   const btnClose = document.querySelector('[data-store-cross]')

   btnClose.addEventListener('click', (event) => {
      document.querySelector('[data-store]').classList.remove('_active')
   })

}
store()


function buy() {


   const btns = document.querySelectorAll('[data-buy]')
   btns.forEach((btn) => {
      btn.addEventListener('click', (event) => {

         const currency = Number(document.querySelector('[data-main-currency]').innerHTML)
         const price = Number(event.target.innerHTML)

         if (currency >= price) {

            btn.style.backgroundColor = 'rgba(26, 26, 26, 0.385)'
            btn.innerHTML = 'Buyed'

            const newCurrency = currency - price
            document.querySelector('[data-main-currency]').innerHTML = newCurrency
            document.querySelector('[data-currency]').innerHTML = newCurrency
            document.querySelector('[data-currency]').setAttribute('data-currency', newCurrency)

         }

      })
   })


   document.addEventListener('click', (event) => {
      const currency = document.querySelector('[data-currency]').innerHTML

      document.querySelector('[data-main-currency]').innerHTML = currency


      const checkCurrency = Number(document.querySelector('[data-currency]').getAttribute('data-currency'))

      if (checkCurrency >= 30) {

         document.querySelector('[data-notification]').classList.add('_active')

         // console.log('yes');


      } else {

         document.querySelector('[data-notification]').classList.remove('_active')

         // console.log('no');

      }




   })



}
buy()


function tabs() {

   const btns = document.querySelectorAll('[data-tab]')

   btns.forEach((btn) => {

      btn.addEventListener('click', (event) => {

         event.target.classList.add('_active')

         const btnChecks = document.querySelectorAll('[data-tab]')
         btnChecks.forEach((btnCheck) => {

            if (btnCheck !== event.target) {

               btnCheck.classList.remove('_active')


            }

         })

         const val = event.target.getAttribute('data-tab')

         const body = document.querySelector(`[data-tab-body="${val}"]`)
         body.classList.add('_active')

         const bodyChecks = document.querySelectorAll('[data-tab-body]')
         bodyChecks.forEach((bodyCheck) => {

            if (bodyCheck !== body) {

               bodyCheck.classList.remove('_active')

            }

         })

      })

   })

}
tabs()





