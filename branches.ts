/** gitコマンドの処理を取り扱うクラス */
export class Branches {
    private readonly all_branches: Array<String>
    private readonly remote_branches: Array<String>
    private readonly local_branches: Array<String>

    constructor(branches: string[]) {
        this.all_branches = branches
    }
}