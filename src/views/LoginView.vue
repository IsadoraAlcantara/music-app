<script setup>
import { ref } from 'vue'
import { EyeOff, Eye } from '../components/icons'

const showPass = ref(false);
</script>
<template>
  <main>
    <h1>Seja bem-vindo!</h1>
    <div class="inputs">
      <input class="name-input" type="text" placeholder="Nome do usuário" />
      <label class="pass-input">
        <input :type="showPass? 'text': 'password'" placeholder="Senha" />
        <EyeOff v-if="!showPass" @click="showPass = !showPass" />
        <Eye v-if="showPass" @click="showPass = !showPass" />
      </label>
    </div>
    <button>Entrar</button>
  </main>
</template>
<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(https://i.ibb.co/v409cMRK/Apresenta-o-para-Confer-ncia-Workshop-de-Lideran-a-Webinar-Azul-Formas-Org-nicas.png);
  width: 100vw;
  height: 100vh;
  gap: 8%;
}

h1 {
  color: var(--white);
  font-weight: 500;
  font-size: 3.3em;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 28vw;

  & input {
    font-size: 1.3em;
    color: var(--white);    
    outline: none;
  }

  & .name-input {
    width: 100%;
    padding: 14px 35px;
    border-radius: 30px;
    border: solid 2px var(--white);
    background-color: transparent;
  }

  & .pass-input {
    width: 100%;
    padding: 9px 35px;
    border-radius: 30px;
    border: solid 2px var(--white);
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & input {
        border: none;
        background-color: transparent;
        padding: 5px;
    }
  }

  & input::placeholder {
    color: var(--white);
  }

  & span {
    color: var(--white);
  }
}

button {
  border: none;
  width: 28vw;
  background-color: var(--white);
  padding: 18px;
  border-radius: 40px;
  font-weight: 600;
  font-size: 1.25em;
}

@media (max-width: 1330px) and (min-width: 768px) {
  button, .inputs {
    width: 47vw;
  }
}

@media (max-width: 768px) {
  main {
    gap: 55px;
  }

  h1 {
    font-size: 2.7em;
    position: relative;
    bottom: 6%;
  }
  button {
    width: 90vw;
    padding: 13px;
  }

  .inputs {
    width: 90vw;

    & .name-input {
      font-size: 1.1em;
    }

    & .pass-input {
      font-size: 0.9em;
      padding: 8px 32px;
    }
  }
}
</style>
