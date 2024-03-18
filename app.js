// dark mode code start =================================================
let changeColorBtn = document.getElementById('ColBtn');
    let colors = ['black', 'white'];
    let currentIndex = 0;

    changeColorBtn.addEventListener('click', function () {
        document.body.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    });
// dark mode code end ===================================================
//  counter code start --------------------------------------
// let count = 0;

// function changeCount(num) {
//   count = count + num;
//   let counth2 = document.querySelector("#count");
//   counth2.innerHTML = count;
//   if (count === 0) {
//     document.getElementById("minus").disabled = true;
//   } else {
//     document.getElementById("minus").disabled = false;
//   }
// }
//  counter code end --------------------------------------
