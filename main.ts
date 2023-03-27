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

/** ブランチ切り替え */
const checkoutBranch = await ZxCommand.GitGuiCheckout
console.log(checkoutBranch)
console.log(`${checkoutBranch}への切り替えが完了しました。`)

/** プル */
const pull_status = await ZxCommand.GitPull
console.log(`プルが完了しました。${pull_status}`)

/** TODO: メソッド切り替え 作業ブランチ切り替え */
const checkoutToFeatureBranch = await ZxCommand.GitGuiCheckout
console.log(checkoutToFeatureBranch)
console.log(`${checkoutToFeatureBranch}への切り替えが完了しました。`)

/** リベース */
const rebase_status = await ZxCommand.GitGuiRebase
console.log(`リベースが完了しました。${rebase_status}`)

/** git log からコミットID取得 rebase -iする */
const rebase_i = await ZxCommand.GitReabseICommitId
console.log(`リベースが完了しました。${rebase_i}`)

/** エディター編集 */
/** プッシュ リモートブランチがある場合は git push --force-with-lease なければgit push set-upstream */

/** エラーハンドリングする 共通化 */
// const process = await $`git pull`

/** エラーハンドリングする */
console.log(process)

let current_branch = await $`git branch --show-current`
console.log(current_branch)

// let branch = await $`git branch --all --format='%(refname:short)'`
// console.log(branch)


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