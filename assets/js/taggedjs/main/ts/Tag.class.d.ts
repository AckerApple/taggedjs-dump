import { TagSupport } from './TagSupport.class';
import { Provider } from './providers';
import { Subscription } from './Subject';
import { Counts } from './interpolateTemplate';
import { State } from './set.function';
import { InterpolatedTemplates } from './interpolations';
import { InterpolateSubject } from './processSubjectValue.function';
export declare const variablePrefix = "__tagvar";
export declare const escapeVariable: string;
export declare const escapeSearch: RegExp;
export type Context = {
    [index: string]: InterpolateSubject;
};
export type TagMemory = Record<string, any> & {
    context: Context;
    state: State;
    providers: Provider[];
};
export interface TagTemplate {
    interpolation: InterpolatedTemplates;
    string: string;
    strings: string[];
    values: unknown[];
    context: Context;
}
export declare class ArrayValueNeverSet {
    isArrayValueNeverSet: boolean;
}
export declare class Tag {
    strings: string[];
    values: any[];
    isTag: boolean;
    clones: (Element | Text | ChildNode)[];
    cloneSubs: Subscription[];
    children: Tag[];
    tagSupport: TagSupport;
    ownerTag?: Tag;
    appElement?: Element;
    arrayValue: unknown | ArrayValueNeverSet;
    constructor(strings: string[], values: any[]);
    /** Used for array, such as array.map(), calls aka array.map(x => html``.key(x)) */
    key(arrayValue: unknown): this;
    destroy(options?: DestroyOptions): Promise<number>;
    destroySubscriptions(): void;
    destroyClones({ stagger }?: DestroyOptions): Promise<number>;
    checkCloneRemoval(clone: Element | Text | ChildNode, stagger: number): {
        promise: Promise<unknown> | undefined;
        hasPromise: boolean;
    };
    updateByTag(tag: Tag): void;
    lastTemplateString: string | undefined;
    updateConfig(strings: string[], values: any[]): void;
    getTemplate(): TagTemplate;
    isLikeTag(tag: Tag): boolean;
    update(): Context;
    updateValues(values: any[]): Context;
    updateContext(context: Context): Context;
    getAppElement(): Tag;
    /** Used during HMR only where static content itself could have been edited */
    rebuild(): void;
    buildBeforeElement(insertBefore: Element | Text, options?: ElementBuildOptions): void;
}
type DestroyOptions = {
    stagger: number;
    byParent?: boolean;
};
export type ElementBuildOptions = {
    counts: Counts;
    forceElement?: boolean;
};
export {};
