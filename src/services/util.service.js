export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    delay,
    averageRating,
    getReviewDate,
    getExploreTitle
}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function delay(ms = 1500) {
    return new Promise(resolve => {
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
    var title = (category === 'graphics-and-design') ? 'Graphics and Design' :
        (category === 'digital-marketing') ? 'Digital Marketing' :
            (category === 'writing-and-translation') ? 'Writing and Translation' :
                (category === 'video-and-animation') ? 'Video and Animation' :
                    (category === 'music-and-audio') ? 'Music and Audio' :
                        (category === 'business') ? 'Business' :
                            (category === 'lifestyle') ? 'Lifestyle' :
                                'Trending'


    return title
}