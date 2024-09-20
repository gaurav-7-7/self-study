/*
    - document object model
    - browser creates a tree like structure for the objects and one of these object id document object
    - document object represents the content of the current html page loaded

                    document obj
                        |
                    documemt element(represent the html element of the page)
                    /               \
                head                body
                /   \               /   \    
            title   script,etc   para   para
                                   |     |
                                 text    text

    - above is one possible representation of how the document object model looks like
    - each element in this tree are called DOM node
    - using this dom object we can access/manipulate the element of the webpage (eg; adding some sort of event)
*/
//run all these in browser console window to understand better
console.dir(document.documentElement) // will show the document elements
console.dir(document.documentElement.childNodes) // child node of the document element in form of an array
console.dir(document.documentElement.childNodes[2].childNodes) // child nodes of the 3rd document element child which is body element
document.title = "DOM Objects" // changing properties of the page using the dom object
document.documentElement.childNodes[2].childNodes[3].innerHTML = "lorem ipsum dolor mohiwani para 2"

// accessing DOM nodes