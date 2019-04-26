import { ModelType } from './ModelType';

export interface Card {
    model: ModelType;
    title: string;
    content: any;
}
export interface CardContent {
    title?: string;
    colSize?: number;
    content: string;
}
