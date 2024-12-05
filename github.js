class Github {
    constructor() {
        this.client_id = 'Ov23liTsOikE1j3dPCQz';
        this.client_secret = '8de672edac599a21231c70bc3f3c6f7e345cef52';
        this.repos_count = 5;
        this.repos_sort = 'created : asc';
    }

    async getUser(user) {
        const profileResponse = await fetch
            (`http://api.github.com/users/${user}?client_id=${this.client_id}&
                client_secret=${this.client_secret} `);

        const repoResponse = await fetch
            (`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&
                client_id=${this.client_id}&client_secret=${this.client_secret} `);


        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}