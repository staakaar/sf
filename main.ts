// Learn more at https://deno.land/manual/examples/module_metadata#concepts

import {$} from 'https://deno.land/x/zx_deno/mod.mjs'
await $`date`

let current_branch = await $`git branch --show-current`
console.log(current_branch)
let branch = await $`git branch --all --format='%(refname:short)'`
console.log(branch)



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

/** MEMO
    zx_deno install
    Gitでコミットを一つにまとめてpushするまでを自動化するコマンドを作成する。
    1. git checkout dev-master <= チェックアウトするブランチをGUIで選択移動できるようにする。
    2. git pull
    3. git checkout 作業ブランチ
    4. git log --oneline でコミットIDを取得
    5. 4で取得したコミットIDを git rebase -i コミットIDとする
    6. エディターで編集
    7. 実行後に git push --force-with-lease 作業ブランチ
*/
