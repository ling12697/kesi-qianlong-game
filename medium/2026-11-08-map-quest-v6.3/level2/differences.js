/* Paired markers use separate native-image coordinates because the two photographs
   have different crops, borders, and vertical composition. Coordinates are % of each
   complete source image (origin top-left); hit widths/heights are % of that image. */
window.KESI_DIFFERENCES = [
  {id:"title",name:"题名位置",left:{x:50,y:15,w:22,h:8},right:{x:50,y:7,w:30,h:6},explanation:"简本上方是经文长框；繁本在画幅顶端织出“无量寿尊佛”题名。",source:"故宫博物院院刊 2024年第9期，第6—8页；并核对两幅原图。"},
  {id:"sunmoon",name:"日月纹样",left:{x:50,y:31,w:22,h:10},right:{x:25,y:13,w:20,h:9},explanation:"繁本在上部彩云间增添日月，简本相应区域没有这组纹样。",source:"乾隆十九年十二月十八日画样修改记录；故宫博物院院刊 2024年第9期，第7页。"},
  {id:"flying",name:"飞仙与宝盖",left:{x:24,y:39,w:21,h:11},right:{x:25,y:22,w:27,h:13},explanation:"繁本以飞仙形象替代简本左右宝盖云中的供奉形象。",source:"乾隆十九年十二月初六、十八日画样修改记录；故宫博物院院刊 2024年第9期，第7—8页。"},
  {id:"arhats",name:"十八罗汉",left:{x:23,y:72,w:25,h:12},right:{x:23,y:70,w:28,h:15},explanation:"繁本在下半部增添十八罗汉，人物列于四大天王上方。",source:"乾隆十九年十二月初六日画样修改记录；故宫博物院院刊 2024年第9期，第7—8页。"},
  {id:"kings",name:"四天王的位置",left:{x:23,y:82,w:28,h:14},right:{x:22,y:88,w:30,h:12},explanation:"为增加罗汉位置，繁本将四天王向下移；两图人物高度可直接对照。",source:"乾隆十九年十二月十八日画样修改记录；故宫博物院院刊 2024年第9期，第7—8页。"}
];
