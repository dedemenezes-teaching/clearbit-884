const authorization = "Bearer sk_86ee6f57f938a1770376051456b4d6e6";

const input = document.querySelector('#clearbitEmail')
const form = document.querySelector('#clearbitForm')

const userName = document.querySelector('#userName')
const userEmail = document.querySelector('#userEmail')
const userBio = document.querySelector('#userBio')
const userLocation = document.querySelector('#userLocation')

const setUserInfo = (json) => {
  userName.innerText = json.name.fullName
  userEmail.innerText = json.email
  userBio.innerText = json.bio
  userLocation.innerText = json.location
}

const callClearBitApi = (email) => {
  if (email != '') {
    fetch(`https://person.clearbit.com/v1/people/email/${email}`, {
      headers: { 'Authorization':  authorization }
    })
      .then(response => response.json())
      .then((data) => {
        // console.log(data)
        setUserInfo(data)
      })
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const value = input.value
  callClearBitApi(value)
})
