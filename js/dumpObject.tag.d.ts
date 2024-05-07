import { FormatChange, OnHeaderClick } from "./index";
import { EverySimpleValue } from "./dump.props";
export declare const dumpObject: import("taggedjs").TagComponentBase<[{
    key?: string | undefined;
    value: any;
    showAll?: boolean | undefined;
    showKids: boolean;
    show: boolean;
    showLevels: number;
    formatChange: FormatChange;
    onHeaderClick?: OnHeaderClick | undefined;
    allowMaximize?: boolean | undefined;
    everySimpleValue?: EverySimpleValue | undefined;
}]>;
