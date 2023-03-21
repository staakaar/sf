// Learn more at https://deno.land/manual/examples/module_metadata#concepts

import {$} from 'https://deno.land/x/zx_deno/mod.mjs'
await $`date`

const command_args: string[] = Deno.args
console.log(command_args)
/** argsで引数を取得するモジュールをインポート 型定義 */
const target_branch = window.prompt("ブランチを入力してください。")
const switch_branch = await $`git checkout -b ${target_branch}`

// console.log(`${switch}へ切り替えが成功しました`)

/** エラーハンドリングする 共通化 */
const process = await $`git pull`

/** エラーハンドリングする */
console.log(process)

let current_branch = await $`git branch --show-current`
console.log(current_branch)

let branch = await $`git branch --all --format='%(refname:short)'`
console.log(branch)

let input_branch: string | null = window.prompt("ブランチを入力してください。");
console.log(input_branch)


if (import.meta.main) {
  // const git_log = Deno.run({
  //   cmd: ["git", "branch", "--all", "--format='%(refname:short)'"],
  //   stdin: "piped",
  //   stdout: "piped",
  // })

  // let branch_word: string | null = window.prompt("ブランチを入力してください。");

  // if (!branch_word) branch_word = ""
  // const input = new TextEncoder().encode(branch_word)

  // await git_log.stdin().write(input);

  // const result = await git_log.output();
  // const text = new TextDecoder().decode(result);
  // console.log(text)
  // let response = await exec(`zsh -c "fzf | xargs git checkout"`);

}