import { FormControl } from '@angular/forms';
import * as fs from 'fs';

export const GlobalCategories =
[
    {name: "world",parentCategory: ""},
    {name: "actors",parentCategory: ""},
    {name: "other",parentCategory: ""}
];
export const InnerCategories =
[
    {name: "principal",parentCategory: "actors"},
    {name: "secondaries",parentCategory: "actors"},
    {name: "regions",parentCategory: "world"},
    {name: "worlds",parentCategory: "world"},
    {name: "kingdoms",parentCategory: "world"},
    {name: "cities",parentCategory: "world"},
    {name: "towns",parentCategory: "world"},
    {name: "places",parentCategory: "world"},
    {name: "lands",parentCategory: "world"},
    {name: "other",parentCategory: "other"}
];

export class Proyect
{
    //_id?: number = 0;
    _name: string;
    _path?: string;
    
    constructor(id: number, name: string, path: string)
    {
        
        this._name = name || "Proyect";
        if(fs.existsSync(path))
            this._path = path;
    }
    
}
export default class HandleProyectData
{
    

    static loaded?: boolean = false;
    static current_? : Proyect;
    static paths = [
        {tag: "saves", path:'/sv'},
        {tag: "objects", path:'/obj'},
        {tag: "files", path:'/fsav'},
    ];
    constructor (pd: Proyect)
    {
        HandleProyectData.current_ = pd;
        HandleProyectData.loaded = true;
    }

    public GetPath (tag: string) : string | undefined
    {
        return HandleProyectData.paths.find((i)=> 
        {i.tag == tag})?.path;
    }
}