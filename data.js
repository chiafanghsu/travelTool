// data.js
// ---- 行程基本資訊 ----
const tripMeta = {
  title: "名古屋滑雪 2026",
  startDate: "2026-01-17",
  endDate: "2026-01-25",
  timezone: "Asia/Tokyo",
  baseCurrency: "JPY",
};

// 每天對應一個主要地點，用來抓天氣用
const dayLocations = {
  "2026-01-17": {
    label: "高山 · Takayama",
    shortLabel: "高山",
    lat: 36.146,
    lon: 137.252,
  },
  "2026-01-18": {
    label: "奧飛驒平湯 · Okuhida / Hirayu",
    shortLabel: "奧飛驒",
    lat: 36.25,
    lon: 137.55,
  },
  "2026-01-19": {
    label: "松本 · Matsumoto",
    shortLabel: "松本",
    lat: 36.238,
    lon: 137.971,
  },
  "2026-01-20": {
    label: "白馬 · Hakuba / 栂池高原",
    shortLabel: "白馬",
    lat: 36.7,
    lon: 137.85,
  },
  "2026-01-21": {
    label: "妙高 · Myoko",
    shortLabel: "妙高",
    lat: 36.9,
    lon: 138.2,
  },
  "2026-01-22": {
    label: "戶隱 / 地獄谷 周邊",
    shortLabel: "戶隱/地獄谷",
    lat: 36.73,
    lon: 138.42,
  },
  "2026-01-23": {
    label: "金澤 · Kanazawa",
    shortLabel: "金澤",
    lat: 36.561,
    lon: 136.656,
  },
  "2026-01-24": {
    label: "名古屋 · Nagoya",
    shortLabel: "名古屋",
    lat: 35.181,
    lon: 136.906,
  },
  "2026-01-25": {
    label: "名古屋 / 中部國際機場",
    shortLabel: "名古屋/機場",
    lat: 34.858,
    lon: 136.805,
  },
};

// ---- D1–D9 行程（來自你的 Notion CSV） ----
const itinerary = [
  {
    date: "2026-01-17",
    items: [
      {
        time: "02:55",
        name: "起飛 MM722",
        url: "https://maps.app.goo.gl/HbeLYaNv1dkbCnoB6",
        note: "桃園機場第一航廈",
      },
      {
        time: "06:45",
        name: "降落",
        url: "https://maps.app.goo.gl/8Zpdy9TgpDL9T1r66",
        note: "中部國際機場",
      },
      {
        time: "08:00",
        name: "租車 ORIX",
        url: "https://maps.app.goo.gl/8Zpdy9TgpDL9T1r66",
        note: "",
      },
      {
        time: "12:00",
        name: "高山老街",
        url: "https://maps.app.goo.gl/gVRaP7KDaFr4FxTL8",
        note: "高山老街",
      },
      {
        time: "17:00",
        name: "CHECK IN - Backpackers JINYA",
        url: "https://maps.app.goo.gl/F4iF9VhosoRvtTmM6",
        note: "",
      },
    ],
  },
  {
    date: "2026-01-18",
    items: [
      { time: "05:00", name: "起床 D2", url: "", note: "" },
      { time: "06:00", name: "出發前往白川", url: "", note: "" },
      { time: "07:00", name: "白川合掌屋", url: "", note: "" },
      {
        time: "07:00",
        name: "アルプス街道平湯、平湯大滝、平湯大（ネズコ)彌豆子",
        url: "",
        note: "",
      },
      { time: "12:00", name: "出發前往奧飛驒平湯", url: "", note: "" },
      {
        time: "17:00",
        name: "CHECK IN - 旅館岐山 Ryokan Gizan",
        url: "https://maps.app.goo.gl/aMqLcMNbqGfQJjaR6",
        note: "晚上泡溫泉烤火雜交大派對",
      },
    ],
  },
  {
    date: "2026-01-19",
    items: [
      { time: "07:00", name: "起床 D3", url: "", note: "" },
      { time: "10:00", name: "CHECK OUT 出發", url: "", note: "" },
      {
        time: "10:00",
        name: "新高穗ROPEWAY",
        url: "",
        note: "纜車上去觀景台做愛吃草莓冰淇淋 末班車是16:15最好提早一兩班先走",
      },
      { time: "15:00", name: "前往松本", url: "", note: "" },
      {
        time: "17:00",
        name: "CHECK IN - Matsumoto Hanare 松本はなれ",
        url: "https://maps.app.goo.gl/xpnWnNVWaGR25kF28",
        note: "晚上未定但請早睡不要做愛做太晚",
      },
    ],
  },
  {
    date: "2026-01-20",
    items: [
      { time: "07:00", name: "起床 D4", url: "", note: "" },
      { time: "09:00", name: "栂池高原滑雪場", url: "", note: "" },
      {
        time: "17:00",
        name: "CHECK IN - 白馬乗鞍若栗ゲストハウス",
        url: "https://maps.app.goo.gl/M55F2BqEc4M5xRQr7",
        note: "",
      },
    ],
  },
  {
    date: "2026-01-21",
    items: [
      { time: "07:00", name: "起床 D5", url: "", note: "" },
      {
        time: "09:00",
        name: "前往白馬岩岳マウンテンリゾート HAKUBA MOUNTAIN HARBOR",
        url: "",
        note: "",
      },
      { time: "15:00", name: "前往信濃", url: "", note: "" },
      {
        time: "17:00",
        name: "CHECK IN - Kyukamura Myoko RunRun\n休暇村妙高",
        url: "https://maps.app.goo.gl/T9FpUJqBAcWw75Y48",
        note: "晚上泡溫泉雜交大派對睡到爽 ",
      },
    ],
  },
  {
    date: "2026-01-22",
    items: [
      { time: "09:00", name: "起床 D6", url: "", note: "" },
      { time: "09:00", name: "吃早餐", url: "", note: "" },
      {
        time: "11:00",
        name: "黑姬山/戶隱神社",
        url: "",
        note: "戶隱神社、黑姬山走走、野尻湖釣魚、找桑拿蒸一下做愛🎣🧖♨️🏔️",
      },
      { time: "16:00", name: "前往地獄谷", url: "", note: "" },
      {
        time: "17:00",
        name: "CHECK IN - Daimaruya Ryokan\n貸切露天の宿 大丸屋",
        url: "https://maps.app.goo.gl/vFYbPg64UttzwV1P8",
        note: "晚上泡溫泉雜交派對（可以吃飯店最爽💖）",
      },
    ],
  },
  {
    date: "2026-01-23",
    items: [
      { time: "07:00", name: "起床 D7", url: "", note: "" },
      { time: "07:00", name: "吃早餐 ", url: "", note: "" },
      { time: "09:00", name: "地獄谷", url: "", note: "🐒猴子吱吱吱" },
      { time: "11:00", name: "前往地獄谷 (1)", url: "", note: "" },
      {
        time: "14:00",
        name: "前往金澤",
        url: "",
        note: "開去金澤我操你媽你們最好都請我吃飯我開車很累還安排行程操",
      },
      {
        time: "17:00",
        name: "CHECK IN - K's House Kanazawa - Travelers Hostel",
        url: "https://maps.app.goo.gl/EDUhGDHVQHzPgC4b7",
        note: "屌的找一下或煮飯",
      },
    ],
  },
  {
    date: "2026-01-24",
    items: [
      { time: "07:00", name: "起床 D8", url: "", note: "" },
      {
        time: "16:00",
        name: "前往名古屋",
        url: "",
        note: "開車去名古屋我真的覺得你們要給我錢或是給我操我他媽超累超忙還充當翻譯駕駛導遊滑雪教練廚師我幹你娘",
      },
      {
        time: "17:00",
        name: "CHECK IN - Nagonoya Cafe & Hostel\nなごのや",
        url: "https://maps.app.goo.gl/iQFbsgh5fWhKpt3w8",
        note: "",
      },
    ],
  },
  {
    date: "2026-01-25",
    items: [
      { time: "07:00", name: "起床 D9", url: "", note: "" },
      { time: "19:00", name: "前往機場", url: "", note: "" },
      { time: "20:00", name: "還車", url: "", note: "" },
      { time: "22:45", name: "起飛 MM723", url: "", note: "" },
    ],
  },
];

// ---- 代辦事項（Notion「代辦事項」） ----
const todos = [
  { title: "ESIM", done: false },
  { title: "保險", done: false },
  { title: "滑雪預約", done: false },
  { title: "租車預約", done: true },
  { title: "VISIT JAPAN WEB", done: false },
];

// ---- 行李清單（Notion「行李清單」） ----
const packing = [
  { name: "上衣", bag: "託運行李", type: "換洗衣物", checked: false },
  { name: "內褲", bag: "託運行李", type: "換洗衣物", checked: false },
  { name: "毛巾", bag: "託運行李", type: "換洗衣物", checked: false },
  { name: "襪子", bag: "託運行李", type: "換洗衣物", checked: false },
  { name: "行充", bag: "隨身行李", type: "3C", checked: false },
  { name: "護照", bag: "隨身行李", type: "隨身攜帶", checked: false },
  { name: "駕照", bag: "隨身行李", type: "隨身攜帶", checked: false },
  { name: "日文駕照翻譯", bag: "隨身行李", type: "隨身攜帶", checked: false },
  { name: "手機", bag: "隨身行李", type: "隨身攜帶", checked: false },
  { name: "錢包", bag: "隨身行李", type: "隨身攜帶", checked: false },
  { name: "日圓", bag: "隨身行李", type: "隨身攜帶", checked: false },
  { name: "相機", bag: "隨身行李", type: "隨身攜帶", checked: false },
  { name: "衛生紙", bag: "隨身行李", type: "隨身用品", checked: false },
  { name: "刮鬍刀", bag: "隨身行李", type: "個人用品", checked: false },
  { name: "護唇膏", bag: "隨身行李", type: "個人用品", checked: false },
  { name: "墨鏡", bag: "隨身行李", type: "個人用品", checked: false },
  { name: "防曬", bag: "託運行李", type: "個人用品", checked: false },
  { name: "充電器", bag: "隨身行李", type: "3C", checked: false },
  { name: "購物袋", bag: "託運行李", type: "個人用品", checked: false },
  { name: "隱眼", bag: "託運行李", type: "眼用品", checked: false },
  { name: "眼藥水", bag: "託運行李", type: "眼用品", checked: false },
  { name: "牙刷", bag: "託運行李", type: "個人用品", checked: false },
  { name: "髒衣服袋子", bag: "託運行李", type: "個人用品", checked: false },
  { name: "購物袋", bag: "託運行李", type: "個人用品", checked: false },
  { name: "眼鏡", bag: "隨身行李", type: "個人用品", checked: false },
  { name: "化妝水", bag: "託運行李", type: "個人用品", checked: false },
  { name: "乳液", bag: "託運行李", type: "個人用品", checked: false },
];
