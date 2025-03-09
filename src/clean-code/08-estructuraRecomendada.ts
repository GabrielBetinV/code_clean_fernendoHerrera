class HtmlElement {


    // Propiedades estaticas
    public static domReady: boolean = false;


    private _id: string;
    private type: string;
    private updateAt: number;


    // Constructores staticos, devolver una instancia de la clase
    static createInput(id: string) {
        return new HtmlElement(id, 'input');
    }


    // Constructor normal
    constructor(id: string, type: string) {
        this._id = id;
        this.type = type;
        this.updateAt = Date.now();
    }

    setType(type: string) {
        this.type = type;
        this.updateAt = Date.now()

    }


    get id(): string {
        return this.id
    }

}