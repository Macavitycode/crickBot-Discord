module.exports = {
    name: 'getscore',
    description: 'Replies with updated cricket score',
    execute(msg, args) {
        msg.channel.send('Getting score!');

        const axios = require('axios');
        const cheerio = require('cheerio');
        const arts = []

        url = 'https://www.cricbuzz.com/cricket-match/live-scores';

        axios.get(url).then((res) => {
            const $ = cheerio.load(res.data);
            // console.log($('.big-crd-main').children('h2').first().text())

            $('.cb-lv-scrs-well-live').each((index, element) => {
                var input = $(element).children().text()
                const team1 = input.slice(2, input.match(/[0-9]/).index);
                input = input.slice(input.match(/[0-9]/).index, input.length - 1);
                const score = input.slice(0, input.match(' ').index);
                input = input.slice(input.match(' ').index + 1, input.length - 1);
                const ov1 = input.slice(0, input.match(' ').index);
                input = input.slice(input.match(' ').index + 1, input.length - 1);
                const ov2 = input.slice(0, input.match(' ').index);
                const overs = ov1.concat(' ', ov2);
                input = input.slice(input.match(' ').index + 1, input.length - 1);
                const team2 = input.slice(0, input.match(' ').index);
                const desc = input.slice(input.match(' ').index + 1, input.length - 1);
                mes = '**Match '.concat(String(index + 1), ': ', team1, ' vs ', team2, '\n',
                    score, ' ', overs, '** -- ', desc);
                // console.log(mes)
                // console.log('\n\n')
                msg.channel.send(mes);
            });
        });

        // msg.channel.send("~OwO~ you want the scores I see\nNot ready yet :)");
    }
}