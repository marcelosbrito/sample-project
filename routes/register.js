const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const express = require('express')
const router = vertex.router()

router.post('/user', (req, res) => {

  const body = req.body

  res.json({
    confirmation: 'Sucess',
    route:'Register',
    data: body
  })


})


module.exports = router
