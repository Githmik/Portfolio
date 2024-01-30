export class Tag{
    static readonly ANGULAR = new Tag('Angular' , 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'blue');
    static readonly EXPRESSJS = new Tag('ExpressJs' , 'orange');
    static readonly NodeJS = new Tag('NodeJs' , 'yellow');
    static readonly HTML = new Tag('HTML' , 'green');
    static readonly JS = new Tag('JS' , 'red');
    static readonly CSS = new Tag('CSS', 'light-green');
    static readonly JAVA = new Tag('Java', 'light-blue');
    static readonly MYSQL = new Tag('MySQL', 'purple');
    



    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}