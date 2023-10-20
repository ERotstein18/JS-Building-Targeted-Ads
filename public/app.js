// get user's data
// get user's coordinates
async function getCoords() {
    let position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
    return [position.coords.latitude, position.coords.longitude]
}
console.log(getCoords())

// get user's time
function userTime() {
    const now = new Date()
    return now.getHours()
}
userTime()

// helper functions
// check time of day
function getMealTime() {
    const tod = userTime()
    if (tod > 20) { return 'late-night snack' }
    else if (tod > 16) { return 'dinner' }
    else if (tod > 11) {return 'lunch'}
    else { return 'breakfast' }
    
    //ternary way of writing
    // return tod > 20 ? 'late-night snack' : tod > 16 ? 'dinner' : tod > 11 ? 'lunch' : 'breakfast
}


// build ads
// build ad 1
function buildAd1() {
    const mealTime = getMealTime()
    let content = document.querySelector('.ad1')
    let inner = document.createElement('p')
    ad1Content.innerHTML = "We've got the best <span>${mealTime}</span> in town"
    ad1.append(adContent)
}
buildAd1()

// build ad 2
function buildAd2(coordinates, mealTime) {
    const coords = coordinates
    const href = 'https://www.google.com/maps/search/coffee/@${coords[0]}, ${coords[1]},15z/'
    let ad2 = document.querySelector('.ad2')
    let ad2Content = document.createElement('p')
    ad2Content.innerHTML = "It's time to try our coffee! <span><a href="${coffeelink}></span>"
    ad2.append(ad2Content)
}
console.log(buildAd2(getCoords()))
// event listeners
// on load, build ads
window.onload = async () => {
    const mealTime = getMealTime ()
    buildAd1(mealTime)
    const coords = await getCoords()
    buildAd2(coords)
}
