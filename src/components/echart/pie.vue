<template>
    <div class="content">
        <div id="total-orders-chart"></div>
    </div>
</template>
  
<script>
export default {
    name: 'ChartPie',
    methods: {
        MychartPie() {
            const chartDom = document.getElementById('total-orders-chart')
            const chart = this.$echarts.init(chartDom)

            chart.setOption({
                backgroundColor: '#2c343c',
                title: {
                    text: '人员分布',
                    left: 'center',
                    top: 20,
                    textStyle: {
                        color: '#ccc'
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                visualMap: {
                    show: false,
                    min: 20,
                    max: 600,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '50%'],
                        data: [
                            { value: 435, name: '湖北省' },
                            { value: 310, name: '广东省' },
                            { value: 274, name: '山西省' },
                            { value: 235, name: '陕西省' },
                            { value: 390, name: '湖南省' }
                        ].sort(function (a, b) {
                            return a.value - b.value;
                        }),
                        roseType: 'radius',
                        label: {
                            color: 'rgba(255, 255, 255, 0.6)'
                        },
                        labelLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.6)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        },
                        itemStyle: {
                            // color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                            return Math.random() * 200;
                        }
                    }
                ]
            })
            window.addEventListener('resize', chart.resize);
        }
    },
    mounted() {
        this.MychartPie()
    },
    beforeDestroy() {
        window.removeEventListener('resize', chart.resize);
    }
}
</script>
  
<style lang="less" scoped>
#total-orders-chart {
    top: 140px;
    width: 100%;
    height: 500px;
}
</style>