import { ProcessOutput } from 'https://deno.land/x/zx_deno/mod.mjs'

/** gitコマンドの処理を取り扱うクラス */
export class Branches {
    private readonly all_branches: Array<String>
    private readonly remote_branches: Array<String>
    private readonly local_branches: Array<String>

    constructor(branches: ProcessOutput) {
        /** 配列化 */
        const branchList = this.branches2Array(branches)
        console.log('list', branchList)

        /** 初期化 */
        this.all_branches = branchList
        this.remote_branches = this.buildRemoteBranches(branchList)
        this.local_branches = this.buildLocalBranches(branchList)
    }

    private branches2Array(branches: ProcessOutput): Array<String> {
        return branches.stdout.split('\n')
    }

    private buildRemoteBranches(branches: Array<String>): Array<String> {
        console.log('init', branches)
        const remote_branches = branches.filter((branch) => branch.startsWith('origin/'))
        console.log('remote_branches', remote_branches)
        return remote_branches
    }

    private buildLocalBranches(branches: Array<String>): Array<String> {
        const local_branches = branches.filter((branch) => !branch.startsWith('origin/'))
        console.log('local_branches', local_branches)
        return local_branches
    }

    public getAllBranches(): Array<String> {
        return this.all_branches
    }

    public getRemoteBranches(): Array<String> {
        return this.remote_branches
    }

    public getLocalBranches(): Array<String> {
        return this.local_branches
    }


    public toString(): String {
        return this.all_branches.join("")
    }

}