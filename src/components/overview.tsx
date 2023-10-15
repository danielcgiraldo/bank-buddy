import { BestCDT } from "@/ui/best-cdt";
import Indicators from "@/ui/indicators";

export default function OverviewAddon() {
    return (
        <>
            <Indicators />
            <div className="grid gap-4 md:grid-cols-2 mt-4">
                <div className="col-span-2 grid items-start gap-4 lg:col-span-1">
                    <BestCDT />
                </div>
                <div className="col-span-2 grid items-start gap-4 lg:col-span-1">
                    <BestCDT />
                </div>
            </div>
        </>
    );
}
