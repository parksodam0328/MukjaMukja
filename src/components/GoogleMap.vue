<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
export default {
  name: 'google-map',
  props: ['name'],
  data() {
    return {
      mapName: this.name + "-map",
      center: { lat: 45.508, lng: -73.587 },
      currentMarker: null,
      currentPlace: null,
      bakeryMarker: []
    };
  },

  mounted(){
    this.geolocate();
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    geolocate: function(){
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        const element = document.getElementById(this.mapName)
        const options = {
          zoom: 14,
          center: new google.maps.LatLng(this.center.lat,this.center.lng)
        }
        const currentPosition = new google.maps.LatLng(this.center.lat,this.center.lng);
        const map = new google.maps.Map(element, options);
        const marker = new google.maps.Marker({
          position : currentPosition,
          map: this.map
        });
        marker.setMap(map)

      });
    },

  }
};
</script>

<style scoped>
.google-map {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: gray;
}
</style>
