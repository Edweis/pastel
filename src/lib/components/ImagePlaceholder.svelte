<script lang="ts">
    import cn from "classnames";
    let classNames: string;
    export { classNames as class };
</script>

<div
    class={cn(
        "w-full border border-white rounded-md text-black text-xl flex items-center justify-center bg-gray-400",
        classNames
    )}
>
    <slot>My awesome image</slot>
</div>
