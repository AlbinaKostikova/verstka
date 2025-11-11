const sendForm = () => {
  const form = document.querySelector('.modal')

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const text = form.querySelector('input[type="text"]')
    const tel = form.querySelector('input[type="tel"]')
    const email = form.querySelector('input[type="email"]')

    const sendObj = {
      name: text.value.trim(),
      phone: tel.value.trim(),
      email: email.value.trim(),
    }

     if (!sendObj.name || !sendObj.phone || !sendObj.email) {
      alert('⚠️ Пожалуйста, заполните все поля перед отправкой формы.')
      return
    }

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(sendObj),
      })

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`)
      }

      const data = await response.json()
      console.log('✅ Успешно отправлено:', data)
      alert('Форма успешно отправлена! ✅')

      form.reset()
    } catch (error) {
      console.error('❌ Ошибка при отправке данных:', error)
      alert('Произошла ошибка при отправке данных. Попробуйте снова позже 😞')
    } finally {
      console.log('📩 Запрос завершён')
    }
  })
}

sendForm()
