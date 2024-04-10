export class Node {
    #prev
    #data

    constructor(data){
        this.#prev = undefined
        this.#data = data
    }

    getData(){
        return this.#data
    }
}