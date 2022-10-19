export default {
    
    namespaced: true,

        modules:{
            a: {
                namespaced: true,
                state(){
                    return {
                        alphabet: [
                            'a',
                            'b',
                            'c'
                        ],
                        school: 'Kalawag Central School'
                    }
                },
                mutations: {
                    showSubModule(){
                        console.log('Sub modle of couse module');
                    },

                    showAlphabet(){
                        console.log('called');
                        for(let letter in this.alphabet){
                            console.log(letter);
                        }
                    }
                },

                actions: {
                    showAlphabet({commit}){
                        commit('showAlphabet');
                    }
                }

            },
            b:{

            }    
        },
    state(){
        
        return {
            courses: [
                {
                    id:1,
                    title: 'Larave'
                },
                {
                    id:2,
                    title: 'Flutter'
                },
                {
                    id:3,
                    title: 'Vue'
                },
            ]
        }
    },

    mutations: {
        showModule(){
            console.log('course Module');
        },
        showAlphabet(){
            console.log('ey');
            // for(let letter in this.alphabet){
            //     console.log(letter);
            // }
                
        }
    }

    


}