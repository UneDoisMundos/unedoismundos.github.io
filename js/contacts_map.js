function myMap() {
    myCenter = new google.maps.LatLng(40.2147661, -8.4091276);
    var mapOptions = {
        center: myCenter,
        zoom: 12,
        scrollwheel: true,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter,
    });
    marker.setMap(map);
}