// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

const profiles = {
    cstrife: {
        image: '/images/cloud.png',
        name: 'Cloud Strife',
        company: 'Merc',
        skills: ['Triple Slash','Disorder','Braver']
    },
    tlock: {
        image: '/images/tifa.png',
        name: 'Tifa Lockhart',
        company: 'Seventh Heaven',
        skills: ['Starshower','Focused Strike','Divekick']
    }
}

router.get('/', (req, res) => {
  res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' })
})

//POST, GET, PUT, DELETE

router.get('/profiles', (req, res) => {
  var list = [];

  for (var [key] of Object.entries(profiles))
       if (profiles.hasOwnProperty(key))
       list.push(key)

console.log(list);

  const data = {
    profiles: list,
    timestamp: req.timestamp
  }

  res.render('profiles', data)

})

router.post('/addprofile', (req, res) => {

  const body = req.body
  body['skills'] = req.body.skills.split(', ')

  profiles[body.username] = body
  res.redirect('/profile/'+body.username)

})

router.get('/:profile/:username', (req, res) => {
    const profile = req.params.profile
    const username = req.params.username
    const currentprofile = profiles[username]

    if (currentprofile == null){
      res.json({
        confirmation: 'fail',
        message: 'Profile '+ username +' not found.'
      })
      return
    }

      currentprofile.timestamp= req.timestamp
      res.render('profile', currentprofile)

})
module.exports = router
