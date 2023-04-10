export namespace ISubject {
    export interface RootObject {
        image?: string;
        phase?: string;
        question?: string;
        year: number;
        statement?: string;
        choices?: Array<string>;
        subquestions?: Array<{ choices?: Array<string>; question?: string; image?: string; }>
    }   

    export interface ISubquestion {
        type: string;
        question: string;
        number: number;
        multipleChoice: boolean;
        choices: Array<string>;
    }
    export interface Document {
        image: string;
        last_revised: Date;
        name: string;
    }
}