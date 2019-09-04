let authors = [];
function author(name, id) {
  this.name = name;
  this.id = id;
}
let author1 = new author('Bob', 1);
authors.push(author1);
author1 = new author('Joe', 2);
authors.push(author1);
author1 = new author('Jill', 3);
authors.push(author1);
author1 = new author('Julie', 4);
authors.push(author1);
author1 = new author('Sam', 5);
authors.push(author1);
author1 = new author('Sue', 6);
authors.push(author1);

createMainDiv = () => {
  let myDiv = $("<div>")
  myDiv.attr("id", "myDivyDiv")
  $("body").append(myDiv);
}
createAuthors = (number) => {
  let myDiv = $("#myDivyDiv");
  if (number == null) {
    for (let i = 0; i < 5 && i < authors.length; i++) {
      let newDiv = $("<div>");
      newDiv.text(authors[i].name);
      myDiv.append(newDiv);
    }
  } else {
    console.log(number);
    let pageIndex = number * 5;
    for (let i = pageIndex - 5; i < pageIndex && i < authors.length; i++) {
      let newDiv = $("<div>");
      newDiv.text(authors[i].name);
      myDiv.append(newDiv);
    }
  }
}
indexClicked = (e) => {
  $("#myDivyDiv").empty();
  createAuthors(e.target.textContent);
}
createPages = () => {
  let pageTab = $("<h1>")
  let size = authors.length;
  let count = 1;
  $('body').append(pageTab);
  while (size > 0) {
    let a = $("<a>");
    a.attr("href", "#");
    a.css("margin", "2%")
    a.text(count);
    a.click(function (e) {
      indexClicked(e)
    });
    count++;
    pageTab.append(a);
    size -= 5;
  }
}

createMainDiv();
createAuthors();
createPages();





