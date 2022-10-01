export const utilService = {
  makeId,
  makeLorem,
  getRandomIntInclusive,
  delay,
  averageRating,
  getReviewDate,
  getExploreTitle,
  getOrderDate,
  getClockTime,
  numberWithCommas,
}

function makeId(length = 6) {
  var txt = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return txt
}

function makeLorem(size = 100) {
  var words = [
    'The sky',
    'above',
    'the port',
    'was',
    'the color of television',
    'tuned',
    'to',
    'a dead channel',
    '.',
    'All',
    'this happened',
    'more or less',
    '.',
    'I',
    'had',
    'the story',
    'bit by bit',
    'from various people',
    'and',
    'as generally',
    'happens',
    'in such cases',
    'each time',
    'it',
    'was',
    'a different story',
    '.',
    'It',
    'was',
    'a pleasure',
    'to',
    'burn',
  ]
  var txt = ''
  while (size > 0) {
    size--
    txt += words[Math.floor(Math.random() * words.length)] + ' '
  }
  return txt
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function delay(ms = 1500) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

function averageRating(reviews) {
  let maxRating = reviews.reduce((total, review) => review.rate + total, 0)
  return +(maxRating / reviews.length).toFixed(1)
}

function getReviewDate(createdAt) {
  const currDate = Date.now()
  if (currDate - createdAt <= 1000 * 60 * 60 * 24) return 'now'
  if (currDate - createdAt <= 1000 * 60 * 60 * 24 * 7) return '1 week ago'
  if (currDate - createdAt <= 1000 * 60 * 60 * 24 * 30) return '1 month ago'
  if (currDate - createdAt <= 1000 * 60 * 60 * 24 * 60) return '2 months ago'
  if (currDate - createdAt <= 1000 * 60 * 60 * 24 * 90) return '3 months ago'
  if (currDate - createdAt <= 1000 * 60 * 60 * 24 * 180) return '6 months ago'
  if (currDate - createdAt > 1000 * 60 * 60 * 24 * 180) return '1 year ago'

//   if (value) {
//     const seconds = Math.floor((+new Date() - +new Date(value)) / 1000)
//     if (seconds < 60) return `${seconds} seconds ago`
//     const intervals = {
//       year: 31536000,
//       month: 2592000,
//       week: 604800,
//       day: 86400,
//       hour: 3600,
//       minute: 60,
//       second: 1,
//     }
//     let counter
//     for (const int in intervals) {
//       counter = Math.floor(seconds / intervals[int])
//       if (counter > 0) {
//         if (int === `year`) {
//           const dateValue = new Date(value)
//           const day = dateValue.getDate().toString().padStart(2, `0`)
//           const month = dateValue.getMonth().toString().padStart(2, `0`)
//           return `${day}/${month}/${dateValue.getFullYear()}`
//         }
//         if (counter === 1) {
//           return `${counter}  ${int} ago `
//         } else {
//           return `${counter}  ${int}s ago `
//         }
//       }
//     }
//   }
}
const categories = [
  'Digital Marketing',
  'Writing & Translation',
  'Video & Animation',
  'Music & Audio',
  'Programming & Tech',
  'Business',
  'Lifestyle',
  'Trending',
]
function getExploreTitle(category) {
  var title =
    category === 'graphics-and-design'
      ? 'Graphics & Design'
      : category === 'digital-marketing'
      ? 'Digital Marketing'
      : category === 'writing-and-translation'
      ? 'Writing & Translation'
      : category === 'video-and-animation'
      ? 'Video & Animation'
      : category === 'music-and-audio'
      ? 'Music & Audio'
      : category === 'programming-and-tech'
      ? 'Programming & Tech'
      : category === 'business'
      ? 'Business'
      : category === 'lifestyle'
      ? 'Lifestyle'
      : category === 'trending'
      ? 'Trending'
      : category === null
      ? 'Explore'
      : `Results for "${category}"`

  return title
}

function getOrderDate(createdAt, days) {
  const newDate = createdAt + 1000 * 60 * 60 * 24 * days
  return new Date(newDate).toLocaleDateString()
}

function getClockTime(createdAt) {
  let hours = new Date(createdAt).getHours()
  let minutes = new Date(createdAt).getMinutes()
  if (minutes < 10) minutes = '0' + minutes
  if (hours < 10) hours = '0' + hours
  return `${hours}:${minutes}`
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
