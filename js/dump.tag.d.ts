import { StringTag, DomTag } from "taggedjs";
import { DumpProps } from "./dump.props";
export declare const dump: import("taggedjs").TaggedFunction<(<T>({ key, value, showKids, showLevels, showAll, format, formatChange, isRootDump, onHeaderClick, allowMaximize, everySimpleValue, }: DumpProps<T>) => StringTag | DomTag)>;
