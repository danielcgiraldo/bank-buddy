import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea"
import { GraduationCap, User2, DollarSign } from "lucide-react";

export default function ApiForm() {
    return (
        <Card className="max-w-lg">
            <CardHeader>
                <CardTitle>Credenciales API</CardTitle>
                <CardDescription>
                    Queremos saber para qué vas a usar nuestra API
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <RadioGroup
                    defaultValue="card"
                    className="grid grid-cols-3 gap-4"
                >
                    <div>
                        <RadioGroupItem
                            value="card"
                            id="card"
                            className="peer sr-only"
                        />
                        <Label
                            htmlFor="card"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            <User2 className="mb-3 h-6 w-6" />
                            Personal
                        </Label>
                    </div>
                    <div>
                        <RadioGroupItem
                            value="paypal"
                            id="paypal"
                            className="peer sr-only"
                        />
                        <Label
                            htmlFor="paypal"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            <GraduationCap className="mb-3 h-6 w-6" />
                            Acádemico
                        </Label>
                    </div>
                    <div>
                        <RadioGroupItem
                            value="apple"
                            id="apple"
                            className="peer sr-only"
                        />
                        <Label
                            htmlFor="apple"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            <DollarSign className="mb-3 h-6 w-6" />
                            Comercial
                        </Label>
                    </div>
                </RadioGroup>
                <div className="grid gap-2">
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input id="name" placeholder="John Doe" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" placeholder="ejemplo@ejemplo.com" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="usecase">Cuentános para que vas a usar nuestra API</Label>
                    <Textarea id="usecase" placeholder="Comienza a escribir..." />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Continuar</Button>
            </CardFooter>
        </Card>
    );
}
