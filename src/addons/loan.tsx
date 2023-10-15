import { Button } from "../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import DatePickerWithRange from "../components/ui/date-picker-with-range";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip";

export default function LoanAddon() {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-7/12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Simulador de Crédito</CardTitle>
                            <CardDescription>
                                What area are you having problems with?
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="area">
                                        Frecuencia de Pago
                                    </Label>
                                    <Select defaultValue="1">
                                        <SelectTrigger id="frecuency">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">
                                                Mensual
                                            </SelectItem>
                                            <SelectItem value="3">
                                                Trimestral
                                            </SelectItem>
                                            <SelectItem value="6">
                                                Semestral
                                            </SelectItem>
                                            <SelectItem value="0">
                                                Único, al vencimiento
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="ea">
                                        Tasa de Interés (E.A.)
                                    </Label>
                                    <div className="flex w-full max-w-sm items-center space-x-2">
                                        <Input
                                            type="number"
                                            placeholder="%"
                                            id="ea"
                                        />
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button variant="outline">
                                                        Max
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Tasa de Usura</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="date">Desde - Hasta</Label>
                                <DatePickerWithRange className="w-full" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="value">Monto del Crédito</Label>
                                <Input
                                    id="value"
                                    placeholder="$"
                                    type="number"
                                    min={0}
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="justify-between space-x-2">
                            <Button variant="ghost">Limpiar</Button>
                            <Button>Submit</Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="w-full md:w-5/12">
                    <div className="w-full h-10 bg-white"></div>
                </div>
            </div>
        </>
    );
}
