import Settings from "../Components/Settings"

export default Object.create(null, {
    post: {
        value: function(obj) {
            return fetch(`${Settings.remoteURL}/${this.desiredDatabase}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            })
            .then(r => r.json())
        }
    },

    getOne: {
        value: function(id) {
            return fetch(`${Settings.remoteURL}/${this.desiredDatabase}/${id}`)
            .then(r => r.json())
        }
    },

    getAll: {
        value: function() {
            return fetch(`${Settings.remoteURL}/${this.desiredDatabase}`)
            .then(r => r.json())
        }
    },

    getSorted: {
        value: function (activeUser) {
          return fetch(`${Settings.remoteURL}/${this.desiredDatabase}?/userId=${activeUser}&_sort=date&_order=asc`)
            .then(r => r.json())
        }
    },

    put: {
        value: function(obj) {
            return fetch(`${Settings.remoteURL}/${this.desiredDatabase}/${obj.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            })
        }
    },

    deleteAndList: {
        value: function(id) {
            return fetch(`${Settings.remoteURL}/${this.desiredDatabase}/${id}`, {
                method: "DELETE"
            })
            .then(r => r.json())
            .then(() => fetch(`${Settings.remoteURL}/${this.desiredDatabase}`))
            .then(r => r.json())
        }
    },

    searchUserPass: {
        value: function(username, password) {
            return fetch(`${Settings.remoteURL}/${this.desiredDatabase}?username=${username}&password=${password}`)
            .then(r => r.json())
        }
    },

    searchUsername: {
        value: function(username) {
            return fetch(`${Settings.remoteURL}/${this.desiredDatabase}?username=${username}`)
            .then(r => r.json())
        }
    }
})
