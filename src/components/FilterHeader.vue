<script lang="ts">

</script>
<template>
  <div class="filter-header">
  <div class="header-icon"></div>
  <div class="header-name">提瓦特大陆</div>
  <div class="switch-btn">
    <div class="switch-icon"></div>
    <div class="switch-text">切换</div>
  </div>
  </div>
</template>
<style scoped lang="less">
.filter-header{
  display: flex;
  align-items: center;
  padding: 12px 7px 7px 10px;
  color:#d3bc8e;
  .header-icon{
    width: 40px;
    height: 40px;
    background-image: url('../assets/images/ui/xumi-icon.png');
    background-size: cover;
    margin-right: 5px;
  }
  .header-name{
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
  }
  .switch-btn{
    display: flex;
    align-items: center;
    padding-right: 8px;
    padding-left:4px;
    background-color: #4a5366;
    border-radius: 12px;
    .switch-icon{
      width: 16px;
      height: 16px;
      background-size: cover;
      background-image: url('../assets/images/ui/switch-btn.png');
    }
    .switch-text{
      font-size:12px;
    }
  }

}
</style>