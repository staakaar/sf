import {$} from 'https://deno.land/x/zx_deno/mod.mjs'

export const enum ZxCommand {
    AllbranchList = $`git branch --all --format='%(refname:short)'`
}