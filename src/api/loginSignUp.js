import request from 'superagent'
const url = '/api/v1/users'

export function loginRequest(credentials) {
  return request
    .post(`${url}/loginRequest`)
    .send(credentials)
    .then((res) => res.body)
}

export function signUpRequest(credentials) {
  return request
    .post(`${url}/signUp`)
    .send(credentials)
    .then((res) => res.body)
}
