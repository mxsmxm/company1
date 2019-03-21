<template>
  <v-app>
    <!-- 侧边栏 -->
    <v-navigation-drawer fixed v-model="drawer" app>
      <v-list dense>
        <v-list-tile to="/" ripple>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>首页</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/contact" ripple>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>联系方式</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- 顶部导航栏 -->
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer=!drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="font-weight-bold">
        <router-link to="/" tag="span" class="main">盐城印源生物科技有限公司</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat to="/">
          <v-icon>edit</v-icon>产品目录
        </v-btn>
        <v-btn flat to="/profile">
          <v-icon>lock_open</v-icon>公司简介
        </v-btn>
        <v-btn flat to="/contact">
          <v-icon>movie</v-icon>联系方式
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="indigo" class="text-xs-center" app>
      <span color="white-text ">&copy;copyright{{data}}</span>
    </v-footer>
  </v-app>
</template>

<script>
import moment from "moment";
export default {
  name: "App",
  components: {},
  data() {
    return {
      drawer: null,
      data: moment().format("llll")
    };
  }
};
</script>
<style>
.main {
  cursor: pointer;
}
</style>

