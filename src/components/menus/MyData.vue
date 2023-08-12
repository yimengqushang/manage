<template>
  <div>
    <h4 class="text-center">数据详情</h4>
    <ChartDate />
    <ChartRightPie />
    <ChartPie />
  </div>
</template>

<script>
import ChartDate from '@/components/echart/data.vue';
import ChartRightPie from '@/components/echart/rightPie.vue';
import ChartPie from '@/components/echart/pie.vue';
export default {
  name: 'MyData',
  components: {
    ChartDate,
    ChartRightPie,
    ChartPie
  }
}
</script>

<style lang="less" scoped></style>