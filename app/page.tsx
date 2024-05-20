import { Box, Flex, Paper, Text, Title, Button, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./page.module.css";
import Link from "next/link";


export default function HomePage() {
  // const isMobile = useMediaQuery("(max-width: 960px)");
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title order={2} c="white">
              Initial Accrediation
            </Title>
            <Title className={classes.title}>
              Desk Assessment Report
            </Title>

            <Text className={classes.description} mt={30}>
              Global Certification Limited (GCL) International by GSTC Accreditation Team
            </Text>

            <Link href="/login">
              <Button
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
                size="xl"
                className={classes.control}
                mt={40}
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>


  );
}
