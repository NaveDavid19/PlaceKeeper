'use strict'

function initMap(lat = 31, lng = 31) {

    const elMap = document.querySelector('.map')
    const mapOptions = {
        center: { lat, lng },
        zoom: 16
    }
    const map = new google.maps.Map(elMap, mapOptions)

    const markerOptions = {
        position: { lat, lng },
        map,
        title: 'Hello World!'
    }
    const marker = new google.maps.Marker(markerOptions)
}