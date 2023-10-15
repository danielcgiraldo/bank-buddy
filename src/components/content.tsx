import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewAddon from "./overview";
import { ADDONS } from "@/lib/addons";
export default function Content() {
    return (
        <Tabs defaultValue="overview" className="space-y-4 mt-4 md:mt-2">
            <TabsList>
                <TabsTrigger value="overview">Datos Financieros</TabsTrigger>
                {
                    ADDONS.map((addon) => (
                        <TabsTrigger value={addon.id} key={addon.id}>
                            {addon.name}
                        </TabsTrigger>
                    ))
                }
            </TabsList>
            <TabsContent value="overview">
                <OverviewAddon />
            </TabsContent>
            {
                ADDONS.map((addon) => (
                    <TabsContent value={addon.id} key={addon.id}>
                        {addon.element}
                    </TabsContent>
                ))
            }
        </Tabs>
    );
}
