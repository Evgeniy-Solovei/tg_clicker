import{u as h,j as e,r as _,D as B}from"./index-C8fzjza-.js";import{H as A}from"./Header-DFgHwAkT.js";import{i as j}from"./imgCoin-DwLBqyid.js";import{u as F,q as p,x as $}from"./gueryClient-CKHfK_Ch.js";import{b as N,u as b,f as S}from"./formatNumber-DcKdYFiZ.js";import{i as U}from"./avatarFrend-L-lXDPIn.js";const k="_container_3oei2_1",q="_box_league_3oei2_10",D="_imgBoxFon_3oei2_20",H="_name_league_3oei2_25",P="_imgEnot_3oei2_42",z="_btn_left_3oei2_48",I="_btn_right_3oei2_66",O="_box_progress_3oei2_84",Q="_progress_3oei2_93",V="_progress_bar_3oei2_103",X="_title_cost_3oei2_114",J="_iconCoin_3oei2_127",K="_box_all_users_3oei2_134",n={container:k,box_league:q,imgBoxFon:D,name_league:H,imgEnot:P,btn_left:z,btn_right:I,box_progress:O,progress:Q,progress_bar:V,title_cost:X,iconCoin:J,box_all_users:K},R="_box_card_1ff69_1",W="_box_your_card_1ff69_11",Z="_imgAvatar_1ff69_25",T="_user_info_1ff69_30",Y="_name_user_1ff69_39",G="_coin_window_1ff69_51",M="_coins_1ff69_56",ee="_imgCoin_1ff69_70",se="_line_1ff69_78",ne="_number_position_1ff69_86",oe="_leaders_1ff69_95",te="_text_index_1ff69_105",o={box_card:R,box_your_card:W,imgAvatar:Z,user_info:T,name_user:Y,coin_window:G,coins:M,imgCoin:ee,line:se,number_position:ne,leaders:oe,text_index:te};function ae({user:t,index:i}){const{tg_id:s}=h();return e.jsxs("div",{className:+s!==t.tg_id?o.box_card:o.box_your_card,children:[e.jsx("img",{src:U,className:o.imgAvatar}),e.jsxs("div",{className:o.user_info,children:[e.jsx("p",{className:o.name_user,children:t.name}),e.jsxs("div",{className:o.coin_window,children:[e.jsx("img",{src:j,className:o.imgCoin}),e.jsx("p",{className:o.coins,children:N(t.coin)})]})]}),e.jsx("div",{className:i<=3?`${o.number_position} ${o.leaders}`:o.number_position,children:e.jsx("p",{className:o.text_index,children:i})}),+s!==t.tg_id&&e.jsx("div",{className:o.line})]})}const ie="/assets/woodenEnot-BVv5zd6W.png",re="/assets/stoneEnot-BzhVZHcx.png",ce="/assets/ironEnot-DSQv0t38.png",_e="/assets/bronzeEnot-9eJgkS59.png",le="/assets/silverEnot-CWlVjY3g.png",ge="/assets/goldEnot-D8RmB_l8.png",me="/assets/platinumEnot-BUOACsjX.png",ue="/assets/rubyEnot-CvX7weox.png",de="/assets/emeraldEnot-DhJs5jX5.png",xe="/assets/sapphireEnot-ByZ5PEka.png",fe=t=>{switch(t){case"Деревянная Лига":return ie;case"Каменная Лига":return re;case"Железная Лига":return ce;case"Бронзовая Лига":return _e;case"Серебряная Лига":return le;case"Золотая Лига":return ge;case"Платиновая Лига":return me;case"Рубиновая Лига":return ue;case"Изумрудная Лига":return de;case"Сапфировая Лига":return xe}},pe="/assets/bgLeague-B0AfPP7P.png";function Ee(){const t=b(a=>{var c;return(c=a.dataUser.getUser)==null?void 0:c.coin}),i=b(a=>{var c;return(c=a.dataUser.getUser)==null?void 0:c.league}),[s,v]=_.useState(),[l,C]=_.useState(),[r,u]=_.useState(0),[d,x]=_.useState(i),{tg:f,tg_id:E}=h();console.log(i);const m=["Деревянная Лига","Каменная Лига","Железная Лига","Бронзовая Лига","Серебряная Лига","Золотая Лига","Платиновая Лига","Изумрудная Лига","Рубиновая Лига","Сапфировая Лига"],{data:g}=F({queryKey:["dataLeagues"],queryFn:()=>$(d),enabled:!!d},p);_.useEffect(()=>{g&&i&&(v(g),C(g[0].players))},[g,i]),_.useEffect(()=>{p.invalidateQueries({queryKey:["dataLeagues"]})},[r]);const y=()=>{r<m.length-1&&(u(r+1),x(m[r+1]),f.HapticFeedback.impactOccurred("light"))},L=()=>{r>0&&(u(r-1),x(m[r-1]),f.HapticFeedback.impactOccurred("light"))},w=()=>{if(s&&t&&s[0].min_coin)return t*100/(s[0].min_coin*10)};return e.jsxs(B,{children:[e.jsx(A,{}),e.jsxs("div",{className:n.container,children:[e.jsxs("div",{className:n.box_league,children:[e.jsx("img",{className:n.imgBoxFon,src:pe}),(s==null?void 0:s.length)&&e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:n.name_league,children:s[0].name}),e.jsx("img",{className:n.imgEnot,src:fe(s[0].name)})]}),e.jsx("button",{onClick:()=>L(),className:n.btn_left}),e.jsx("button",{onClick:()=>y(),className:n.btn_right}),e.jsxs("div",{className:n.box_progress,children:[e.jsx("img",{src:j,className:n.iconCoin}),g&&s&&t&&e.jsx("span",{className:n.title_cost,children:`${N(t)} / ${S(s[0].min_coin*10)}`})]}),(l==null?void 0:l.filter(a=>a.tg_id===+E).length)===1&&e.jsx("div",{className:n.progress,children:e.jsx("div",{className:n.progress_bar,style:{width:`${w()}%`}})})]}),e.jsx("div",{className:n.box_all_users,children:l&&l.map((a,c)=>e.jsx(ae,{user:a,index:c+1},a.tg_id))})]})]})}export{Ee as default};
