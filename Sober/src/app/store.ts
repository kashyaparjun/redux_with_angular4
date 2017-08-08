import { tassign } from 'tassign';
import { ADD_EMP, REMOVE_EMP } from './actions';

export interface IAppState {
    list: any[]
}

export const INITIAL_STATE: IAppState = {
    list: []
}

export function rootReducer(state: IAppState, action): IAppState {
    switch(action.type) {
        case ADD_EMP:
            var p = {
                id: state.list.length+1,
                name: action.list.name,
                phone: action.list.phone,
                address: action.list.address,
                priority: action.list.priority,
                color: action.list.color
            }
            console.log("at store");
            console.log(p);
            return tassign(state, {list: state.list.concat(p)});
        
        case REMOVE_EMP:
            var t = []
            for(var i = 0;i<state.list.length;i++){
                if(!state.list[i].id==action.id){
                    t.push(state.list[i]);
                }
            }
            return tassign(state, { list: t });
    }
    return state;
}