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
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import submitForm from "@/lib/form";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const captchaRef = useRef<HCaptcha>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const onVerify = async (token: string) => {
        setLoading(true);
        const response = await submitForm(formRef.current!);
        setLoading(false);
        if (response.status == "ok") {
            toast({
                title: "Solicitud enviada",
                description:
                    "Tu solicitud ha sido enviada con éxito. A tu correo llegará una respuesta lo más pronto posible.",
            });
        } else {
            toast({
                title: "Error",
                description:
                    "Ha ocurrido un error al enviar tu solicitud. Por favor, intenta nuevamente.",
            });
        }
    };

    const submit = async (ev: SubmitEvent) => {
        ev.preventDefault();
        captchaRef.current?.execute();
    };
    return (
        <Card className="max-w-md w-full">
            <form
                action="/v1/contact"
                ref={formRef}
                onSubmit={submit}
                method="POST"
            >
                <CardHeader>
                    <CardTitle>Contáctanos</CardTitle>
                    <CardDescription>¿Tienes alguna duda?</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Nombre Completo</Label>
                        <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input
                            id="email"
                            placeholder="ejemplo@ejemplo.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="title">Asunto</Label>
                        <Input id="title" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="msg">Mensaje</Label>
                        <Textarea id="msg" required />
                    </div>
                </CardContent>
                <CardFooter className="flex-col gap-4">
                    <Button className="w-full" disabled={loading} type="submit">
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Por favor, espera
                            </>
                        ) : (
                            "Continuar"
                        )}
                    </Button>
                    <p className="text-xs text-muted-foreground">
                        Este sitio es protegido por hCaptcha y su{" "}
                        <a href="https://www.hcaptcha.com/privacy" className="hover:text-white hover:underline transition-colors" target="_blank" rel="noopener noreferrer">
                            Política de Privacidad
                        </a>{" "}
                        y{" "}
                        <a href="https://www.hcaptcha.com/terms" className="hover:text-white hover:underline transition-colors" target="_blank" rel="noopener noreferrer">
                            Términos de Servicio
                        </a>{" "}
                        aplican.
                    </p>
                </CardFooter>
                <HCaptcha
                    sitekey="37ff12d2-e5da-4b5c-b4e1-fce04fdcd8cf"
                    size="invisible"
                    ref={captchaRef}
                    onVerify={onVerify}
                    onOpen={() => {
                        setLoading(true);
                    }}
                    onClose={() => {
                        setLoading(false);
                    }}
                    onLoad={() => {
                        setLoading(false);
                    }}
                />
            </form>
        </Card>
    );
}
