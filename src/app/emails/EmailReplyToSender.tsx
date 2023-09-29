import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Button,
    Container,
    Img,
    Preview,
    Section,
    Tailwind,
    Text,
} from "@react-email/components";

export default function EmailTemplate({ name }: { name: string }) {
    return (
        <Html>
            <Head />
            <Preview>
                Thank you for getting in touch through my portfolio website.
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
                                Hello {name},
                            </Heading>
                            <Text className="text-lg font-medium text-gray-700">
                                Thank you for getting in touch through my
                                portfolio website. Your message has been
                                received, and I appreciate your interest.
                            </Text>
                            <Text className="text-lg font-normal text-gray-700">
                                I'm currently reviewing inquiries and will
                                respond as soon as possible. If you have any
                                urgent questions or require immediate
                                assistance, please don't hesitate to reach out
                                to me directly at melgend.forever@protonmail.com
                                or you can directly text me on my socials. You
                                can also reach me out on fiverr or freelancer.
                            </Text>
                            <Text className="text-lg font-normal text-gray-700">
                                Best regards,
                            </Text>
                            <Text className="text-lg font-normal text-gray-700">
                                Izhar
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
