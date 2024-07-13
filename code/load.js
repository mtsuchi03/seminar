const loading = document.querySelector('.loading');
loading.classList.remove('noJS');//JavaScript除外の除外 CSSで隠しておいてclassごと削除
document.getElementsByTagName("body")[0].classList.add('fix');
window.addEventListener('load', () => {
    loading.classList.add('hide');
    document.getElementsByTagName("body")[0].classList.remove('fix');
}, false);//ロード画面