import { FormatChange } from "./index";
export declare const controlPanel: (({ value, format, showAll, formatChange, showAllChange, }: {
    value: any;
    format: string;
    showAll?: boolean;
    showAllChange: (x: boolean) => unknown;
    formatChange: FormatChange;
}) => import("taggedjs").Tag) & {
    original: Function;
};
