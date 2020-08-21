

/* ====== Data ====== */

// Data from facebook API
const facebook =
{
    name: 'facebook',
    username: '@nathanf',
    followers: 1987,
    followersToday: 12,
    views: 87,
    viewTrend: 3,
    likes: 52,
    likeTrend: -2,
}

//Data from twitter API
const twitter = {
    username: '@nathanf',
    followers: 1044,
    followersToday: 99,
    retweets: 177,
    retweetTrend: 303,
    likes: 507,
    likeTrend: 553
}

//Data from instagram API
const instagram = {
    username: '@realnathanf',
    followers: 11000,
    followersToday: 1099,
    likes: 5462,
    likeTrend: 2257,
    views: 52000,
    viewTrend: 1375,
}

//Data from youtube API
const youtube = {
    username: 'Nathan F.',
    followers: 8239,
    followersToday: -144,
    likes: 107,
    likeTrend: -19,
    views: 1407,
    viewTrend: -12,
}

/* ====== Functions ======= */

// set color: green (positive), red (negative)
const getTrendColor = (num) => {
    if (num > 0) {
        return '#1eb589'
    } else {
        return '#DC414C'
    }
}

// calculate total followers for all media
const setTotalFollowers = () => {
    total = "" + facebook['followers']
    document.getElementById('total-followers').innerHTML = total;
}

// set page fields with facebook data
const setFacebook = () => {

}

setTotalFollowers();
setFacebook();