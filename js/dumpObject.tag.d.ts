import { FormatChange, OnHeaderClick } from "./index";
import { EverySimpleValue } from "./dump.props";
export declare const dumpObject: (({ key, showKids, show, showLevels, value, showAll, onHeaderClick, formatChange, allowMaximize, everySimpleValue, }: {
    key?: string;
    value: any;
    showAll?: boolean;
    showKids: boolean;
    show: boolean;
    showLevels: number;
    formatChange: FormatChange;
    onHeaderClick?: OnHeaderClick;
    allowMaximize?: boolean;
    everySimpleValue?: EverySimpleValue;
}) => import("taggedjs").Tag) & {
    original: Function;
};
