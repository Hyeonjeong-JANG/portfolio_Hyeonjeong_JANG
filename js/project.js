const codeList = document.querySelectorAll(".code_btns div");
const code = document.querySelectorAll(".code_ex .code");
let activecode = "";

for (let i = 0; i < codeList.length; i++) {
  codeList[i].querySelector(".code_btn").addEventListener("click", function (e) {
    e.preventDefault();
    for (let j = 0; j < codeList.length; j++) {
      codeList[j].classList.remove("active");

      code[j].style.display = "none";
    }

    this.parentNode.classList.add("active");

    activecode = this.getAttribute("href");
    document.querySelector(activecode).style.display = "block";
  });
  
};


//코드카피
const copyBtn=document.querySelectorAll(".copy_btn");
for (let i = 0; i < copyBtn.length; i++) {
  copyBtn[i].querySelector(".copy").addEventListener("click", function(){
    let text = document.querySelectorAll(".content")[i].value;
    console.log(text)
    copyTextToClipboard(text);
    const showNotification = () => {
        let notification = document.querySelectorAll(".copied");
  
        notification[i].classList.add('show')
        setTimeout(() => {
            notification[i].classList.remove('show')
        }, 1000)
    }
    showNotification();
  })

  async function copyTextToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log('카피됨');
    } catch (err) {
        console.error('카피안됨: ', err);
    }
  }
};