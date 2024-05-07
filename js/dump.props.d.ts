import { Tag } from "taggedjs";
type ShowChange = (show: boolean) => any;
export type OnHeaderClick = () => any;
export type FormatChange = (format: 'json' | 'flex') => unknown;
export type SimpleValue = boolean | number | string | undefined | null;
export type DumpProps = {
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
    allowMaximize?: boolean;
    everySimpleValue?: EverySimpleValue;
};
export type EverySimpleValue = (value: SimpleValue, key?: string) => SimpleValue | Tag;
export {};
