import '../../../../styles/globals.css'
// export { NextStudioHead } from "next-sanity/studio/head" //its not an error
// import { NextStudioHead } from 'next-sanity/studio/head'


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            {/* <head> */}
                {/* <NextStudioHead favicons={false} /> */}
                {/* <link rel="icon" type="image/png" sizes="32x32" href="https://www.sanity.io/static/images/favicons/favicon-32x32.png" /> */}
            {/* </head> */}
            <body>
                {children}
            </body>
        </html>
    )
}
