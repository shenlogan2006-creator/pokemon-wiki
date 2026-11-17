# AGENTS.md - 寶可夢全世代圖鑑與戰力分析 Wiki (Gen 1 - Gen 9 模組化架構)

## 1. 專案目的 (Project Purpose)
本專案是一個可跨世代擴充的「寶可夢圖鑑與對戰戰力分析網站」，規劃涵蓋本傳已發售之 **第一世代至第九世代（全國圖鑑 #001 – #1025）** 共 9 大標準資料模組，並預留第十世代（《寶可夢 風／波》）之擴充接口。
核心設計原則為**「職責分離（Separation of Concerns）」與「隨插即用（Plug-and-Play）」**：`index.html` 僅作為通用渲染引擎，不包含任何特定世代的編號範圍或抓取邏輯；每個世代的精選資料與完整圖鑑自動補全（Hydration）皆封裝於獨立的 `data/gen{N}.js` 模組中。

## 2. 目標模組藍圖與目錄結構 (Target Modules & File Structure)
專案採用純靜態網頁架構（Zero-Build），直接部署於 GitHub Pages：

```text
/
├── index.html          # 通用 UI 渲染引擎（雙模式檢視、世代頁籤偵測器、詳情彈窗）
├── AGENTS.md           # AI 開發與跨世代擴充規範書（本文件）
├── README.md           # 專案對外介紹與 GitHub Pages 網址
└── data/
    ├── gen1.js         # [已實作] 第一世代：關都地區 (#001 - #151 精選資料 + 自動補全器)
    ├── gen2.js         # [目標模組] 第二世代：城都地區 (#152 - #251)
    ├── gen3.js         # [目標模組] 第三世代：豐緣地區 (#252 - #386)
    ├── gen4.js         # [目標模組] 第四世代：神奧地區 (#387 - #493)
    ├── gen5.js         # [目標模組] 第五世代：合眾地區 (#494 - #649)
    ├── gen6.js         # [目標模組] 第六世代：卡洛斯地區 (#650 - #721)
    ├── gen7.js         # [目標模組] 第七世代：阿羅拉地區 (#722 - #809)
    ├── gen8.js         # [目標模組] 第八世代：伽勒爾 / 洗翠地區 (#810 - #905)
    └── gen9.js         # [目標模組] 第九世代：帕底亞地區 (#906 - #1025)
各世代標準註冊參數對照表
模組鍵值 (key),檔案路徑,顯示名稱 (label),圖鑑範圍 (range),主題代表色 (badgeColor)
gen1,data/gen1.js,第一世代：關都,#001 - #151,bg-red-600
gen2,data/gen2.js,第二世代：城都,#152 - #251,bg-amber-600
gen3,data/gen3.js,第三世代：豐緣,#252 - #386,bg-emerald-600
gen4,data/gen4.js,第四世代：神奧,#387 - #493,bg-sky-600
gen5,data/gen5.js,第五世代：合眾,#494 - #649,bg-slate-700
gen6,data/gen6.js,第六世代：卡洛斯,#650 - #721,bg-blue-600
gen7,data/gen7.js,第七世代：阿羅拉,#722 - #809,bg-orange-500
gen8,data/gen8.js,第八世代：伽勒爾,#810 - #905,bg-rose-600
gen9,data/gen9.js,第九世代：帕底亞,#906 - #1025,bg-purple-600
3. 自動化運算與視覺規則 (Automation & UI Rules)
隨插即用偵測與擴充引導 (Auto-Detection & Scaffolding)：
頂部世代列包含第一至第九世代切換按鈕，自動偵測 window.POKEMON_DB.gen{N} 是否已載入資料。
已載入資料的世代（如 gen1）自動顯示收錄數量；尚未建立資料檔的世代（gen2 – gen9）點擊後會顯示該世代的擴充預留接口看板與一鍵複製的 AI 擴充指令。
異色型態切換 (Shiny Toggle)：
嚴禁在資料檔中寫死圖片網址，前端統一透過 PokeAPI 官方 CDN 公式動態拼接：
一般型態：https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png
異色型態：https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/{id}.png
雙模式檢視與戰力排行 (View Modes & Power Ranking)：
透過頂部「圖鑑總覽 / 戰力排行榜」按鈕切換檢視模式：
圖鑑總覽：依全國圖鑑編號由小到大排列，呈現屬性標籤與種族值總和（BST）摘要卡片。
戰力排行榜：針對當前所選世代，支援依「種族值總和 (BST)」及六項單項種族值（HP / 攻擊 / 防禦 / 特攻 / 特防 / 速度）進行高至低或低至高排序，自動生成 TOP 3 王座卡片與完整六維數據對照表。
計算鐵則：AI 不需手動計算 bst，前端會自動加總 stats 六維數值。
4. 世代模組結構與資料規範 (Module & Data Schema)
所有 data/gen{N}.js 檔案必須同時包含以下兩個標準接口：
window.POKEMON_DB.gen{N}：存放該世代手動精選（具備完整進化鏈與招式表）的寶可夢陣列。
window.POKEMON_HYDRATORS.gen{N}：非同步補全函式 async function(onProgress)，負責依據該世代的圖鑑編號範圍（如 gen2 為 152 至 251），自動從 PokeAPI 補齊其餘未手寫的寶可夢繁體中文名稱、屬性與六維種族值，並透過 onProgress(updatedList) 即時回傳更新後的完整世代陣列。
單隻寶可夢資料結構 (Pokémon Object Schema)
JavaScript
{
  id: 6,                            // [必填] 全國圖鑑編號 (整數，決定立繪 URL 與圖鑑排序)
  name: "噴火龍",                    // [必填] 繁體中文名稱
  enName: "Charizard",              // [必填] 英文名稱
  types: ["火", "飛行"],             // [必填] 1~2個屬性（限用標準繁中屬性白名單）
  category: "火焰寶可夢",            // [必填] 圖鑑分類
  stats: {                          // [必填] 六維基礎種族值（整數）
    hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100
  },
  evolutions: [                     // [必填] 完整進化鏈陣列（無進化者填寫包含自己的單一物件）
    { id: 4, name: "小火龍", condition: "初始型態" },
    { id: 5, name: "火恐龍", condition: "Lv.16 進化" },
    { id: 6, name: "噴火龍", condition: "Lv.36 進化" }
  ],
  moves: [                          // [必填] 3~5 個代表性招式
    { name: "噴射火焰", type: "火", category: "特殊", power: 90, learnMethod: "Lv.30" },
    { name: "空氣斬", type: "飛行", category: "特殊", power: 75, learnMethod: "進化習得" },
    { name: "龍之舞", type: "龍", category: "變化", power: null, learnMethod: "招式學習器" }
  ],
  description: "會噴出連巨岩都能融化的灼熱火焰，有時會在無意間引發森林大火。"
}
標準白名單 (Valid Enum Values)
屬性 (types / move.type)：一般, 火, 水, 電, 草, 冰, 格鬥, 毒, 地面, 飛行, 超能力, 蟲, 岩石, 幽靈, 龍, 惡, 鋼, 妖精
招式分類 (move.category)：物理, 特殊, 變化（變化招式 power 填 null）
5. AI 擴充新世代 SOP (Step-by-Step Guide for AI)
當使用者要求「新增第 N 世代（例如：實作 gen2 城都地區）」或「擴充現有世代寶可夢」時，AI 必須執行以下標準作業程序：
建立獨立世代模組：在 data/ 目錄下建立 gen{N}.js（對照第 2 節表格確認圖鑑編號範圍），定義 window.POKEMON_DB.gen{N}（精選代表寶可夢）與 window.POKEMON_HYDRATORS.gen{N}（該世代編號範圍自動補全器）。
掛載腳本：打開 index.html，在 <!-- 載入各世代資料模組 --> 區塊加入一行 <script src="./data/gen{N}.js"></script>。前端 runModuleHydrators() 會自動偵測並執行該模組的補全函式，無需修改任何 Vue 邏輯。
禁止更動核心 UI：嚴禁修改 index.html 的排版結構、排行榜計算邏輯、異色切換公式與 CSS 樣式。
跨世代連動檢查：若新世代寶可夢與舊世代有進化關聯（如皮丘 #172 ➔ 皮卡丘 #025），evolutions 陣列中務必填寫正確的全國圖鑑 id，以確保進化鏈縮圖與點擊跳轉功能正常運作。
