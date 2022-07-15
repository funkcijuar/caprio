# tuple-of

A utility type for tuples, where the tuple length is a generic, e.g. `TupleOf<string, 3>`.

> TypeScript may be adding an official `TupleOf` utility type, which will be more performant in the case of a large N, but in the meantime, we can use this one. See:
>
> - https://github.com/microsoft/TypeScript/pull/40002
> - https://github.com/piotrwitek/utility-types/pull/162
