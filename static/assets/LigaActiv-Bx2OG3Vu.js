import{u as l,j as s,r as c,D as b}from"./index-DRmcogro.js";import{H as j}from"./Header-DzDMrUmA.js";import{i as g}from"./imgCoin-DwLBqyid.js";import{u as f,q as h,x as w}from"./gueryClient-YC0J3Beo.js";import{b as d,u as N,f as v}from"./formatNumber-DGd8mi4X.js";import{i as y}from"./avatarFrend-L-lXDPIn.js";const E="_container_1ldd5_2",C="_box_league_1ldd5_12",z="_name_league_1ldd5_27",A="_imgEnot_1ldd5_38",B="_btn_left_1ldd5_45",L="_btn_right_1ldd5_63",U="_box_progress_1ldd5_81",$="_progress_1ldd5_90",D="_progress_bar_1ldd5_100",q="_title_energy_1ldd5_111",S="_iconCoin_1ldd5_124",H="_box_all_users_1ldd5_131",n={container:E,box_league:C,name_league:z,imgEnot:A,btn_left:B,btn_right:L,box_progress:U,progress:$,progress_bar:D,title_energy:q,iconCoin:S,box_all_users:H},X="_box_card_wszcs_1",k="_box_your_card_wszcs_9",F="_imgAvatar_wszcs_23",I="_user_info_wszcs_28",J="_name_user_wszcs_38",O="_coin_window_wszcs_45",P="_coins_wszcs_50",R="_imgCoin_wszcs_59",V="_line_wszcs_67",t={box_card:X,box_your_card:k,imgAvatar:F,user_info:I,name_user:J,coin_window:O,coins:P,imgCoin:R,line:V};function Z({user:o}){const{tg_id:e}=l();return s.jsxs("div",{className:+e!==o.tg_id?t.box_card:t.box_your_card,children:[s.jsx("img",{src:y,className:t.imgAvatar}),s.jsxs("div",{className:t.user_info,children:[s.jsx("p",{className:t.name_user,children:o.name}),s.jsxs("div",{className:t.coin_window,children:[s.jsx("img",{src:g,className:t.imgCoin}),s.jsx("p",{className:t.coins,children:d(o.coin)})]}),+e!==o.tg_id&&s.jsx("div",{className:t.line})]})]})}const K="/assets/woodenEnot-B51vPMDb.png",M="/assets/stoneEnot-BzhVZHcx.png",Q="/assets/ironEnot-b8stfNNL.png",T="/assets/bronzeEnot-9eJgkS59.png",W="/assets/silverEnot-CWlVjY3g.png",Y="/assets/goldEnot-D8RmB_l8.png",G="/assets/platinumEnot-BUOACsjX.png",ss="/assets/rubyEnot-CvX7weox.png",es="/assets/emeraldEnot-DhJs5jX5.png",ns="/assets/sapphireEnot-ByZ5PEka.png",os=o=>{switch(o){case"Деревянная Лига":return K;case"Каменная Лига":return M;case"Железная Лига":return Q;case"Бронзовая Лига":return T;case"Серебряная Лига":return W;case"Золотая Лига":return Y;case"Платиновая Лига":return G;case"Рубиновая Лига":return ss;case"Изумрудная Лига":return es;case"Сапфировая Лига":return ns}};function ls(){const o=N(a=>{var i;return(i=a.dataUser.getUser)==null?void 0:i.coin}),[e,m]=c.useState(),[_,u]=c.useState(),{tg_id:x}=l(),{data:r}=f({queryKey:["dataUserLeague"],queryFn:()=>w(x)},h);c.useEffect(()=>{r&&(m(r),u(r[0].players),console.log(r))},[r]);const p=()=>{if(e&&o&&e[0].min_coin)return o*100/(e[0].min_coin*10)};return s.jsxs(b,{children:[s.jsx(j,{}),s.jsxs("div",{className:n.container,children:[s.jsxs("div",{className:n.box_league,children:[(e==null?void 0:e.length)&&s.jsxs(s.Fragment,{children:[s.jsx("h1",{className:n.name_league,children:e[0].name}),s.jsx("img",{className:n.imgEnot,src:os(e[0].name)})]}),s.jsx("button",{className:n.btn_left}),s.jsx("button",{className:n.btn_right}),s.jsxs("div",{className:n.box_progress,children:[s.jsx("img",{src:g,className:n.iconCoin}),r&&e&&o&&s.jsx("span",{className:n.title_energy,children:`${d(o)} / ${v(e[0].min_coin*10)}`})]}),s.jsx("div",{className:n.progress,children:s.jsx("div",{className:n.progress_bar,style:{width:`${p()}%`}})})]}),s.jsx("div",{className:n.box_all_users,children:_&&_.map(a=>s.jsx(Z,{user:a},a.tg_id))})]})]})}export{ls as default};