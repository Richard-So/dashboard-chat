import request from 'superagent'
const url = '/api/v1/nzx'

export function getSymbolDetails(symbol) {
  return request
    .post(`${url}`)
    .send(symbol)
    .then((res) => res.body)
}
