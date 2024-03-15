/** File largely responsible for reacting to element events, such as onclick */
import { Tag } from "./Tag.class";
export type Callback = (...args: any[]) => any & {
    isChildOverride?: true;
};
export declare function bindSubjectCallback(value: Callback, tag: Tag): Callback;
export declare function runTagCallback(value: Callback, tag: Tag, bindTo: unknown, args: any[]): Promise<string> | "no-data-ever" | undefined;
