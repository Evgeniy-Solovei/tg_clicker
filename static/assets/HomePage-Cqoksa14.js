import{j as e,u as V,a as O,r as C,s as $,b as e1,c as s1,d as t1,e as o1,f as n1,L as w,g as i1,h as a1,O as r1}from"./index-Bc8zj2Tn.js";import{u as _,a as I,f as Q,b as c1}from"./formatNumber-Dn8m2DQA.js";import{u as T,a as N,s as l1,q as u,g as d1,b as g1,c as m1,d as _1,e as C1,f as u1,h as x1}from"./gueryClient-DnQ-5M4J.js";import{H as p1}from"./Header-DnwYlMY9.js";import{B as P,Y,Q as h1}from"./ReactToastify-Cgxb2n68.js";import{i as F}from"./imgCoin-DwLBqyid.js";const L1="_container_1gmec_1",j1="_imgDiamond_1gmec_16",k1="_text_1gmec_22",v1="_line_1gmec_37",y={container:L1,imgDiamond:j1,text:k1,line:v1},f1="/assets/iconDiamond-B1g23HaV.png",w1="_container_1llth_1",y1="_text_1llth_15",q={container:w1,text:y1};function b1(){return e.jsx("div",{className:q.container,children:e.jsx("p",{className:q.text,children:"Airdrop"})})}function A1(){const s=_(o=>{var n;return(n=o.dataUser.getUser)==null?void 0:n.crystal});return e.jsxs("div",{className:y.container,children:[e.jsx("img",{src:f1,className:y.imgDiamond}),e.jsx("p",{className:y.text,children:s}),e.jsx("div",{className:y.line}),e.jsx("p",{className:y.text,children:"123 USDT"}),e.jsx("div",{className:y.line}),e.jsx(b1,{})]})}const N1="_container_u3d6j_1",V1="_circle_bottom_u3d6j_10",B1="_circle_u3d6j_10",M1="_back_gradient_u3d6j_54",v={container:N1,circle_bottom:V1,circle:B1,back_gradient:M1};function H1(){const s=_(o=>{var n;return(n=o.dataUser.getUser)==null?void 0:n.lvl});return e.jsxs("div",{className:v.container,children:[e.jsxs("div",{className:v.circle_bottom,children:[e.jsx("div",{className:v.outer}),e.jsx("div",{className:v.inner}),e.jsx("div",{className:v.circle,children:e.jsx("h1",{className:v.text_lvl,children:s})})]}),e.jsx("div",{className:v.back_gradient})]})}const S1="_container_9gp37_1",Z1="_user_name_9gp37_8",W={container:S1,user_name:Z1};function U1(){const{userName:s}=V();return e.jsxs("div",{className:W.container,children:[e.jsx(H1,{}),e.jsx("p",{className:W.user_name,children:s}),e.jsx(A1,{})]})}const D1="_position_box_11k72_1",E1="_circle_11k72_10",T1="_pluse_one_11k72_24",I1="_moveUp_11k72_1",F1="_all_11k72_35",H={position_box:D1,circle:E1,pluse_one:T1,moveUp:I1,all:F1},R1="/assets/allBtnEnot-B_hYuPeD.png";function q1(){const{tg_id:s,userName:o}=V(),c=new URLSearchParams(O().search).get("id"),[l,g]=C.useState(""),{data:x}=T({queryKey:["userData"],queryFn:()=>d1(s,o)},u);T({queryKey:["addFriend"],queryFn:()=>g1(s,l),enabled:!!s&&!!l,retry:1},u),C.useEffect(()=>{c&&g(c)},[c]);const i=I();C.useEffect(()=>{x&&(i($(x)),i(e1(x.timer_autobot)),i(s1(x.flag_autobot)))},[x,i]);const a=_(t=>{var p;return(p=t.dataUser.getUser)==null?void 0:p.energy_per_tap}),m=_(t=>{var p;return(p=t.dataUser.getUser)==null?void 0:p.energy_now}),[L,B]=C.useState(0),[S,M]=C.useState([]),Z=t=>{const p=t.target;if(!p)return;const R=p.getBoundingClientRect(),U=t.touches,A={x:0,y:0,id:0};for(let h=0;h<U.length;h++)A.x=U[h].clientX-R.left,A.y=U[h].clientY-R.top,A.id=Math.random()/100;setTimeout(()=>{M(h=>h.filter(X=>X!==A))},2e3),m&&a&&m>=a&&(M(h=>[...h,A]),B(h=>h+a),i(t1(a)),i(o1(a)))},r=N({mutationFn:t=>l1(t.coin,t.energy,t.tg_id),onSuccess:t=>{B(0),i(n1(t.coin))}},u);return C.useEffect(()=>{if(L&&m){const t=setTimeout(()=>{r.mutate({coin:L,energy:m,tg_id:s})},1500);return()=>clearTimeout(t)}},[L]),e.jsx("div",{className:H.position_box,children:e.jsxs("div",{onTouchStart:Z,className:H.circle,children:[e.jsx("img",{src:R1,className:H.all}),S.map(t=>e.jsx("div",{className:H.pluse_one,style:{left:t.x,top:t.y},children:`+ ${a}`},t.id))]})})}const W1="_container_1oqo9_1",K1="_imgHome_1oqo9_21",O1="_imgLootBox_1oqo9_33",Q1="_imgSkins_1oqo9_49",P1="_imgFriends_1oqo9_65",Y1="_imgLiga_1oqo9_81",G1="_imgTasks_1oqo9_97",z1="_fon_active_1oqo9_113",d={container:W1,imgHome:K1,imgLootBox:O1,imgSkins:Q1,imgFriends:P1,imgLiga:Y1,imgTasks:G1,fon_active:z1};function J1({fill:s}){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7V17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V7Z",fill:s}),e.jsx("path",{d:"M16.75 11C16.75 10.5858 16.4142 10.25 16 10.25C15.5858 10.25 15.25 10.5858 15.25 11V17C15.25 17.4142 15.5858 17.75 16 17.75C16.4142 17.75 16.75 17.4142 16.75 17V11Z",fill:s}),e.jsx("path",{d:"M8.75 13C8.75 12.5858 8.41421 12.25 8 12.25C7.58579 12.25 7.25 12.5858 7.25 13V17C7.25 17.4142 7.58579 17.75 8 17.75C8.41421 17.75 8.75 17.4142 8.75 17V13Z",fill:s}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.4635 2.37373C15.3214 2.24999 13.8818 2.24999 12.0452 2.25H11.9548C10.1182 2.24999 8.67861 2.24999 7.53648 2.37373C6.37094 2.50001 5.42656 2.76232 4.62024 3.34815C4.13209 3.70281 3.70281 4.13209 3.34815 4.62024C2.76232 5.42656 2.50001 6.37094 2.37373 7.53648C2.24999 8.67861 2.24999 10.1182 2.25 11.9548V12.0452C2.24999 13.8818 2.24999 15.3214 2.37373 16.4635C2.50001 17.6291 2.76232 18.5734 3.34815 19.3798C3.70281 19.8679 4.13209 20.2972 4.62024 20.6518C5.42656 21.2377 6.37094 21.5 7.53648 21.6263C8.67859 21.75 10.1182 21.75 11.9547 21.75H12.0453C13.8818 21.75 15.3214 21.75 16.4635 21.6263C17.6291 21.5 18.5734 21.2377 19.3798 20.6518C19.8679 20.2972 20.2972 19.8679 20.6518 19.3798C21.2377 18.5734 21.5 17.6291 21.6263 16.4635C21.75 15.3214 21.75 13.8818 21.75 12.0453V11.9547C21.75 10.1182 21.75 8.67859 21.6263 7.53648C21.5 6.37094 21.2377 5.42656 20.6518 4.62024C20.2972 4.13209 19.8679 3.70281 19.3798 3.34815C18.5734 2.76232 17.6291 2.50001 16.4635 2.37373ZM5.50191 4.56168C6.00992 4.19259 6.66013 3.97745 7.69804 3.865C8.74999 3.75103 10.1084 3.75 12 3.75C13.8916 3.75 15.25 3.75103 16.302 3.865C17.3399 3.97745 17.9901 4.19259 18.4981 4.56168C18.8589 4.82382 19.1762 5.14111 19.4383 5.50191C19.8074 6.00992 20.0225 6.66013 20.135 7.69804C20.249 8.74999 20.25 10.1084 20.25 12C20.25 13.8916 20.249 15.25 20.135 16.302C20.0225 17.3399 19.8074 17.9901 19.4383 18.4981C19.1762 18.8589 18.8589 19.1762 18.4981 19.4383C17.9901 19.8074 17.3399 20.0225 16.302 20.135C15.25 20.249 13.8916 20.25 12 20.25C10.1084 20.25 8.74999 20.249 7.69804 20.135C6.66013 20.0225 6.00992 19.8074 5.50191 19.4383C5.14111 19.1762 4.82382 18.8589 4.56168 18.4981C4.19259 17.9901 3.97745 17.3399 3.865 16.302C3.75103 15.25 3.75 13.8916 3.75 12C3.75 10.1084 3.75103 8.74999 3.865 7.69804C3.97745 6.66013 4.19259 6.00992 4.56168 5.50191C4.82382 5.14111 5.14111 4.82382 5.50191 4.56168Z",fill:s})]})}function X1({fill:s}){return e.jsxs("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M6.95 17C6.95 17.5807 7.01459 17.9618 7.13233 18.2267C7.23752 18.4633 7.40196 18.6462 7.71017 18.8003C8.04326 18.9669 8.54383 19.0983 9.30532 19.1829C10.0605 19.2669 11.0224 19.3 12.25 19.3C13.4776 19.3 14.4395 19.2669 15.1947 19.1829C15.9562 19.0983 16.4567 18.9669 16.7898 18.8003C17.098 18.6462 17.2625 18.4633 17.3677 18.2267C17.4854 17.9618 17.55 17.5807 17.55 17C17.55 16.4193 17.4854 16.0382 17.3677 15.7733C17.2625 15.5367 17.098 15.3538 16.7898 15.1997C16.4567 15.0331 15.9562 14.9017 15.1947 14.8171C14.4395 14.7331 13.4776 14.7 12.25 14.7C11.0224 14.7 10.0605 14.7331 9.30532 14.8171C8.54383 14.9017 8.04326 15.0331 7.71017 15.1997C7.40196 15.3538 7.23752 15.5367 7.13233 15.7733C7.01459 16.0382 6.95 16.4193 6.95 17Z",stroke:s,strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("circle",{cx:"3.75",cy:"3.75",r:"3.05",transform:"matrix(-1 0 0 1 16 5)",stroke:s,strokeWidth:"1.4"}),e.jsx("path",{d:"M17.5 7.25C18.85 7.25 19.75 8.375 19.75 9.5C19.75 10.625 18.85 11.75 17.5 11.75",stroke:s,strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M7 7.25C5.65 7.25 4.75 8.375 4.75 9.5C4.75 10.625 5.65 11.75 7 11.75",stroke:s,strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M20.2 18.5C22.3 18.5 23.5 18.1786 23.5 16.25C23.5 14.3214 22.3 14 19 14",stroke:s,strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M4.3 18.5C2.2 18.5 1 18.1786 1 16.25C1 14.3214 2.2 14 5.5 14",stroke:s,strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})]})}function $1({fill:s}){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.73 2.89048L20.29 7.00048C21.3567 7.77576 21.9914 9.01185 22 10.3305V17.7705C21.94 20.1637 19.9534 22.0564 17.56 22.0005H6.44C4.04665 22.0564 2.06002 20.1637 2 17.7705V10.3405C2.0061 9.01612 2.64544 7.77462 3.72 7.00048L9.27 2.89048C10.8964 1.70317 13.1036 1.70317 14.73 2.89048ZM17.56 20.5005C19.1251 20.5568 20.4404 19.3354 20.5 17.7705V10.3305C20.4948 9.48583 20.0812 8.6959 19.39 8.21048L13.84 4.10048C12.7439 3.30006 11.2561 3.30006 10.16 4.10048L4.61 8.20048C3.91817 8.69448 3.50534 9.4904 3.5 10.3405V17.7705C3.56502 19.333 4.87698 20.5512 6.44 20.5005H17.56Z",fill:s}),e.jsx("path",{d:"M20.29 7.00048L20.1711 7.16132L20.1724 7.16226L20.29 7.00048ZM14.73 2.89048L14.8489 2.72965L14.8479 2.72895L14.73 2.89048ZM22 10.3305H22.2L22.2 10.3292L22 10.3305ZM22 17.7705L22.2 17.7755V17.7705H22ZM17.56 22.0005L17.5647 21.8005H17.56V22.0005ZM6.44 22.0005V21.8004L6.43533 21.8005L6.44 22.0005ZM2 17.7705H1.79994L1.80006 17.7755L2 17.7705ZM2 10.3405L1.8 10.3396V10.3405H2ZM3.72 7.00048L3.83692 7.16277L3.83902 7.16121L3.72 7.00048ZM9.27 2.89048L9.15207 2.72894L9.15098 2.72975L9.27 2.89048ZM20.5 17.7705L20.7 17.7781V17.7705H20.5ZM17.56 20.5005L17.5672 20.3005H17.56V20.5005ZM20.5 10.3305H20.7L20.7 10.3293L20.5 10.3305ZM19.39 8.21048L19.2709 8.37126L19.2751 8.37416L19.39 8.21048ZM13.84 4.10048L13.959 3.93975L13.9579 3.93896L13.84 4.10048ZM10.16 4.10048L10.042 3.93896L10.0412 3.93962L10.16 4.10048ZM4.61 8.20048L4.72624 8.36327L4.72884 8.36135L4.61 8.20048ZM3.5 10.3405L3.3 10.3392V10.3405H3.5ZM3.5 17.7705H3.29983L3.30017 17.7788L3.5 17.7705ZM6.44 20.5005V20.3004L6.43351 20.3006L6.44 20.5005ZM20.4089 6.83965L14.8489 2.72965L14.6111 3.05131L20.1711 7.16131L20.4089 6.83965ZM22.2 10.3292C22.191 8.947 21.5257 7.65135 20.4076 6.8387L20.1724 7.16226C21.1877 7.90018 21.7918 9.07669 21.8 10.3318L22.2 10.3292ZM22.2 17.7705V10.3305H21.8V17.7705H22.2ZM17.5553 22.2004C20.059 22.2589 22.1371 20.279 22.1999 17.7755L21.8001 17.7655C21.7428 20.0484 19.8477 21.8539 17.5647 21.8005L17.5553 22.2004ZM6.44 22.2005H17.56V21.8005H6.44V22.2005ZM1.80006 17.7755C1.86285 20.279 3.94103 22.2589 6.44467 22.2004L6.43533 21.8005C4.15227 21.8539 2.2572 20.0484 2.19994 17.7655L1.80006 17.7755ZM1.8 10.3405V17.7705H2.2V10.3405H1.8ZM3.60309 6.83821C2.47662 7.64974 1.8064 8.95122 1.8 10.3396L2.2 10.3414C2.20581 9.08102 2.81426 7.89949 3.83691 7.16276L3.60309 6.83821ZM9.15098 2.72975L3.60098 6.83975L3.83902 7.16121L9.38902 3.05121L9.15098 2.72975ZM14.8479 2.72895C13.1513 1.49035 10.8487 1.49035 9.15207 2.72895L9.38793 3.05202C10.944 1.91599 13.056 1.91599 14.6121 3.05202L14.8479 2.72895ZM20.3001 17.7629C20.2447 19.2176 19.0221 20.3529 17.5672 20.3006L17.5528 20.7004C19.2281 20.7606 20.636 19.4533 20.6999 17.7781L20.3001 17.7629ZM20.3 10.3305V17.7705H20.7V10.3305H20.3ZM19.2751 8.37416C19.9133 8.82238 20.2952 9.55178 20.3 10.3317L20.7 10.3293C20.6944 9.41989 20.2492 8.56943 19.5049 8.04681L19.2751 8.37416ZM13.721 4.26121L19.271 8.37121L19.509 8.04975L13.959 3.93975L13.721 4.26121ZM10.2779 4.262C11.3038 3.51289 12.6962 3.51289 13.7221 4.262L13.9579 3.93896C12.7916 3.08723 11.2084 3.08723 10.0421 3.93896L10.2779 4.262ZM4.72884 8.36135L10.2788 4.26135L10.0412 3.93962L4.49116 8.03962L4.72884 8.36135ZM3.7 10.3417C3.70493 9.55581 4.08661 8.81997 4.72622 8.36325L4.49378 8.03772C3.74973 8.569 3.30574 9.42499 3.3 10.3392L3.7 10.3417ZM3.7 17.7705V10.3405H3.3V17.7705H3.7ZM6.43351 20.3006C4.98017 20.3478 3.76029 19.215 3.69983 17.7622L3.30017 17.7788C3.36976 19.4509 4.77378 20.7547 6.44649 20.7004L6.43351 20.3006ZM17.56 20.3005H6.44V20.7005H17.56V20.3005Z",fill:s}),e.jsx("path",{d:"M16.5 15.7505H7.5C7.08579 15.7505 6.75 16.0863 6.75 16.5005C6.75 16.9147 7.08579 17.2505 7.5 17.2505H16.5C16.9142 17.2505 17.25 16.9147 17.25 16.5005C17.25 16.0863 16.9142 15.7505 16.5 15.7505Z",fill:s})]})}function e2({fill:s}){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M20.4553 6.46876C19.4461 4.31251 17.2711 2.99251 14.9241 2.90626C14.8903 2.90269 14.8563 2.90081 14.8224 2.90063H9.99798C7.82719 2.90063 5.79798 3.36938 4.33594 5.12251C3.09751 6.60892 2.86688 8.3236 2.86688 10.1719V20.2697C2.87003 20.488 2.95816 20.6965 3.11255 20.8509C3.26694 21.0053 3.47544 21.0934 3.69376 21.0966H20.2327C20.451 21.0934 20.6595 21.0053 20.8139 20.8509C20.9683 20.6965 21.0564 20.488 21.0595 20.2697V13.6374C21.0595 11.3681 21.4444 8.58517 20.4553 6.46876ZM4.85532 7.40626C5.70704 5.31938 7.66782 4.55813 9.76407 4.55813H14.8219C16.7438 4.59798 18.5002 5.76845 19.1456 7.61017C19.44 8.4511 19.4058 9.30329 19.4058 10.1752C19.4058 10.7266 18.9588 11.1736 18.4074 11.1736H5.51251C4.96304 11.1736 4.51051 10.7304 4.50106 10.181C4.48476 9.23338 4.50617 8.26132 4.85532 7.40626ZM10.237 13.6008C10.237 13.1736 10.5833 12.8274 11.0105 12.8274H12.9141C13.3412 12.8274 13.6875 13.1736 13.6875 13.6008C13.6875 14.0279 13.3412 14.3742 12.9141 14.3742H11.0105C10.5833 14.3742 10.237 14.0279 10.237 13.6008ZM5.77501 19.4424H5.52063C4.96835 19.4424 4.52063 18.9946 4.52063 18.4424V13.8269C4.52063 13.2746 4.96835 12.8269 5.52063 12.8269H7.58329C8.13557 12.8269 8.58329 13.2746 8.58329 13.8269V15.202C8.58583 15.4208 8.67369 15.6299 8.82815 15.7848C8.9826 15.9396 9.19144 16.0281 9.41016 16.0313H14.5163C14.7354 16.0309 14.9455 15.9437 15.1005 15.7887C15.2555 15.6337 15.3428 15.4236 15.3431 15.2044V13.8269C15.3431 13.2746 15.7908 12.8269 16.3431 12.8269H18.4063C18.9585 12.8269 19.4063 13.2746 19.4063 13.8269V18.4424C19.4063 18.9946 18.9585 19.4424 18.4063 19.4424H5.77501Z",fill:s})})}function s2({fill:s}){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M5.99799 12V17.684C5.99799 19.495 5.99799 20.401 6.58299 20.964C7.24799 21.603 9.61499 21.979 11.993 21.999C14.309 22.019 16.633 21.702 17.403 20.964C17.987 20.401 17.987 19.495 17.987 17.684V12",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.72197 14.022C4.85697 13.708 3.22997 13.44 2.49597 12.703C1.48597 11.69 2.13897 10.32 3.37697 7.739C3.93397 6.577 5.00097 5.722 6.24397 5.385C6.41282 5.33933 6.55927 5.23376 6.65597 5.088L7.93897 3.088C7.97559 3.03239 8.02409 2.9856 8.08097 2.951C8.65897 2.602 10.092 2 11.993 2C13.894 2 15.233 2.602 15.81 2.95C15.8671 2.98517 15.9156 3.03266 15.952 3.089L17.272 5.069C17.3687 5.21476 17.5151 5.32033 17.684 5.366C18.927 5.704 19.945 6.45 20.503 7.612C21.893 10.142 22.511 11.671 21.5 12.684C20.767 13.42 19.117 13.712 18.252 14.025",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M6.50098 5.5L10.735 8.793C11.341 9.264 11.644 9.5 12.001 9.5C12.358 9.5 12.661 9.264 13.268 8.793L17.5 5.5M9.50098 3L11.001 9M14.501 3L13.001 9",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function t2({fill:s}){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.21385 20.1834L7.21382 20.1834L7.20646 20.1885C6.30916 20.8182 5.07008 20.2483 4.98416 19.1404C4.88374 17.8456 4.74998 15.4734 4.75 12.0238V11.9616C4.74998 10.5924 4.75071 9.39897 4.84845 8.40301C4.94753 7.39329 5.15328 6.48799 5.63166 5.75021C6.6324 4.20681 8.55937 3.7627 11.5798 3.75026C14.6038 3.73781 16.5335 4.17978 17.5353 5.73299C18.0129 6.47362 18.2185 7.38311 18.3175 8.39624C18.4152 9.39602 18.416 10.5926 18.4159 11.9622V12.0238C18.4159 15.4734 18.2822 17.8456 18.1817 19.1404C18.0958 20.2483 16.8568 20.8182 15.9595 20.1885L15.9595 20.1885L15.9521 20.1834C15.1692 19.6479 14.4447 19.0715 13.8804 18.6222L13.8703 18.6141C13.6138 18.4099 13.3811 18.2247 13.1987 18.0894C12.8564 17.8357 12.5709 17.6628 12.3068 17.5564C12.0195 17.4407 11.7876 17.4159 11.583 17.4159C11.3783 17.4159 11.1464 17.4407 10.8591 17.5564C10.595 17.6628 10.3096 17.8357 9.96723 18.0894L10.4138 18.692L9.96723 18.0894C9.78475 18.2247 9.55198 18.41 9.29541 18.6143L9.28552 18.6222C8.72118 19.0715 7.99673 19.6479 7.21385 20.1834Z",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M13.0995 6.79395C13.8578 6.79395 14.2369 6.79106 14.8057 7.35831C15.3744 7.92557 15.3744 9.82418 15.3744 10.5825",stroke:s,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function o2(){const s=O();return e.jsx(e.Fragment,{children:e.jsxs("div",{className:d.container,children:[" ",e.jsx(w,{className:s.pathname==="/"?`${d.imgHome} ${d.fon_active} `:`${d.imgHome} `,to:"/",children:e.jsx($1,{fill:s.pathname==="/"?"white":"black"})}),e.jsx(w,{className:s.pathname==="/loot-box"?`${d.imgLootBox} ${d.fon_active}`:`${d.imgLootBox} `,to:"loot-box",children:e.jsx(e2,{fill:s.pathname==="/loot-box"?"white":"black"})}),e.jsx(w,{className:s.pathname==="/skins"?`${d.imgSkins} ${d.fon_active}`:`${d.imgSkins} `,to:"skins",children:e.jsx(s2,{fill:s.pathname==="/skins"?"white":"black"})})," ",e.jsx(w,{className:s.pathname==="/friends"?`${d.imgFriends} ${d.fon_active}`:`${d.imgFriends} `,to:"friends",children:e.jsx(X1,{fill:s.pathname==="/friends"?"white":"black"})}),e.jsx(w,{className:s.pathname==="/tasks"?`${d.imgTasks} ${d.fon_active}`:`${d.imgTasks} `,to:"tasks",children:e.jsx(t2,{fill:s.pathname==="/tasks"?"white":"black"})}),e.jsx(w,{className:s.pathname==="/liga-active"?`${d.imgLiga} ${d.fon_active}`:`${d.imgLiga} `,to:"liga-active",children:e.jsx(J1,{fill:s.pathname==="/liga-active"?"white":"black"})})]})})}const n2="_container_1tsuj_1",i2="_board_1tsuj_9",K={container:n2,board:i2},a2="/assets/board-D9Thx7L7.png",G="data:image/png;base64,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",z="data:image/svg+xml,%3csvg%20width='24'%20height='33'%20viewBox='0%200%2024%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clipPath='url(%23clip0_48_826)'%3e%3cpath%20d='M22.5864%2014.1858L17.204%2012.6605C16.7646%2012.536%2016.5205%2012.0545%2016.666%2011.5991L19.3468%203.20538C19.7408%202.67263%2019.7381%201.91624%2019.3048%201.40436C18.8121%200.822989%2017.9503%200.777485%2017.3796%201.30333L1.10488%2016.3063C0.534296%2016.8324%200.471087%2017.7305%200.963621%2018.3123C1.13832%2018.5192%201.36907%2018.6665%201.62691%2018.7355C1.67386%2018.7481%201.72155%2018.7569%201.76946%2018.7642C1.81481%2018.782%201.8613%2018.7977%201.90942%2018.8106L5.94119%2019.8909C6.4308%2020.0221%206.67381%2020.5881%206.44596%2021.0663L2.19973%2029.9808C1.73887%2030.4843%201.67709%2031.2666%202.08617%2031.8239C2.26567%2032.0692%202.51948%2032.2441%202.80808%2032.3212C3.20311%2032.427%203.64359%2032.3459%203.99711%2032.0614L22.9426%2016.8174C23.1172%2016.677%2023.2577%2016.4955%2023.3521%2016.2885C23.4181%2016.1783%2023.472%2016.0579%2023.5086%2015.9277C23.7223%2015.1705%2023.3093%2014.3907%2022.5864%2014.1858Z'%20fill='url(%23paint0_linear_48_826)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_48_826'%20x1='16.4057'%20y1='0.382295'%20x2='16.7221'%20y2='24.5404'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F7C243'/%3e%3cstop%20offset='1'%20stop-color='%23FD902B'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_48_826'%3e%3crect%20width='23'%20height='32'%20fill='white'%20transform='translate(0.592041%200.565186)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALlSURBVHgBrZW9b9tGGMafO0oUKUUSlbquIcTouShcoJP3DmG3Al3arVsydI+nrnH/gqZjW6BJ0L2Ol2yFVSDIUBe1mw/EyJep2LEsyZJIkSKPX3ehDSgIYidwIv8m4iX5w3u4e58jeANysGRAn7kQeiMz6LYXFFVjUgj4QWBpH35gGQautQbTjXr9++Zx/5Ojwp8MMXxwqd92F9WyZlCag1bIQ6Zp9jWFpCm4N4JIBXrdEeY+m1pSZn//8a3iwbrJEFRWUxGz0tkahOuChj6O7UjXkap5PL23g9mPS5YkkVn74nbziLi1vMDSfHG1cNZgFZVA+BwnQlUx2LeRxImVUz2z/vWDQzkdv3d9rBJVZ2WIk0sPiCIY1az7lDCnl2+sX10wXorXfvn8sudLVikqkEmMd4VIgnJZB+eCqVRcOqwtL84w41x165P5aUwbKiahN+R4eKdt1/RkjkaKcn44FCipFJOSpwR6dpLskF6gAye5WDbyKBVzmJTKmQIIkegPUpNmZ54pZPJux2iahoDLBer6Matku3paKDkCHqaM8khCSolTI1O5PAXlsbT6gwCnRScb86ErLOqM0o1Hjwc4LTqdADwhFu05ScPxBHZ2R5gUx03QfO7D9sJrNEwL1/ftyL57fx+Tsn5nH31XgAa8oWzucT4/U9CiKDFn60VUKwW8D1uWg3/We9hq+Uu/3hqtKAdFVtP+V3Lyu3bbM+Y/rWb5+27D4gcpVm5a2Nh0rau3ht8e1A4n48aGbffa4ksuC9byzR082XJOLG21OX77YxPbndhyZGSO68r44d4etz/SyQofBd80n3mG74VZHKooFvPHC1sjrP3XxV9/b8PaDa0dzzf/vM2PBv2r/PCVcblcIkv1c1XoSoypmo5y9SAHCFwvQbfrIcjSVeSL9tq/u1c6NPfzjYZtv+ogb1riopndJJX0PJubukgSzs7UDBbFIRSlYHX2+hvN7aCRxvT6ldeEY14AWy1lhtfa5WQAAAAASUVORK5CYII=",r2="_container_1ihft_1",c2="_btn_1ihft_11",l2="_imgCostBoost_1ihft_28",d2="_imgEnergy_1ihft_38",g2="_text_lvl_1ihft_48",m2="_cost_window_1ihft_65",_2="_text_cost_1ihft_82",j={container:r2,btn:c2,imgCostBoost:l2,imgEnergy:d2,text_lvl:g2,cost_window:m2,text_cost:_2};function C2(){const s=I(),{tg_id:o}=V(),n=_(m=>{var L;return(L=m.dataUser.getUser)==null?void 0:L.coin})||0,c=_(m=>m.boosters.energy_lvl),l=_(m=>m.boosters.price_lvl_up_energy),{data:g}=T({queryKey:["boosterData"],queryFn:()=>_1(o)},u),x=n>=l,i=N({mutationFn:m=>m1(m.id),onSuccess:()=>{u.invalidateQueries({queryKey:["userData"]}),u.invalidateQueries({queryKey:["boosterData"]}),P.success("Максимальная энергия увеличена!",{position:"top-center",autoClose:2e3,hideProgressBar:!0,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:Y})}},u);C.useEffect(()=>{g&&s(i1(g))},[g]);const a=m=>{i.mutate({id:m})};return e.jsxs("div",{className:j.container,children:[e.jsxs("div",{className:j.cost_window,children:[" ",e.jsx("img",{className:j.imgCostBoost,src:J}),e.jsx("span",{className:j.text_cost,children:Q(l)})]}),e.jsxs("button",{disabled:!x,className:j.btn,onClick:()=>{a(o)},children:[e.jsx("img",{className:j.imgEnergy,src:z}),e.jsx("img",{className:j.imgBtn,src:G}),e.jsx("span",{className:j.text_lvl,children:`Lvl ${c}`})]})]})}const u2="_container_8spo7_1",x2="_btn_8spo7_11",p2="_imgCoin_8spo7_36",h2="_text_lvl_8spo7_47",L2="_imgCostBoost_8spo7_64",j2="_cost_window_8spo7_70",k2="_text_cost_8spo7_87",k={container:u2,btn:x2,imgCoin:p2,text_lvl:h2,imgCostBoost:L2,cost_window:j2,text_cost:k2};function v2(){const{tg_id:s}=V(),o=_(i=>{var a;return(a=i.dataUser.getUser)==null?void 0:a.coin})||0,n=_(i=>i.boosters.lvl_one_tap_damage_and_energy),c=_(i=>i.boosters.price_lvl_up_damage_and_energy),l=o>=c,g=N({mutationFn:i=>C1(i.id),onSuccess:()=>{u.invalidateQueries({queryKey:["userData"]}),u.invalidateQueries({queryKey:["boosterData"]}),P.success("Уровень повышен!",{position:"top-center",autoClose:2e3,hideProgressBar:!0,closeOnClick:!1,pauseOnHover:!1,draggable:!1,progress:void 0,theme:"dark",transition:Y})}},u),x=i=>{g.mutate({id:i})};return e.jsxs("div",{className:k.container,children:[e.jsxs("div",{className:k.cost_window,children:[e.jsx("img",{className:k.imgCostBoost,src:J}),e.jsx("span",{className:k.text_cost,children:Q(c)})]}),e.jsxs("button",{disabled:!l,className:k.btn,onClick:()=>x(s),children:[e.jsx("img",{className:k.imgCoin,src:F}),e.jsx("img",{className:k.imgBtn,src:G}),e.jsx("span",{className:k.text_lvl,children:`Lvl ${n}`})]})]})}const f2="_coin_box_ik0p0_1",w2="_img_coin_ik0p0_16",y2="_score_ik0p0_23",D={coin_box:f2,img_coin:w2,score:y2};function b2(){const s=_(o=>{var n;return(n=o.dataUser.getUser)==null?void 0:n.coin})||0;return e.jsxs("div",{className:D.coin_box,children:[e.jsx("img",{className:D.img_coin,src:F}),e.jsx("h2",{className:D.score,children:c1(s)})]})}const A2="_container_3rp2k_2",N2="_box_3rp2k_14",V2="_icon_energy_3rp2k_21",B2="_title_energy_3rp2k_26",M2="_progress_3rp2k_39",H2="_progress_bar_3rp2k_46",b={container:A2,box:N2,icon_energy:V2,title_energy:B2,progress:M2,progress_bar:H2},S2=()=>{const s=I(),o=_(l=>{var g;return(g=l.dataUser.getUser)==null?void 0:g.energy_now}),n=_(l=>{var g;return(g=l.dataUser.getUser)==null?void 0:g.energy_start}),c=()=>{if(o&&n)return o*100/n};return C.useEffect(()=>{const l=setInterval(()=>{n&&(o||o===0)&&o<n&&s(a1(1))},1e3);return()=>clearInterval(l)},[o]),e.jsxs("div",{className:b.container,children:[e.jsx("img",{className:b.icon_energy,src:z}),e.jsxs("div",{className:b.box,children:[e.jsxs("span",{className:b.title_energy,children:[o," / ",n]}),e.jsx("div",{className:b.progress,children:e.jsx("div",{className:b.progress_bar,style:{width:`${c()}%`}})})]})]})},Z2=S2;function U2(){return e.jsxs("div",{className:K.container,children:[e.jsx("img",{className:K.board,src:a2}),e.jsx(Z2,{}),e.jsx(b2,{}),e.jsx(C2,{}),e.jsx(v2,{})]})}const D2="_box_footer_1mve7_1",E2="_glow_1mve7_6",T2="_glow_red_1mve7_18",E={box_footer:D2,glow:E2,glow_red:T2},I2="_container_12yr8_1",F2="_btn_get_prize_12yr8_27",R2="_btn_get_prize_disabled_12yr8_47",q2="_imgEnot_12yr8_70",W2="_coinBot_window_12yr8_75",K2="_imgCoin_12yr8_96",f={container:I2,btn_get_prize:F2,btn_get_prize_disabled:R2,imgEnot:q2,coinBot_window:W2,imgCoin:K2},O2="/assets/avtoBotEnot-iY1sh0mN.png";function Q2(){const{tg_id:s}=V(),[o,n]=C.useState(0),[c,l]=C.useState(!1),g=_(r=>{var t;return(t=r.dataUser.getUser)==null?void 0:t.coin_bonus_result}),[x,i]=C.useState(!1),a=_(r=>{var t;return(t=r.dataUser.getUser)==null?void 0:t.timer_autobot}),m=_(r=>r.timer.flag),L=N({mutationFn:r=>u1(r.tg_id),onSuccess:r=>{u.invalidateQueries({queryKey:["userData"]}),l(r.flag_autobot),n(r.timer)}},u),B=N({mutationFn:r=>x1(r.tg_id),onSuccess:()=>{u.invalidateQueries({queryKey:["userData"]}),u.invalidateQueries({queryKey:["boxesData"]}),i(!1)}},u),S=()=>{a&&n(a),l(!0),L.mutate({tg_id:s})};C.useEffect(()=>{if(a&&c===!0){const r=setTimeout(()=>{l(!1),i(!0)},o*1e3);return()=>clearTimeout(r)}},[c,o,a]),C.useEffect(()=>{g&&g>0&&a===0&&c===!1&&i(!0)},[g,a,c]),C.useEffect(()=>{a!=null&&(m?l(!1):(l(!0),n(a)))},[m,a]),C.useEffect(()=>{if(a&&c){const r=setInterval(()=>{n(t=>t-1)},1e3);return()=>clearInterval(r)}},[c,o]);const M=r=>{const t=Math.floor(r%3600/60),p=r%60;return`${t.toString().padStart(2,"0")}:${p.toString().padStart(2,"0")}`},Z=()=>{B.mutate({tg_id:s}),i(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:f.coinBot_window,children:[e.jsx("img",{src:F,className:f.imgCoin}),"+15"]}),e.jsx("button",{disabled:c===!x,onClick:S,className:f.container,children:c?e.jsx("div",{className:f.time,children:M(o)}):e.jsx("img",{className:f.imgEnot,src:O2})}),e.jsx("button",{disabled:!x,onClick:Z,className:` ${x?f.btn_get_prize:f.btn_get_prize_disabled} `,children:"Забрать"})]})}function $2(){return e.jsxs(e.Fragment,{children:[e.jsx(p1,{}),e.jsx(U1,{}),e.jsx(U2,{}),e.jsx(q1,{}),e.jsx(Q2,{}),e.jsx(r1,{}),e.jsx("div",{className:E.box_footer,children:e.jsx(o2,{})}),e.jsx(h1,{}),e.jsx("div",{className:E.glow}),e.jsx("div",{className:E.glow_red})]})}export{$2 as default};
