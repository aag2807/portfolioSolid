import {createEffect} from 'solid-js'

export const createDocumentTitle = (title: string): void => {
    createEffect<any>(()=>{
        document.title = title
    },[title])
}