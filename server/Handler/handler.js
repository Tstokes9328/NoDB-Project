let jedi = [{name:'Luke Skywalker', id: 0}, {name: 'Obi-Wan Kenobi', id: 1}]
let id = 2;

module.exports = {
    jedis: (req, res) => {
        res.status(200).send(jedi)
    },

    addJedi: (req, res) => {
        const { newjedi } = req.body;
        const freshJedi = {
            name: newjedi,
            id
        }
        id++
        jedi.push(freshJedi)
        res.status(200).send(jedi)
    },

    removeJedi: (req, res) => {
        let { id } = req.params
        jedi.forEach( (element, index) => {
            if(element.id === Number(id)){
                jedi.splice(index, 1)
            }
        })
        res.send(jedi)
    },
    
    updateJedi: (req, res) => { 
        let { id } = req.params
        let { name } = req.body

        jedi.forEach((person) => {
            if(person.id == id){
                person.name = name;
            }
            jedi[person] = {
                id: id,
                name: name
            }
        })   
        res.status(200).send(jedi)
    }
}