module.exports = {
    name: 'arts',
    description: 'Replies with top three crickbuzz articles',
    execute(msg, args) {

        msg.channel.send('Getting articles!');

        const axios = require('axios');
        const cheerio = require('cheerio');
        const arts = []

        url = 'https://www.cricbuzz.com';

        axios.get(url).then((res) => {
            const $ = cheerio.load(res.data);
            // console.log($('.big-crd-main').children('h2').first().text())

            $('.big-crd-main').each((index, element) => {
                const title = $(element).children('h2')
                    .first().text().replace('\t', '');
                const link = url.concat($(element)
                    .children('a').first().attr('href'));
                // console.log($(element).attr('class', 'cb-nws-intr').last().html());
                // console.log('\n\n');
                const mes = '\nArticle '.concat(String(index + 1), ':\n', title, '\n', link);
                msg.channel.send(mes);
                // console.log(mes);
            });
        });
    }
}