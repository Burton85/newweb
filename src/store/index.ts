import Vue from 'vue';
import Vuex from 'vuex';
import dataGetter from '../plugins/getdata.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    banner: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    aboutMe: {
      description: 'this is description',
      headShot: 'https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.0-9/23559562_1977933659143958_1176050678832421848_n.jpg?_nc_cat=106&ccb=3&_nc_sid=09cbfe&_nc_ohc=YTQSEus6le8AX8KySuO&_nc_ht=scontent.ftpe7-1.fna&oh=eedb58ba5cc9da25838dc04223dcb825&oe=6052C42B',
      gitLink: 'https://github.com/Burton85',
    },
    workExp:[
      {icon:'mdi-account-group-outline' , name:'中央資訊社' , desc:'中央資訊社'},
      {icon:'mdi-account-group-outline' , name:'開璽國際有限公司' , desc:'開璽國際有限公司'},
      {icon:'mdi-account-group-outline' , name:'昊盈資訊有限公司' , desc:'昊盈資訊有限公司'},
    ],
    Works: new Array ,
    // Works: [] ,
  },
  mutations: {
    addCover(state, coverUrl) {
      state.banner = coverUrl;
    },
    addAbout(state, aboutRes) {
      state.aboutMe = {
        description: aboutRes.desc,
        headShot: aboutRes.cover.scaled[1].url,
        gitLink: 'https://github.com/Burton85',
      };
    },
    addWorkExp(state, workExpRes) {
      workExpRes.map((item, index) => {
        state.workExp[index].name = item.name;
        state.workExp[index].desc = item.checkItems[0].name;
      });
    },
    addWorks(state, works) {
      works.map((item, index) => {
        let work={
          name:item.name,
          src:item.checkItems[0].name,
          link:item.checkItems[1].name,
          desc:item.checkItems[2].name
        }
        state.Works.push(work);
      });
    },

  },
  actions: {
    init(context){
      context.dispatch('GetBanner');
      context.dispatch('GetAbout');
      context.dispatch('GetWorkExp');
      context.dispatch('GetWorks');
    },
    async GetBanner(context) {
      const BannerRes = await dataGetter.getCover('https://trello.com/card/602b69cd6a041a81548ab12c/-.json');
      context.commit('addCover', BannerRes);
    },
    async GetAbout(context) {
      const aboutRes = await dataGetter.getData('https://trello.com/card/602b6e45b4986748e5f2101c/aboutme.json');
      context.commit('addAbout', aboutRes);
    },
    async GetWorkExp(context) {
      const workExpRes = await dataGetter.getData('https://trello.com/card/602fe15089aee08e4f5784f1/work-experience.json');
      context.commit('addWorkExp', workExpRes.checklists);
    },
    async GetWorks(context) {
      const Works = await dataGetter.getData('https://trello.com/card/6039ba08a42519571404ac57/works.json');
      context.commit('addWorks', Works.checklists);
    },
  },
  modules: {
  },
});
