<template>
  <div id="sales-volume"></div>
</template>

<script>
export default {
  name: 'ChartRightPie',
  methods: {
    MyChartRightPie() {
      const myChartRightPie = this.$echarts.init(document.getElementById('sales-volume'))
      myChartRightPie.setOption({
        title: {
          text: '商品销量',
          left: 'center',
          top: '25px',
          textStyle: {
            color: 'red'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'right',
          top: '45px'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '奶茶' },
              { value: 735, name: '抹茶拿铁' },
              { value: 580, name: '核桃布朗尼蛋糕' },
              { value: 484, name: '奶酪可可' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
      window.addEventListener('resize', myChartRightPie.resize);
    },
  },
  mounted() {
    this.MyChartRightPie()
  }

}
</script>

<style lang="less" scoped>
#sales-volume {
  // float: left;
  display: inline-block;
  width: 35%;
  height: 500px;
  top: 100px;
}
</style>