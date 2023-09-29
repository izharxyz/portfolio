import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Img,
    Container,
    Preview,
    Section,
    Text,
    Tailwind,
} from "@react-email/components";

export default function EmailTemplate({
    name,
    email,
    subject,
    message,
}: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) {
    return (
        <Html>
            <Head />
            <Preview>
                New message from {name} through my portfolio website.
            </Preview>
            <Tailwind>
                <Body className="bg-gray-300 mx-auto font-sans text-black pt-8">
                    <Img
                        className="mx-auto w-24 h-24 object-cover"
                        src="https://izhar.xyz/images/logo.png"
                        alt="logo"
                    ></Img>
                    <Section>
                        <Container
                            className="p-8 bg-gray-100 mt-8"
                            style={container}
                        >
                            <Heading className="text-xl pt-4">
                                You recieved the following message from
                                portfolio site
                            </Heading>
                            <Hr />
                            <Text className="text-lg font-medium text-gray-700">
                                {message}
                            </Text>
                            <Hr />
                            <Text className="text-lg font-medium text-gray-700">
                                Name: {name}
                            </Text>
                            <Text className="text-lg font-medium text-gray-700">
                                Subject: {subject}
                            </Text>
                            <Text className="text-lg font-medium text-gray-700">
                                Email: {email}
                            </Text>
                        </Container>
                    </Section>
                </Body>
            </Tailwind>
        </Html>
    );
}

const container = {
    border: "1px solid #9CA3AF",
};
