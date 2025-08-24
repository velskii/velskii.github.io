const libName = "lib.dll";

const lib = Deno.dlopen(libName, {
    toUpperCase: {
        parameters: ["pointer"],
        result: "void"
    }
})

function toCString(str: string): Uint8Array {
    const buf = new TextEncoder().encode(str);
    const cstr = new Uint8Array(buf.length + 1);
    cstr.set(buf, 0);
    cstr[buf.length] = 0;
    return cstr;
}

export function toUpperCaseWithC(str: string): string {
    const buffer = toCString(str);
    const ptr = Deno.UnsafePointer.of(buffer);
    lib.symbols.toUpperCase(ptr);
    
    return new TextDecoder().decode(buffer);
}