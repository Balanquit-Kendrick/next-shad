import { ModeToggle } from "@/components/ui/toggle-mode";

export function Nav(){
    return (
        <div className="max-w-[1200px] mx-auto h-[80px] bg-black flex flex-col items-end justify-center  ">
            <ModeToggle/>
        </div>
    );
}
