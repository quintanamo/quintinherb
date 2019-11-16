// APP ID :  YUbggghe0VppxSYxpZNP
// APP KEY:  -IsLmtDS1XkO6JUO_m5__5Cf9kqWdZL_ZF4XAcGO1EE

const APP_ID = 'YUbggghe0VppxSYxpZNP';
const APP_KEY = '-IsLmtDS1XkO6JUO_m5__5Cf9kqWdZL_ZF4XAcGO1EE';

let platform = new H.service.Platform({
    'apikey': APP_KEY
});

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function findRandomRestaurant() {
    let postalCode = document.getElementById('search-bar').value;
    if (postalCode.length != 5) {
        document.getElementById('postal-code-error').style.display = 'block';
    } else {
        // first see what types to look for
        let typesList = [];
        let searchForTypes = document.getElementsByClassName('themes');
        for (let type of searchForTypes) {
            if (type.checked) {
                typesList.push(type.value);
            }
        }

        let potentialRestaurants = [];

        document.getElementById('postal-code-error').style.display = 'none';
        postalCode = JSON.parse(httpGet("https://geocoder.api.here.com/6.2/geocode.json?app_id=kiFe1HYbzqFRuMeKl1f3&app_code=yBj_wLCOe9Iw3Fbcf0S-kg&country=USA&postalcode="+postalCode));
        let coordinates = postalCode.Response.View[0].Result[0].Location.DisplayPosition.Latitude + "," + postalCode.Response.View[0].Result[0].Location.DisplayPosition.Longitude;
        let requestData = JSON.parse(httpGet("https://places.cit.api.here.com/places/v1/browse?in="+coordinates+";r=5000&q=restaurant&app_id=kiFe1HYbzqFRuMeKl1f3&app_code=yBj_wLCOe9Iw3Fbcf0S-kg"));

        for (let item of requestData.results.items) {
            if (typesList.length > 0) {
                if (item.tags) {
                    for (let type of typesList) {
                        for (let tag of item.tags) {
                            if (type.toLowerCase() == tag.id.toLowerCase() && !potentialRestaurants.includes(item.title)) {
                                potentialRestaurants.push(item.title);
                            }
                        }
                    }
                }
            } else {
                if (!potentialRestaurants.includes(item.title)) potentialRestaurants.push(item.title);
            }
        }

        if (potentialRestaurants.length == 0) {
            alert("No places match your critera.  Please try again.");
        } else {
            let randNum = Math.floor(Math.random() * potentialRestaurants.length);
            if (randNum < 0) randNum = 0;
            if (randNum > potentialRestaurants.length - 1) randnum = potentialRestaurants.length - 1;
            let randomPlace = potentialRestaurants[randNum];
            document.getElementById('result').textContent = randomPlace;
            document.getElementById('modal').style.display = 'block';
        }
    }
}

function goBack() {
    document.getElementById('modal').style.display = 'none';
}