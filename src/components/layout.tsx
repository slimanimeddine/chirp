import { type PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
    return (
        <main className="flex justify-center h-screen">
            <div className="h-full w-full overflow-y-scroll md:max-w-2xl border-x border-slate-400">
                {props.children}
            </div>
        </main>
    )
}