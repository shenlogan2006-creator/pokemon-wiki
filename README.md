# pokemon-wiki
HW1103
# PokéDex & Battle Wiki - 全世代寶可夢圖鑑與戰力分析

這是一個採用**「資料驅動（Data-Driven）」與「隨插即用（Plug-and-Play）」**架構設計的模組化寶可夢知識庫網站，規劃涵蓋第一至第九世代（#001 - #1025）共 9 大資料模組。

##GitHub Pages
https://shenlogan2006-creator.github.io/pokemon-wiki/  

##  核心功能
- **跨世代模組化架構**：目前實作第一世代（關都地區），並預留第二至第九世代擴充接口。
- **異色型態一鍵切換（Shiny Toggle）**：透過 PokeAPI 官方 CDN 公式動態切換一般與異色立繪。
- **多維度戰力排行榜**：自動加總種族值總和（BST），支援依 BST 或 HP / 攻擊 / 防禦 / 特攻 / 特防 / 速度即時排序。
- **進化鏈與招式詳情**：點擊卡片可查看完整進化階段（支援點擊跳轉）、六維種族值進度條與代表招式列表。

## AI 協作規範
本專案的檔案結構、資料 Schema 與跨世代擴充 SOP 皆定義於 [`AGENTS.md`](./AGENTS.md)，AI 只需依照規範新增 `data/gen{N}.js` 並引入即可自動擴充新世代內容。
