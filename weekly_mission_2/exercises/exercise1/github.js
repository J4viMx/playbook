const repo = {
    name: "LaunchX",
    author: "J4viMx",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())


const issue = {
    title: "Semana 2",
    repositoryNameAssociated: "nodejs",
    status: "open",
    numberOfComments: 40,
    labels: ["Live 3", "semana-2"],
    author: "carlogilmar",
    dateCreated: "12-04-22",
    lastUpdated: "13-04-22",
    getTitleAndAuthor: function(){
        return `${this.title} was created by ${this.author}`
    },
    getGeneralInfo: function(){
        return `This issue ${this.title} was created by ${this.author} on ${this.dateCreated}`
    }
}

console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())


const pullRequest = {
  title: "Envio de blog",
  author: "J4viMx",
  branchName: "main",
  dateCreated: "06-04-22",
  status: "open",
  repositoryNameAssociated: "launch-x-explorers",
  getStatus: function(){
    return `${this.status}`
  },
  getTitleAndAuthor(){
    return `${this.title} was created by ${this.author}`
  }
}

console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAuthor())
