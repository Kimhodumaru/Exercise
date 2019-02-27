var str = document.getElementById('word1').innerHTML;   // 입력문자 내용 저장 
var word2 = document.getElementById('word2');   // 버튼 생성 영역 객체화

var game = {};
game.word = str.split('');
game.btns = [];

for (var i = 0; i < str.length; i++) {  // 글자 수 만큼 버튼 추가
    var btn = document.createElement('button'); // button element를 생성한다
    btn.innerHTML = str[i]; // str의 인덱스를 돌면서 생성된 button element에 값을 저장한다
    word2.appendChild(btn); // <div 'word2'>영역에 자식element로 생성된 button element인 btb을 추가한다
    game.btns.push(btn);  //btn의 문자열이 순차적으로 btns[]로 전달 된다 
}

var swap = function (event) {    // 이벤트 동작 확인
   for (var i = 0; i < game.word.length; i++) {
       
   }
};

game.copyBtnText = function() {
    for (var i = 0; i < this.word.length; i++) {
        this.btns[i].innerHTML = this.word[i];
    }
}


var rshift = function (event) {
    console.log('rshift');
    var s = game.word.pop();    //split한 문자열 배열 중 가장 마지막에 위치한 배열을 변수에 저장한다
    game.word.unshift(s);   //가장 마지막 배열을 저장하고 있는 변수를 이용하여, 다시 split한 문자열 배열 맨 앞으로 삽입합니다.
    game.copyBtnText();
};


var lshift = function (event) { // rshift()와 같은 원리로 구현한다
    console.log('lshift');
    var s = game.word.shift();
    game.word.push(s);
    game.copyBtnText();
};


