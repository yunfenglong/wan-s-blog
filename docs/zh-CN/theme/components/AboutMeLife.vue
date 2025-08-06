<template>
  <div class="about-me-card-bg vp-blog-post-item about-me-life">
    <div style="margin-left: 20px">
      <p class="about-me-card-title-normal">生活</p>
      <p class="about-me-card-text-big">我的一天</p>
    </div>
    <div ref="chartRef" class="chart-container"></div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import * as echarts from 'echarts';

const chartRef = ref(null);

const lifeData = [
  {name: '学习', value: 8},
  {name: '生活', value: 8},
  {name: '游戏', value: 3},
  {name: '阅读', value: 2},
  {name: '做饭', value: 4},
  {name: '工作', value: 2}
];
onMounted(() => {
  const myChart = echarts.init(chartRef.value);

  const option = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: '我的生活',
        type: 'pie',
        radius: ['50%', '80%'],
        center: ['50%', '60%'],
        startAngle: 180,
        endAngle: 360,
        data: lifeData
      }
    ]
  };

  myChart.setOption(option);

  window.addEventListener('resize', () => {
    myChart.resize();
  });
});
</script>

<style scoped>

.about-me-life {
  height: 316px;
  padding: 20px 0;
  overflow: inherit;
}

.chart-container {
  height: 100%;
}
</style>
