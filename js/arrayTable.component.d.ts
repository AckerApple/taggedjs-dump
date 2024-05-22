import { FormatChange } from "./index";
import { EverySimpleValue } from "./dump.props";
export declare const arrayTable: (({ array, showAll, showKids, toggleColumnDialog, columnNames, formatChange, allowMaximize, everySimpleValue, }: {
    array: any[];
    showAll?: boolean;
    showKids: boolean;
    toggleColumnDialog: any;
    columnNames: string[];
    formatChange: FormatChange;
    allowMaximize?: boolean;
    everySimpleValue?: EverySimpleValue;
}) => import("taggedjs").Tag) & {
    original: Function;
};
