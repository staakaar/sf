export type Command = {
    cmd: Array<String>
    stdin: String
    stdout: String
}

export class CommandFactory {

    public static fzf_config(allBranch: any): Command {
        console.log({
            cmd: [
                "fzf",
            ],
            stdin: allBranch,
            stdout: "piped",
        })
        return {
            cmd: ["fzf"],
            stdin: allBranch,
            stdout: "piped",
        }
    }

    public static xargs_config(selected_branch: any): Command {
        return {
            cmd: [
                "xargs",
                "-I",
                "{}",
                "git",
                "checkout",
                "{}"
            ],
            stdin: selected_branch.stdout,
            stdout: "piped"
        }
    }
}