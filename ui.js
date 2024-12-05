class UI {
    constructor() {
        this.profile = document.getElementById('profile');

    }
    //show profile
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}" >
                        <a href="${user.html_url}" target ="_blank" class= "btn
                        btn-primary btn block" style="margin-left: 20px;">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="bagde badge-primary">Public Repos :
                        ${user.public_repos}</span>

                        <span class="bagde badge-secondary">Public Gists :
                        ${user.public_gists}</span>

                        <span class="bagde badge-sucess">Followers :
                        ${user.followers}</span>

                        <span class="bagde badge-primary">Following :
                        ${user.following}</span>
                        <br><br>
                
                        <ul class="list-group">
                        <li class="list-group-item">Company : ${user.company}</li>
                        <li class="list-group-item">Blog : ${user.blog}</li>
                        <li class="list-group-item">Location : ${user.location}</li>
                        <li class="list-group-item">Memeber Since : ${user.craeted_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }
    //show user repos
    showRepos(repos) {
        let output = '';

        repos.forEach(function (repo) {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-mb-6">
                        <a href="${repo.html_url}" target ="_blank">${repo.name}</a>
                        </div>
                        <div class="col-mb-6">

                            <span class="bagde badge-primary">Stars :
                            ${repo.stargazers_count}</span>

                            <span class="bagde badge-secondary">Watchers :
                            ${repo.watchers_count}</span>

                            <span class="bagde badge-sucess">Forks :
                            ${repo.forms_count}</span>
                
                        </div>
                    </div>
                </div>
                        
                `;
        });

        //output repos
        document.getElementById('repos').innerHTML = output;
    }
    // show alert
    showAlert(message, className) {
        // clear any remaining alert
        this.clearAlert();
        // creat div from scratch
        const div = document.createElement('div');
        div.className = className;
        // add text
        div.appendChild(document.createTextNode(message)); // append inside that div
        // get parent
        const container = document.querySelector('.searchContainer'); // 2 containers
        // get the search box
        const search = document.querySelector('.search');
        //insert the alert
        container.insertBefore(div, search); // insert div before search

        // timeout after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);

    }
    // clear alert  
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) { currentAlert.remove(); }
    }

    //clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }

}