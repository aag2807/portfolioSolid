import { lazy } from 'solid-js'

interface Route {
    path: string;
    component: any;
    children?: any[];
}

export const Routes:Route[] = [ 
    {   
        path:'/',
        component: lazy(()=> import('../pages/Main/Home'))
    },
]