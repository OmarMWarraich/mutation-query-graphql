let crypto = require('crypto')

let localData = {}


const resolver ={
    Query: {
        getMessage: () => {
            return "hello world from Piaic50152"
        },
        getName: () => {
            return "ABC"
        },
        getAllMessags: () => {
            return [{message: "test", id:"2343"}, {message: "test", id:"2343"}]
        }
    },
    Mutation: {
        createMessage: (_,{input}) => {
            // console.log('args', args)
            let id = crypto.randomBytes(16).toString("hex");
            console.log('id', id)
            localData[id] = {id,...input.message}
            return {id,...input}
        }
    }
}

module.exports = resolver