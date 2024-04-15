type ShowChange = (show: boolean) => any;
export type OnHeaderClick = () => any;
export type FormatChange = (format: 'json' | 'flex') => unknown;
type DumpProps = {
    value: any;
    key?: string;
    show?: boolean;
    showKids?: boolean;
    showLevels?: number;
    format?: 'json' | 'flex';
    formatChange?: FormatChange;
    isRootDump?: boolean;
    showChange?: ShowChange;
    onHeaderClick?: () => any;
    showAll?: boolean;
};
export declare const dump: import("taggedjs").TagComponentBase<[DumpProps]>;
export {};
