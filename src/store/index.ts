import Vue from 'vue';
import Vuex from 'vuex';
import {dataGetter} from '../plugins/getdata.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    banner: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    aboutMe: {
      description: 'this is description',
      headShot: 'https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.0-9/23559562_1977933659143958_1176050678832421848_n.jpg?_nc_cat=106&ccb=3&_nc_sid=09cbfe&_nc_ohc=YTQSEus6le8AX8KySuO&_nc_ht=scontent.ftpe7-1.fna&oh=eedb58ba5cc9da25838dc04223dcb825&oe=6052C42B',
      gitLink: 'https://github.com/Burton85',
    },
  },
  mutations: {
    addCover(state, coverUrl) {
      state.banner = coverUrl;
    },
    addAbout(state, aboutMe) {
      state.aboutMe = {
        description: aboutMe.desc,
        headShot: aboutMe.cover.scaled[1].url,
        gitLink: 'https://github.com/Burton85',
      };
    },
  },
  actions: {
    async GetBanner(context) {
      const BannerRes = await dataGetter.getCover('https://trello.com/card/602b69cd6a041a81548ab12c/-.json');
      context.commit('addCover', BannerRes);
    },
    async GetAbout(context) {
      const aboutRes = await dataGetter.getData('https://trello.com/card/602b6e45b4986748e5f2101c/aboutme.json');
      context.commit('addAbout', aboutRes);
    },
  },
  modules: {
  },
});
