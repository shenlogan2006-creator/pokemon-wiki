window.POKEMON_DB = window.POKEMON_DB || {};

window.POKEMON_DB.gen1 = [
  {
    id: 1,
    name: "妙蛙種子",
    enName: "Bulbasaur",
    types: ["草", "毒"],
    category: "種子寶可夢",
    stats: { hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45 },
    evolutions: [
      { id: 1, name: "妙蛙種子", condition: "初始型態" },
      { id: 2, name: "妙蛙草", condition: "Lv.16 進化" },
      { id: 3, name: "妙蛙花", condition: "Lv.32 進化" }
    ],
    moves: [
      { name: "藤鞭", type: "草", category: "物理", power: 45, learnMethod: "Lv.7" },
      { name: "飛葉快刀", type: "草", category: "物理", power: 55, learnMethod: "Lv.13" },
      { name: "催眠粉", type: "草", category: "變化", power: null, learnMethod: "Lv.15" },
      { name: "種子炸彈", type: "草", category: "物理", power: 80, learnMethod: "Lv.31" }
    ],
    description: "出生時背上就背著一顆植物種子，隨著身體成長，種子也會一起長大並吸收陽光轉化為養分。"
  },
  {
    id: 3,
    name: "妙蛙花",
    enName: "Venusaur",
    types: ["草", "毒"],
    category: "種子寶可夢",
    stats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
    evolutions: [
      { id: 1, name: "妙蛙種子", condition: "初始型態" },
      { id: 2, name: "妙蛙草", condition: "Lv.16 進化" },
      { id: 3, name: "妙蛙花", condition: "Lv.32 進化" }
    ],
    moves: [
      { name: "日光束", type: "草", category: "特殊", power: 120, learnMethod: "Lv.50" },
      { name: "污泥炸彈", type: "毒", category: "特殊", power: 90, learnMethod: "招式學習器" },
      { name: "花瓣舞", type: "草", category: "特殊", power: 120, learnMethod: "進化習得" },
      { name: "光合作用", type: "草", category: "變化", power: null, learnMethod: "Lv.39" }
    ],
    description: "背上的巨大花朵在吸收充足陽光後會散發出令人心情平靜的香氣，雨天過後香氣會變得更加濃郁。"
  },
  {
    id: 6,
    name: "噴火龍",
    enName: "Charizard",
    types: ["火", "飛行"],
    category: "火焰寶可夢",
    stats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
    evolutions: [
      { id: 4, name: "小火龍", condition: "初始型態" },
      { id: 5, name: "火恐龍", condition: "Lv.16 進化" },
      { id: 6, name: "噴火龍", condition: "Lv.36 進化" }
    ],
    moves: [
      { name: "噴射火焰", type: "火", category: "特殊", power: 90, learnMethod: "Lv.30" },
      { name: "空氣斬", type: "飛行", category: "特殊", power: 75, learnMethod: "進化習得" },
      { name: "閃焰衝鋒", type: "火", category: "物理", power: 120, learnMethod: "Lv.62" },
      { name: "龍爪", type: "龍", category: "物理", power: 80, learnMethod: "招式學習器" }
    ],
    description: "會噴出連巨岩都能融化的灼熱火焰，在空中飛翔尋找強大的對手，絕對不會對比自己弱小的對手吐火。"
  },
  {
    id: 9,
    name: "水箭龜",
    enName: "Blastoise",
    types: ["水"],
    category: "甲殼寶可夢",
    stats: { hp: 79, atk: 83, def: 100, spa: 85, spd: 105, spe: 78 },
    evolutions: [
      { id: 7, name: "傑尼龜", condition: "初始型態" },
      { id: 8, name: "卡咪龜", condition: "Lv.16 進化" },
      { id: 9, name: "水箭龜", condition: "Lv.36 進化" }
    ],
    moves: [
      { name: "水砲", type: "水", category: "特殊", power: 110, learnMethod: "Lv.49" },
      { name: "加農光炮", type: "鋼", category: "特殊", power: 80, learnMethod: "進化習得" },
      { name: "冰凍光束", type: "冰", category: "特殊", power: 90, learnMethod: "招式學習器" },
      { name: "高速旋轉", type: "一般", category: "物理", power: 50, learnMethod: "Lv.9" }
    ],
    description: "甲殼上的噴射口能精準射出高壓水柱，威力足以貫穿厚重的鋼板，為了承受反作用力而擁有極為沉重的身軀。"
  },
  {
    id: 25,
    name: "皮卡丘",
    enName: "Pikachu",
    types: ["電"],
    category: "鼠寶可夢",
    stats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
    evolutions: [
      { id: 172, name: "皮丘", condition: "初始型態" },
      { id: 25, name: "皮卡丘", condition: "親密度進化" },
      { id: 26, name: "雷丘", condition: "使用雷之石" }
    ],
    moves: [
      { name: "十萬伏特", type: "電", category: "特殊", power: 90, learnMethod: "Lv.36" },
      { name: "伏特替換", type: "電", category: "特殊", power: 70, learnMethod: "招式學習器" },
      { name: "鐵尾", type: "鋼", category: "物理", power: 100, learnMethod: "Lv.28" },
      { name: "電光一閃", type: "一般", category: "物理", power: 40, learnMethod: "Lv.1" }
    ],
    description: "雙頰擁有儲存電力的電囊，遇到危險或興奮時會釋放出強大電流，有時會用電擊幫虛弱的同伴充電。"
  },
  {
    id: 94,
    name: "耿鬼",
    enName: "Gengar",
    types: ["幽靈", "毒"],
    category: "影子寶可夢",
    stats: { hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110 },
    evolutions: [
      { id: 92, name: "鬼斯", condition: "初始型態" },
      { id: 93, name: "鬼斯通", condition: "Lv.25 進化" },
      { id: 94, name: "耿鬼", condition: "通訊交換進化" }
    ],
    moves: [
      { name: "暗影球", type: "幽靈", category: "特殊", power: 80, learnMethod: "Lv.36" },
      { name: "污泥波", type: "毒", category: "特殊", power: 95, learnMethod: "招式學習器" },
      { name: "同命", type: "幽靈", category: "變化", power: null, learnMethod: "Lv.54" },
      { name: "催眠術", type: "超能力", category: "變化", power: null, learnMethod: "Lv.1" }
    ],
    description: "在滿月的夜晚會潛伏在人們的影子裡，若突然感到周圍溫度驟降並打寒顫，就是耿鬼正在靠近的徵兆。"
  },
  {
    id: 143,
    name: "卡比獸",
    enName: "Snorlax",
    types: ["一般"],
    category: "瞌睡寶可夢",
    stats: { hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30 },
    evolutions: [
      { id: 446, name: "小卡比獸", condition: "初始型態" },
      { id: 143, name: "卡比獸", condition: "親密度進化" }
    ],
    moves: [
      { name: "泰山壓頂", type: "一般", category: "物理", power: 85, learnMethod: "Lv.28" },
      { name: "地震", type: "地面", category: "物理", power: 100, learnMethod: "招式學習器" },
      { name: "睡覺", type: "超能力", category: "變化", power: null, learnMethod: "Lv.32" },
      { name: "咬碎", type: "惡", category: "物理", power: 80, learnMethod: "Lv.36" }
    ],
    description: "每天不吃下 400 公斤的食物就不會滿足，吃飽後就會立刻陷入沉睡，即使有小孩在牠肚子上跳躍也毫不在意。"
  },
  {
    id: 149,
    name: "快龍",
    enName: "Dragonite",
    types: ["龍", "飛行"],
    category: "龍寶可夢",
    stats: { hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80 },
    evolutions: [
      { id: 147, name: "迷你龍", condition: "初始型態" },
      { id: 148, name: "哈克龍", condition: "Lv.30 進化" },
      { id: 149, name: "快龍", condition: "Lv.55 進化" }
    ],
    moves: [
      { name: "逆鱗", type: "龍", category: "物理", power: 120, learnMethod: "Lv.53" },
      { name: "神速", type: "一般", category: "物理", power: 80, learnMethod: "Lv.1" },
      { name: "暴風", type: "飛行", category: "特殊", power: 110, learnMethod: "Lv.62" },
      { name: "龍之舞", type: "龍", category: "變化", power: null, learnMethod: "Lv.46" }
    ],
    description: "僅需約 16 小時就能繞地球飛行一圈的心地善良寶可夢，常在暴風雨中引導遇難的船隻安全抵達陸地。"
  },
  {
    id: 150,
    name: "超夢",
    enName: "Mewtwo",
    types: ["超能力"],
    category: "基因寶可夢",
    stats: { hp: 106, atk: 110, def: 90, spa: 154, spd: 90, spe: 130 },
    evolutions: [
      { id: 150, name: "超夢", condition: "無進化型態" }
    ],
    moves: [
      { name: "精神擊破", type: "超能力", category: "特殊", power: 100, learnMethod: "Lv.70" },
      { name: "波導彈", type: "格鬥", category: "特殊", power: 80, learnMethod: "Lv.48" },
      { name: "暗影球", type: "幽靈", category: "特殊", power: 80, learnMethod: "招式學習器" },
      { name: "自我再生", type: "一般", category: "變化", power: null, learnMethod: "Lv.56" }
    ],
    description: "透過重組夢幻基因而誕生的傳說寶可夢，擁有全寶可夢中最頂尖的超能力與特攻戰力。"
  }
];
