import { red, yellow } from 'jsr:@std/internal@^1.0.10/styles';
import {parseArgs} from "jsr:@std/cli/parse-args";
import { toKebabCase, toSnakeCase } from "jsr:@std/text";


const flags = parseArgs(Deno.args, {
    boolean: ["snake", "kebab"],
    string: ["text"],
    default: {
        text: "Hello World"
    }
});

const age = prompt("How old are you?");

if (parseInt(age) < 18) {
    console.log("You are not old enough.");
    Deno.exit(1);
}

console.log("Access granted.");

const shouldProceed = confirm("wait, r u sure?");
if (!shouldProceed) {
    console.log(red("Terminated."));
    Deno.exit(1);
}

console.log(yellow(flags.text.toUpperCase()));
flags.kebab && console.log(blue(toKebabCase(flags.text)));
flags.snake && console.log(magenta(toSnakeCase(flags.text)));