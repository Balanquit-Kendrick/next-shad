import { ModeToggle } from "@/components/ui/toggle-mode";

export function Nav(){
    return (
        <div className="max-w-[1200px] mx-auto p-5 h-[80px] border dark:border-background flex flex-col items-end justify-center  ">
            <ModeToggle/>
        </div>
    );
}
