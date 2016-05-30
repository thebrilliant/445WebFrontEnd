function getArticles () {
    // body...
    $.getJSON('http://localhost:3000/articles', (response) => {
        console.log('Yay, data');
        console.log(response)

        addContent(response)
    })
}

function addContent (articles) {
    var root = $('<div/>')
    var htmlBlob = articles.forEach((article) => {
        root.append("<h3>" + article.Title + "</h3>")
        console.log(article)
    })

    $('#content').append(root)
}

$(window).load(() => {
    getArticles()
})