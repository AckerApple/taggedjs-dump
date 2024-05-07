import { FormatChange } from "./index";
import { EverySimpleValue } from "./dump.props";
export declare const arrayDisplay: import("taggedjs").TagComponentBase<[{
    array: any[];
    showLevels: number;
    showAll?: boolean | undefined;
    showKids: boolean;
    columnNames: string[];
    formatChange: FormatChange;
    toggleColumnDialog: () => any;
    allowMaximize?: boolean | undefined;
    everySimpleValue?: EverySimpleValue | undefined;
}]>;
