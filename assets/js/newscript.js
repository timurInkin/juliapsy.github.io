
// // FORM

let form = document.querySelector(".form-container");
let recordButton = document.querySelector(".rec-btn")

recordButton.addEventListener("click", () => {
    form.style.display = "flex";
    document.body.style.overflow = 'hidden'
})

form.addEventListener("click", (event) => {
    if (event.target.className == "form-container") {
        form.style.display = "none"
        document.body.style.overflow = 'none'
    }
})


let storyIcons = document.querySelectorAll(".img_container")
let stories = document.querySelectorAll('.stories_block')
let storyWrapper = document.querySelector('.stories')
let innerStories
let innerStoryCounter = 0
// let switchStory
let storyNumber = 0
let progressBar

stories.forEach((elem) => elem.style.display = 'none')
storyIcons.forEach((elem) => elem.addEventListener('click', (event) => 
{
    storyWrapper.style.display = 'flex'
    storyNumber = parseInt(event.target.getAttribute('num'));
    renderStoryBlock(storyNumber)
}
))

function switchStoryLeft(event) {
  console.log(event.target)
  if (innerStoryCounter !== 0) {
    innerStoryCounter-=1
    renderStory()
  }  else if(innerStoryCounter == 0 && storyNumber !== 0) {
    storyNumber-=1
    innerStoryCounter = 0
    innerStoryCounter = stories[storyNumber].querySelectorAll('#story').length -1
    renderStoryBlock()
  }
  else if (storyNumber == 0 && innerStoryCounter == 0) {
    closeStories()
  }

}

function switchStoryRight(event) {
  console.log(event.target)
  if (innerStoryCounter !== innerStories.length - 1){
      innerStoryCounter+=1
      renderStory()
    }  else if (storyNumber == stories.length -1 && innerStoryCounter == innerStories.length -1) {
        closeStories()
      } else if (innerStoryCounter == innerStories.length-1) {
        storyNumber+=1
        innerStoryCounter = 0;
        renderStoryBlock()
       }
  }

function renderStoryBlock() {
    console.log(storyNumber)
    stories.forEach((elem) => elem.style.display = 'none')
    stories[storyNumber].style.display = 'flex';
    renderStory()
  }

function renderStory() {
    innerStories = stories[storyNumber].querySelectorAll('#story')
    progressBar = stories[storyNumber].querySelectorAll('.progress_bar_wrap')
    innerStories.forEach((elem) => elem.style.display = 'none')
    innerStories[innerStoryCounter].style.display = 'block'
    progressBar.forEach((elem) => elem.style.backgroundColor = 'white')
    for (let i = 0; i < innerStoryCounter +1; i+=1){
      progressBar[i].style.backgroundColor = 'black'
    }
}

storyWrapper.addEventListener('click', (event) => {
  if (event.target.className == 'stories'){
    closeStories()
  }
})

function closeStories() {
  storyWrapper.style.display = 'none'
    stories.forEach((elem) => elem.style.display = 'none')
    storyNumber = 0
    innerStoryCounter = 0
}