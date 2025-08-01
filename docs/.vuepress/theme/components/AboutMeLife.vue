<template>
  <div class="about-me-card-bg vp-blog-post-item about-me-life">
    <div style="margin-left: 20px">
      <p class="about-me-card-title-normal">Life</p>
      <p class="about-me-card-text-big">Ingredients</p>
    </div>
    <div ref="chartRef" class="chart-container"></div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import * as echarts from 'echarts';

const chartRef = ref(null);

const lifeData = [
  {name: 'School', value: 8},
  {name: 'Life', value: 8},
  {name: 'Game', value: 3},
  {name: 'Read', value: 2},
  {name: 'Cook', value: 4},
  {name: 'Work', value: 2}
];
onMounted(() => {
  const myChart = echarts.init(chartRef.value);

  const option = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Ingredients of my day',
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
