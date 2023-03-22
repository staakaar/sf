import { parse, type ParseOption } from "https://deno.land/std@0.180.0/flags/mod.ts";

/** コマンド処理の実装 */
export class CommandArg implements ParseOption {
    /** フィールド */
    /** フラグあり引数 */
    private readonly flag_args: {}
    /** フラグなし引数 */
    private readonly no_flag_args: string[]

    constructor(args: string[]) {
        const parsed_args = parse(args)
        this.no_flag_args = parsed_args._
        const flag_args = delete parsed_args._
        this.flag_args = flag_args
    }
}