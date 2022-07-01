[![setup automated](https://img.shields.io/badge/Gitpod-ready_to_code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

# Bashplate

Bashplate generates bash boilerplate code for option parsing and validation.

Currently deployed here: https://bashplate.wolfgang-werner.net

Why? Each time (long enough to forget all the details after writing the last one) I need to write a shell script:
* 🧐 "I want this to be reuseable, so I'll use proper options & help messages"
* 🤔 "Hmmm, was it getopt or getopts? Which was the GNU and which the POSIX one? Shouldn't I use argbash?" 
* 😤 "So how does the option spec need to look like? Why is that colon at the start again? Does the following option take an argument?" and so on.
* 😩 "How to I test if an argument was set? Reliably and portably?"

Now, I either:
* Copy an old script and fiddle around in it - bad, since there is stuff to remove, I could break things and I still need to think
* Read up on option parsing - bad, as it takes time and I have to decide between getopt, getopts and argbash
* Just skip parameterizing the script and hard code everything - bad, obviously

So basically, I try to hack myself into writing better scripts.

If you can relate, give it a spin.

## Requirements

* POSIX compliance flavor, as I want to run in stripped down Docker containers
* GNU flavor with long opts support, as I like short opts for one offs when typing, long opts in scripts for readability.
* Minimum / No dependencies
* Easy to put on the web, so I cannot lose it & don't have to install anything.

## Development

Contributions welcome.

* `yarn install` - Project setup
* `yarn dev` - Compiles and hot-reloads for development
* `yarn build` - Compiles and minifies for production
* `yarn lint` - Lints code style issues (& fixes them where possible)

Pushing to master deploys to https://bashplate.wolfgang-werner.net and https://bashplate.now.sh (until vercel decides to turn off now.sh).
