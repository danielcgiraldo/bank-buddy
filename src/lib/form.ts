export default async function submitForm(form: HTMLFormElement) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const response = await fetch(form.action, {
        method: form.method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        return {
            "response": "error",
            "message": "Something went wrong. Please try again later."
        }
    }
    const result = await response.json();
    form.reset();
    return result;
}