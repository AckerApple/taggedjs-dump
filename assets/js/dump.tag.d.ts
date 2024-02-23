import { Tag } from "taggedjs";
type ShowChange = (show: boolean) => any;
type FormatChange = (format: 'json' | 'small') => unknown;
type DumpProps = {
    value: any;
    key?: string;
    show?: boolean;
    showKids?: boolean;
    showLevels?: number;
    format?: 'json' | 'small';
    formatChange: FormatChange;
    isRootDump: boolean;
    showChange?: ShowChange;
    onHeaderClick?: () => any;
};
export declare const dump: (props?: DumpProps | undefined, children?: import("taggedjs").TagChildrenInput | undefined) => Tag;
export {};
