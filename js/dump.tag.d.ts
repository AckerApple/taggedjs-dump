import { Tag } from "taggedjs";
import { DumpProps } from "./dump.props";
export declare const dump: (({ key, value, showKids, showLevels, showAll, format, formatChange, isRootDump, onHeaderClick, allowMaximize, everySimpleValue, }: DumpProps) => Tag) & {
    original: Function;
};
