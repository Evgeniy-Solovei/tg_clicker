import{j as s,u as D,r as u,a as O,s as U,b as $,c as s1,d as t1,e as e1,f as n1,g as o1,h as i1,i as a1,L as k,k as c1,l as r1,O as l1}from"./index-BDU0cY8E.js";import{u as C,a as y,b as T}from"./useMutation-DdVcMiKs.js";import{s as d1,q as _,g as g1,u as S,a as m1,b as C1,c as u1,d as _1,e as x1,f as p1,H as L1}from"./Header-DxQH2yzs.js";const h1="_container_1dobe_1",j1="_text_1dobe_11",q={container:h1,text:j1};function k1(){return s.jsx("div",{className:q.container,children:s.jsx("p",{className:q.text,children:"Airdrop"})})}const v1="_container_1xq62_1",A1="_imgDiamond_1xq62_13",y1="_text_1xq62_19",B={container:v1,imgDiamond:A1,text:y1},f1="/assets/iconDiamond-B1g23HaV.png",b1="/assets/imgUSDT-DbME4qOR.png";function M1(){const n=C(o=>{var c;return(c=o.dataUser.getUser)==null?void 0:c.crystal});return s.jsxs("div",{className:B.container,children:[s.jsx("img",{src:f1,className:B.imgDiamond}),s.jsx("p",{className:B.text,children:n}),s.jsx("img",{className:B.imgUSDT,src:b1})]})}const B1="_container_1ddea_1",V1="_circle_bottom_1ddea_10",E1="_circle_1ddea_10",D1="_back_gradient_1ddea_46",L={container:B1,circle_bottom:V1,circle:E1,back_gradient:D1};function w1(){const n=C(o=>{var c;return(c=o.dataUser.getUser)==null?void 0:c.lvl});return s.jsxs("div",{className:L.container,children:[s.jsxs("div",{className:L.circle_bottom,children:[s.jsx("div",{className:L.outer}),s.jsx("div",{className:L.inner}),s.jsx("div",{className:L.circle,children:s.jsx("h1",{className:L.text_lvl,children:n})})]}),s.jsx("div",{className:L.back_gradient})]})}const H1="_container_1itxd_1",N1={container:H1};function S1(){return s.jsxs("div",{className:N1.container,children:[s.jsx(w1,{}),s.jsx(k1,{}),s.jsx(M1,{})]})}const T1="_container_6pkqv_1",Z1="_btn_get_prize_6pkqv_28",Q1="_imgEnot_6pkqv_51",V={container:T1,btn_get_prize:Z1,imgEnot:Q1},I1="/assets/avtoBotEnot-iY1sh0mN.png";function U1(){const{tg_id:n}=D(),[o,c]=u.useState(0),[a,r]=u.useState(!1),x=C(i=>{var e;return(e=i.dataUser.getUser)==null?void 0:e.coin_bonus_result}),[l,t]=u.useState(!1),m=C(i=>{var e;return(e=i.dataUser.getUser)==null?void 0:e.timer_autobot}),p=C(i=>i.timer.flag);u.useEffect(()=>{if(m&&a===!0){const i=setTimeout(()=>{r(!1),t(!0)},o*1e3);return()=>clearTimeout(i)}},[a,o]);const d=y({mutationFn:i=>d1(i.tg_id),onSuccess:i=>{_.invalidateQueries({queryKey:["userData"]}),r(i.flag_autobot),c(i.timer)}},_),f=y({mutationFn:i=>g1(i.tg_id),onSuccess:()=>{_.invalidateQueries({queryKey:["userData"]}),_.invalidateQueries({queryKey:["boxesData"]}),t(!1)}},_);u.useEffect(()=>{x&&x>0&&m===0&&a===!1&&t(!0)},[a,x,m]);const w=()=>{m&&c(m),r(!0),d.mutate({tg_id:n})};u.useEffect(()=>{m!=null&&(p?r(!1):(r(!0),c(m)))},[p]),u.useEffect(()=>{if(m&&a){const i=setInterval(()=>{c(e=>e-1)},1e3);return()=>clearInterval(i)}},[a,o]);const b=i=>{const e=Math.floor(i%3600/60),M=i%60;return`${e.toString().padStart(2,"0")}:${M.toString().padStart(2,"0")}`},H=()=>{f.mutate({tg_id:n}),t(!1),console.log(a,l)};return s.jsxs(s.Fragment,{children:[l&&s.jsx("button",{onClick:H,className:V.btn_get_prize,children:"Забрать"}),s.jsx("button",{disabled:a===!l,onClick:w,className:V.container,children:a?s.jsx("div",{className:V.time,children:b(o)}):s.jsx("img",{className:V.imgEnot,src:I1})})]})}const q1="_position_box_1yj3t_1",F1="_circle_1yj3t_10",W1="_pluse_one_1yj3t_23",O1="_moveUp_1yj3t_1",R1="_all_1yj3t_33",E={position_box:q1,circle:F1,pluse_one:W1,moveUp:O1,all:R1},Y1="/assets/allBtnEnot-B_hYuPeD.png";function G1(){const{tg_id:n,userName:o}=D(),a=new URLSearchParams(O().search).get("id"),[r,x]=u.useState(""),{data:l}=S({queryKey:["userData"],queryFn:()=>C1(n,o)},_);S({queryKey:["addFriend"],queryFn:()=>u1(n,r),enabled:!!n&&!!r,retry:1},_),u.useEffect(()=>{a&&x(a)},[a]);const t=T();u.useEffect(()=>{l&&(t(U(l.coin)),t($(l)),t(s1(l.energy_now)),t(t1(l.energy_start)),t(e1(l.timer_autobot)),t(n1(l.flag_autobot)),t(o1(l.money_per_tap)))},[l]);const m=C(e=>e.tap.damage),p=C(e=>e.energy.energy),[d,f]=u.useState(0),[w,b]=u.useState([]),H=e=>{const M=e.target;if(!M)return;const Z=M.getBoundingClientRect(),Q=e.touches[0],P=Q.clientX-Z.left,X=Q.clientY-Z.top,J=Math.random()/100,I={x:P,y:X,id:J};setTimeout(()=>{b(A=>A.filter(z=>z!==I))},2e3),p>=m&&(b(A=>[...A,I]),f(A=>A+m),t(i1(m)),t(a1(m)))},i=y({mutationFn:e=>m1(e.coin,e.energy,e.tg_id),onSuccess:e=>{f(0),t(U(e.coin))}},_);return u.useEffect(()=>{if(d){const e=setTimeout(()=>{i.mutate({coin:d,energy:p,tg_id:n})},1500);return()=>clearTimeout(e)}},[d]),s.jsx("div",{className:E.position_box,children:s.jsxs("div",{onTouchStart:H,className:E.circle,children:[s.jsx("img",{src:Y1,className:E.all}),w.map(e=>s.jsx("div",{className:E.pluse_one,style:{left:e.x,top:e.y},children:`+ ${m}`},e.id))]})})}const K1="_container_1nila_1",P1="_imgHome_1nila_21",X1="_imgLootBox_1nila_31",J1="_imgSkins_1nila_45",z1="_imgFriends_1nila_59",$1="_imgLiga_1nila_73",s2="_imgTasks_1nila_87",t2="_fon_active_1nila_101",g={container:K1,imgHome:P1,imgLootBox:X1,imgSkins:J1,imgFriends:z1,imgLiga:$1,imgTasks:s2,fon_active:t2};function e2(){return s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7V17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V7Z",fill:"black"}),s.jsx("path",{d:"M16.75 11C16.75 10.5858 16.4142 10.25 16 10.25C15.5858 10.25 15.25 10.5858 15.25 11V17C15.25 17.4142 15.5858 17.75 16 17.75C16.4142 17.75 16.75 17.4142 16.75 17V11Z",fill:"black"}),s.jsx("path",{d:"M8.75 13C8.75 12.5858 8.41421 12.25 8 12.25C7.58579 12.25 7.25 12.5858 7.25 13V17C7.25 17.4142 7.58579 17.75 8 17.75C8.41421 17.75 8.75 17.4142 8.75 17V13Z",fill:"black"}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.4635 2.37373C15.3214 2.24999 13.8818 2.24999 12.0452 2.25H11.9548C10.1182 2.24999 8.67861 2.24999 7.53648 2.37373C6.37094 2.50001 5.42656 2.76232 4.62024 3.34815C4.13209 3.70281 3.70281 4.13209 3.34815 4.62024C2.76232 5.42656 2.50001 6.37094 2.37373 7.53648C2.24999 8.67861 2.24999 10.1182 2.25 11.9548V12.0452C2.24999 13.8818 2.24999 15.3214 2.37373 16.4635C2.50001 17.6291 2.76232 18.5734 3.34815 19.3798C3.70281 19.8679 4.13209 20.2972 4.62024 20.6518C5.42656 21.2377 6.37094 21.5 7.53648 21.6263C8.67859 21.75 10.1182 21.75 11.9547 21.75H12.0453C13.8818 21.75 15.3214 21.75 16.4635 21.6263C17.6291 21.5 18.5734 21.2377 19.3798 20.6518C19.8679 20.2972 20.2972 19.8679 20.6518 19.3798C21.2377 18.5734 21.5 17.6291 21.6263 16.4635C21.75 15.3214 21.75 13.8818 21.75 12.0453V11.9547C21.75 10.1182 21.75 8.67859 21.6263 7.53648C21.5 6.37094 21.2377 5.42656 20.6518 4.62024C20.2972 4.13209 19.8679 3.70281 19.3798 3.34815C18.5734 2.76232 17.6291 2.50001 16.4635 2.37373ZM5.50191 4.56168C6.00992 4.19259 6.66013 3.97745 7.69804 3.865C8.74999 3.75103 10.1084 3.75 12 3.75C13.8916 3.75 15.25 3.75103 16.302 3.865C17.3399 3.97745 17.9901 4.19259 18.4981 4.56168C18.8589 4.82382 19.1762 5.14111 19.4383 5.50191C19.8074 6.00992 20.0225 6.66013 20.135 7.69804C20.249 8.74999 20.25 10.1084 20.25 12C20.25 13.8916 20.249 15.25 20.135 16.302C20.0225 17.3399 19.8074 17.9901 19.4383 18.4981C19.1762 18.8589 18.8589 19.1762 18.4981 19.4383C17.9901 19.8074 17.3399 20.0225 16.302 20.135C15.25 20.249 13.8916 20.25 12 20.25C10.1084 20.25 8.74999 20.249 7.69804 20.135C6.66013 20.0225 6.00992 19.8074 5.50191 19.4383C5.14111 19.1762 4.82382 18.8589 4.56168 18.4981C4.19259 17.9901 3.97745 17.3399 3.865 16.302C3.75103 15.25 3.75 13.8916 3.75 12C3.75 10.1084 3.75103 8.74999 3.865 7.69804C3.97745 6.66013 4.19259 6.00992 4.56168 5.50191C4.82382 5.14111 5.14111 4.82382 5.50191 4.56168Z",fill:"black"})]})}function n2(){return s.jsxs("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M6.95 17C6.95 17.5807 7.01459 17.9618 7.13233 18.2267C7.23752 18.4633 7.40196 18.6462 7.71017 18.8003C8.04326 18.9669 8.54383 19.0983 9.30532 19.1829C10.0605 19.2669 11.0224 19.3 12.25 19.3C13.4776 19.3 14.4395 19.2669 15.1947 19.1829C15.9562 19.0983 16.4567 18.9669 16.7898 18.8003C17.098 18.6462 17.2625 18.4633 17.3677 18.2267C17.4854 17.9618 17.55 17.5807 17.55 17C17.55 16.4193 17.4854 16.0382 17.3677 15.7733C17.2625 15.5367 17.098 15.3538 16.7898 15.1997C16.4567 15.0331 15.9562 14.9017 15.1947 14.8171C14.4395 14.7331 13.4776 14.7 12.25 14.7C11.0224 14.7 10.0605 14.7331 9.30532 14.8171C8.54383 14.9017 8.04326 15.0331 7.71017 15.1997C7.40196 15.3538 7.23752 15.5367 7.13233 15.7733C7.01459 16.0382 6.95 16.4193 6.95 17Z",stroke:"black",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("circle",{cx:"3.75",cy:"3.75",r:"3.05",transform:"matrix(-1 0 0 1 16 5)",stroke:"black",strokeWidth:"1.4"}),s.jsx("path",{d:"M17.5 7.25C18.85 7.25 19.75 8.375 19.75 9.5C19.75 10.625 18.85 11.75 17.5 11.75",stroke:"black",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M7 7.25C5.65 7.25 4.75 8.375 4.75 9.5C4.75 10.625 5.65 11.75 7 11.75",stroke:"black",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M20.2 18.5C22.3 18.5 23.5 18.1786 23.5 16.25C23.5 14.3214 22.3 14 19 14",stroke:"black",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M4.3 18.5C2.2 18.5 1 18.1786 1 16.25C1 14.3214 2.2 14 5.5 14",stroke:"black",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})]})}function o2(){return s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.73 2.89048L20.29 7.00048C21.3567 7.77576 21.9914 9.01185 22 10.3305V17.7705C21.94 20.1637 19.9534 22.0564 17.56 22.0005H6.44C4.04665 22.0564 2.06002 20.1637 2 17.7705V10.3405C2.0061 9.01612 2.64544 7.77462 3.72 7.00048L9.27 2.89048C10.8964 1.70317 13.1036 1.70317 14.73 2.89048ZM17.56 20.5005C19.1251 20.5568 20.4404 19.3354 20.5 17.7705V10.3305C20.4948 9.48583 20.0812 8.6959 19.39 8.21048L13.84 4.10048C12.7439 3.30006 11.2561 3.30006 10.16 4.10048L4.61 8.20048C3.91817 8.69448 3.50534 9.4904 3.5 10.3405V17.7705C3.56502 19.333 4.87698 20.5512 6.44 20.5005H17.56Z",fill:"black"}),s.jsx("path",{d:"M20.29 7.00048L20.1711 7.16132L20.1724 7.16226L20.29 7.00048ZM14.73 2.89048L14.8489 2.72965L14.8479 2.72895L14.73 2.89048ZM22 10.3305H22.2L22.2 10.3292L22 10.3305ZM22 17.7705L22.2 17.7755V17.7705H22ZM17.56 22.0005L17.5647 21.8005H17.56V22.0005ZM6.44 22.0005V21.8004L6.43533 21.8005L6.44 22.0005ZM2 17.7705H1.79994L1.80006 17.7755L2 17.7705ZM2 10.3405L1.8 10.3396V10.3405H2ZM3.72 7.00048L3.83692 7.16277L3.83902 7.16121L3.72 7.00048ZM9.27 2.89048L9.15207 2.72894L9.15098 2.72975L9.27 2.89048ZM20.5 17.7705L20.7 17.7781V17.7705H20.5ZM17.56 20.5005L17.5672 20.3005H17.56V20.5005ZM20.5 10.3305H20.7L20.7 10.3293L20.5 10.3305ZM19.39 8.21048L19.2709 8.37126L19.2751 8.37416L19.39 8.21048ZM13.84 4.10048L13.959 3.93975L13.9579 3.93896L13.84 4.10048ZM10.16 4.10048L10.042 3.93896L10.0412 3.93962L10.16 4.10048ZM4.61 8.20048L4.72624 8.36327L4.72884 8.36135L4.61 8.20048ZM3.5 10.3405L3.3 10.3392V10.3405H3.5ZM3.5 17.7705H3.29983L3.30017 17.7788L3.5 17.7705ZM6.44 20.5005V20.3004L6.43351 20.3006L6.44 20.5005ZM20.4089 6.83965L14.8489 2.72965L14.6111 3.05131L20.1711 7.16131L20.4089 6.83965ZM22.2 10.3292C22.191 8.947 21.5257 7.65135 20.4076 6.8387L20.1724 7.16226C21.1877 7.90018 21.7918 9.07669 21.8 10.3318L22.2 10.3292ZM22.2 17.7705V10.3305H21.8V17.7705H22.2ZM17.5553 22.2004C20.059 22.2589 22.1371 20.279 22.1999 17.7755L21.8001 17.7655C21.7428 20.0484 19.8477 21.8539 17.5647 21.8005L17.5553 22.2004ZM6.44 22.2005H17.56V21.8005H6.44V22.2005ZM1.80006 17.7755C1.86285 20.279 3.94103 22.2589 6.44467 22.2004L6.43533 21.8005C4.15227 21.8539 2.2572 20.0484 2.19994 17.7655L1.80006 17.7755ZM1.8 10.3405V17.7705H2.2V10.3405H1.8ZM3.60309 6.83821C2.47662 7.64974 1.8064 8.95122 1.8 10.3396L2.2 10.3414C2.20581 9.08102 2.81426 7.89949 3.83691 7.16276L3.60309 6.83821ZM9.15098 2.72975L3.60098 6.83975L3.83902 7.16121L9.38902 3.05121L9.15098 2.72975ZM14.8479 2.72895C13.1513 1.49035 10.8487 1.49035 9.15207 2.72895L9.38793 3.05202C10.944 1.91599 13.056 1.91599 14.6121 3.05202L14.8479 2.72895ZM20.3001 17.7629C20.2447 19.2176 19.0221 20.3529 17.5672 20.3006L17.5528 20.7004C19.2281 20.7606 20.636 19.4533 20.6999 17.7781L20.3001 17.7629ZM20.3 10.3305V17.7705H20.7V10.3305H20.3ZM19.2751 8.37416C19.9133 8.82238 20.2952 9.55178 20.3 10.3317L20.7 10.3293C20.6944 9.41989 20.2492 8.56943 19.5049 8.04681L19.2751 8.37416ZM13.721 4.26121L19.271 8.37121L19.509 8.04975L13.959 3.93975L13.721 4.26121ZM10.2779 4.262C11.3038 3.51289 12.6962 3.51289 13.7221 4.262L13.9579 3.93896C12.7916 3.08723 11.2084 3.08723 10.0421 3.93896L10.2779 4.262ZM4.72884 8.36135L10.2788 4.26135L10.0412 3.93962L4.49116 8.03962L4.72884 8.36135ZM3.7 10.3417C3.70493 9.55581 4.08661 8.81997 4.72622 8.36325L4.49378 8.03772C3.74973 8.569 3.30574 9.42499 3.3 10.3392L3.7 10.3417ZM3.7 17.7705V10.3405H3.3V17.7705H3.7ZM6.43351 20.3006C4.98017 20.3478 3.76029 19.215 3.69983 17.7622L3.30017 17.7788C3.36976 19.4509 4.77378 20.7547 6.44649 20.7004L6.43351 20.3006ZM17.56 20.3005H6.44V20.7005H17.56V20.3005Z",fill:"black"}),s.jsx("path",{d:"M16.5 15.7505H7.5C7.08579 15.7505 6.75 16.0863 6.75 16.5005C6.75 16.9147 7.08579 17.2505 7.5 17.2505H16.5C16.9142 17.2505 17.25 16.9147 17.25 16.5005C17.25 16.0863 16.9142 15.7505 16.5 15.7505Z",fill:"black"})]})}function i2(){return s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M20.4553 6.46876C19.4461 4.31251 17.2711 2.99251 14.9241 2.90626C14.8903 2.90269 14.8563 2.90081 14.8224 2.90063H9.99798C7.82719 2.90063 5.79798 3.36938 4.33594 5.12251C3.09751 6.60892 2.86688 8.3236 2.86688 10.1719V20.2697C2.87003 20.488 2.95816 20.6965 3.11255 20.8509C3.26694 21.0053 3.47544 21.0934 3.69376 21.0966H20.2327C20.451 21.0934 20.6595 21.0053 20.8139 20.8509C20.9683 20.6965 21.0564 20.488 21.0595 20.2697V13.6374C21.0595 11.3681 21.4444 8.58517 20.4553 6.46876ZM4.85532 7.40626C5.70704 5.31938 7.66782 4.55813 9.76407 4.55813H14.8219C16.7438 4.59798 18.5002 5.76845 19.1456 7.61017C19.44 8.4511 19.4058 9.30329 19.4058 10.1752C19.4058 10.7266 18.9588 11.1736 18.4074 11.1736H5.51251C4.96304 11.1736 4.51051 10.7304 4.50106 10.181C4.48476 9.23338 4.50617 8.26132 4.85532 7.40626ZM10.237 13.6008C10.237 13.1736 10.5833 12.8274 11.0105 12.8274H12.9141C13.3412 12.8274 13.6875 13.1736 13.6875 13.6008C13.6875 14.0279 13.3412 14.3742 12.9141 14.3742H11.0105C10.5833 14.3742 10.237 14.0279 10.237 13.6008ZM5.77501 19.4424H5.52063C4.96835 19.4424 4.52063 18.9946 4.52063 18.4424V13.8269C4.52063 13.2746 4.96835 12.8269 5.52063 12.8269H7.58329C8.13557 12.8269 8.58329 13.2746 8.58329 13.8269V15.202C8.58583 15.4208 8.67369 15.6299 8.82815 15.7848C8.9826 15.9396 9.19144 16.0281 9.41016 16.0313H14.5163C14.7354 16.0309 14.9455 15.9437 15.1005 15.7887C15.2555 15.6337 15.3428 15.4236 15.3431 15.2044V13.8269C15.3431 13.2746 15.7908 12.8269 16.3431 12.8269H18.4063C18.9585 12.8269 19.4063 13.2746 19.4063 13.8269V18.4424C19.4063 18.9946 18.9585 19.4424 18.4063 19.4424H5.77501Z",fill:"black"})})}function a2(){return s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M5.99799 12V17.684C5.99799 19.495 5.99799 20.401 6.58299 20.964C7.24799 21.603 9.61499 21.979 11.993 21.999C14.309 22.019 16.633 21.702 17.403 20.964C17.987 20.401 17.987 19.495 17.987 17.684V12",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M5.72197 14.022C4.85697 13.708 3.22997 13.44 2.49597 12.703C1.48597 11.69 2.13897 10.32 3.37697 7.739C3.93397 6.577 5.00097 5.722 6.24397 5.385C6.41282 5.33933 6.55927 5.23376 6.65597 5.088L7.93897 3.088C7.97559 3.03239 8.02409 2.9856 8.08097 2.951C8.65897 2.602 10.092 2 11.993 2C13.894 2 15.233 2.602 15.81 2.95C15.8671 2.98517 15.9156 3.03266 15.952 3.089L17.272 5.069C17.3687 5.21476 17.5151 5.32033 17.684 5.366C18.927 5.704 19.945 6.45 20.503 7.612C21.893 10.142 22.511 11.671 21.5 12.684C20.767 13.42 19.117 13.712 18.252 14.025",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M6.50098 5.5L10.735 8.793C11.341 9.264 11.644 9.5 12.001 9.5C12.358 9.5 12.661 9.264 13.268 8.793L17.5 5.5M9.50098 3L11.001 9M14.501 3L13.001 9",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function c2(){return s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M7.21385 20.1834L7.21382 20.1834L7.20646 20.1885C6.30916 20.8182 5.07008 20.2483 4.98416 19.1404C4.88374 17.8456 4.74998 15.4734 4.75 12.0238V11.9616C4.74998 10.5924 4.75071 9.39897 4.84845 8.40301C4.94753 7.39329 5.15328 6.48799 5.63166 5.75021C6.6324 4.20681 8.55937 3.7627 11.5798 3.75026C14.6038 3.73781 16.5335 4.17978 17.5353 5.73299C18.0129 6.47362 18.2185 7.38311 18.3175 8.39624C18.4152 9.39602 18.416 10.5926 18.4159 11.9622V12.0238C18.4159 15.4734 18.2822 17.8456 18.1817 19.1404C18.0958 20.2483 16.8568 20.8182 15.9595 20.1885L15.9595 20.1885L15.9521 20.1834C15.1692 19.6479 14.4447 19.0715 13.8804 18.6222L13.8703 18.6141C13.6138 18.4099 13.3811 18.2247 13.1987 18.0894C12.8564 17.8357 12.5709 17.6628 12.3068 17.5564C12.0195 17.4407 11.7876 17.4159 11.583 17.4159C11.3783 17.4159 11.1464 17.4407 10.8591 17.5564C10.595 17.6628 10.3096 17.8357 9.96723 18.0894L10.4138 18.692L9.96723 18.0894C9.78475 18.2247 9.55198 18.41 9.29541 18.6143L9.28552 18.6222C8.72118 19.0715 7.99673 19.6479 7.21385 20.1834Z",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M13.0995 6.79395C13.8578 6.79395 14.2369 6.79106 14.8057 7.35831C15.3744 7.92557 15.3744 9.82418 15.3744 10.5825",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function r2(){const n=O();return s.jsx(s.Fragment,{children:s.jsxs("div",{className:g.container,children:[" ",s.jsx(k,{className:n.pathname==="/"?`${g.imgHome} ${g.fon_active} `:`${g.imgHome} `,to:"/",children:s.jsx(o2,{})}),s.jsx(k,{className:n.pathname==="/loot-box"?`${g.imgLootBox} ${g.fon_active}`:`${g.imgLootBox} `,to:"loot-box",children:s.jsx(i2,{})}),s.jsx(k,{className:n.pathname==="/skins"?`${g.imgSkins} ${g.fon_active}`:`${g.imgSkins} `,to:"skins",children:s.jsx(a2,{})})," ",s.jsx(k,{className:n.pathname==="/friends"?`${g.imgFriends} ${g.fon_active}`:`${g.imgFriends} `,to:"friends",children:s.jsx(n2,{})}),s.jsx(k,{className:n.pathname==="/tasks"?`${g.imgTasks} ${g.fon_active}`:`${g.imgTasks} `,to:"tasks",children:s.jsx(c2,{})}),s.jsx(k,{className:n.pathname==="/liga-active"?`${g.imgLiga} ${g.fon_active}`:`${g.imgLiga} `,to:"liga-active",children:s.jsx(e2,{})})]})})}const l2="_container_5avzf_1",d2="_board_5avzf_8",F={container:l2,board:d2},g2="/assets/board-D9Thx7L7.png",R="data:image/png;base64,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",Y="data:image/svg+xml,%3csvg%20width='24'%20height='33'%20viewBox='0%200%2024%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clipPath='url(%23clip0_48_826)'%3e%3cpath%20d='M22.5864%2014.1858L17.204%2012.6605C16.7646%2012.536%2016.5205%2012.0545%2016.666%2011.5991L19.3468%203.20538C19.7408%202.67263%2019.7381%201.91624%2019.3048%201.40436C18.8121%200.822989%2017.9503%200.777485%2017.3796%201.30333L1.10488%2016.3063C0.534296%2016.8324%200.471087%2017.7305%200.963621%2018.3123C1.13832%2018.5192%201.36907%2018.6665%201.62691%2018.7355C1.67386%2018.7481%201.72155%2018.7569%201.76946%2018.7642C1.81481%2018.782%201.8613%2018.7977%201.90942%2018.8106L5.94119%2019.8909C6.4308%2020.0221%206.67381%2020.5881%206.44596%2021.0663L2.19973%2029.9808C1.73887%2030.4843%201.67709%2031.2666%202.08617%2031.8239C2.26567%2032.0692%202.51948%2032.2441%202.80808%2032.3212C3.20311%2032.427%203.64359%2032.3459%203.99711%2032.0614L22.9426%2016.8174C23.1172%2016.677%2023.2577%2016.4955%2023.3521%2016.2885C23.4181%2016.1783%2023.472%2016.0579%2023.5086%2015.9277C23.7223%2015.1705%2023.3093%2014.3907%2022.5864%2014.1858Z'%20fill='url(%23paint0_linear_48_826)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_48_826'%20x1='16.4057'%20y1='0.382295'%20x2='16.7221'%20y2='24.5404'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F7C243'/%3e%3cstop%20offset='1'%20stop-color='%23FD902B'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_48_826'%3e%3crect%20width='23'%20height='32'%20fill='white'%20transform='translate(0.592041%200.565186)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",G="data:image/png;base64,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",m2="_container_1spql_1",C2="_btn_1spql_11",u2="_imgEnergy_1spql_32",_2="_text_lvl_1spql_41",x2="_imgCostBoost_1spql_51",p2="_text_cost_1spql_60",h={container:m2,btn:C2,imgEnergy:u2,text_lvl:_2,imgCostBoost:x2,text_cost:p2};function L2(){const n=T(),{tg_id:o}=D(),c=C(d=>d.coinWallet.coin),a=C(d=>d.boosters),r=C(d=>d.boosters.energy_lvl),x=C(d=>d.boosters.price_lvl_up_energy),{data:l}=S({queryKey:["boosterData"],queryFn:()=>x1(o)},_),t=c>=x,m=y({mutationFn:d=>_1(d.id),onSuccess:d=>{_.invalidateQueries({queryKey:["userData"]}),_.invalidateQueries({queryKey:["boosterData"]}),console.log(d)}},_);u.useEffect(()=>{l&&n(c1(l))},[l]);const p=d=>{console.log(a),m.mutate({id:d})};return s.jsxs("div",{className:h.container,children:[" ",s.jsx("img",{className:h.imgCostBoost,src:G}),s.jsx("span",{className:h.text_cost,children:`${x/1e3}k`}),s.jsxs("button",{disabled:!t,className:h.btn,onClick:()=>{p(o)},children:[s.jsx("img",{className:h.imgEnergy,src:Y}),s.jsx("img",{className:h.imgBtn,src:R}),s.jsx("span",{className:h.text_lvl,children:`Lvl ${r}`})]})]})}const K="/assets/imgCoin-C06J9A8X.png",h2="_container_89a39_1",j2="_btn_89a39_11",k2="_imgCoin_89a39_36",v2="_text_lvl_89a39_46",A2="_imgCostBoost_89a39_56",y2="_text_cost_89a39_65",j={container:h2,btn:j2,imgCoin:k2,text_lvl:v2,imgCostBoost:A2,text_cost:y2};function f2(){const{tg_id:n}=D(),o=C(t=>t.coinWallet.coin),c=C(t=>t.boosters.lvl_one_tap_damage_and_energy),a=C(t=>t.boosters.price_lvl_up_damage_and_energy),r=o>=a,x=y({mutationFn:t=>p1(t.id),onSuccess:t=>{_.invalidateQueries({queryKey:["userData"]}),_.invalidateQueries({queryKey:["boosterData"]}),console.log(t)}},_),l=t=>{console.log(r),x.mutate({id:t})};return s.jsxs("div",{className:j.container,children:[s.jsx("img",{className:j.imgCostBoost,src:G}),s.jsx("span",{className:j.text_cost,children:`${a/1e3}k`}),s.jsxs("button",{disabled:!r,className:j.btn,onClick:()=>l(n),children:[s.jsx("img",{className:j.imgCoin,src:K}),s.jsx("img",{className:j.imgBtn,src:R}),s.jsx("span",{className:j.text_lvl,children:`Lvl ${c}`})]})]})}const b2="_coin_box_v51dj_1",M2="_img_coin_v51dj_15",B2="_score_v51dj_22",N={coin_box:b2,img_coin:M2,score:B2};function V2(){const n=C(o=>o.coinWallet.coin);return s.jsxs("div",{className:N.coin_box,children:[s.jsx("img",{className:N.img_coin,src:K}),s.jsx("h2",{className:N.score,children:n})]})}const E2="_container_t7a48_2",D2="_box_t7a48_14",w2="_title_energy_t7a48_21",H2="_progress_t7a48_29",N2="_progress_bar_t7a48_36",v={container:E2,box:D2,title_energy:w2,progress:H2,progress_bar:N2},S2=()=>{const n=T(),o=C(r=>r.energy.energy),c=C(r=>r.energy.maxEnergy),a=o*100/c;return u.useEffect(()=>{const r=setInterval(()=>{o<c&&n(r1(1))},1e3);return()=>clearInterval(r)},[o]),s.jsxs("div",{className:v.container,children:[s.jsx("img",{className:v.icon_energy,src:Y}),s.jsxs("div",{className:v.box,children:[s.jsxs("span",{className:v.title_energy,children:[o," / ",c]}),s.jsx("div",{className:v.progress,children:s.jsx("div",{className:v.progress_bar,style:{width:`${a}%`}})})]})]})},T2=S2;function Z2(){return s.jsxs("div",{className:F.container,children:[s.jsx("img",{className:F.board,src:g2}),s.jsx(T2,{}),s.jsx(V2,{}),s.jsx(L2,{}),s.jsx(f2,{})]})}const Q2="_box_footer_11qcq_1",W={box_footer:Q2};function F2(){return s.jsxs(s.Fragment,{children:[s.jsx(L1,{}),s.jsx(S1,{}),s.jsx(Z2,{}),s.jsx(G1,{}),s.jsx(U1,{}),s.jsx(l1,{}),s.jsx("div",{className:W.box_footer,children:s.jsx(r2,{})}),s.jsx("div",{className:W.glow})]})}export{F2 as default};
