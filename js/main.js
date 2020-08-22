

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

// set carrot: up (positive), down (negative)
const setCarrot = (num, carrot) => {
    elem = document.getElementById(carrot)
    if (num > 0) {
        elem.classList.add('fa-caret-up') 
        elem.classList.remove('fa-caret-down')
    } 
    else {
        elem.classList.remove('fa-caret-up') 
        elem.classList.add('fa-caret-down')
    }
}

// calculate total followers for all media
const setTotalFollowers = () => {
    total = "" + facebook['followers']
    document.getElementById('total-followers').innerHTML = total;
}

// display facebook data
const displayFacebook = () => {
    // Page fields
    const userField = document.getElementById('fb-user')
    const followerField = document.getElementById('facebook-followers')
    const mainTrend = document.getElementById('facebook-follower-trend')
    const mainTrendField = 'facebook-follow-num'
    const mainTrendCaret = 'fb-follower-trend-caret'
    const secondaryCount = document.getElementById('facebook-page-views')
    const secondaryTrend = document.getElementById('fb-view-trends')
    const secondaryTrendField = document.getElementById('fb-view-percent')
    const secondaryCaret = "fb-view-caret"
    const tertiaryCount = document.getElementById('fb-like-num')
    const tertiaryTrend = document.getElementById('fb-like-trend')
    const tertiaryTrendField =document.getElementById('fb-like-percent')
    const tertiaryCaret = 'fb-like-caret' 

    // Data values
    let user = facebook['username']
    let followers = facebook['followers']
    let todayFollow = facebook['followersToday']
    let countSecondary = facebook['views']
    let trendSecondary = facebook['viewTrend']
    let countTertiary = facebook['likes']
    let trendTertiary = facebook['likeTrend']

    // Set for primary card
    userField.innerHTML = user
    followerField.innerHTML = followers
    mainTrend.style.color = getTrendColor(todayFollow)
    setCarrot(todayFollow, mainTrendCaret)
    document.getElementById(mainTrendField).innerHTML = Math.abs(todayFollow)
    
    // Set fields secondary card
    secondaryCount.innerHTML = countSecondary
    secondaryTrend.style.color = getTrendColor(trendSecondary)
    secondaryTrendField.innerHTML = Math.abs(trendSecondary)
    setCarrot(secondaryTrend,secondaryCaret)

    // Set fields for tertiary card
    tertiaryCount.innerHTML = countTertiary
    tertiaryTrend.style.color = getTrendColor(trendTertiary)
    tertiaryTrendField.innerHTML = Math.abs(trendTertiary)
    setCarrot(tertiaryTrend,  tertiaryCaret)
    
}

setTotalFollowers();
displayFacebook();