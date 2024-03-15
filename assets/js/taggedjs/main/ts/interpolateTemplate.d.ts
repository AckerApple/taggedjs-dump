import { Context, ElementBuildOptions, Tag } from "./Tag.class";
import { InterpolateOptions } from "./interpolateElement";
import { Clones } from "./Clones.type";
import { InterpolateSubject } from "./processSubjectValue.function";
import { TagSubject } from "./Tag.utils";
export type Template = Element & {
    clone?: any;
};
export type InterpolateComponentResult = {
    subject: InterpolateSubject;
    insertBefore: Element | Text | Template;
    ownerTag: Tag;
};
export type InterpolateTemplateResult = {
    clones: Clones;
    tagComponent?: InterpolateComponentResult;
};
export declare function interpolateTemplate(insertBefore: Template, // <template end interpolate /> (will be removed)
context: Context, // variable scope of {`__tagvar${index}`:'x'}
ownerTag: Tag, // Tag class
counts: Counts, // used for animation stagger computing
options: InterpolateOptions): InterpolateTemplateResult;
export declare function subscribeToComponentTemplate(insertBefore: Element | Text | Template, subject: TagSubject, ownerTag: Tag, clones: Clones, counts: Counts, // used for animation stagger computing
{ isForceElement }: {
    isForceElement?: boolean;
}): Clones;
export declare function subscribeToTemplate(insertBefore: Element | Text | Template, subject: InterpolateSubject, ownerTag: Tag, counts: Counts, // used for animation stagger computing
{ isForceElement }: {
    isForceElement?: boolean;
}): void;
export declare function updateBetweenTemplates(value: string | undefined | boolean | number, lastFirstChild: Element | Text): Text;
export type Counts = {
    added: number;
    removed: number;
};
export declare function afterElmBuild(elm: Element | ChildNode, options: ElementBuildOptions, context: Context, ownerTag: Tag): void;
