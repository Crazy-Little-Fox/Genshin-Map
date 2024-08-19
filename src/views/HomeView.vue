<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import { onMounted } from 'vue';
import{MapManager} from '../js/map-manager'
import FilterHeader from '../components/FilterHeader.vue'
onMounted(()=>{
  console.log('生命周期')
  init()
})
function init()
{ const mapManager= new MapManager('map')
   mapManager.enableClickDebug()
const markerList =[
  {
    lat:-99.96875,
    lng:125.71875,
    areaName:'碧水源'
  },
  {
    lat:-84.34375,
    lng:139.40625,
    areaName:'苍风高地'
  }
]
mapManager.renderAreaNames(markerList)
const pointMarkerList =[
  {
    lat:-99.96875,
    lng:125.71875,
    iconId:1
  },
]
mapManager.renderPoints(pointMarkerList)
}
</script>

<template>
  <div class="home-view">
    <div class="map-layer" id="map">
     <div class="ui-layer">
       <div class="filter-container">
         <div class="filter-content">
          <div class="close-btn">
            <div class="close-icon"></div>
          </div>
          <FilterHeader />
          <div class="search-container"></div>
      </div>
    </div>
    </div></div>
    </div>
</template>
<style scoped lang="less">
.home-view
{
  position: relative;
  width: 100vw;
  height: 100vh;
  .map-layer
  {
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height: 100%;
    z-index:1
  }
  .ui-layer{
    position: relative;
    left:0;
    top:0;
    height: 100%;
    z-index: 2;

    .filter-container{
      position:absolute;
      left:0;
      top:0;
      width: 415px;
      height: 100%;
      padding: 20px;
      .filter-content{
        position: relative;
        display: flex;
        flex-direction: column;
        background-color:#3b4354;
        width:100%;
        height: 100%;
        border-radius: 12px;
        .close-btn{
          position: absolute;
          width: 64px;
          height: 40px;
          right: -40px;
          top:32px;
          background-image: url('../assets/images/ui/close-bg.png');
          background-size: cover;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          padding-left:18px;
        }
        .search-container{
          width: 100%;
          height: 52px;
        }
      }
  }
  }
 
}
</style>
