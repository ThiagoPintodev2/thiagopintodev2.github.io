import { Button } from "@/components/ui/button";
import type { BtnProps } from "./btnProps";

function Btn({ className, value }: BtnProps) {
    return (
        <>
            <Button className={className} variant="outline" >{value}</Button>
        </>
    )
}
export default Btn