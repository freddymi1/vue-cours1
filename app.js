const app = Vue.createApp({
    // data(){
    //     return{
    //         firstName: 'Freddy',
    //         lastName: 'Michel',
    //         email: 'michelfreddy1992@gmail.com',
    //         gender: 'male',
    //         picture: 'https://randomuser.me/api/portraits/men/10.jpg'
    //     }
    // },
    // methods:{
    //     getUser(){
    //         this.firstName= 'Mie',
    //         this.lastName= 'Sam',
    //         this.email= 'miesam@gmail.com',
    //         this.gender= 'female',
    //         this.picture= 'https://randomuser.me/api/portraits/women/10.jpg'
    //     }
    // }

    data(){
        return{
            firstName: 'Freddy',
            lastName: 'Michel',
            email: 'michelfreddy1992@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods:{
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()

            console.log(results)
            this.firstName= results[0].name.first,
            this.lastName= results[0].name.last,
            this.email= results[0].email,
            this.gender= results[0].gender,
            this.picture= results[0].picture.large
        }
    }
})

app.mount('#app')