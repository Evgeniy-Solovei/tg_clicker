import{j as s,r as _,D as r}from"./index-Bc8zj2Tn.js";import{i as l}from"./imgCoin-DwLBqyid.js";import{M as x}from"./Modal-B7_LZqp1.js";import{H as m}from"./Header-DnwYlMY9.js";const d="_container_hlwfi_1",b="_iconX_hlwfi_13",h="_box_info_task_hlwfi_24",j="_name_task_hlwfi_31",f="_box_cost_hlwfi_39",g="_icon_coin_hlwfi_44",k="_cost_task_hlwfi_52",o={container:d,iconX:b,box_info_task:h,name_task:j,box_cost:f,icon_coin:g,cost_task:k};function N(){return s.jsx("svg",{width:"9",height:"16",viewBox:"0 0 9 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M1.00456 14.0813C0.684352 14.4049 0.683236 14.9306 1.00207 15.2555C1.29191 15.551 1.7464 15.5787 2.06721 15.3383L2.15915 15.2581L8.75915 8.58894C9.05112 8.29392 9.07768 7.83103 8.83882 7.50546L8.7592 7.41221L2.1592 0.741981C1.83902 0.418393 1.32097 0.419481 1.00212 0.744412C0.712245 1.0398 0.686779 1.50114 0.925101 1.8257L1.00451 1.91866L7.022 8.00089L1.00456 14.0813Z",fill:"#BEBEBE"})})}const p="_modal_content_la2ay_1",C="_iconX_la2ay_10",u="_title_la2ay_15",v="_box_title_la2ay_26",w="_btn_la2ay_36",y="_coin_box_la2ay_55",X="_iconCoin_la2ay_64",E="_coin_title_la2ay_71",L="_imgEnot_la2ay_81",n={modal_content:p,iconX:C,title:u,box_title:v,btn:w,coin_box:y,iconCoin:X,coin_title:E,imgEnot:L},$="/assets/iconX-CgXIbL1C.png",B="/assets/imgEnot-De3W-ily.png";function M({onClose:i}){return s.jsx(s.Fragment,{children:s.jsxs("div",{className:n.modal_content,children:[s.jsxs("div",{className:n.box_title,children:[s.jsx("img",{src:$,className:n.iconX}),s.jsx("p",{className:n.title,children:"Следи за нашим аккаунтом в X"})]}),s.jsx("button",{onClick:i,className:n.btn,children:"Подписаться"}),s.jsxs("div",{className:n.coin_box,children:[s.jsx("img",{src:l,className:n.iconCoin}),s.jsx("p",{className:n.coin_title,children:"+5 000"})]}),s.jsx("img",{src:B,className:n.imgEnot})]})})}function D(){const[i,a]=_.useState(!1),e=()=>{a(!0)},c=()=>{a(!1)};return _.useEffect(()=>{},[i]),s.jsxs("div",{onClick:e,className:o.container,children:[s.jsx("div",{className:o.iconX}),s.jsxs("div",{className:o.box_info_task,children:[s.jsx("p",{className:o.name_task,children:"Следи за нашим аккаунтом в X"}),s.jsxs("div",{className:o.box_cost,children:[s.jsx("img",{className:o.icon_coin,src:l}),s.jsx("p",{className:o.cost_task,children:"+ 5000"})]})]}),s.jsx(N,{}),s.jsx(x,{isOpen:i,onClose:c,hiddenClose:!0,children:s.jsx(M,{onClose:c})})]})}const T="_container_1a98b_1",H="_box_fon_1a98b_10",I="_slogan1_1a98b_20",S="_slogan2_1a98b_39",V="_title_list_tasks_1a98b_56",A="_box_all_tasks_1a98b_69",t={container:T,box_fon:H,slogan1:I,slogan2:S,title_list_tasks:V,box_all_tasks:A};function Z(){return s.jsxs(r,{children:[s.jsx(m,{}),s.jsxs("div",{className:t.container,children:[s.jsxs("div",{className:t.box_fon,children:[s.jsx("p",{className:t.slogan1,children:"ЗАРАБОТАЙ"}),s.jsx("p",{className:t.slogan2,children:"БОЛЬШЕ МОНЕТ"}),s.jsx("p",{className:t.title_list_tasks,children:"Список заданий"})]}),s.jsx("div",{className:t.box_all_tasks,children:s.jsx(D,{})})]})]})}export{Z as default};