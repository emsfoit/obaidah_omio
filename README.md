# Aumio Coding Challenge

## Intro

Welcome! Thank you for applying to Aumio as an intergalactic mobile app developer, we really appreciate your interest for our mission. 

We don't believe in old-fashioned application processes, but rather want to give every applicant the chance to see what tasks will be like and show us how she or he would solve tasks we are dealing with every day. Therefore, this is NOT a test. Instead, we hope it will be a fun little project for you that you actually enjoy.

The coding challenge consists of three parts:
- **A theory part** where we'll cover some basic topics you would deal with @ Aumio
- **A practice part** where you can get your hands dirty (unless your keyboard is clean...)

But before the journey starts, here are a few guidelines:
- Relax, lean back into your gaming chair, and have fun!
- There’s no time limit. Take as much time as you need.
- But please return your results to us within a week :D
- There’s no right or wrong. We're in space, there's no rules.
- Don't worry if you don't know all the answers. It's ok to skip stuff.
- We want to see the process not the result.
- **Document and describe what you do, e.g. using docs and commits.** Please use small commits so we can understand your process better.
- Ask questions! There's no such thing as stupid questions, unless maybe some of the questions here: https://www.quora.com/What-is-the-stupidest-question-ever-asked-on-the-Internet

But anyway, this might be one small step for a developer, but one giant leap for working @ Aumio!


## Before you get started

Before you get started, make sure to setup your project. You won't have direct write access to this repository. Therefore, you need to fork the challenge first. At the end of the project, you will submit your work with all the answers and code into your forked project.

To fork the project, go to the [GitLab project page](https://gitlab.aumio.de/challenges/challenge-01) and click on the `Fork` button next to the `Clone` button. This will create a copy of the project with you as the owner, allowing you to push your changes into your own workspace.

You can then clone your forked repository with using the `Fork` Button and the HTTPS link. Make sure you use the same credentials you just used to sign into our GitLab interface.

Ok, so let's take off. Have fun!


## Theory

Ok captain, first we need to cover a few questions. So please take your time to think and then just paste your answert below each question. Keep it short and simple, 2-3 sentences per question are sufficient, you don't have to write stories :)

Feel free to just add your answers to this README.md file.


### Question 1

***What do the following lines mean?***
Please add a comment for every line describing what it does.

```
yarn install
cd ios && pod install && cd ..
mkdir src
cd src
touch index.js
```


#### Question 2

***What is wrong with the following snippet?***

```
// Returns "I promise." after 2 seconds.
function iPromise() { 
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("I promise.");
    }, 2000);
  });
}

async function asyncCall() {
  const result = iPromise();
  console.log(result); // Expected output: "I promise.""
}

asyncCall();
```


#### Question 3

***What is the difference between SQL databases and MongoDB?***


#### Question 4

***What is React? How is React Native different?***


#### Question 5

***What is Redux?***


#### Question 6

***What is the advantage of hybrid apps?***


#### Question 7

***What is Jest used for?***


#### Question 8

***What IDE would you prefer to work with @ Aumio?***


#### Question 9

***What can you tell us about the following log entry?***

![alt Error](img/error.png "Error")



Ok, well done. I think we're ready for take off. 

## Practice

In this section, you'll create a small React Native app to familiarize yourself with some of the tools we use every day. Complete the tasks in order and once completed, push your final results to your fork and let us know you're done. We'll review your work and reach out to you to schedule a followup call to discuss the coding challenge with you.


### Task 1 - Create a new React Native project
Follow the official React Native docs to setup a new project in the root directory of this project. The project should be called `Aumionista`. After initializing the project the folder structure look like this:

```
- challenge-01
  - .git/
  - .gitattributes
  - .gitignore
  - Aumionista/
    - App.js
    - ...
  - img/
  - README.md
```

### Task 2 - Integrate React Native Navigation
We use React Native Navigation (RNN) to route users through our app. Try setting up RNN using the following resource: https://wix.github.io/react-native-navigation/

### Task 3 - Implement the Start Screen
Now, let's get started and create a new start screen for our app. 

![alt StartScreen](img/StartScreen.png "Start Screen")

To help you get started, we uploaded the design to Zeplin. You can use the following link to find all the assets and information you need to create the screen: [Click](https://zpl.io/bovRRvW)

You may need to create an account first. We invited you with the email we previously used to communicate with you. If you're having troubles, reach out to us!

### Task 4 - Implement the Popup Screen
I guess you've already checked out both screens on Zeplin. In this task, you'll create the PopupScreen.

![alt PopupScreen](img/Reisepass.png "Popup Screen")

The Popup Screen shall appear as an Overlay (see RNN) when a user clicks on the button on the bottom of the Start Screen. After 5 seconds, the screen should change according to what you see in PopupScreen2 to indicate that the passport has been successfully created.


### Task 5 - Nice-to-have: Icon Click Animation (*optional*)
We always enjoy some magic! If you like, add a nice animation to the icons on the PopupScreen. For example:
- Let the passport icon move around a bit
- Add a nice transition from the passport icon to the Aumio icon


### Task 6 - Submit your results
Ok, you're done. The rocket landed safe and sound back on earth. Before you leave the mothership, please push all your changes to your fork.

That's it. You're done. Thanks a lot for your time and effort! Have a galactic rest of the day, we'll get back to you asap :)
