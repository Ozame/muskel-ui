// Contacting api is handled here
var SERVER_URL = 'http://localhost:8000'

export const getExercises = async () => {
  const url = `${SERVER_URL}/exercises`
  try {
    const resp = await fetch(url)
    const exercises = await resp.json()
    return exercises
  } catch (err) {
    console.log(err)
  }
}

export const getExercise = async id => {
  const url = `${SERVER_URL}/exercises/${id}`
  try {
    const resp = await fetch(url)
    const exercise = await resp.json()
    return exercise
  } catch (err) {
    console.log(err)
  }
}

export const postExercise = async newExercise => {
  const url = `${SERVER_URL}/exercises`
  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newExercise)
    })
    const exercise = await resp.json()
    return exercise
  } catch (err) {
    console.log(err)
  }
}

export const getTemplates = async () => {
  const url = `${SERVER_URL}/templates`
  try {
    const resp = await fetch(url)
    const templates = await resp.json()
    return templates
  } catch (err) {
    console.log(err)
  }
}
