import { useToggle, upperFirst } from '@mantine/hooks';
// import { useForm } from '@mantine/form';
import {
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
} from '@mantine/core';
import { Form, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from '../ui/TextInput';
import { PasswordInput } from '../ui/PasswordInput';

const schema = z.object({
    email: z.string(),
    name: z.string(),
    password: z.string()
});

type FormSchemaType = z.infer<typeof schema>;

export function AuthenticationForm(props: PaperProps) {
    const [type, toggle] = useToggle(['login', 'register']);
    const { control } = useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        values: {
            email: '',
            name: '',
            password: ''
        },
    });
    // const form = useForm({
    //     initialValues: {
    //         email: '',
    //         name: '',
    //         password: '',
    //         terms: true,
    //     },

    //     validate: {
    //         email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
    //         password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    //     },`
    // });

    return (
        <Paper radius="md" p="xl" withBorder {...props}>
            <Text size="lg" fw={500}>
                Welcome!
            </Text>
            <Form
                control={control}
                onSubmit={(e) => console.log(e.data)}
                onError={(e) => console.log(e)}
            >
                <Stack mt="xl">
                    {type === 'register' && (
                        <TextInput
                            label="Name"
                            required
                            placeholder="Your name"
                            name='name'
                            control={control}
                            radius="md"
                        />
                    )}

                    <TextInput
                        required
                        label="Email"
                        placeholder="hello@mantine.dev"
                        name='email'
                        control={control}
                        radius="md"
                    />

                    <PasswordInput
                        required
                        label="Password"
                        name='password'
                        placeholder="Your password"
                        control={control}
                        radius="md"
                    />


                </Stack>
            </Form>


            <Group justify="space-between" mt="xl">
                <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
                    {type === 'register'
                        ? 'Already have an account? Login'
                        : "Don't have an account? Register"}
                </Anchor>
                <Button type="submit">
                    {upperFirst(type)}
                </Button>
            </Group>
        </Paper>
    );
}