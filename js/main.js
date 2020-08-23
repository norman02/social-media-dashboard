

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


const setCarrot = (num, carrot) => {
    elem = document.getElementById(carrot)
    if (num > 0) {
        elem.classList.add('fa-caret-up')     
    } 
    else {      
        elem.classList.add('fa-caret-down')
    }
}

// calculate total followers for all media
const setTotalFollowers = () => {
    total =  facebook['followers'] + twitter['followers'] + instagram['followers'] + youtube['followers']
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
    setCarrot(trendSecondary,secondaryCaret)

    // Set fields for tertiary card
    tertiaryCount.innerHTML = countTertiary
    tertiaryTrend.style.color = getTrendColor(trendTertiary)
    tertiaryTrendField.innerHTML = Math.abs(trendTertiary)
    setCarrot(trendTertiary,  tertiaryCaret)
    
}

// display twitter data
const displayTwitter = () => {
    // Page fields
    const userField = document.getElementById('twitter-user')
    const followerField = document.getElementById('twitter-followers')
    const mainTrend = document.getElementById('twitter-follower-trend')
    const mainTrendField = 'twitter-follower-num'
    const mainTrendCaret = 'twitter-follower-trend-caret'
    const secondaryCount = document.getElementById('twitter-retweets')
    const secondaryTrend = document.getElementById('twitter-retweet-trends')
    const secondaryTrendField = document.getElementById('twitter-retweet-percent')
    const secondaryCaret = "twitter-retweet-caret"
    const tertiaryCount = document.getElementById('twitter-likes')
    const tertiaryTrend = document.getElementById('twitter-like-trend')
    const tertiaryTrendField =document.getElementById('twitter-like-percent')
    const tertiaryCaret = 'twitter-like-carrot' 

    // Data values
    let user = twitter['username']
    let followers = twitter['followers']
    let todayFollow = twitter['followersToday']
    let countSecondary = twitter['retweets']
    let trendSecondary = twitter['retweetTrend']
    let countTertiary = twitter['likes']
    let trendTertiary = twitter['likeTrend']

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
    setCarrot(trendSecondary ,secondaryCaret)

    // Set fields for tertiary card
    tertiaryCount.innerHTML = countTertiary
    tertiaryTrend.style.color = getTrendColor(trendTertiary)
    tertiaryTrendField.innerHTML = Math.abs(trendTertiary)
    setCarrot(trendTertiary,  tertiaryCaret)
    
}
// display instagram data 
const displayInstagram = () => {
    // Page fields
    const userField = document.getElementById('insta-user')
    const followerField = document.getElementById('instagram-followers')
    const mainTrend = document.getElementById('instagram-folower-trend')
    const mainTrendField = 'instagram-follow-num'
    const mainTrendCaret = 'insta-caret'
    const secondaryCount = document.getElementById('insta-likes')
    const secondaryTrend = document.getElementById('insta-like-trends')
    const secondaryTrendField = document.getElementById('insta-like-percent')
    const secondaryCaret = "insta-like-caret"
    const tertiaryCount = document.getElementById('insta-views')
    const tertiaryTrend = document.getElementById('insta-view-trend')
    const tertiaryTrendField =document.getElementById('insta-view-percent')
    const tertiaryCaret = 'insta-view-carrot' 

    // Data values
    let user = instagram['username']
    let followers = instagram['followers']
    let todayFollow = instagram['followersToday']
    let countSecondary = instagram['likes']
    let trendSecondary = instagram['likeTrend']
    let countTertiary = instagram['views']
    let trendTertiary = instagram['viewTrend']

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
    setCarrot(trendSecondary ,secondaryCaret)

    // Set fields for tertiary card
    tertiaryCount.innerHTML = countTertiary
    tertiaryTrend.style.color = getTrendColor(trendTertiary)
    tertiaryTrendField.innerHTML = Math.abs(trendTertiary)
    setCarrot(trendTertiary,  tertiaryCaret)
    
}

setTotalFollowers();
displayFacebook();
displayTwitter()
displayInstagram()