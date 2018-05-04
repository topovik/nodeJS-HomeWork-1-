const fs = require('fs')

const watcher = fs.watch('./srcFolder', (event, filename) => {
    if (event === 'change') {
        
        const one = fs.readFileSync('./srcFolder/header.html', 'utf8')
        const two = fs.readFileSync('./srcFolder/main.html', 'utf8')
        const three = fs.readFileSync('./srcFolder/footer.html', 'utf8')
        const four = one.concat(`\n${two}\n ${three}\n`)

        fs.writeFile('./outputFolder/index.html', four, err => {
            if (err) {
                console.log(err)
            }
        })
    }
})