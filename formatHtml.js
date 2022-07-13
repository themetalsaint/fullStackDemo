formatHtml = () => {
    return `
        <html>
            <head>
                <title>Story Writer</title>
            </head>
                <body>
                    <h1>Story Writer</h1>
                    <p>Story Goes here</p>
                    <input id="word">
                    <button id="add">Add</button>
                </body>
            
                <script src="script.js"></script>

        </html>
      `
}
//finally got the html to show up
module.exports = {formatHtml}