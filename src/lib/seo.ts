import type { Metadata } from "next";
import { DOMAIN, SITE_NAME } from "@/lib/constants";

const socialImage = {
    url: "/logo.png",
    alt: `${SITE_NAME} software house logo`,
};

export function createPageMetadata({
    title,
    description,
    path,
}: {
    title: string;
    description: string;
    path: string;
}): Metadata {
    const url = `${DOMAIN}${path}`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            type: "website",
            locale: "en_PK",
            url,
            title: `${title} | ${SITE_NAME}`,
            description,
            siteName: SITE_NAME,
            images: [socialImage],
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | ${SITE_NAME}`,
            description,
            images: [socialImage.url],
        },
    };
}