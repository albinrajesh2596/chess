var element = document.getElementsByClassName('box');
var flagValue = 1;
var coin;
var temCoin;
var blackCoin = 'coinBlack'
var pointWhite = 0;
var pointBlack = 0;
var pointWhiteBox = document.getElementById('firstBox');
var pointBlackBox = document.getElementById('secondBox');
function call(a) {
   if (flagValue) {
      coin = element[a].firstChild;
      element[a].removeChild(coin);
      flagValue = 0;
   }
   else {
      if (element[a].childElementCount == 0) {
         element[a].appendChild(coin);
         flagValue = 1;
      }
      else {
         temCoin = element[a].firstChild;
         if (temCoin.classList[0] != coin.classList[0]) {
            element[a].replaceChild(coin, temCoin);
            flagValue = 1;

            if (coin.classList[0] == blackCoin) {
               pointBlack += 1;
               pointBlackBox.innerHTML = pointBlack;
            }
            else {
               pointWhite += 1;
               pointWhiteBox.innerHTML = pointWhite;
            }
         }       
      }
   }
}
