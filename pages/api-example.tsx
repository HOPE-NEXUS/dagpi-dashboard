import { Box, Text } from '@chakra-ui/core';

//
import Layout from '../components/layout';

export default function Page() {
    return (
        <Layout>
            <Box>
                <h1>API Example</h1>
                <p>The examples below show responses from the example API endpoints.</p>
                <p>
                    <em>You must be signed in to see responses.</em>
                </p>
                <Text>SOME TEXT</Text>
                <h2>Session</h2>
                <p>/api/examples/session</p>
                <iframe title="Session" src="/api/routes/session" />
                <h2>JSON Web Token</h2>
                <p>/api/examples/jwt</p>
                <iframe title="jwt" src="/api/routes/jwt" />
            </Box>
        </Layout>
    );
}