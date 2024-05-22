export declare const columnEditor: (({ name, array, included, columnNames, allColumnNames }: {
    name: string;
    array: unknown[];
    included: boolean;
    columnNames: string[];
    allColumnNames: string[];
}) => import("taggedjs").Tag) & {
    original: Function;
};
