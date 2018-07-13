function contactMap(targetId) {
    console.log("-------------> "+ targetId)
    var coordinate = {lat: -7.797068, lng: 110.370529};
    var map = new google.maps.Map(document.getElementById(targetId), {
        zoom       : 13,
        center     : coordinate,
        scrollwheel: false
    });

}
