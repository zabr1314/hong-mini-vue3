import { fn } from "moment"

class ReacticeEffect{
    private _fn:any
    constructor(fn){
        this._fn = fn
    }
    run(){
        this._fn()
    }
}

export function effect(fn){
    //fn
    const _effect = new ReacticeEffect(fn)
    _effect.run()
}