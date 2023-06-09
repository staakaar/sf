import {$} from 'https://deno.land/x/zx_deno/mod.mjs'

export const enum ZxCommand {
    AllbranchList = $`git branch --all --format='%(refname:short)'`,
    GitGuiCheckout = $`git branch --all --format='%(refname:short)' | fzf | xargs git checkout`,
    GitPull = $`git pull`,
    GitGuiRebase = $`git branch --all --format='%(refname:short)' | fzf | xargs git rebase`,
    GitReabseICommitId = $`git log --online --pretty=format:%H | fzf | sed 's/.$//' | xargs git rebase -i`,
    Fzf = $`fzf`,
    RemoveLatChar = $`sed 's/.$//'`,
    GitPushForce = $`git push --force-with-lease`
}