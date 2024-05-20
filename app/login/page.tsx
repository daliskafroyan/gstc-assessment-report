'use client'

import { Container } from "@mantine/core";
import { AuthenticationForm } from "../../components/auth/AuthenticationForm";
import classes from "./page.module.css";

export default function LoginPage() {
    return (
        <div className={classes.root}>
            <Container size="lg">
                <div className={classes.formWrapper}>
                    <AuthenticationForm />

                </div>
            </Container>
        </div>
    )
}
