// 1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

const favoriteCoffee = {
    brand: 'Lavazza',
    strength: 'mild',
    milk: 'almond milk',
    sugar: '1 teaspoon'
}

// 2. Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.

// const movie = {
//     title: 'Silence of the Lambs',
//     starring: ['Anthony Hopkins', 'Jodie Foster'],
//     director: 'Ridley Scott',
//     genre: 'psychological horror',
//     imdb rating: 8.6
// }


// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project&#39;s
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

function createProject(description, programmingLanguage, gitRepo, inDevelopment){
    const project = new Object();
    project.description = description,
    project.programmingLanguage = programmingLanguage,
    project.gitRepo = gitRepo,
    project.inDevelopment = inDevelopment,
    project.status = function(inDevelopment){
    if(inDevelopment == true){
                this.status = 'the project is not yet done';
            } else if(inDevelopment == false){
                this.status = 'the project has been completed';
        } return this.status
    };
    
    project.language = function(programmingLanguage){
    if(programmingLanguage == 'JavaScript'){
            project.language = 'the project is done in JavaScript';
        } else if(programmingLanguage !== 'JavaScript'){
            project.language = 'the project is done in a language that\'s not JavaScript';
        } return project.programmingLanguage
    }
    return project
}
console.log(createProject('building an app', 'JavaScript', 'repoURL', true));
