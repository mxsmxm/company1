<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" aspect-ratio="2.75"></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-3">公司地址</h3>
            <div>{{ card_text }}</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      card_text: "盐城市亭湖区范公中路8号东辰大厦2幢914室"
      // card_text:"在化工产业升级大浪潮背景下，一群常年活跃于制药，研发，贸易领域的有识之士结成联盟，立足于定制化需求和稀缺物料的全球追踪，我们立志将产品做到最优化，将服务做到最极致"
    };
  }
};
</script>