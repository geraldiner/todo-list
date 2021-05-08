const deleteBtns = document.querySelectorAll('.markDelete')
deleteBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener('click', deleteTodo)
})

const doneBtns = document.querySelectorAll('.markDone')
doneBtns.forEach((doneBtn) => {
  doneBtn.addEventListener('click', markDone)
})

async function deleteTodo(e) {
  const todoText = this.parentNode.childNodes[1].innerText.trim()
  try {
    const response = await fetch('deleteTodo', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'text': todoText
      })
    })
    const data = await response.json()
    location.reload()
  } catch (error) {
    console.error(error)
  }
}

async function markDone(e) {
  const todo = this.parentNode.childNodes[1]
  const todoState = todo.classList.contains('done')
  const todoText = todo.innerText.trim()
  try {
    const response = await fetch('markTodo', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'text': todoText,
        'state': !todoState
      })
    })
    const data = await response.json()
    location.reload()
  } catch (error) {
    console.error(error)
  }
}