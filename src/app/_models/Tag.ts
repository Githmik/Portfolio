export class Tag{
    static readonly ANGULAR = new Tag('Angular' , 'red');
    static readonly TYPESCRIPT = new Tag('TypeScrip', 'blue');
    static readonly REACT = new Tag('React' , 'orange');
    static readonly NodeJs = new Tag('NodeJs' , 'yellow');
    static readonly HTML = new Tag('HTML' , 'green');
    static readonly JS = new Tag('JS' , 'red');
    



    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}