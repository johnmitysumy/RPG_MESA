<template>
    <div class="girardados">
        <h1 class="sorteio">Número Sorteado: {{ randomNumber }}</h1>
        
        
    </div>
    <div class="dadogirando">
        <img  src="https://pa1.aminoapps.com/8162/479df0f08821d5e023cfb189b9398dddc240824cr1-256-256_hq.gif" @click="gerarNumero" alt="Minha Imagem" />
    </div>
   
    
    
    <template>

</template>
    
</template>


<script>
export default {
  data() {
    return {
      randomNumber: null
    };
  },
  methods: {
    gerarNumero() {
      // Gera um número aleatório entre 1 e 20
      this.randomNumber = Math.floor(Math.random() * 20) + 1;
    }
  }
};
</script>

<style>
    @media (min-width: 1024px) {
  .girardados {
    display: flex;
    align-items: center;
    justify-content: center;
  align-items: center;
  }
  
}
    @media (min-width: 1024px) {
  .sorteio {
    display: flex;
    font-size: 50px;
    align-items: center;
  }
  
}
    @media (min-width: 1024px) {
  .dadogirando {
    display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 

  
  }
  
}
</style>