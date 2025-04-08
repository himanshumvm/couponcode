export default function Deals() {
    const deals = [
      {
        logo:
          "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/b0b6b573ebfb53c98f31b0301f8d7df0/makemytrip-logo-large.jpg?746915",
        description:
          "Save big on flights and hotels. Enjoy exclusive deals from MakeMyTrip.",
      },
      {
        logo:
          "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/b0b6b573ebfb53c98f31b0301f8d7df0/makemytrip-logo-large.jpg?746915",
        description:
          "Special discounts on travel bookings. Unlock premium benefits today!",
      },
      {
        logo:
          "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/b0b6b573ebfb53c98f31b0301f8d7df0/makemytrip-logo-large.jpg?746915",
        description:
          "Limited time offer: Book now and get cashback up to ₹2000.",
      },
      {
        logo:
          "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/b0b6b573ebfb53c98f31b0301f8d7df0/makemytrip-logo-large.jpg?746915",
        description:
          "Best price guarantee on domestic and international hotels.",
      },
      {
        logo:
          "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/b0b6b573ebfb53c98f31b0301f8d7df0/makemytrip-logo-large.jpg?746915",
        description:
          "Best price guarantee on domestic and international hotels.",
      },
      {
        logo:
          "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/b0b6b573ebfb53c98f31b0301f8d7df0/makemytrip-logo-large.jpg?746915",
        description:
          "Best price guarantee on domestic and international hotels.",
      },
      {
        logo:
          "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/b0b6b573ebfb53c98f31b0301f8d7df0/makemytrip-logo-large.jpg?746915",
        description:
          "Best price guarantee on domestic and international hotels.",
      },
      {
        logo:
          "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/stores/web/b0b6b573ebfb53c98f31b0301f8d7df0/makemytrip-logo-large.jpg?746915",
        description:
          "Best price guarantee on domestic and international hotels.",
      },
     
    ];
  
    return (
      <div className="py-12 ">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">🎉 Deals on Fire</h1>
  
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {deals.map((deal, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between items-center text-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={deal.logo}
                  alt={`Offer ${index + 1}`}
                  className="w-32 h-16 object-contain mb-4"
                />
                <p className="text-gray-700 mb-6 text-[1.2rem]">{deal.description}</p>
                <button className="mt-auto px-5 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition">
                  Get Coupon
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className=" py-5">
            <img src='/images/banner.jpg' alt="" className="w-screen object-cover" />
        </div>
      </div>
    );
  }
  