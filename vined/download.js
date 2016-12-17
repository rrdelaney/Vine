const got = require('got')
const { Vine } = require('./models')

const getURL = (user, page) => `https://vine.co/api/timelines/users/${user}/likes?page=${page}&size=10`

const getPage = (user, page) =>
  got(getURL(user, page), { json: true })
    .then(res => res.body.data)
    .then(({ nextPage, records }) =>
      Promise.all(records.map(r => {
        // Vine.create({})
      }))
      .then(() => nextPage && getPage(user, nextPage))
    )

module.export = user => getPage(user, 1)
