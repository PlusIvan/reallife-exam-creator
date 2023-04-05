export namespace ISubject {
    export interface RootObject {
        part?: number;
        phase?: number;
        question: string;
        type: string;
        year: number;
        multipleChoice?: boolean;
        multipleChoiceImage?: boolean;
        choices?: Array<string>;
        subquestions?: Array<ISubquestion>;
        image?: string;
    }   

    export interface ISubquestion {
        type: string;
        question: string;
        number: number;
        multipleChoice: boolean;
        choices: Array<string>;
    }

}