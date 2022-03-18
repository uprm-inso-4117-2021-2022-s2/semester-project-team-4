/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.simplyrecipes.com",
      "www.eatthis.com",
      "res.cloudinary.com",
      "www.seriouseats.com",
      "media-cdn.tripadvisor.com",
      "businessmirror.com.ph",
      "www.theedgyveg.com",
      "'assets.bonappetit.com",
      "tmbidigitalassetsazure.blob.core.windows.net",
      "spicysouthernkitchen.com",
      "www.recipetineats.com",
      "sweetsavoryandsteph.com",
      "simply-delicious-food.com",
      "fridays.hu",
      "assets.bonappetit.com",
    ],
  },
};

module.exports = nextConfig;
