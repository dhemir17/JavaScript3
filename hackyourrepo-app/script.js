"use strict";

const select = document.createElement('select');
const header = document.querySelector('.header');

const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];

for(let i=0;i<placeholderRepos.length;i++){
  let newOption = document.createElement('option');
  let optionText = document.createTextNode(`${placeholderRepos[i].name}`);
  newOption.appendChild(optionText);
  newOption.setAttribute(`${placeholderRepos[i].name}`,`${placeholderRepos[i].name}`);
  select.appendChild(newOption);
  
}

header.appendChild(select);
/*
  Write here your JavaScript for HackYourRepo!
*/
