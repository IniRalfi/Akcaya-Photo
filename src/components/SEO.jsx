import React from 'react';

function SEO({ title, description, name = 'Akcaya Photo', type = 'website' }) {
    const siteUrl = 'https://akcayaphoto.netlify.app'; // URL website Anda

    return (
        <>
            {/* Cukup render tag-nya langsung. React 19 akan memindahkannya ke <head> */}
            <title>{`${title} | Akcaya Photo`}</title>
            <meta name='description' content={description} />
            <link rel='canonical' href={siteUrl} />

            {/* Open Graph / Facebook Meta Tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={`${title} | Akcaya Photo`} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={name} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:image" content={`${siteUrl}/logo-og.png`} />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${title} | Akcaya Photo`} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}/logo-og.png`} />
        </>
    );
}

export default SEO;