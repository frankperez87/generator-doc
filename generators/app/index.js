const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator 
{
    prompting() 
    {
        this.log(
            yosay(`Hey I'm ${chalk.red('Doc')}. Let's start building with Parcel...`)
        );

        const prompts = [
            {
                type: 'list',
                name: 'js-framework',
                message: 'Which JavaScript Framework would you like to use?',
                choices: ['Vue']
            },

            {
                type: 'list',
                name: 'css-framework',
                message: 'Which CSS Framework would you like to use?',
                choices: ['Bootstrap', 'Tailwind']
            }
        ];

        return this.prompt(prompts).then(props => {
            this.props = props;
        });
    }

    writing() 
    {
        const template = `${this.props['js-framework']}-${this.props['css-framework']}`.toLowerCase();

        this.fs.copy(
            this.templatePath(template),
            this.destinationPath()
        );
    }

    install() 
    {
    }

    end()
    {
        this.log(
            yosay(`Make sure to run ${chalk.red('yarn && yarn run parcel:serve')}. Enjoy...`)
        )
    }
};
