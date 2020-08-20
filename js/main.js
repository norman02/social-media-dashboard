const totalFollowers = document.getElementById('total-followers')


const calculateTotal = () => {
    total = "" + socials[0]['followers']
    return total
}

const socials = [
    {
        name: 'facebook',
        username: '@nathanf',
        followers: 1987,
        'new-followers': 12,
        views: 87,
        'view-trend': 3,
        likes: 52,
        'like-trend': -2,
    }
]
const getTrendColor = (num)=> {
    if (num > 0) {
        return '#1eb589'
    } else {
        return '#DC414C'
    }
}

const getFacebook = () => {
    const followTrend = socials[0]['new-followers']
    const viewTrend = socials[0]['view-trend'];
    const likeTrend = socials[0]['like-trend']
    document.getElementById('user').innerHTML = socials[0]['username']
    document.getElementById('facebook-followers').innerHTML = socials[0]['followers']
    document.getElementById('facebook-folower-trend').style.color = getTrendColor(followTrend)
    document.getElementById('facebook-follow-num').innerHTML = followTrend;
    document.getElementById('facebook-page-views').innerHTML = socials[0]['views']  
    document.getElementById('fb-view-trends').style.color = getTrendColor(viewTrend);
    document.getElementById('fb-view-percent').innerHTML =
    viewTrend;
    document.getElementById('fb-like-num').innerHTML =
    socials[0]['likes'];
    document.getElementById('fb-like-trend').style.color = getTrendColor(likeTrend);
    document.getElementById('fb-like-percent').innerHTML = likeTrend;
}

const populateFields = () => {
    totalFollowers.innerHTML = calculateTotal()
    getFacebook()
}

populateFields()