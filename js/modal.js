///////////search 모달///////////////
const searchModalEx = document.querySelector(".search_modal_ex");
document.querySelector(".search").addEventListener("click", function () {
  searchModalEx.style.display = "block";
});
document
  .getElementById("searchCloseBtn")
  .addEventListener("click", function () {
    searchModalEx.style.display = "none";
  });

const searchModal = document.querySelector(".search_modal");
document.addEventListener("mouseup", function (e) {
  if (!searchModal.contains(e.target)) {
    searchModalEx.style.display = "none";
  }
});
///////search 기능
function filter() {
  let search = document.getElementById("search").value.toLowerCase();
  let search_result_title = document.getElementsByClassName(
    "search_result_title"
  );

  if (document.getElementById("search").value == "") {
    // search 키워드가 없는 경우
    for (let i = 0; i < search_result_title.length; i++) {
      search_result_title[i].style.display = "none";
    }
  } else if (document.getElementById("search").value != "") {
    // search 키워드가 있는 경우
    for (let i = 0; i < search_result_title.length; i++) {
      list_detail =
        search_result_title[i].getElementsByClassName("list_detail");
      list_title = search_result_title[i].getElementsByClassName("list_title");
      if (
        list_detail[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
        list_title[0].innerHTML.toLowerCase().indexOf(search) != -1
      ) {
        search_result_title[i].style.display = "block";
      } else {
        search_result_title[i].style.display = "none";
      }
    }
  }
}
