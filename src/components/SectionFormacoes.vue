<script setup lang="ts">
import Formacoes from '../components/Formacoes.vue'
</script>

<template>
  <section class="text-black bg-white rounded-2xl">
    <div class="container">
      <div class="mx-auto text-center pt-6">
        <h2 class="title-section">Formações</h2>

        <p class="text-black text-lg">
          Descubra estratégias e abordagens eficazes para promover o bem-estar emocional e mental. Explore técnicas de comunicação, resolução de conflitos e autoconhecimento, capacitando-se para ajudar os outros a superar desafios e encontrar equilíbrio emocional. Desenvolva habilidades terapêuticas essenciais para criar um impacto positivo na vida das pessoas e na sua comunidade."
        </p>
      </div>

      <div class="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

        <Formacoes title="Comunição não violenta" prev="Na prática terapêutica da CNV, as pessoas são encorajadas a expressar seus sentimentos e necessidades de forma clara e compassiva, sem julgamento ou crítica. Isso é feito através de quatro componentes principais:" />

        <Formacoes title="A paternidade" prev='"A paternidade" refere-se ao estado ou papel de ser pai. É um conceito amplo que abrange várias responsabilidades, obrigações, e também alegrias associadas à criação e educação dos filhos' />

        <Formacoes title="As linguagens do amor" prev='As "linguagens do amor" é um conceito popularizado pelo autor Gary Chapman em seu livro "As Cinco Linguagens do Amor". Chapman propôs que as pessoas têm diferentes formas de expressar e receber amor, e ele identificou cinco categorias principais, ou "linguagens", para descrever essas formas. Essas linguagens são:' />

        <Formacoes title="Complexo de Rejeição" prev="O complexo de rejeição é um termo utilizado na psicologia para descrever um padrão de comportamento, pensamentos e emoções que se desenvolvem como resultado de experiências passadas de rejeição. " />

        <Formacoes title="Dicas para sair de uma crise familiar" prev="Sair de uma crise familiar pode ser desafiador, mas é possível com esforço, comunicação aberta e comprometimento de todas as partes envolvidas." />

        <Formacoes title="Pertencimento familiar" prev='O "pertencimento familiar" refere-se ao sentimento de conexão, vínculo e identificação que uma pessoa tem com sua família. É a sensação de ser aceito, amado e valorizado dentro do contexto familiar. ' />
      </div>

      <div class="mt-12 text-center">
        <a href="#"
          class="inline-block rounded bg-white px-12 py-3 text-sm font-medium text- text-kashmir-blue-600 hover:text-white border border-solid border-kashmir-blue-600 transition  bg-gradient-to-r hover:from-kashmir-blue-500 hover:to-kashmir-blue-600 focus:outline-none">
          Ver mais
        </a>
      </div>
    </div>
  </section>
</template>