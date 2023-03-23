import { parse, type ParseOption } from "https://deno.land/std@0.180.0/flags/mod.ts";

type Flag = {
    first_flag: string
    second_flag: string
    third_flag: string
}

/** コマンド処理の実装 */
export class CommandArg implements ParseOption {
    /** フィールド */
    /** フラグあり引数 */
    private readonly flag_args: Flag
    /** フラグなし引数 */
    private readonly no_flag_args: Array<string>

    constructor(args: string[]) {
        const parsed_args = parse(args)
        console.log(parsed_args)
        this.no_flag_args = parsed_args._
        delete parsed_args._
        this.flag_args = parsed_args
    }
}