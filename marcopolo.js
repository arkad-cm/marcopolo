function marcoPolo(res, range) {
    return new Promise((resolve, reject) => {
        try {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');

            let k = 1
            while (k <= range) {
                if (k % 7 === 0 && k % 4 === 0) {
                    res.write('marcopolo,');
                } else if (k % 7 === 0) {
                    res.write('polo,')
                } else if (k % 4 === 0) {
                    res.write('marco,')
                } else {
                    res.write(`${k},`)
                }
                k++
                if (k >= 1000 && k % 1000 === 0) {
                    res.write('<br/>')
                }
            }
            res.status(200).end()
            resolve()
        } catch (e) {
            console.log(e)
            res.status(400).end()
            reject(e)
        }
    })
}

module.exports = marcoPolo