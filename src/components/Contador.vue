<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['id'])

const nombres = {
  1: "Diego",
  2: "Julia",
  3: "Paps",
  4: "Moms"
}

const idIntervalo = ref(null),
 countDownToTime = ref(new Date("2023-12-25 00:00:00").getTime()),
 dias = ref(0),
 horas = ref(0),
 minutos = ref(0),
 segundos = ref(0);

const startTimer = () => {
      if(segundos.value < 0) clearInterval(idIntervalo.value)

      const timeNow = new Date().getTime();
      const timeDifference = countDownToTime.value - timeNow;
      const millisecondsInOneSecond = 1000;
      const millisecondsInOneMinute = millisecondsInOneSecond * 60;
      const millisecondsInOneHour = millisecondsInOneMinute * 60;
      const millisecondsInOneDay = millisecondsInOneHour * 24;
      const differenceInDays = timeDifference / millisecondsInOneDay;
      const remainderDifferenceInHours = (timeDifference % millisecondsInOneDay) / millisecondsInOneHour;
      const remainderDifferenceInMinutes = (timeDifference % millisecondsInOneHour) / millisecondsInOneMinute;
      const remainderDifferenceInSeconds = (timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond;

      dias.value = Math.floor(differenceInDays);
      horas.value = Math.floor(remainderDifferenceInHours);
      minutos.value = Math.floor(remainderDifferenceInMinutes);
      segundos.value = Math.floor(remainderDifferenceInSeconds);
    }

onMounted(() => {
  startTimer();
  idIntervalo.value = setInterval(startTimer, 1000);
})
</script>

<template>
  <div class="contador" v-if="segundos >= 0">
    <div class="contador__item">
      <h2 class="contador__numero">{{ dias }}</h2>
      <h3 class="contador__tetxt">DÍAS</h3>
    </div>
    <div class="contador__item">
      <h2 class="contador__numero">{{ horas }}</h2>
      <h3 class="contador__tetxt">HORAS</h3>
    </div>
    <div class="contador__item">
      <h2 class="contador__numero">{{ minutos }}</h2>
      <h3 class="contador__tetxt">MINUTOS</h3>
    </div>
    <div class="contador__item">
      <h2 class="contador__numero">{{ segundos }}</h2>
      <h3 class="contador__tetxt">SEGUNDOS</h3>
    </div>
  </div>
  <div v-else>
    <h1>Regalo para {{ nombres[id] }}</h1>

  </div>
</template>

<style scoped>
.contador {
  display: flex;
  justify-content: space-between;
  align-items: center;

  column-gap: 1rem;
}
</style>
