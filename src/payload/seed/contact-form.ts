import type { Form } from '../../payload-types'

const message = `
Hi {{name}},
Thank you for getting in touch through my portfolio website. I appreciate your interest in my services and the opportunity to potentially work together.
I would love to learn more about your project and how I can assist you. Could you please provide more details about what you're looking for? Specifically, it would be helpful to know:
1) A brief description of your project or the services you need.
2) Your timeline or any important deadlines.
3) Any specific requirements or goals you have in mind.
Once I have more information, I can give you a better idea of how we can proceed and discuss the next steps. If you prefer, we can also schedule a call to discuss your project in detail.
Looking forward to hearing from you soon!
Best regards,
Mohamed Izhar
`

export const contactForm: Partial<Form> = {
  confirmationMessage: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Thank You for Reaching Out!',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h2',
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  },
  confirmationType: 'message',
  createdAt: '2023-01-12T21:47:41.374Z',
  emails: [
    {
      emailFrom: '"Izhar" \u003Cmohamed@izhar.xyz\u003E',
      emailTo: '{{email}}',
      message: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: message,
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      subject: "Thank You for Reaching Out!",
    },
  ],
  fields: [
    {
      name: 'name',
      blockName: 'name',
      blockType: 'text',
      label: 'ame',
      required: true,
      width: 100,
    },
    {
      name: 'email',
      blockName: 'email',
      blockType: 'email',
      label: 'Email',
      required: true,
      width: 100,
    },
    {
      name: 'message',
      blockName: 'message',
      blockType: 'textarea',
      label: 'Message',
      required: true,
      width: 100,
    },
  ],
  redirect: undefined,
  submitButtonLabel: 'Submit',
  title: 'Contact Form',
  updatedAt: '2023-01-12T21:47:41.374Z',
}
