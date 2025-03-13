import { createRouter, createWebHistory } from 'vue-router';

//#region 路由导入

//懒加载，只有在访问对应路由时才会加载对应页面代码
import Index from '../layouts/Index.vue';
const HomePage       = () => import('../Views/Home/HomePage.vue')
const AboutIndex     = () => import('../Views/About/Index.vue')
const ClanStatus     = () => import('../Views/ClanStatus/Index.vue')
const GameStat       = () => import('../Views/GameStat/Index.vue')
const GamingTools    = () => import('../Views/GamingTools/Index.vue')
const HallOfFame     = () => import('../Views/HallOfFame/Index.vue')
const PlayerStatus   = () => import('../Views/PlayerStatus/Index.vue')  
//#endregion

//定义App路由
const routes = [
  {
    path: '/',
    component: Index,
    children: [
      // 主页（默认子路由）
      {
        path: '/',
        name: 'home',
        component: HomePage,
        meta: {
          titleKey: 'router.home.title'
        }
      },
      // 关于
      {
        path: 'about',
        name: 'about',
        component: AboutIndex,
        meta: {
          titleKey: 'router.about.title'
        }
      },
      // 公会数据
      {
        path: 'clanstatus',
        name: 'clanstatus',
        component: ClanStatus,
        meta: {
          titleKey: 'router.clanstatus.title'
        }
      },
      // 对局数据
      {
        path: 'gamestat',
        name: 'gamestat',
        component: GameStat,
        meta: {
          titleKey: 'router.gamestat.title'
        }
      },
      // 游戏工具
      {
        path: 'gamingtools',
        name: 'gamingtools',
        component: GamingTools,
        meta: {
          titleKey: 'router.gamingtools.title'
        }
      },
      // 排行榜
      {
        path: 'halloffame',
        name: 'halloffame',
        component: HallOfFame,
        meta: {
          titleKey: 'router.halloffame.title'
        }
      },
      // 玩家数据
      {
        path: 'playerstatus',
        name: 'playerstatus',
        component: PlayerStatus,
        meta: {
          titleKey: 'router.playerstatus.title'
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
