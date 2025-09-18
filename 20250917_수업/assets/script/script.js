//함수 function

// 간단한 토스트 만들기
// console.log("1. 버터 두르고 식빵굽기");
// console.log("2. 계란 부치기");
// console.log("3. 식빵 위에 계란 올리기");
// console.log("4. 케첩 마요네즈 치즈 뿌리기");

//아메리카노 만들기
// console.log("1. 컵에 얼음 담기");
// console.log("2. 물 250ml 널기");
// console.log("3. 에스프레소 내려서 컵에 담기");
// console.log("4. 뚜껑 닫기");


// function 함수명() {
//     실행할 코드
// }

// function americano() {
//     //아메리카노 만들기
//     console.log("1. 컵에 얼음 담기");
//     console.log("2. 물 250ml 널기");
//     console.log("3. 에스프레소 내려서 컵에 담기");
//     console.log("4. 뚜껑 닫기");
// }

// americano();

function toast(type) {
    // 간단한 토스트 만들기
    console.log("1. 버터 두르고 식빵굽기");
    if (type === 계란) {
        console.log("2. 계란 부치기");
    } else if (type === 불고기) {
        console.log("2. 불고기 만들기");
    } else {
        console.log("2.딸기잼 만들기");
    }

    console.log("3. 식빵 위에 계란 올리기");
    console.log("4. 케첩 마요네즈 치즈 뿌리기");
    console.log("주문하신" + type + "토스트" + size + "사이즈" + number + "개 나왔습니다.")
}

// toast("불고기", "L", 5);

function add(num1, num2) {
    // console.log(num1 = num2);
    return num1 + num2;
}

let result = add(2, 5);
console.log(result);