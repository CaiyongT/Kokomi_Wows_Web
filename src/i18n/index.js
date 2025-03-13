// src/i18n/index.js
import { createI18n } from 'vue-i18n'

//#region 导入各模块语言翻译

// 1. 导入 Home 模块
import homeEn from './modules/Home/en.json'
import homeZh from './modules/Home/zh.json'

// 2. 导入 About 模块
import aboutEn from './modules/About/en.json'
import aboutZh from './modules/About/zh.json'

// 3. 导入 ClanStatus 模块
import clanstatusEn from './modules/ClanStatus/en.json'
import clanstatusZh from './modules/ClanStatus/zh.json'

// 4. 导入 GameStat 模块
import gameStatEn from './modules/GameStat/en.json'
import gameStatZh from './modules/GameStat/zh.json'


// 5. 导入 GamingTools 模块
import gamingToolsEn from './modules/GamingTools/en.json'
import gamingToolsZh from './modules/GamingTools/zh.json'


// 6. 导入 HallOfFame 模块
import hallOfFameEn from './modules/HallOfFame/en.json'
import hallOfFameZh from './modules/HallOfFame/zh.json'

// 7. 导入 PlayerStatus 模块
import playerStatusEn from './modules/PlayerStatus/en.json'
import playerStatusZh from './modules/PlayerStatus/zh.json'

//#endregion

//导入 Shared 公共
import sharedEn from '../i18n/shared/en.json'
import sharedZh from '../i18n/shared/zh.json'


//导入 路由 语言
import routerEn from './modules/router/en.json'
import routerZh from './modules/router/zh.json'


// 所有子模块语言统一合并
//每个模块使用一个单独翻译，方便管理
const zh = {
  home: homeZh,
  about: aboutZh,
  clanstatus: clanstatusZh,
  gamestat:gameStatZh,
  gamingtools:gamingToolsZh,
  halloffame:hallOfFameZh,
  shared: sharedZh,
  playerstatus:playerStatusZh,
  router:routerZh
}
const en = {
    home: homeEn,
    about: aboutEn,
    clanstatus: clanstatusEn,
    gamestat:gameStatEn,
    gamingtools:gamingToolsEn,
    halloffame:hallOfFameEn,
    shared: sharedEn,
    playerstatus:playerStatusEn,
    router:routerEn
}

// 创建 i18n 实例
const i18n = createI18n({
  //使用vue3组合api
  legacy: false,
  locale: 'zh',            // 默认语言中文
  fallbackLocale: 'en',    // 找不到翻译时用英文
  messages: {
    zh,
    en,
  },
})

export default i18n
