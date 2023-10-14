import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewAddon from "./addons/overview";
export default function Content() {
    return (
        <Tabs defaultValue="overview" className="space-y-4 mt-2">
            <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="cdt">CDTs</TabsTrigger>
                <TabsTrigger value="loan">Préstamos</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
                <OverviewAddon />
            </TabsContent>
            <TabsContent value="cdt">
                Change your password here.
            </TabsContent>
            <TabsContent value="loan">
                Change your password here.
            </TabsContent>
        </Tabs>
    );
}
