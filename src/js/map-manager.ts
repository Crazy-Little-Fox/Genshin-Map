import L from 'leaflet'
interface AreaNameconfig {
  lat:number,
  lng:number,
  areaName:string
}
interface PointConfig
{
  lat:number,
  lng:number,
  iconId:number
}
export class MapManager
{
  private map: L.Map
  private areaNameLayerGroup:L.LayerGroup | undefined
  private pointLayerGroup:L.LayerGroup | undefined
  constructor(domId:string)
  {
    const bounds = L.latLngBounds(L.latLng(0,0),L.latLng(-256,256))
    this.map = L.map(domId, {
    center: [-102,148],
    maxBounds : bounds,
    crs:L.CRS.Simple,
    zoom: 5,
    zoomControl:false,
    attributionControl:false,
    maxZoom:7,
    minZoom:4
})
L.tileLayer('images/map/{z}/{x}/{y}.png', {
  bounds,
    maxZoom: 7,
}).addTo(this.map);
  }
  renderAreaNames(configList:AreaNameconfig[])
  {
    const markers=configList.map((item)=>{
        const{lat,lng,areaName}=item
        const marker=L.marker(L.latLng(lat,lng),
        {
          icon:L.divIcon(
            {
              className:'map-marker-item',
               html:`<div class="area-mark-item">${areaName}</div>`
            }
          )
        }
      )
      return marker
      })
      
      this.areaNameLayerGroup=L.layerGroup(markers)
      this.areaNameLayerGroup.addTo(this.map)
  }
  renderPoints(pointList:PointConfig[])
  {
  const pointMarkers= pointList.map((item)=>{
  const {lat,lng,iconId}=item
  const iconUrl=`images/map-icon/${iconId}.png`
  const marker=L.marker(L.latLng(lat,lng),
  {
    icon:L.divIcon(
      {
        className:'map-point-Item',
        html:`<div class="point-item-container"><div calss="point-pic" style=background-image:url(${iconUrl})></div></div>`
      }
    )
  }
)
      return marker
})
this.pointLayerGroup=L.layerGroup(pointMarkers)
this.pointLayerGroup.addTo(this.map)

  }
  enableClickDebug(){
    this.map.on('click', (workingLayer)=>{
        const cordinate = workingLayer.latlng
        console.log('cordinate',cordinate);
      });
  }
}