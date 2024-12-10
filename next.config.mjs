/** @type {import('next').NextConfig} */
const nextConfig = {
    // async rewrites() {
    //     return [
    //         {
    //             source: '/dryfruit-in-:countryName(algeria|andorra|angola|argentina|armenia|australia|austria|azerbaijan|belarus|belgium|belize|bolivia|botswana|brunei|bulgaria|burma|burundi|croatia|cyprus|e|ecuador|egypt|eritrea|estonia|eswatini|ethiopia|gabon|georgia|ghana|greece|grenada|guatemala|guinea|guinea-bissau|guyana|haiti|hungary|iceland|india|indonesia|iran|iraq|ireland|israel|italy|jamaica|japan|jordan|kazakhstan|kenya|kiribati|korea|kuwait|kyrgyzstan|laos|latvia|lebanon|lesotho|liberia|libya|liechtenstein|lithuania|luxembourg|madagascar|malawi|malaysia|maldives|mali|malta|mauritania|mauritius|mexico|micronesia|moldova|monaco|mongolia|montenegro|morocco|mozambique|namibia|nepal|netherlands|new-zealand|nicaragua|niger|nigeria|norway|oman|pakistan|palau|panama|paraguay|peru|philippines|poland|portugal|qatar|romania|russia|rwanda|saudi-arabia|senegal|serbia|seychelles|singapore|slovakia|slovenia|somalia|south-africa|south-sudan|spain|sri-lanka|sudan|suriname|sweden|switzerland|syria|tajikistan|tanzania|thailand|timor-leste|togo|tonga|trinidad-and-tobago|tunisia|turkey|turkmenistan|tuvalu|uganda|ukraine|united-arab-emirates|united-kingdom|uruguay|uzbekistan|vanuatu|venezuela|vietnam|yemen|zambia|zimbabwe)',
    //             destination: '/',
    //         },
    //     ]
    // },
    async rewrites() {
        return [
            {
                source: '/undefined',
                destination: '/',
            },
        ]
    },
    env: {
        BASE_URL: process.env.BASE_URL,
        COPYRIGHT_YEAR: process.env.COPYRIGHT_YEAR,
        RAZOR_PAY_KEYID: process.env.RAZOR_PAY_KEYID,
        GOOGLE_LOGIN_ENABLE_BUTTON: process.env.GOOGLE_LOGIN_ENABLE_BUTTON,
        YADEX_ID: process.env.YADEX_ID,
        APIKEY: process.env.APIKEY,
        AUTHDOMAIM: process.env.AUTHDOMAIM,
        PROJECTID: process.env.PROJECTID,
        STORAGEBUCKET: process.env.STORAGEBUCKET,
        MESSAGINGSENDERID: process.env.MESSAGINGSENDERID,
        APPID: process.env.APPID,
        MEASUREMENTID: process.env.MEASUREMENTID
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.cdninstagram.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'mydryfruit.s3.ap-northeast-1.amazonaws.com',
                port: '',
                pathname: '**',
            },

        ],
        minimumCacheTTL: 31536000,
    },
    typescript: {
        ignoreBuildErrors: true,
    },

    reactStrictMode: false,
}


export default nextConfig;




