//modal import
import Modal from './modal.js'

const modal = Modal()

//change style modal
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//buttons check class
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  //add escuta
  button.addEventListener('click', handleClick)
})

//botão delete clicado abre modal
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
  //stop change the url
  event.preventDefault()
  //variavel - if (?) else (:)
  const text = check ? 'Marcar como lida' : 'Excluir'
  const slug = check ? 'check' : 'delete'
  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id

  //repass info
  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  //change title / descript / button
  modalTitle.innerHTML = `${text} esta pergunta`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
  //change color button
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
  //abrir modal
  modal.open()
}
