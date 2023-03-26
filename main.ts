// Learn more at https://deno.land/manual/examples/module_metadata#concepts
/** 標準ライブラリ */
import { $, ProcessOutput } from 'https://deno.land/x/zx_deno/mod.mjs'

/** Enum */
import { ZxCommand } from './enums/zx_command.ts'
import { Emoji } from './enums/emoji.ts'

/** クラス */
import { CommandArg } from './command_args.ts'
import { Branches } from './branches.ts'
import { CommandFactory } from './factory/command.ts'

/** コマンド引数をクラス化 */
const command_args: CommandArg = new CommandArg(Deno.args)
console.log(command_args)

/** 全ブランチ取得 */
const allBranch: ProcessOutput = await ZxCommand.AllbranchList

/** Branches初期化 */
const branches = new Branches(allBranch)
console.log('main.ts branches', branches)

console.log('********', branches.toString())

/** ブランチ一覧をfzfに出力する */
const selected_branch = await Deno.run(CommandFactory.fzf_config(branches.toString()));
// const xargs_cmd = Deno.run(CommandFactory.xargs_config(selected_branch));

// const status = xargs_cmd.status()
console.log(status)

// const checkoutBranch = await $`git branch --all --format='%(refname:short)' | fzf | xargs git checkout`
/** argsで引数を取得するモジュールをインポート 型定義 */
// const target_branch = window.prompt(`ブランチを入力してください${Emoji.Rocket}`)
// const switch_branch = await $`git checkout -b ${target_branch}`

// console.log(`${switch}へ切り替えが成功しました`)

/** エラーハンドリングする 共通化 */
// const process = await $`git pull`

/** エラーハンドリングする */
console.log(process)

let current_branch = await $`git branch --show-current`
console.log(current_branch)

// let branch = await $`git branch --all --format='%(refname:short)'`
// console.log(branch)

let input_branch: string | null = window.prompt("ブランチを入力してください。");
console.log(input_branch)


/**
    コマンドの種類
    1. レビュー修正 review_fix
    2. ホットフィックス hotfix
    3. 環境差分をなくす env_diff
    4. diffで編集した内容をすべて確認しながらコミット file_confirm
    4.フラグなし引数はエラーハンドリングさせる
 */

// if (import.meta.main) {
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

// }