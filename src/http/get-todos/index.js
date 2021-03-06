const data = require('@begin/data')

exports.handler = async function todos () {
  let todos = await data.get({
    table: 'todos'
  })
  // Return oldest todo first
  todos.sort((a, b) => a.created > b.created)
  return {
    status: 201,
    type: 'application/json; charset=utf8',
    body: JSON.stringify({
      todos
    })
  }
}
