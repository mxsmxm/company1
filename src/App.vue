<template>
  <v-app>
    <!-- 侧边栏 -->
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile
          to="/"
          ripple
        >
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          to="/contact"
          ripple
        >
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- 顶部导航栏 -->
    <v-toolbar
      color="indigo"
      dark
      fixed
      app
    >
      <v-toolbar-side-icon @click.stop="drawer=!drawer"></v-toolbar-side-icon>
      <v-toolbar-title>电影评分网</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          to="/movies"
        >
          <v-icon>movie</v-icon> 添加电影
        </v-btn>
        <v-btn
          flat
          to="/login"
        >
          <v-icon>lock_open</v-icon> 登录
        </v-btn>
        <v-btn
          flat
          to="signup"
        >
          <v-icon>edit</v-icon> 注册
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      class="text-xs-center"
      app
    >
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
