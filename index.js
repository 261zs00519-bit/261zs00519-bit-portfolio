window.addEventListener(
  'DOMContentLoaded',
  () => {
    const message = document.getElementById('helloworld-area');
    message.innerText = "ようこそ、watashiのポートフォリオサイトへ";
      setTimeout(
        ()=>{
          message.innerText = "ZEN大学2期生のポートフォリオ";       
        }, 3000);
  } );
 
