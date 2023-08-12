<template>
  <div id="linkage-data-sharing"></div>
</template>

<script>
export default {
  name: 'ChartDate',
  methods: {
    MychartDate() {
      const myChart = this.$echarts.init(document.getElementById('linkage-data-sharing'));
      myChart.setOption({
        legend: {},
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        dataset: {
          source: [
            ['时间', '2012', '2013', '2014', '2015', '2016', '2017'],
            ['奶茶', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
            ['抹茶拿铁', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
            ['核桃布朗尼蛋糕', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
            ['奶酪可可', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '10%' },
        series: [
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
        ]
      })
      window.addEventListener('resize', myChart.resize);
    },
  },
  mounted() {
    this.MychartDate()
  },
  beforeDestroy() {
    window.removeEventListener('resize', myChart.resize);
  }
}
</script>

<style lang="less" scoped>
#linkage-data-sharing {
  // float: left;
  display: inline-block;
  width: 60%;
  height: 500px;
  top: 100px;
}
</style>