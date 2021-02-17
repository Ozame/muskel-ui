// Contacting api is handled here
var SERVER_URL = 'http://localhost:8000'

// eslint-disable-next-line
let inMemoryToken

function login ({ jwtToken, jwtTokenExpiry }, noRedirect) {
  inMemoryToken = {
    token: jwtToken,
    expiry: jwtTokenExpiry
  }
  if (!noRedirect) {
    console.log('No redirect if')
  }
}

export const postLogin = async (username, password) => {
  const url = `${SERVER_URL}/token`
  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    const { token } = await resp.json()
    login(token)
  } catch (err) {
    console.log(err)
  }
}

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

export const putExercise = async updated => {
  const url = `${SERVER_URL}/exercises/${updated.uuid}`
  try {
    const resp = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updated)
    })
    const exercise = await resp.json()
    return exercise
  } catch (err) {
    console.log(err)
  }
}

export const deleteExercise = async id => {
  const url = `${SERVER_URL}/exercises/${id}`
  try {
    await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
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

export const postTemplate = async newTemplate => {
  const url = `${SERVER_URL}/templates`
  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTemplate)
    })
    const template = await resp.json()
    return template
  } catch (err) {
    console.log(err)
  }
}

export const deleteTemplate = async tempId => {
  const url = `${SERVER_URL}/templates/${tempId}`
  try {
    await fetch(url, {
      method: 'DELETE'
    })
  } catch (err) {
    console.log(err)
  }
}

export const PostExerciseToTemplate = async (tempId, ex) => {
  const url = `${SERVER_URL}/templates/${tempId}/exercises`
  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ex)
    })
    const saved = resp.json()
    return saved
  } catch (err) {
    console.log(err)
  }
}

export const deleteExerciseFromTemplate = async (tempId, exId) => {
  const url = `${SERVER_URL}/templates/${tempId}/exercises/${exId}`
  try {
    await fetch(url, {
      method: 'DELETE'
    })
  } catch (err) {
    console.log(err)
  }
}
