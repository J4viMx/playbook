
//Clases ejercicio 1 facebook

class Userfacebook {
    constructor(name, lastName, email, birthday, Gender){
        this.name= name,
        this.lastName= lastName,
        this.email= email,
        this.birthday= birthday,
        this.Gender=  Gender
    }
}
 
const userFace = new Userfacebook("Javier", "Juarez", "correo@corre.com", "15-11-97", "male")

console.log(userFace)

class PostObj {
    constructor(postContent, whoCanSee, author, adjunt){
        this.postContent=  postContent,
        this.whoCanSee=  whoCanSee,
        this.author=  author,
        this.adjunt=  adjunt
    }
}

const Post = new PostObj("Hola soy contenido jeje", "friends", "Javier Juarez", "foto.jpg")

console.log(Post)



class biographyObj{
    constructor(name, friends, from, maritalStatus){
        this.name = name,
        this.friends = friends,
        this.from = from,
        this.maritalStatus = maritalStatus
    }
}

const biography = new biographyObj ("Javier Juarez", 158, "CDMX", "single")

console.log(biography)



//Clases ejercicio 1 twitter

class userTwitterObj{
    constructor(name, username, following, followers, joined){
        this.name= name,
        this.username= username,
        this.following= following,
        this.followers= followers,
        this.joined=  joined
    }
}

const userTwitter = new userTwitterObj ("Javier", "J4viMx", 63, 7, "september 2012")

console.log(userTwitter)


class trending_topicObj{
    constructor(name, trendingIn, tweets, category, ){
        this.name= name,
        this.trendingIn= trendingIn,
        this.tweets= tweets,
        this.category= category
    }
}

const trending_topic = new trending_topicObj ("launchX", "Mexico", 2200, "technology")

console.log(trending_topic)


class hashtagObj{
    constructor(name, category, used ){
        this.name= name,
        this.category= category,
        this.used= used
    }
}

const hashtag = new hashtagObj ("launchX", "digital", 5000)

console.log(hashtag)


//Clases ejercicio 1 uber

class profileObj{
    constructor(name, lastname, phoneNumber, email, facebook){
        this.name= name,
        this.lastname= lastname,
        this.phoneNumber= phoneNumber,
        this.email= email
        this.facebook= facebook
    }
}

const profile = new profileObj ("Javier", "Juarez", 220213420, "correo@corre.com", "/javiakjsk")

console.log(profile)


class travelObj{
    constructor(name, toHere, FromHere ){
        this.name= name,
        this.toHere= toHere,
        this.FromHere= FromHere
    }
}

const travel = new travelObj ("Javier Juarez", "insurgentes", "house no.192")

console.log(travel)



//Clases ejercicio 1 github


class repoObj{
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close){
        this.name= name,
        this.author= author,
        this.language= language,
        this.numberOfCommits= numberOfCommits,
        this.stars= stars,
        this.forks= forks,
        this.issues_open= issues_open,
        this.issues_close= issues_close
    }

    getTotalIssues(){
        return this.issues_open + this.issues_close
    }
    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
      }
}

const repo = new repoObj ("LaunchX", "J4viMx", "JavaScript", 100, 199, 299 , 10, 10)


console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())





class issueObj{
    constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated){
        this.title= title,
        this.repositoryNameAssociated= repositoryNameAssociated,
        this.status= status,
        this.numberOfComments= numberOfComments,
        this.labels= labels,
        this.author= author,
        this.dateCreated= dateCreated,
        this.lastUpdated= lastUpdated
    }

    getTitleAndAuthor(){
        return `${this.title} was created by ${this.author}`
    }

    getGeneralInfo(){
        return `This issue ${this.title} was created by ${this.author} on ${this.dateCreated}`
    }
}

const issue = new issueObj ("semana 2", "nodejs", "open", 40, "live 3", "carlogilmar", "12-04-22", "13-04-22")

console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())


class pullRequestObj{
    constructor(tittle, author, branchName, dateCreated, status, repositoryNameAssociated){
        this.tittle= tittle,
        this.author= author,
        this.branchName= branchName,
        this.dateCreated= dateCreated,
        this.status= status,
        this.repositoryNameAssociated= repositoryNameAssociated
    }

    getStatus(){
        return `${this.status}`
      }

    getTitleAndAuthor(){
        return `${this.title} was created by ${this.author}`
    }
}

const pullRequest = new pullRequestObj ("Envio de blog", "author", "main", "06-04-22", "open", "launch-x-explorers")

console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAuthor())