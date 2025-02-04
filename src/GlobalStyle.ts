import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  :root {
    --max-width: 1200px;
    --min-width: 1000px;
    background-color: #f2f2f2;
  }

  @font-face {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 900;
      src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff') format('woff');
    }

  @font-face {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 800;
      src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff') format('woff');
    }
  
  @font-face {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    }
  
  @font-face {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 600;
      src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
    }
  
  @font-face {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
    }
  
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  }
  
  @font-face {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 300;
      src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
    }
  
  @font-face {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 200;
      src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraLight.woff') format('woff');
    }
  
  @font-face {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 100;
      src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff') format('woff');
    }

  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  max-width: 1200px; /* 모바일 환경에 맞춰 최대 너비를 430px로 고정 */
  background-color: #F7F8FF;
  height: 100vh;
  font-family: 'Pretendard';
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
html, body, input, button {
  line-height: 1;
  max-width: var(--max-width); /* 모바일 환경에 맞춰 최대 너비를 430px로 고정 */
  font-family: 'Pretendard';
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
html,body{
  min-width: var(--min-width);
}
/* 웹킷 브라우저에서 스크롤바 숨기기 */
::-webkit-scrollbar {
  width: 0; /* 수평 스크롤바 숨기기 */
  height: 0; /* 수직 스크롤바 숨기기 */
}

div, img {
  height: auto; /* height를 자동으로 설정 */
  background: none;
}

#root {
  position: relative;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color:inherit;
}

button {
  cursor: pointer;
}

input {
  outline: none;
}

select, textarea{
  font-family: 'Pretendard';
}

`;
