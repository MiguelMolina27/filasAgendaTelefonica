import { Node } from "./Node.js"

export class Queue {
    #count
    #first
    #last

    constructor(){
        this.#count = 0
        this.#first = undefined
        this.#last = undefined
    }
    
    enqueue(data){
        const element = new Node(data)
        if(this.#count == 0){
            this.#first = element
            this.#last = element
        }else{
            this.#last.prev = element
            this.#last = element
        }
        this.#count++
    }

    dequeue(){
        if(this.isEmpty()){
            return undefined
        }else{
            const out = this.#first.getData()
            
            if(this.#count == 1){
                this.#first = undefined
                this.#last = undefined
            }else{
                this.#first = this.#first.prev
            }
            this.#count--
            return out
        }
        
    }

    peek(){
        if(this.isEmpty()){
            return undefined
        }else{
            return this.#first
        }
        
    }

    size(){
        return this.#count
    }

    isEmpty(){
        return this.#count == 0
    }
}