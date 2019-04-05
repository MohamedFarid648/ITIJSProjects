/* 
 1. create your box object that contains books objects, ensure that you can 
 (a) count # of books inside box (b) delete any of these books in box according to book name or
 type,
 (c) create book object and add it to box object content property
 Note:
  there is no inheritance
  using of global variables, Class methods and properties isn’t allowed.
  box object has the following properties: height, width, length, numOfBooks, volume, material, content.
 The content property contains an array books
  book object has the following properties: title, numofChapters, author, numofPages, publisher, numofCopies
  you can define any function needed for both box and book objects
 */
function Box(height, width, length, numOfBooks, volume, material, content) {

    Object.defineProperties(this, {
        //Height:{writable:true,value:height,enumerable:true,configurable:true}
        Content: {writable: true,
            value: content,
            enumerable: true,
            configurable: true//to can delete it
        }

    })
    this.Height = height;
    this.Width = width;
    this.Length = length;
    this.NumOfBooks = numOfBooks;
    this.Volume = volume;
    this.Material = material
}
Box.prototype.deleteBookByName = function (name) {

    for (i = 0; i < this.Content.length; i++) {

        if (box.Content[i].Title === name)
            console.log(this.Content.shift(i))

    }
}
Box.prototype.deleteBookByNype = function (type,name) {
var i;
    for (i = 0; i < this.Content.length; i++) {

        if (box.Content[i].Type === type&&box.Content[i].Title==name)
            console.log(this.Content.shift(i))

    }

};

Box.prototype.getNumOfBooksBoxHas=function(){
    
    return this.Content.length;
}

Box.prototype.toString=function(){
    var j;
    for(j=0;j<box.Content.length;j++)
{
    document.write("<br/><br/><br/>Num "+(j+1)+" is :");
    document.write("<br/>Title :<font color='red'> "+box.Content[j].Title+"</font>");
    document.write("<br/>Type : <font color='red'>"+box.Content[j].Type+"</font>");
    document.write("<br/>Num Of Chapters : <font color='red'>"+box.Content[j].numOfChapters+"</font>");
    document.write("<br/>Author : <font color='red'>"+box.Content[j].author+"</font>");


}
}
function Book(title, numofChapters, author, numofPages, publisher, numofCopies, type) {
    Object.defineProperties(this, {
        Title: {value: title},
        numOfChapters: {value: numofChapters},
        author: {value: author},
        numOfPages: {value: numofPages},
        publisher: {value: publisher},
        numOfCopies: {value: numofCopies},
        Type: {value: type}
    })

}
;

var book1 = new Book('C', 10, 'Ahmed', 255, 'BookCenter', 100, 'Programming');
var book2 = new Book('C++', 11, 'Ali', 255, 'BookCenter', 100, 'Programming');
var book3 = new Book('C#', 11, 'Hussien', 255, 'BookCenter', 100, 'Web');

var box = new Box(100, 100, 10, 20, 40, 5, [book1, book2, book3]);


document.write("Box has :");
box.toString();

document.write("<h1>Delete By Name(C#):</h1>");
box.deleteBookByName("C++");
box.toString();

document.write("<h1>Delete By Type(Programming):</h1>");
box.deleteBookByNype("Programming","C++");
box.toString();
