function o(e){let r;return e>=1e9?(r=Math.floor(e/1e9*10)/10,r+"B"):e>=1e6?(r=Math.floor(e/1e6*10)/10,r+"M"):e>=1e3?(r=Math.floor(e/1e3*10)/10,r+"K"):Math.floor(e*10)/10+""}function t(e){let r;return e>=1e6?(r=Math.floor(e/1e6*10)/10,r+"M"):e>=1e4?(r=Math.floor(e/1e4*100)/10,r+"K"):Math.floor(e*10)/10+""}export{t as a,o as f};
