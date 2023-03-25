export type Command = {
    cmd: Array<String>
    stdin: String
    stdout: String
}

export class CommnadFactory {

    public static fzf_config(allBranch: any): Command {
        console.log({
            cmd: ["fzf"],
            stdin: allBranch.stdout,
            stdout: "piped"
        })
        return {
            cmd: ["fzf"],
            stdin: allBranch.stdout,
            stdout: "piped"
        }
    }

    public static xargs_config(selected_bramnch: any): Command {
        return {
            cmd: [
                "xargs",
                "-I",
                "{}",
                "git",
                "checkout",
                "{}"
            ],
            stdin: selected_bramnch.stdout,
        }
    }
}