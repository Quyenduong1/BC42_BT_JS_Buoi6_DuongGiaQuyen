// Bài 1: 
document.getElementById("bt1-button").onclick = function () {
    let showBt1 = document.getElementById("bt1-show");
    let showBt1l = document.getElementById("bt1-show1");

    showBt1.style.display = "block";
    showBt1l.style.display = "block";

    let SoChan = 0;
    let SoLe = 0;
    
    function CalNum() {
        for (let i = 0; i <= 100 ; i++) {
            if (i % 2 === 0) {
                SoChan = i++;
                showBt1.innerHTML +=  SoChan + " ";          
            } 
          } 
        for (let i = 0; i <= 100 ; i++) {
            if (i % 2 !== 0) {
                SoLe = i++;
                showBt1l.innerHTML +=  SoLe + " ";          
            } 
          }
    }
    CalNum();
};

// Bài 2 

document.getElementById("bt2-button").onclick = function () {
    let showBt2 = document.getElementById("bt2-show");

    showBt2.style.display = "block";

    let dem = 0;

    function CalNum2() {
        for (let i = 0; i < 1000; i++) {
            if (i % 3 === 0) {
                dem++;
            }
        } 
    }
    CalNum2();
    showBt2.innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + dem + " Số"; 
   
};


// Bài 3 
document.getElementById("bt3-button").onclick = function () {
    let showBt3 = document.getElementById("bt3-show");

    showBt3.style.display = "block";

    let sum = 0;
    let n = 0;

    function CalSum() {
        while (sum < 10000) {
            sum += n;
            n++;
        }
    }
    CalSum();
    showBt3.innerHTML =" Số nguyên dương nhỏ nhất: " +  n;
   
};

// bài 4 

document.getElementById("bt4-button").onclick = function () {
    let x =+ document.getElementById("numX").value;
    let n =+ document.getElementById("numN").value;

    let showBt4 = document.getElementById("bt4-show");

    showBt4.style.display = "block";
    showBt4.style.backgroundColor = "#f8d7da";
    showBt4.style.border = "#f8d7da";

    let sum = 0;
    function CalSum1(x,n) {
        for (let i = 1; i <= n; i ++) {
            if (i > 0){
                console.log(i);
                sum += Math.pow(x,i);
                }   
        }
    }   
    CalSum1(x,n);
    showBt4.innerHTML = "Tổng: " + sum;
   
};

// bài 5 

document.getElementById("bt5-button").onclick = function () {
    let n =+ document.getElementById("num5").value;

    let showBt5 = document.getElementById("bt5-show");

    showBt5.style.display = "block";
    showBt5.style.backgroundColor = "#f8d7da";
    showBt5.style.border = "#f8d7da";

    let price = 0;

    function CalG(n) {
        for (let i = n - 1; i >= 1; i--) {
            if ( i >= 0) {
                n *= i;
                console.log(n);
                price = n;
            }
        }
    }
    CalG(n);
    showBt5.innerHTML = "Giai Thừa: " + price;
   
};

// bài 6 


document.getElementById("bt6-button").onclick = function () {
    let showBt6 = document.getElementById("bt6-show");
    let list = document.getElementById("bt6-list");
    

    showBt6.style.display = "block";

    function tag() {
        for (let i = 1; i <= 10; i++) {
            if ( i % 2 !== 0) {
                let divLe = document.createElement("div");
                divLe.innerHTML = " Div Lẻ" +" " +  i ;
                list.appendChild(divLe);
                divLe.style.backgroundColor = "blue";
                divLe.style.color = "white";
            } else {
                let divChan = document.createElement("div");
                divChan.innerHTML = " Div Chẵn" + " " +  i;
                list.appendChild(divChan);
                divChan.style.backgroundColor = "red";
                divChan.style.color = "white";
            }
        }
    }
    tag();
   
};


// bài 7 
document.getElementById("bt7-button").onclick = function () {
    let a =+ document.getElementById("num").value;

    let showBt7 = document.getElementById("bt7-show");

    showBt7.style.display = "block";

    function snt(a) {
        
        for (let i = 2; i <= a; i++) {
            let z = 0;
        
            // lặp từ 2 đến số người dùng nhập
            for (let a = 2; a < i; a++) {
                if (i % a == 0) {
                    z = 1;
                    break;
                }
            }
        
            // nếu số lớn hơn 1 và không chia hết cho các số khác
            if (i > 1 && z == 0) {
                showBt7.innerHTML += " " +  i;
            }
        }
    }
  snt(a);
  
  
};
