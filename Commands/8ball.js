const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("8ball")
        .setDescription("Ask the 8ball anything")
        .addStringOption(option =>
            option.setName("question")
                .setDescription("Ask the 8ball a question")
                .setRequired(true)
        ),
    async execute(interaction) {

        let eightball = [
            'It is certain.',
            'It is decidedly so.',
            'Without a doubt.',
            'Yes definitely.',
            'You may rely on it.',
            'As I see it, yes.',
            'Most likely.',
            'Outlook good.',
            'Yes.',
            'Signs point to yes.',
            'Reply hazy, try again, you klutz.',
            'Ask again later, now go away.',
            'Better not tell you now, pussy.',
            'Cannot predict right now, ask another time.',
            'Concentrate and ask again, I know the bot creator has ADHD but atleast you concentrate.',
            'Don\'t count on it.',
            'My reply is maaaaybeee- no.',
            'My sources say no. Now go away',
            'Outlook ain\'t so good.',
            'Very doubtful.',
            'No(r)way.',
            'Maybe',
            'The answer is hiding inside you',
            'No.',
            'Skill issue lol',
            '||No lol||',
            '||Yes :P||',
            'Hang on',
            'It\'s joever',
            'It\'s just the beginning',
            'Good Luck',
        ];
        let index = (Math.floor(Math.random() * Math.floor(eightball.length)));
        setTimeout(() => {
            interaction.reply({
                content: eightball[index],
            });
        }, 750);
    }
};